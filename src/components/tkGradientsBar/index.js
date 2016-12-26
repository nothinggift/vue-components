import TkGradientsBar from './tkGradientsBar.vue'

const install = function (Vue) {
  Vue.component('tk-gradients-bar', Vue.extend(TkGradientsBar))
}

export {TkGradientsBar as default, install}
