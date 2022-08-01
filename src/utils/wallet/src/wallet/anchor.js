import config from "./config";
import AnchorLink from "anchor-link";
import { numericFromName } from '../util/index'
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";

class AnchorModel {
  constructor() {
    this.chain = config.chain;
    this.account = config.account; // account
    this.env = config.env;
    this.actor = config.actor;
    this.anchorJs = null;
    this.networkConfig = null;
    this.EosJs = null;
    this.session = null;
  }

  // init
  async init({ networkConfig, chain }, call) {
    this.chain = chain;
    this.networkConfig = networkConfig;
    const transport = new AnchorLinkBrowserTransport({
      fuelReferrer: "eosio.yield"
    });
    const params = { transport };
    params.chains = [
      {
        chainId: networkConfig.network.chainId,
        nodeUrl: networkConfig.httpEndpoint
      }
    ];
    this.anchorJs = new AnchorLink(params);
    const session = await this.restoreSession();
    if (session) {
      this.session = session;
    }

    call();
  }

  // getAccount
  async getAccount() {
    try {
      let result = await this.anchorJs.login("eosio.yield");
      if (result && result.session) {
        const account = result.session;
        this.account = {
          account: account.auth.actor,
          encodeName: numericFromName(String(account.auth.actor)),
          permissions: account.auth.permission,
          address: account.address,
          signatures: result.signatures,
          chain: this.chain,
          publicKey: account.publicKey,
          wallet: "anchor",
          timer: new Date().getTime()
        };
        return this.account;
      }
    } catch (error) {
      return error;
    }
  }

  //
  /**
   * restoreSession
   */
  async restoreSession() {
    const session = await this.anchorJs.restoreSession("eosio.yield");
    return session;
  }

  // forgetIdentity
  async forgetIdentity() {
    return "anchor";
  }

  // getBalance
  async getBalance(params) {
    try {
      // const { code, symbol, account } = params;
      const result = await this.EosJs.getCurrencyBalance(params);
      if (result.length === 1) {
        return result[0];
      }
      return `0.0000 ${params.symbol}`;
    } catch (error) {
      return `0.0000 ${params.symbol}`;
    }
  }

  // transactionApi
  async transactionApi(obj) {
    try {
      const { params } = obj; // eslint-disable-line
      // const { params, useFreeCpu } = obj; // eslint-disable-line
      // if (useFreeCpu) {
      //   // useFreeCpu
      //   const result = await this.freeCpuTransaction(params);
      //   return result;
      // }
      let anchorJs = this.session || this.anchorJs;
      const result = await anchorJs.transact(params);
      if (result.payload) {
        return { code: 0, txId: result.processed.id };
      }
      return result;
    } catch (error) {
      return error.json || error;
    }
  }

  // useFreeCpu
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
      let anchorJs = this.session || this.anchorJs;
      const result = await anchorJs.transact(params, {
        broadcast: !1, // broadcast
        sign: !0
      });
      if (typeof result.signatures[0] === "string") {
        const transaction = result.transaction;
        transaction.signatures = result.signatures;
        transaction.context_free_data = [];
        return {
          code: 0,
          result: JSON.stringify(transaction)
        };
      }
      return result;
    } catch (error) {
      return error;
    }
  }

  // getArbitrarySignature
  getArbitrarySignature() {
    return null;
  }


  // newArbitrarySignature
  async newArbitrarySignature(params) {
    try {
      let anchorJs = this.session || this.anchorJs;
      const result = await anchorJs.transact(params, {
        broadcast: !1,
        blocksBehind: 3,
        expireSeconds: 1200
      });
      const back = {
        timestamp: params.actions[0].data.data,
        account: params.actions[0].authorization[0].actor,
        type: "dapp"
      };
      if (result.payload) {
        const chainIdBuf = new Buffer(
          this.networkConfig.network.chainId,
          "hex"
        );
        const packedContextFreeData = new Buffer(new Uint8Array(32));
        const buf = Buffer.from(
          Uint8Array.from(
            result.serializedTransaction ||
            result.resolved.serializedTransaction
          ),
          "hex"
        );
        const signBuf = Buffer.concat([chainIdBuf, buf, packedContextFreeData]);
        back.signBase64 = Buffer.from(signBuf).toString("base64");
        const signature =
          typeof result.signatures[0] === "string"
            ? result.signatures[0]
            : result.payload.sig;
        back.signature = signature;
        return back;
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  // getTableRows
  async getTableRows(params, allResult) {
    // const { code, symbol, account } = params;
    try {
      const result = await this.EosJs.getTableRows(params);
      if (allResult) {
        return result;
      }
      if (result && result.rows && result.rows.length) {
        return result.rows;
      }
      return [];
    } catch (error) {
      return `catchError: ${error}`;
    }
  }

  // getCurrencyStats
  async getCurrencyStats(params) {
    // const { code, symbol } = params;
    try {
      const result = await this.EosJs.getCurrencyStats(params);
      if (result) {
        return result;
      }
      return {};
    } catch (error) {
      return error;
    }
  }
}
export const Anchor = new AnchorModel();
