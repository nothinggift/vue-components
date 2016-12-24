import Core from './core'
import tkStatusBar from './components/tkStatusBar'
import tkGradientsBar from './components/tkGradientsBar'

// 工具方法
import tkStatusBarState from './components/tkStatusBar/state'

const options = {
  Core,
  tkStatusBar,
  tkGradientsBar
}

const tools = {
  tkStatusBarState
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

export {tools}
