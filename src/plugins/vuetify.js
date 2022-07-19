import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon, VDialog } from 'vuetify/lib'
// import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  components: {
    VSnackbar,
    VBtn,
    VIcon,
    VDialog
  },
})


export default new Vuetify()