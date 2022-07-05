import Vue from 'vue'
import Toast from './Toast.vue'
import Vuetify from 'vuetify/lib'
const ToastConstructor = Vue.extend(Toast)
// vuetify-toast-snackbar-ng
function install(Vue, globalOptions = {}) {
  let cmp = null
  const queue = []
  const property = globalOptions.property || '$toast'

  function createCmp(options) {
    const component = new ToastConstructor()
    const vuetifyObj = new Vuetify()
    component.$vuetify = vuetifyObj.framework
    const componentOptions = { ...Vue.prototype[property].globalOptions, ...options }

    if (componentOptions.slot) {
      component.$slots.default = componentOptions.slot
      delete componentOptions.slot
    }

    Object.assign(component, componentOptions)
    document.body.appendChild(component.$mount().$el)

    return component
  }

  function show(message, options = {}) {
    if (cmp) {
      const isQueueable = options.queueable !== undefined ? options.queueable : globalOptions.queueable

      if (isQueueable) {
        queue.push({ message, options })
      }
      else {
        cmp.close()
        queue.unshift({ message, options })
      }

      return
    }

    options.message = message
    cmp = createCmp(options)
    cmp.$on('statusChange', (isActive, wasActive) => {
      if (wasActive && !isActive) {
        cmp.$nextTick(() => {
          cmp.$destroy()
          cmp.$el.parentNode.removeChild(cmp.$el)
          cmp = null

          if (queue.length) {
            const toast = queue.shift()
            show(toast.message, toast.options)
          }
        })
      }
    })
  }

  function shorts(options) {
    const colors = ['success', 'info', 'error', 'warning']
    const methods = {}

    colors.forEach(color => {
      methods[color] = (message, options) => show(message, { color, ...options })
    })

    if (options.shorts) {
      for (let key in options.shorts) {
        const localOptions = options.shorts[key]
        methods[key] = (message, options) => show(message, { ...localOptions, ...options })
      }
    }

    return methods
  }

  function getCmp() {
    return cmp
  }

  function clearQueue() {
    return queue.splice(0, queue.length)
  }

  Vue.prototype[property] = Object.assign(show, {
    globalOptions,
    getCmp,
    clearQueue,
    ...shorts(globalOptions)
  })
}

function ToastSnackbar() {

}
ToastSnackbar.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ToastSnackbar)
}

export default ToastSnackbar




// Call
// this.$toast('Default toast')
// this.$toast.info('Info toast')
// this.$toast('Custom options', {
// 	color: 'green',
// 	dismissable: true,
// 	queueable: true
// })
// this.$toast.custom('Custom short')
// this.$toast(null, {
// 	slot: [this.$createElement('button', ['Click here'])]
// })

// Get currently displayed Toast component
// let cmp = this.$toast.getCmp()
// cmp.message = 'Dynamic properties'
// cmp.close()

// Clear Toasts queue
// let queue = this.$toast.clearQueue()



// Vue.use(VuetifyToast, {
// 	x: 'right', // default
// 	y: 'bottom', // default
// 	color: 'info', // default
// 	icon: 'info',
// 	iconColor: '', // default
// 	classes: [
// 		'body-2'
// 	],
// 	timeout: 3000, // default
// 	dismissable: true, // default
// 	multiLine: false, // default
// 	vertical: false, // default
// 	queueable: false, // default
// 	showClose: false, // default
// 	closeText: '', // default
// 	closeIcon: 'close', // default
// 	closeColor: '', // default
// 	slot: [], //default
// 	shorts: {
// 		custom: {
// 			color: 'purple'
// 		}
// 	},
// 	property: '$toast' // default
// })