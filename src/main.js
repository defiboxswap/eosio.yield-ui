import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
// import VueClipboard from 'vue-clipboard2'
import router from './router';
import store from './store';
import i18n from './utils/lang';
import './utils/filters';
import './utils/directives/loading.js';
import './router/action';
import '@/assets/css/public.scss';
import '@/assets/fonts/index.scss'
// Vue.use(VueClipboard)
// import Vconsole from 'vconsole';
// new Vconsole();

import https from '@/service/axios';
Vue.prototype.$http = https;

Vue.prototype.$openTxid = (Txid) => {
  if (process.env.NODE_ENV === "production") window.open(`https://bloks.io/transaction/${Txid}`)
  else window.open(`https://bloks.io/transaction/${Txid}`)
};

const origin = window.location.origin.indexOf('https://api.tokenyield.io')
if (origin < 0) {
  Vue.prototype.contractO = 'd.o.yield';
  Vue.prototype.contractA = 'd.a.yield';
  Vue.prototype.contractE = 'd.e.yield';
} else {
  Vue.prototype.contractO = 'eosio.yield';
  Vue.prototype.contractA = 'oracle.yield';
  Vue.prototype.contractE = 'admin.yield';
}

import { accAdd, toFixed, formatNumber, accDiv, accMul, accSub, getKMBUnit, handleHttp, handleCategory, handleCategoryTransform, deepClone, isHttp } from '@/utils/public'
Vue.prototype.accAdd = accAdd
Vue.prototype.toFixed = toFixed
Vue.prototype.formatNumber = formatNumber
Vue.prototype.accDiv = accDiv
Vue.prototype.accMul = accMul
Vue.prototype.accSub = accSub
Vue.prototype.getKMBUnit = getKMBUnit
Vue.prototype.handleHttp = handleHttp
Vue.prototype.handleCategory = handleCategory
Vue.prototype.handleCategoryTransform = handleCategoryTransform
Vue.prototype.deepClone = deepClone
Vue.prototype.isHttp = isHttp

Vue.prototype.openWindow = (url) => {
  if (!url) return
  window.open(url)
}
Vue.prototype.errorImg = 'this.src="/static/img/moren1.png"'
Vue.prototype.errImg = 'this.src="/static/img/moren1.png"'


import VuetifyToast from '@/plugins/toast/index.js';
Vue.use(VuetifyToast)
// toastList
import '@/plugins/toastList/index.js'

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
