import Core from './core';

const options = {
  Core,
};

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

window.VueMaterial = options;

export default options;
