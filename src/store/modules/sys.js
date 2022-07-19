const sys = {
  state: {
    channel: localStorage.getItem("channel") ? localStorage.getItem("channel") : "",
    node: null,
    // APP's webView - android | ios
    isAppView: sessionStorage.getItem("isAppView") ? sessionStorage.getItem("isAppView") : "",
    urlChain: "eos",
    // urlChain: 'wax',
    baseConfig: {},
    // Blockchain browser configuration
    blockBrowser: {
      eos: {
        // tx: 'https://eospark.com/tx/',
        // account: 'https://eospark.com/account/',
        tx: "https://bloks.io/transaction/",
        account: "https://bloks.io/account/",
        token: "https://bloks.io/tokens/",
      },
    },
    toAccount: "danchorsmart", // Receiving account
  },
  mutations: {
    // channel
    SET_CHANNEL: (state, channel) => {
      state.channel = channel
      localStorage.setItem("channel", channel)
    },
    SET_NODELIST: (state, nodeList) => {
      state.nodeList = nodeList
      localStorage.setItem("nodeList", JSON.stringify(nodeList))
    },
    SET_NODE: (state, node) => {
      state.node = node
    },
    // webView - android | ios
    SET_ISAPPVIEW: (state, isAppView) => {
      state.isAppView = isAppView
      sessionStorage.setItem("isAppView", isAppView)
    },
    SET_URLCHAIN: (state, urlChain) => {
      state.urlChain = urlChain
    },
    SET_BASECONFIG: (state, baseConfig) => {
      state.baseConfig = baseConfig
    },
    SET_TOACCOUNT: (state, toAccount) => {
      state.toAccount = toAccount
    },
  },
  actions: {
    // channel
    setChannel({ commit }, channel) {
      commit("SET_CHANNEL", channel)
    },
    setNodeList({ commit }, nodeList) {
      commit("SET_NODELIST", nodeList)
    },
    setNode({ commit }, node) {
      commit("SET_NODE", node)
    },
    // webView - android | ios
    setIsAppView({ commit }, isAppView) {
      commit("SET_ISAPPVIEW", isAppView)
    },
    setUrlChain({ commit }, urlChain) {
      commit("SET_URLCHAIN", urlChain)
    },
    setBaseConfig({ commit }, baseConfig) {
      commit("SET_BASECONFIG", baseConfig)
    },
    setToAccount({ commit }, toAccount) {
      commit("SET_TOACCOUNT", toAccount)
    },
  },
}


export default sys
