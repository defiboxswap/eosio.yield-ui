/* eslint-disable */
import config from "./config";
import { Api, JsonRpc } from "eosjs";
import { numericFromName } from '../util/index'
import ScatterJS from "@scatterjs/core";
import ScatterEOS from "@scatterjs/eosjs2";
const eosioAbi = require("./eosio.system.js");

ScatterJS.plugins(new ScatterEOS());

const MAXCONNECT = 10; // MAXCONNECT
let CONNECT_TIMER = null; // CONNECT_TIMER
let CONNECT_NUMBER = 0; // CONNECT_NUMBER

class scatterModel {
  constructor() {
    this.chain = config.chain;
    this.account = config.account; // account
    this.env = config.env;
    this.actor = config.actor;
    this.networkConfig = null;
    this.scatter = null;
    this.scatterEosJs = null;
    this.EosJs = null;
  }

  // connect Scatter
  init({ networkConfig, chain }, call) {
    ScatterJS.scatter.connect(location.hostname).then(async connected => {
      if (!connected) {
        CONNECT_NUMBER++;
        if (CONNECT_NUMBER < MAXCONNECT) {
          CONNECT_TIMER = setTimeout(this.init({ networkConfig }, call), 1000);
        }
        console.log("Scatter connecting...");
        sessionStorage.setItem("scatterInstall", "Scatter connecting");
        return false;
      }
      CONNECT_TIMER && clearTimeout(CONNECT_TIMER);
      console.log("Scatter connected");
      // scatterInstall
      sessionStorage.setItem("scatterInstall", "Scatter connected");
      this.scatter = window.scatter || ScatterJS.scatter;
      const rpc = new JsonRpc(
        ScatterJS.Network.fromJson(networkConfig.network).fullhost()
      );
      this.scatterEosJs = this.scatter.eos(networkConfig.network, Api, { rpc });
      call();
    });
  }

  // eosJs 
  eosjsInit({ networkConfig, chain }, call) {
    this.networkConfig = networkConfig;
    this.chain = chain;
    if (!this.EosJs) {
      this.EosJs = new JsonRpc(
        ScatterJS.Network.fromJson(networkConfig.network).fullhost()
      );
    }
    call();
  }

  // getAccount
  async getAccount() {
    try {
      const identity = await this.scatter.getIdentity({
        accounts: [this.networkConfig.network]
      });
      if (!identity) return console.warn("no identity");
      const account = identity.accounts[0];
      this.account = {
        account: account.name,
        encodeName: numericFromName(account.name),
        permissions: account.authority,
        publicKey: account.publicKey,
        chain: this.chain,
        wallet: "scatter",
        chainId: account.chainId,
        timer: new Date().getTime()
      };
      const rpc = new JsonRpc(
        ScatterJS.Network.fromJson(this.networkConfig.network).fullhost()
      );
      this.scatterEosJs = this.scatter.eos(this.networkConfig.network, Api, {
        rpc
      });
      return this.account;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // forgetIdentity
  async forgetIdentity() {
    try {
      if (this.scatter && !this.scatter.identity) {
        return "forgeted";
      }
      const result = await this.scatter.forgetIdentity();
      if (result) {
        return "forgeted";
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // getBalance
  async getBalance(params) {
    const { code, symbol, account } = params;
    try {
      const result = await this.EosJs.get_currency_balance(
        code,
        account,
        symbol
      );
      if (result.length === 1) {
        return result[0];
      }
      return `0.0000 ${params.symbol}`;
    } catch (error) {
      console.error(error);
      return `0.0000 ${params.symbol}`;
    }
  }

  // transactionApi
  async transactionApi(obj) {
    try {
      const { params } = obj;
      // const { params, useFreeCpu } = obj;
      if (this.scatterEosJs.fc && this.scatterEosJs.fc.abiCache) {
        this.scatterEosJs.fc.abiCache.abi("eosio", eosioAbi);
      }
      // if (useFreeCpu) {
      //   // freeCpuTransaction
      //   const result = await this.freeCpuTransaction(params);
      //   return result;
      // }
      const result = await this.scatterEosJs.transact(params, {
        blocksBehind: 3,
        expireSeconds: 30
      });
      if (result.broadcast || result.transaction_id) {
        return { code: 0, txId: result.transaction_id };
      }
      return result;
    } catch (error) {
      console.error(error);
      return error.json || error;
    }
  }

  // freeCpuTransaction
  async freeCpuTransaction(params) {
    try {
      if (params.actions.length === 0) {
        params.actions[0].authorization.unshift({
          actor: this.actor,
          permission: "active"
        });
      } else {
        params.actions.forEach(item => {
          item.authorization.unshift({
            actor: this.actor,
            permission: "active"
          });
        });
      }
      const result = await this.scatterEosJs.transact(params, {
        broadcast: false, 
        sign: true,
        blocksBehind: 3,
        expireSeconds: 30,
        requiredKeys: [this.account.publicKey]
      });
      if (result.signatures || result.serializedTransaction) {
        const transaction = this.scatterEosJs.deserializeTransaction(
          result.serializedTransaction
        );
        transaction.signatures = result.signatures;
        transaction.context_free_data = [];
        return {
          code: 0,
          result: JSON.stringify(transaction)
        };
      }
      // if (typeof(result.transaction.signatures[0]) === 'string') {
      //   const transaction = result.transaction.transaction;
      //   transaction.signatures = result.transaction.signatures;
      //   transaction.context_free_data = [];
      //   return {
      //     code: 0,
      //     result: JSON.stringify(transaction)
      //   }
      // }
      return result;
    } catch (error) {
      console.error(error);
      return error.json || error;
    }
  }

  // getArbitrarySignature
  async getArbitrarySignature(params) {
    try {
      const result = await this.scatter.getArbitrarySignature(
        params.publicKey,
        params.data
      );
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // newArbitrarySignature
  async newArbitrarySignature(params) {
    try {
      const result = await this.scatterEosJs.transact(params, {
        broadcast: !1,
        blocksBehind: 3,
        expireSeconds: 1200
      });
      const back = {
        timestamp: params.actions[0].data.data,
        account: params.actions[0].authorization[0].actor,
        type: "dapp"
      };
      if (result.transaction_id) {
        const chainIdBuf = new Buffer(
          this.networkConfig.network.chainId,
          "hex"
        );
        const buf = Buffer.from(
          Uint8Array.from(result.transaction.transaction),
          "hex"
        );
        const packedContextFreeData = new Buffer(new Uint8Array(32));
        const signBuf = Buffer.concat([chainIdBuf, buf, packedContextFreeData]);
        back.signature = result.transaction.signatures[0];
        back.signBase64 = Buffer.from(signBuf).toString("base64");
        return back;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // getTableRows
  async getTableRows(params, allResult) {
    // const { code, symbol, account } = params;
    try {
      const result = await this.EosJs.get_table_rows(params);
      if (allResult) {
        return result;
      }
      if (result && result.rows && result.rows.length) {
        return result.rows;
      }
      return [];
    } catch (error) {
      console.error(error);
      return `catchError: ${error}`;
    }
  }

  // getCurrencyStats
  async getCurrencyStats(params) {
    // const { code, symbol } = params;
    try {
      const result = await this.EosJs.get_currency_stats(params);
      if (result) {
        return result;
      }
      return {};
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
export const Scatter = new scatterModel();
