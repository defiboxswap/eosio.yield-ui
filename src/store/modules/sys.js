// 系统性状态存储
const sys = {
  state: {
    channel: localStorage.getItem('channel') ? localStorage.getItem('channel') : '', // app名称
    node: {
      httpEndpoint: 'https://eos.defibox.xyz',
      protocol: 'https',
      host: 'eos.defibox.xyz',
      port: 443,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      area: 'Japan',
    },
    // APP's webView - android | ios
    isAppView: sessionStorage.getItem('isAppView') ? sessionStorage.getItem('isAppView') : '',
    urlChain: 'eos',
    // urlChain: 'wax',
    baseConfig: {
      // // 服务器状态设置 - 1:开通 | 0: 暂停
      // issue: 1, // 生成USN
      // repay: 1, // 偿还USN
      // auction: 1, // 爆单抢拍
      // deposit: 1, // 增加抵押量
      // withdraw: 1, // 减少抵押量
      // maintain: 1, // 整服
      // marginRate: 1.25, // 爆仓比率
      // marginWarnRate: 1.35, // 未爆仓比率
      // initialDiscount: 0.98, // 爆仓拍卖初始折扣
      // lastDiscount: 0.9, // 爆仓拍卖最低折扣
      // declining: 0.1, // 爆仓拍卖每轮递减折扣
      // auctionTime: 0, // 爆仓后开卖时间
      // durationTime: 60, // 爆仓拍卖持续时间
      // intervalTime: 1, // 爆仓拍卖轮次间隔时间
      // forfeit: 0.15, // 爆仓罚金
      // gratis: 10, // 免CPU次数
      // interestFree: 1, // 开仓偿还免息时间
    },
    // Blockchain browser configuration
    blockBrowser: {
      eos: {
        // tx: 'https://eospark.com/tx/',
        // account: 'https://eospark.com/account/',
        tx: 'https://bloks.io/transaction/',
        account: 'https://bloks.io/account/',
        token: 'https://bloks.io/tokens/',
      },
    },
    toAccount: 'danchorsmart', // Receiving account
  },
  mutations: {
    // channel
    SET_CHANNEL: (state, channel) => {
      state.channel = channel;
      localStorage.setItem('channel', channel);
    },
    SET_NODELIST: (state, nodeList) => {
      state.nodeList = nodeList;
      localStorage.setItem('nodeList', JSON.stringify(nodeList));
    },
    SET_NODE: (state, node) => {
      state.node = node;
    },
    // 是否APP的webView打开 - android | ios
    SET_ISAPPVIEW: (state, isAppView) => {
      state.isAppView = isAppView;
      sessionStorage.setItem('isAppView', isAppView);
    },
    SET_URLCHAIN: (state, urlChain) => {
      state.urlChain = urlChain;
    },
    SET_BASECONFIG: (state, baseConfig) => {
      state.baseConfig = baseConfig;
    },
    // 接收账户
    SET_TOACCOUNT: (state, toAccount) => {
      state.toAccount = toAccount;
    },
  },
  actions: {
    // channel
    setChannel({ commit }, channel) {
      commit('SET_CHANNEL', channel);
    },
    setNodeList({ commit }, nodeList) {
      commit('SET_NODELIST', nodeList);
    },
    setNode({ commit }, node) {
      commit('SET_NODE', node);
    },
    // 是否APP的webView打开 - android | ios
    setIsAppView({ commit }, isAppView) {
      commit('SET_ISAPPVIEW', isAppView);
    },
    setUrlChain({ commit }, urlChain) {
      commit('SET_URLCHAIN', urlChain);
    },
    setBaseConfig({ commit }, baseConfig) {
      commit('SET_BASECONFIG', baseConfig);
    },
    // 接收账户
    setToAccount({ commit }, toAccount) {
      commit('SET_TOACCOUNT', toAccount);
    },
  },
};

export default sys;
