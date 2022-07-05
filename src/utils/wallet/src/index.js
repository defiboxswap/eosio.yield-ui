/* eslint-disable */
import { Scatter } from './wallet/scatter';
import { Tp } from './wallet/tokenpocket';
import { Wax } from './wallet/wax';
import { Anchor } from './wallet/anchor';
import { numericFromName } from './util/index'


export default {
  chain: 'eos',
  channel: null,
  wallet: 'scatter',
  dapp: null,
  scatterDapp: null, // scatterDapp
  needScatterInit: false, // needScatterInit
  node: {}, // node
  embed: false,
  init: function (params, call) {
    this.chain = params.chain;
    this.embed = params.embed;
    this.node = params.node;
    this.channel = params.channel.toLowerCase();
    this.wallet = this.channel;
    // If it is an embedded project，channnel = scattr
    if (this.embed) {
      this.channel = 'scatter';
    }
    // channel name
    this.channelInit(this.channel, () => {
      call();
      if (this.wallet === 'scatter') return;
      this.needScatterInit = params.needScatterInit;
      // needScatterInit
      if (this.needScatterInit) {
        const paramsNet = { chain: this.chain }
        paramsNet.networkConfig = this.network(this.node);
        this.scatterDapp = Scatter;
        if (this.embed) return;
        Scatter.init(paramsNet, () => { });
      }
    });
  },
  // channelInit
  channelInit: function (key, call) {
    const params = { chain: this.chain }
    params.networkConfig = this.network(this.node);
    Scatter.eosjsInit(params, () => { });
    switch (key) {
      case 'tokenpocket':
        this.dapp = Tp;
        Tp.init(params, call);
        break;
      case 'cloudwallet':
        // case 'wax': // 2022/01/22  因无法正常交易回退到之前版本
        // Cloud wallet
        this.dapp = Wax;
        Wax.init(params, call);
        break;
      case 'anchor':
        this.dapp = Anchor;
        if (this.embed) return;
        Anchor.init(params, call);
        break;

      default:
        this.wallet = 'scatter';
        this.dapp = Scatter;
        if (this.embed) return;
        Scatter.init(params, call);
        break;
    }
  },
  // network
  network: function (node) {
    return {
      network: {
        blockchain: 'eos',
        protocol: node.protocol,
        host: node.host,
        port: node.port,
        chainId: node.chainId,
      },
      options: {
        broadcast: true,
        sign: true,
        chainId: node.chainId,
      },
      httpEndpoint: node.httpEndpoint
    }
  },
  // getAccount
  getAccount: async function () {
    if (this.embed) return;
    !this.dapp && await this.waitingDapp();
    return await this.dapp.getAccount();
  },
  // forgetIdentity
  forgetIdentity: async function () {
    if (this.embed) return;
    return await this.dapp.forgetIdentity();
  },
  // getBalance
  getBalance: async function (obj) {
    !this.dapp && await this.waitingDapp();
    return await Scatter.getBalance(obj);
  },
  // transactionApi
  transactionApi: async function (obj) {
    if (obj.useFreeCpu && this.needScatterInit) { // 免cpu走Scatter
      return await this.scatterDapp.transactionApi(obj);
    }
    return await this.dapp.transactionApi(obj);
  },
  // getArbitrarySignature
  getArbitrarySignature: async function (params) {
    return await this.dapp.getArbitrarySignature(params)
  },
  // newArbitrarySignature
  newArbitrarySignature: async function (params) {
    return await this.dapp.newArbitrarySignature(params)
  },
  // getTableRows
  getTableRows: async function (obj) {
    const params = obj;
    if (params.scope) {
      params.scope = String(params.scope);
    }
    if (this.channel === 'tokenpocket' && params.table !== 'liquidity') {
      params.boundFormat = false;
      params.scopeFormat = false;
    }
    if (params.lower_bound && params.boundFormat) {
      const encodeName = numericFromName(params.lower_bound);
      params.lower_bound = encodeName;
    }
    if (params.upper_bound && params.boundFormat) {
      const encodeName = numericFromName(params.upper_bound);
      params.upper_bound = encodeName;
    }
    if (params.scope && params.scopeFormat) {
      const encodeScope = numericFromName(params.scope);
      params.scope = encodeScope;
    }
    let allResult = params.allResult;
    delete params.scopeFormat;
    delete params.boundFormat;
    delete params.allResult;

    // TP check this table will have bugs ---- Special processing scatter check
    if ((params.table === 'liquidity'
      || params.table === 'options') && this.channel === 'tokenpocket') {
      const node = this.node; // node
      Scatter.eosjsInit({
        networkConfig: this.network(node),
        chain: this.chain
      }, () => { });
      return await Scatter.getTableRows(params, allResult);
    }
    !this.dapp && await this.waitingDapp();
    return await Scatter.getTableRows(params, allResult);
  },
  // getCurrencyStats
  getCurrencyStats: async function (params) {
    if (this.channel === 'tokenpocket') {
      const node = this.node; 
      Scatter.eosjsInit({
        networkConfig: this.network(node),
        chain: this.chain
      }, () => { });
      return await Scatter.getCurrencyStats(params);
    }
    !this.dapp && await this.waitingDapp();
    return await Scatter.getCurrencyStats(params);
  },

  // handleScatterErrorBack
  handleScatterErrorBack(result, callError) {
    console.log('Error');
    console.log(typeof (result));
    console.log(result);
    let res = result
    if (typeof (result) === 'string') {
      res = eval('(' + result + ')');
    }
    if (res.code || res.error) {
      let code = res.code;

      if (code === 500 && res.error) {
        code = res.error.code;
      }

      if (res.error && res.error.details && res.error.details.length > 0
        && code !== 3080001
        && code !== 3080002
        && code !== 3080004
        && code !== 3040005) {
        const errorDetails = res.error.details[0].message.split(':')[1] || res.error.details[0].message;
        if (errorDetails.indexOf('Returns less than expected') !== -1) {
          callError('msg', errorDetails)
          return;
        }
        if (errorDetails.indexOf('too small') !== -1) {
          callError('msg', errorDetails)
          return;
        }
        if (errorDetails.indexOf('too more order') !== -1 ||
          errorDetails.indexOf('Invalid packed transaction') !== -1 ||
          errorDetails.indexOf('User rejected the signature') !== -1) {
          callError('msg', errorDetails)
          return;
        }
        callError('msg', `${errorDetails}【${code}】`);
        return;
      }
      switch (code) {
        case 3080001:
          callError('lang', 'error.error3080001')
          break;
        case 3080002:
          callError('lang', 'error.error3080002')
          break;
        case 3080004:
          callError('lang', 'error.error3080004')
          break;
        case 3040005:
          callError('lang', 'error.error3040005')
          break;
        case 3090003:
          callError('lang', 'error.error3090003')
          break;
        case 3050003:
          callError('lang', 'error.error3050003')
          break;
        default:
          if (res.code && res.message) {
            if (res.message.indexOf('too more order') !== -1 ||
              res.message.indexOf('Invalid packed transaction') !== -1 ||
              res.message.indexOf('User rejected the signature') !== -1) {
              callError('msg', res.message)
              return;
            }
            callError('msg', `${res.message}【${res.code}】`);
            return;
          }
          if (res && res.message.indexOf('too small') !== -1) {
            callError('msg', res.message)
            return;
          }
          callError('msg', res.message);
          break;
      }
      return;
    }
    if (res.data && res.data.code === 500 && typeof (res.data.message) === 'string') {
      const fjres = eval('(' + res.data.message + ')');
      this.handleScatterErrorBack(fjres, callError);
      return;
    }
    // tp
    if (!res.result) {
      if (res.msg) {
        const errorDetails = res.msg.details[0].message.split(':')[1] || res.error.details[0].message;
        if (errorDetails.indexOf('too small') !== -1) {
          callError('msg', errorDetails)
          return;
        }
        if (errorDetails.indexOf('Returns less than expected') !== -1) {
          callError('msg', errorDetails)
          return;
        }
      }
      callError('msg', res)
      return;
    }
    callError('msg', `Unknow Error!【${res}】`);
  },

  // waiting
  waitingDapp() {
    return new Promise(async (resolve, reject) => {
      if (this.dapp) {
        resolve(true);
      } else {
        setTimeout(async () => { resolve(true) }, 2000);
      }
    })
  },
  numericFromName
}
