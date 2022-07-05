/* eslint-disable */
import config from "./config";
import TokenPocket from "tp-eosjs"; // tokenpocket JS

class TpModel {
  constructor() {
    this.chain = config.chain;
    this.account = config.account; // account
    this.env = config.env;
    this.actor = config.actor;
  }

  // init
  init({ chain }, call) {
    this.chain = chain;
    call();
  }

  // getAccount
  async getAccount() {
    try {
      const result = await TokenPocket.getCurrentWallet();
      if (result.result) {
        const account = result.data;
        this.account = {
          account: account.name,
          encodeName: account.name,
          permissions: account.permissions[0],
          address: account.address,
          chain: this.chain,
          wallet: "tokenpocket",
          timer: new Date().getTime()
        };
        return this.account;
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
      const result = await TokenPocket.getBalance({
        blockchain: this.chain,
        account: account,
        contract: code,
        symbol
      });
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
    try {
      const { params, useFreeCpu } = obj;
      const action = {
        blockchain: this.account.chain,
        actions: params.actions,
        address: this.account.address,
        account: this.account.account
      };
      const result = await TokenPocket.pushAction(action);
      if (result.result) {
        return { code: 0, txId: result.transaction_id };
      }
      return result;
    } catch (error) {
      console.error(error);
      return { error: error.json || error };
    }
  }

  // getArbitrarySignature
  async getArbitrarySignature(params) {
    try {
      const action = {
        blockchain: this.account.chain,
        from: params.from,
        publicKey: params.address,
        signdata: params.signdata
      };
      const result = await TokenPocket.authSign(action);
      if (result.result) {
        return result.data;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // newArbitrarySignature
  async newArbitrarySignature(params) {
    try {
      const action = {
        blockchain: this.account.chain,
        from: params.from,
        publicKey: params.publicKey,
        signdata: params.signdata
      };
      const result = await TokenPocket.authSign(action);
      if (result.result) {
        return result.data.signature;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // getTableRows
  async getTableRows(params, allResult) {
    params.blockchain = this.chain;
    try {
      const result = await TokenPocket.getTableRows(params);
      if (allResult) {
        return result;
      }
      if (result.result) {
        return result.data.rows;
      }
      return [];
    } catch (error) {
      console.error(error);
      return `catchError: ${error}`;
    }
  }

  // getCurrencyStats
  async getCurrencyStats(params) {
    try {
      // const { code, symbol } = params;
      const result = await this.EosJs.getCurrencyStats(params);
      if (result && result.rows && result.rows.length) {
        return result.rows;
      }
      return [];
    } catch (error) {
      console.error(error);
      return `catchError: ${error}`;
    }
  }
}
export const Tp = new TpModel();
