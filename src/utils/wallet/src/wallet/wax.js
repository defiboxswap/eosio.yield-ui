/* eslint-disable */
import config from "./config";
import axios from "axios";
import * as waxjs from "@waxio/waxjs/dist";

class WaxModel {
  constructor() {
    this.chain = config.chain;
    this.account = config.account; // account
    this.env = config.env;
    this.actor = config.actor;
    this.networkConfig = {};
    this.wax = null;
  }

  // init
  async init({ chain, networkConfig }, call) {
    try {
      this.networkConfig = networkConfig;
      this.chain = chain
      this.wax = new waxjs.WaxJS({
        rpcEndpoint: networkConfig.httpEndpoint,
        // rpcEndpoint: 'https://wax.greymass.com',
        tryAutoLogin: true,
      });
      call(); 
    } catch (error) {
      console.log(error);
    }
  }
  async autoLogin() {
    await this.wax.isAutoLoginAvailable();
  }
  setAccount(account) {
    this.account = {
      account,
      encodeName: null,
      permissions: "active",
      address: null,
      chain: this.chain,
      wallet: "cloudWallet",
      timer: new Date().getTime()
    };
  }
  // getAccount
  async getAccount() {
    try {
      const isAutoLogin = await this.wax.isAutoLoginAvailable();
      if (!isAutoLogin) {
        await this.wax.login();
      }
      this.setAccount(this.wax.userAccount);
      return this.account;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // forgetIdentity
  async forgetIdentity() {
    try {
      const result = await this.wax.loginOut();
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
    try {
      const { code, symbol, account } = params;
      const httpEndpoint = this.wax.rpc.endpoint;
      const result = await axios.post(
        `${httpEndpoint}/v1/chain/get_currency_balance`,
        JSON.stringify({
          account: account,
          code,
          symbol
        })
      );
      if (result.result) {
        const balance = result.data.balance;
        return balance.length > 0 && balance[0];
      }
      return `0.0000 ${params.symbol}`;
    } catch (error) {
      console.error(error);
      return `0.0000 ${params.symbol}`;
    }
  }

  // transactionApi
  async transactionApi(obj) {
    const { params } = obj;
    // const { params, useFreeCpu } = obj;
    try {
      const result = await this.wax.api.transact(params, {
        blocksBehind: 3,
        expireSeconds: 1200
      });
      if (result.processed || result.transaction_id) {
        return { code: 0, txId: result.transaction_id };
      }
      return result;
    } catch (error) {
      return error.json || error;
    }
  }

  // getArbitrarySignature
  getArbitrarySignature() {
    return null;
  }

  // newArbitrarySignature
  async newArbitrarySignature(params) {
    // debugger;
    // let isAutoLoginAvailable = await this.wax.login();
    // console.log(isAutoLoginAvailable);
    try {
      const result = await this.wax.api.transact(params, {
        broadcast: !1, // broadcast
        blocksBehind: 3,
        expireSeconds: 1200
      });
      if (result.signatures) {
        const back = {
          timestamp: params.actions[0].data.data,
          account: params.actions[0].authorization[0].actor,
          type: "dapp"
        };
        const chainIdBuf = new Buffer(
          this.networkConfig.network.chainId,
          "hex"
        );
        const buf = Buffer.from(
          Uint8Array.from(result.serializedTransaction),
          "hex"
        );
        const packedContextFreeData = new Buffer(new Uint8Array(32));
        const signBuf = Buffer.concat([chainIdBuf, buf, packedContextFreeData]);
        back.signature = result.signatures[0];
        back.signBase64 = Buffer.from(signBuf).toString("base64");
        return back;
      }
      return null;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // getTableRows
  getTableRows(params) {
    params.blockchain = this.chain;
    return new Promise(async (resolve, reject) => {
      const result = await TokenPocket.getTableRows(params);
      if (result.result) {
        resolve(result.data.rows);
        return;
      }
      resolve([]);
    })
  }

  // getCurrencyStats
  getCurrencyStats(params) {
    // const { code, symbol } = params;
    return new Promise(async (resolve, reject) => {
      const result = await this.EosJs.getCurrencyStats(params);
      if (result && result.rows && result.rows.length) {
        resolve(result.rows);
        return;
      }
      resolve([]);
    })
  }
}
export const Wax = new WaxModel();
