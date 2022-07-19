import store from '@/store';

export const wallets = [
  {
    name: 'MEETONE', // Names act on language variables
    key: 'MEET.ONE', // Wallet callback name (matching logo)
    url: '/static/img/wallet/MEETONE.png', // big logo
    logo: '/static/img/wallet/w/MEETONE.png', // small logo
    download: 'https://meet.one/', // The wallet download address
    version: '1.1.8', // version
    options: {}, // Configuration
    status: 1, // Whether to get on the shelves (1 on the shelves, 0 off the shelves)
    active: null, // Active configuration
  },
  {
    name: 'TokenPocket',
    key: 'TokenPocket',
    url: '/static/img/wallet/TOKENPOCKET.png',
    logo: '/static/img/wallet/w/TOKENPOCKET.png',
    download: 'https://www.tokenpocket.pro',
    options: {},
    version: 'Android 0.4.6、iOS 0.4.4',
    status: 1,
    active: null,
  },
  {
    name: 'EOSLIVE',
    key: 'eoslive',
    url: '/static/img/wallet/EOSLIVE.png',
    logo: '/static/img/wallet/w/EOSLIVE.png',
    download: 'https://eos.live/',
    options: {},
    version: '1.2.0',
    status: 1,
    active: null,
  },
  {
    name: 'MathWallet',
    key: '麦子钱包',
    url: '/static/img/wallet/MATHWALLET.png',
    logo: '/static/img/wallet/w/MATHWALLET.png',
    download: 'http://www.mathwallet.org/',
    options: {},
    version: '1.6.5',
    status: 1,
    active: null,
  },
  {
    name: 'imToken',
    key: 'imtoken',
    url: '/static/img/wallet/IMTOKEN.png',
    logo: '/static/img/wallet/w/IMTOKEN.png',
    download: 'https://token.im/',
    options: {},
    version: '2.2.0',
    status: 1,
    active: null,
  },
  {
    name: 'Starteos',
    key: 'Starteos',
    url: '/static/img/wallet/STARTEOS.png',
    logo: '/static/img/wallet/w/STARTEOS.png?v=1',
    download: 'https://starteos.io/',
    options: {},
    version: 'Android 2.1.1、iOS 1.1.1',
    status: 1,
    active: null,
  },
  {
    name: 'HuobiWallet',
    key: 'huobiwallet',
    url: '/static/img/wallet/HuobiWallet.png?v=1.0',
    logo: '/static/img/wallet/w/HuobiWallet.png?v=1.0',
    download: 'https://www.huobiwallet.com/',
    version: '2.1.8.008',
    options: {},
    status: 1,
    active: null,
  },
  {
    name: 'BITPIE',
    key: 'Bitpie',
    url: '/static/img/wallet/BITPIE.png',
    logo: '/static/img/wallet/w/BITPIE.png',
    download: 'https://bitpie.com/',
    options: {},
    version: 'Android 3.7.1、iOS 3.6.8',
    status: 1,
    active: null,
  },
  {
    name: 'PRABOX',
    key: 'Prabox',
    url: '/static/img/wallet/PRABOX.png',
    logo: '/static/img/wallet/w/PRABOX.png?v=1.1',
    download: 'https://chain.pro/',
    options: {},
    version: '1.1.6',
    status: 1,
    active: null,
  },
  {
    name: 'POCKETEOS',
    key: 'PocketEOS',
    url: '/static/img/wallet/POCKETEOS.jpg',
    logo: '/static/img/wallet/w/POCKETEOS.jpg',
    download: 'https://www.pocketeos.com/',
    options: {},
    version: '2.0.3',
    status: 1,
    active: null,
  },
  {
    name: 'EosToken',
    key: 'eostoken',
    url: '/static/img/wallet/EosToken.png',
    logo: '/static/img/wallet/w/EosToken.png',
    download: 'http://eostoken.im/',
    options: {},
    version: '3.0.6',
    status: 1,
    active: null,
  },
  {
    name: 'KKWallet',
    key: 'KKWallet',
    url: '/static/img/wallet/KKWALLET.png',
    logo: '/static/img/wallet/w/KKWALLET.png',
    download: 'https://kkwallet.com/',
    options: {},
    version: '1.0.0',
    status: 0,
    active: null,
  },
  {
    name: '51token',
    key: '51Token',
    url: '/static/img/wallet/51Token.png',
    logo: '/static/img/wallet/w/51Token.png',
    download: 'https://51token.im/',
    options: {},
    version: '0.5.0',
    status: 0,
    active: null,
  },
  {
    name: 'BitPortal',
    key: 'BitPortal',
    url: '/static/img/wallet/BitPortal.png',
    logo: '/static/img/wallet/w/BitPortal.png',
    download: 'https://www.bitportal.io/',
    options: {},
    version: '0.4.2',
    status: 1,
    active: null,
  },
  {
    name: 'Paytomat',
    key: 'PAYTOMAT',
    url: '/static/img/wallet/Paytomat.png',
    logo: '/static/img/wallet/w/Paytomat.png',
    download: 'https://paytomat.com/',
    options: {},
    version: '1.9.0',
    status: 1,
    active: null,
  },
  {
    name: 'NOVAWallet',
    key: 'NOVA',
    url: '/static/img/wallet/NOVAWALLET.png',
    logo: '/static/img/wallet/w/NOVAWALLET.png',
    download: 'http://eosnova.io/',
    options: {},
    version: 'Android 1.1.0、iOS 1.3.0',
    status: 1,
    active: null,
  },
  {
    name: 'Zebrawallet',
    key: 'zebrawallet',
    url: '/static/img/wallet/Zebrawallet.png',
    logo: '/static/img/wallet/w/Zebrawallet.png',
    download: 'https://zebrawallet.io',
    options: {},
    version: '1.7.8',
    status: 0,
    active: null,
  },
  // {
  //   name: 'VipWallet',
  //   key: 'VipWallet',
  //   url: '/static/img/wallet/VipWallet.png',
  //   logo: '/static/img/wallet/w/VipWallet.png',
  //   download: 'http://www.vipwallet.tech/',
  //   options: {},
  //   version: '1.2.4',
  //   status: 1,
  //   active: null,
  // },
  {
    name: 'BitKeep',
    key: 'bitkeep',
    url: '/static/img/wallet/BitKeep.png',
    logo: '/static/img/wallet/w/BitKeep.png',
    download: 'https://www.bitkeep.com/',
    options: {},
    version: 'Android 3.5.4、iOS 3.5.8',
    status: 1,
    active: null,
  },
  // {
  //   name: 'BuckWallet',
  //   key: 'BuckWallet',
  //   url: '/static/img/wallet/BuckWallet.png',
  //   logo: '/static/img/wallet/w/BuckWallet.png',
  //   download: 'https://www.buckwallet.vip/',
  //   options: {},
  //   version: 'Android 1.2.3、iOS 1.1.8',
  //   status: 1,
  //   active: null,
  // },
  // {
  //   name: 'BEPAL',
  //   key: 'BEPAL',
  //   url: '/static/img/wallet/BEPAL.png',
  //   logo: '/static/img/wallet/w/BEPAL.png',
  //   download: 'https://www.bepal.pro/',
  //   options: {},
  //   version: '3.7.6',
  //   status: 1,
  //   active: null,
  // },
  // {
  //   name: 'Kcash',
  //   key: 'Kcash',
  //   url: '/static/img/wallet/Kcash.png',
  //   logo: '/static/img/wallet/w/Kcash.png',
  //   download: 'https://www.kcash.com',
  //   options: {},
  //   version: '2.6.8',
  //   status: 1,
  //   active: null,
  // },
  {
    name: 'mykey',
    key: 'mykey',
    url: '/static/img/wallet/mykey.png',
    logo: '/static/img/wallet/w/mykey.png',
    download: 'https://mykey.org/',
    options: {},
    version: 'Android 1.0.10、iOS 1.0.7',
    status: 1,
    active: null,
  },
  // {
  //   name: 'MOREWallet',
  //   key: 'MORE Wallet',
  //   url: '/static/img/wallet/MOREWALLET.png',
  //   logo: '/static/img/wallet/w/MOREWALLET.png',
  //   download: 'https://more.top/',
  //   options: {},
  //   version: '1.4.2',
  //   status: 1,
  //   active: null,
  // },
  {
    name: 'HALO',
    key: 'HALO',
    url: '/static/img/wallet/HALO.png',
    logo: '/static/img/wallet/w/HALO.png',
    download: 'https://halowallet.io/',
    options: {},
    version: '1.0',
    status: 0,
    active: null,
  },
  {
    name: 'Scatter',
    key: 'Scatter',
    url: '/static/img/wallet/SCATTER.png',
    logo: '/static/img/wallet/w/SCATTER.png',
    download: '',
    options: {},
    version: '1.0',
    status: 0,
    active: null,
  },
  {
    name: 'Scatter',
    key: 'Scatter',
    url: '/static/img/wallet/SCATTER.png',
    logo: '/static/img/wallet/w/SCATTER.png',
    download: '',
    options: {},
    version: '1.0',
    status: 0,
    active: null,
  },
];

export function walletsLogo() {
  const scat = store.state.app.scatter
  if (scat && scat.wallet) {
    const item = wallets.find(v => v.key.toLowerCase() === scat.wallet.toLowerCase());
    if (item) {
      return item.logo;
    }
  }
  return `${window.location.origin}/static/logoicon.png`;
}

//Get the logo of the chain
const defaulChainURl = '/static/img/chain';
const chainUrl = [
  {
    key: 'eos',
    chainlogo: `${defaulChainURl}/EOS.png?v=1.0.2`,
  },
  {
    key: 'bos',
    chainlogo: `${defaulChainURl}/BOS.png?v=1.0.2`,
  },
  {
    key: 'meetone',
    chainlogo: `${defaulChainURl}/MEETONE.png?v=1.0.3`,
  },
  {
    key: 'enu',
    chainlogo: `${defaulChainURl}/ENU.png?v=1.0.0`,
  },
  {
    key: 'fibos',
    chainlogo: `${defaulChainURl}/FIBOS.png?v=1.0.0`,
  },
  {
    key: 'telos',
    chainlogo: `${defaulChainURl}/TELOS.png?v=1.0.1`,
  },
  {
    key: 'tron',
    chainlogo: `${defaulChainURl}/TRON.png?v=1.0.2`,
  },
  {
    key: 'wax',
    chainlogo: `${defaulChainURl}/WAX.png?v=1.0.0`,
  },
  {
    key: 'lynx',
    chainlogo: `${defaulChainURl}/LYNX.png?v=1.0.0`,
  },
  {
    key: 'proton',
    chainlogo: `${defaulChainURl}/PROTON.png?v=1.0.0`,
  },
];

export function chainLogo(val) {
  if (val) {
    const ch = chainUrl.find(v => v.key.toLowerCase() === val.toLowerCase());
    if (ch) {
      return ch.chainlogo;
    }
  }
  const scat = store.state.app.scatter;
  if (scat && scat.identity) {
    const chain = scat.chain;
    const item = chainUrl.find(v => v.key.toLowerCase() === chain.toLowerCase());
    if (item) {
      return item.chainlogo;
    }
    return '/static/img/chain/EOS.png?v=1.0.2';
  }
  return '/static/img/chain/EOS.png?v=1.0.2';
}

const desktopWallets = {
  Scatter: {
    name: 'Scatter', // name
    logo: '/static/img/wallet/plug/scatter-2.png', // logo
    logo1: '/static/img/wallet/plug/scatter.png', // logo
    download: 'https://github.com/GetScatter/ScatterDesktop/releases', // The wallet download address
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/' +
      '360016322611-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Scatter%E7%94%B5%E8%84%91%E6%A1%8C%E9%9D%A2%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/' +
      '360016322611-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Scatter%E9%9B%BB%E8%85%A6%E6%A1%8C%E9%9D%A2%E7%89%88-',
      en: 'https://support.newdex.net/hc/en-us/articles/360016322611-How-to-Use-Scatter-',
      ko: 'https://support.newdex.net/hc/ko/articles/' +
      '360016322611-Scatter-%EB%8D%B0%EC%8A%A4%ED%81%AC-%ED%86%B1-%EB%B2%84%EC%A0%84%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%84%A4%EB%AA%85'
    }
  },
  LeafWallet: {
    name: 'LeafWallet',
    logo: '/static/img/wallet/plug/LeafWallet-2.png?v=1',
    logo1: '/static/img/wallet/plug/leaf.png?v=1',
    download: 'https://www.leafwallet.io/',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360028369552-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%8F%B6%E5%AD%90%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360028369552-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%91%89%E5%AD%90%E9%8C%A2%E5%8C%85%E7%80%8F%E8%A6%BD%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360028369552-How-to-Use-Leaf-Wallet-Browser-Plug-in-Version-',
      ko: 'https://support.newdex.net/hc/ko/articles/360028369552-How-to-Use-Leaf-Wallet-Browser-Plug-in-Version-'
    }
  },
  TokenPocket: {
    name: 'TokenPocket',
    logo: '/static/img/wallet/plug/tp-2.png',
    logo1: '/static/img/wallet/plug/tp.png',
    download: 'https://www.tokenpocket.pro/en/download/pc',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360028675031-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8TokenPocket%E6%A1%8C%E9%9D%A2%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360028675031-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8TokenPocket%E6%A1%8C%E9%9D%A2%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360028675031-How-to-Use-TokenPocket-Desktop-Version-',
      ko: 'https://support.newdex.net/hc/ko/articles/360028675031-How-to-Use-TokenPocket-Desktop-Version-'
    }
  },
  MathWallet: {
    name: 'MathWallet',
    logo: '/static/img/wallet/plug/MathWallet-2.png?v=1',
    logo1: '/static/img/wallet/plug/math.png?v=1',
    download: 'http://mathwallet.org/en/',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360028531532-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E9%BA%A6%E5%AD%90%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360028531532-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E9%BA%A5%E5%AD%90%E9%8C%A2%E5%8C%85%E7%80%8F%E8%A6%BD%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360028531532-How-to-Use-Math-Wallet-Browser-Plug-in-Version-',
      ko: 'https://support.newdex.net/hc/ko/articles/360028531532-Math-Wallet-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A7%80%EA%B0%91-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C'
    }
  },
  Ironman: {
    name: 'Ironman',
    logo: '/static/img/wallet/plug/enu.png',
    download: 'https://chrome.google.com/webstore/detail/ironman/janbppjcbfhklbggcgkpiefmondofolo',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360024831012-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8IronMan%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360024831012-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8IronMan%E6%B5%81%E8%A6%BD%E5%99%A8%E5%A4%96%E6%8E%9B%E7%A8%8B%E5%BC%8F%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360024831012-How-to-Use-IronMan-Browser-Extension',
      ko: 'https://support.newdex.net/hc/ko/articles/360024831012-How-to-Use-IronMan-Browser-Extension',
    },
  },
  TronLink: {
    name: 'TronLink',
    logo: '/static/img/wallet/plug/Tronlink.png',
    download: 'https://www.tronlink.org/',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360031459171-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88-TRON-',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360031459171-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%B3%A2%E5%AF%B6%E9%8C%A2%E5%8C%85%E7%80%8F%E8%A6%BD%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360031459171-How-to-Use-Tronlink-Wallet-Browser-Plug-in-Version-',
      ko: 'https://support.newdex.net/hc/ko/articles/360031459171-How-to-Use-Tronlink-Wallet-Browser-Plug-in-Version-'
    }
  },
  womba: {
    name: 'wombat',
    logo: '/static/img/wallet/plug/wombat-2.png',
    logo1: '/static/img/wallet/plug/womba.png',
    download: 'https://chrome.google.com/webstore/detail/wombat-eos-wallet/amkmjjmmflddogmhpjloimipbofnfjih?hl=en',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360039083592-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Wombat%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360039083592-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Wombat%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360039083592-How-to-Use-Wombat-Wallet-Browser-Plug-in-Version-',
      ko: 'https://support.newdex.net/hc/ko/articles/360039083592-How-to-Use-Wombat-Wallet-Browser-Plug-in-Version-'
    }
  },
  Anchor: {
    name: 'Anchor',
    logo: '/static/img/wallet/plug/anchor-2.png',
    download: 'https://chrome.google.com/webstore/detail/wombat-eos-wallet/amkmjjmmflddogmhpjloimipbofnfjih?hl=en',
    helpCenter: {
      'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360039083592-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Wombat%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360039083592-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Wombat%E9%92%B1%E5%8C%85%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
      en: 'https://support.newdex.net/hc/en-us/articles/360039083592-How-to-Use-Wombat-Wallet-Browser-Plug-in-Version-',
      ko: 'https://support.newdex.net/hc/ko/articles/360039083592-How-to-Use-Wombat-Wallet-Browser-Plug-in-Version-'
    }
  }
}
// You can log in to the wallet plug-in
export const walletsPlug = {
  EOS: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    desktopWallets.TokenPocket,
    // desktopWallets.MathWallet,
    desktopWallets.womba,
    desktopWallets.Anchor
  ],
  BOS: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    desktopWallets.TokenPocket,
    desktopWallets.MathWallet,
    desktopWallets.Anchor,
  ],
  MEETONE: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    desktopWallets.MathWallet,
    desktopWallets.Anchor
  ],
  ENU: [
    desktopWallets.Ironman,
    desktopWallets.Anchor
  ],
  FIBOS: [
    desktopWallets.Ironman,
    desktopWallets.Anchor
  ],
  TELOS: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    // desktopWallets.MathWallet,
    desktopWallets.womba,
    desktopWallets.Anchor
  ],
  TRON: [
    desktopWallets.TronLink,
    desktopWallets.MathWallet,
    desktopWallets.Anchor
  ],
  WAX: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    desktopWallets.Anchor
  ],
  LYNX: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    desktopWallets.Anchor
  ],
  PROTON: [
    desktopWallets.LeafWallet,
    desktopWallets.Scatter,
    desktopWallets.Anchor
  ]
}
