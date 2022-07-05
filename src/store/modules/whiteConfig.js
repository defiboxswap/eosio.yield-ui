/*
* vuex 全站存储 - 存储一些配置类参数
* get: this.$store.state.模块.state
* 如： this.$store.state.app.language
* set: this.$store.dispatch(actions, value)
* 如： this.$store.dispatch('setLanguage', 'en');
*/

const whiteConfig = {
  state: {
    freeCpuWhiteList: [ // 免CPU功能白名单
      'tokenpocket',
      'meetone',
      'starteos',
      'bitpie',
      'eostokenpark',
      'defind'
    ],
    isFreeCpuWhite: false, // 免CPU功能开发状态
  },
  mutations: {
    // 免CPU功能开发状态
    SET_ISFREECPUWHIT: (state, channel) => {
      const index = state.freeCpuWhiteList.findIndex(item => item === channel)
      if (index > -1) {
        state.isFreeCpuWhite = true;
        return
      }

      state.isFreeCpuWhite = false;
    },
    // 免CPU功能白名单
    SET_FREECPUWHITELIST: (state, list) => {
      state.freeCpuWhiteList = list;
    },
  },
  actions: {
    // 当前时间戳
    setIsFreeCpuWhite: ({ commit }, channel) => {
      commit('SET_ISFREECPUWHIT', channel);
    },
    // 免CPU功能白名单
    setFreeCpuWhiteList: ({ commit }, list) => {
      commit('SET_FREECPUWHITELIST', list);
    },
  }
};

export default whiteConfig;
