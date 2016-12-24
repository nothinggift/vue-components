import tkStatusBar from './tkStatusBar.vue'
import tkStatusBarState from './state.js'

export {tkStatusBar, tkStatusBarState}

export default function install (Vue) {
  Vue.component('tk-status-bar', Vue.extend(tkStatusBar))
}
