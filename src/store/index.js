import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import sys from './modules/sys';
import getters from './getters';
import createPersistedState from 'vuex-persistedstate';
import whiteConfig from './modules/whiteConfig';
Vue.use(Vuex);

const appLocalstorage = ['app.language', 'app.themeDark', 'app.isMobile', 'app.openMultipath', 'app.slipPoint', 'app.defaultSwapPair', 'app.klineConfig', 'app.uint', 'app.accountInfo', 'app.customCurrencyList', 'app.exchangeItem', 'app.useFreeCpu']

const store = new Vuex.Store({
  modules: {
    app,
    sys,
    whiteConfig
  },
  getters,
  plugins: [createPersistedState({
    paths: [...appLocalstorage, 'sys']

  })],
});

export default store;
