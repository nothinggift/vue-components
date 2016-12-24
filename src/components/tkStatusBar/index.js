import tkStatusBar from './tkStatusBar.vue'

export default function install (Vue) {
  Vue.component('tk-status-bar', Vue.extend(tkStatusBar))
}
