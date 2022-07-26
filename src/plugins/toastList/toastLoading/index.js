import Vue from 'vue'
import Toast from './toastLoading.vue'
import Vuetify from 'vuetify/lib'
const ToastConstructor = Vue.extend(Toast)

function install(Vue, globalOptions = {}) {
  let cmp = null
  const property = globalOptions.property || '$toastLoading'

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

  function show(title, options = {}) {
    if (cmp) {
      return
    }
    // Vue.prototype.$toastFail.close()
    options.title = title
    cmp = createCmp(options)
    cmp.$on('toastLoadingStatusChange', (isActive, wasActive) => {
      if (wasActive && !isActive) {
        cmp.$nextTick(() => {
          cmp.$destroy()
          cmp.$el.parentNode.removeChild(cmp.$el)
          cmp = null

        })
      }
    })
  }

  function hide() {
    cmp && cmp.close()
  }


  function getCmp() {
    return cmp
  }

  Vue.prototype[property] = Object.assign(show, {
    globalOptions,
    getCmp,
    hide,
  })
}

function ToastLoading() {

}
ToastLoading.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ToastLoading)
}

export default ToastLoading
