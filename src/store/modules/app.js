import { swap } from "@/service";
const app = {
  state: {
    // 多语言
    language: '',
    // 默认黑夜模式
    themeDark: false,
    // 屏幕宽度
    screenWidth: null,
    // // 是否为移动端
    isMobile: true,
    // 账户信息
    accountInfo: {
      timer: null,
    },
    // 多路径兑换
    openMultipath: true,
    // 滑点容差
    slipPoint: 3,
    // 默认交易币种
    defaultSwapPair: {
      from: {
        symbol: 'EOS', // 币名
        contract: 'eosio.token', // 合约地址
        decimal: 4, // 精度
        key: 'eosio.token-eos',
      },
      to: {
        symbol: '', // 币名
        contract: '', // 合约地址
        decimal: 0, // 精度
        key: '',
      },
    },
    // k线配置
    klineConfig: {
      interval: '240', // 分辨率，时间
    },
    uint: 'EOS',

    walletLoginVisible: false, //登录弹窗
    customCurrencyList: [], //自定义添加币种
    exchangeItem: '1D', // 交易量当前数值
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
    },
    SET_THEMEDARK: (state, themeDark) => {
      state.themeDark = themeDark;
      // localStorage.setItem('themeDark', themeDark);
    },
    // screenWidth
    SET_SCREENWIDTH: (state, screenWidth) => {
      state.screenWidth = screenWidth;
    },
    SET_ISMOBILE: (state, isMobile) => {
      state.isMobile = isMobile;
    },
    // 账户信息
    SET_ACCOUNTINFO: (state, accountInfo) => {
      state.accountInfo = accountInfo;
    },
    // 当前选中的交易对
    SET_EXCHANGECOIN: (state, exchangeCoin) => {
      const { currency, direction } = exchangeCoin;
      if (direction == '') {
        state.defaultSwapPair = currency;
      } else if (direction == 'from') {
        state.defaultSwapPair.from = currency;
      } else {
        state.defaultSwapPair.to = currency;
      }
      // localStorage.setItem('exchangeCoin', JSON.stringify(exchangeCoin));
    },
    // k线配置
    SET_KLINECONFIG: (state, klineConfig) => {
      state.klineConfig = klineConfig;
    },
    // pairs表
    // SET_PAIRSTABLEDATA: (state, pairsTableData) => {
    //   state.pairsTableData = pairsTableData || [];
    // },
    // 改变当前多路径兑换
    SET_OPENMULTIPATH: (state, openMultipath) => {
      state.openMultipath = openMultipath;
    },
    // 改变滑点容差
    SET_SLIPPOINT: (state, slipPoint) => {
      state.slipPoint = slipPoint;
    },
    // 改变货币单位
    SET_UINT: (state, uint) => {
      state.uint = uint;
    },
    // 登录弹窗
    SET_WALLETLOGINVISIBLE: (state, walletLoginVisible) => {
      state.walletLoginVisible = walletLoginVisible;
    },
    SET_CUSTOMCURRENCYLIST: (state, customCurrencyList) => {
      state.customCurrencyList = customCurrencyList;
    },
    SET_EXCHANGEITEM: (state, exchangeItem) => {
      state.exchangeItem = exchangeItem;
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
    setThemeDark({ commit }, themeDark) {
      commit('SET_THEMEDARK', themeDark);
    },
    setScreenWidth({ commit }, screenWidth) {
      commit('SET_SCREENWIDTH', screenWidth);
    },
    setIsMobile({ commit }, isMobile) {
      commit('SET_ISMOBILE', isMobile);
    },
    // 账户信息
    setAccountInfo({ commit }, accountInfo) {
      commit('SET_ACCOUNTINFO', accountInfo);
    },
    // 当前选中的交易对
    setExchangeCoin({ commit }, exchangeCoin) {
      commit('SET_EXCHANGECOIN', exchangeCoin);
    },
    setKlineConfig({ commit }, klineConfig) {
      commit('SET_KLINECONFIG', klineConfig);
    },
    // setPairsTableData({ commit }, pairsTableData) {
    //   commit('SET_PAIRSTABLEDATA', pairsTableData);
    // },
    // 改变当前多路径兑换
    setOpenMultipath({ commit }, openMultipath) {
      commit('SET_OPENMULTIPATH', openMultipath);
    },
    // 改变滑点容差
    setSlipPoint({ commit }, slipPoint) {
      commit('SET_SLIPPOINT', slipPoint);
    },
    // 改变货币单位
    setUint({ commit }, uint) {
      commit('SET_UINT', uint);
    },
    // 登录弹窗
    setWalletLoginVisible({ commit }, walletLoginVisible) {
      commit('SET_WALLETLOGINVISIBLE', walletLoginVisible);
    },
    setCustomCurrencyList({ commit }, customCurrencyList) {
      commit('SET_CUSTOMCURRENCYLIST', customCurrencyList);
    },
    setExchangeItem({ commit }, exchangeItem) {
      commit('SET_EXCHANGEITEM', exchangeItem);
    },
  },
};

export default app;
