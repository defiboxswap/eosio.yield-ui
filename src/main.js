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

import { accAdd, toFixed, formatNumber, accDiv, accMul, accSub, getKMBUnit, handleHttp, handleCategory, handleCategoryTransform } from '@/utils/public'
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
Vue.prototype.openWindow = (url) => {
  if (!url) return
  window.open(url)
}
Vue.prototype.errorImg = 'this.src="/static/img/moren.png"'
Vue.prototype.errImg = 'this.src="/static/img/moren.png"'


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
