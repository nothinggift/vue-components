import Core from './core'
import tkStatusBar from './components/tkStatusBar'
import tkGradientsBar from './components/tkGradientsBar'

const options = {
  Core,
  tkStatusBar,
  tkGradientsBar
}

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

window.VueComponents = options

export default options
