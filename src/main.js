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
import { accAdd, toFixed, formatNumber, accDiv, accMul, accSub, getKMBUnit, handleHttp, handleCategory, handleCategoryTransform, deepClone, isHttp } from '@/utils/public'
import { TRANSACTION_URL, CONTRACT_ORACLE, CONTRACT_ADMIN, CONTRACT_YIELD } from "./config"

Vue.prototype.$http = https;

Vue.prototype.$openTxid = (Txid) => {
  window.open(`${ TRANSACTION_URL }${Txid}`)
};

Vue.prototype.contractO = CONTRACT_ORACLE;
Vue.prototype.contractA = CONTRACT_ADMIN;
Vue.prototype.contractE = CONTRACT_YIELD;
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
