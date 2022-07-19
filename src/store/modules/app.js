const app = {
  state: {
    // Multilingual
    language: '',
    // Default night mode
    themeDark: false,
    // Screen width
    screenWidth: null,
    isMobile: true,
    accountInfo: {
      timer: null,
    },
    openMultipath: true,
    slipPoint: 3,
    defaultSwapPair: {
      from: {
        symbol: 'EOS', // Coin name
        contract: 'eosio.token', // Contract address
        decimal: 4, // accuracy
        key: 'eosio.token-eos',
      },
      to: {
        symbol: '', // Coin name
        contract: '', // Contract address
        decimal: 0, // accuracy
        key: '',
      },
    },
    // k
    klineConfig: {
      interval: '240', // Resolution, time
    },
    uint: 'EOS',

    walletLoginVisible: false, // Login Popup
    customCurrencyList: [], // Custom add currency
    exchangeItem: '1D', // Current value of trading volume
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
    SET_ACCOUNTINFO: (state, accountInfo) => {
      state.accountInfo = accountInfo;
    },
    // Currently selected transaction pair
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
    // k config
    SET_KLINECONFIG: (state, klineConfig) => {
      state.klineConfig = klineConfig;
    },
    // pairs
    // SET_PAIRSTABLEDATA: (state, pairsTableData) => {
    //   state.pairsTableData = pairsTableData || [];
    // },
    // Change the current multi-path redemption
    SET_OPENMULTIPATH: (state, openMultipath) => {
      state.openMultipath = openMultipath;
    },
    SET_SLIPPOINT: (state, slipPoint) => {
      state.slipPoint = slipPoint;
    },
    SET_UINT: (state, uint) => {
      state.uint = uint;
    },
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
    setAccountInfo({ commit }, accountInfo) {
      commit('SET_ACCOUNTINFO', accountInfo);
    },
    setExchangeCoin({ commit }, exchangeCoin) {
      commit('SET_EXCHANGECOIN', exchangeCoin);
    },
    setKlineConfig({ commit }, klineConfig) {
      commit('SET_KLINECONFIG', klineConfig);
    },
    // setPairsTableData({ commit }, pairsTableData) {
    //   commit('SET_PAIRSTABLEDATA', pairsTableData);
    // },
    setOpenMultipath({ commit }, openMultipath) {
      commit('SET_OPENMULTIPATH', openMultipath);
    },
    setSlipPoint({ commit }, slipPoint) {
      commit('SET_SLIPPOINT', slipPoint);
    },
    setUint({ commit }, uint) {
      commit('SET_UINT', uint);
    },
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
