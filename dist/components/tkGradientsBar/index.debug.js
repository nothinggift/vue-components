(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueTk"] = factory();
	else
		root["VueTk"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;
	
	var _tkGradientsBar = __webpack_require__(7);
	
	var _tkGradientsBar2 = _interopRequireDefault(_tkGradientsBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function install(Vue) {
	  Vue.component('tk-gradients-bar', Vue.extend(_tkGradientsBar2.default));
	}
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(8)
	
	/* script */
	__vue_exports__ = __webpack_require__(9)
	
	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\h5\\vue-components\\src\\components\\tkGradientsBar\\tkGradientsBar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fac1df32", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fac1df32", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tkGradientsBar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(10);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'tkGradientsBar',
	  data: function data() {
	    return {
	      styleColor: null,
	      percentage: 0,
	      bindContainer: null
	    };
	  },
	
	  computed: {
	    color: function color() {
	      var startColor = this.startColor ? this.startColor : this.styleColor;
	      if (this.percentage === 0) {
	        return startColor;
	      } else if (this.percentage === 100) {
	        return this.endColor;
	      } else {
	        return (0, _utils2.default)(startColor, this.endColor, this.percentage);
	      }
	    },
	    style: function style() {
	      return {
	        'background-color': this.color
	      };
	    }
	  },
	  watch: {
	    container: function container() {
	      this.bind();
	    }
	  },
	  mounted: function mounted() {
	    if (this.styleColor === null) {
	      this.styleColor = this.$el.style.backgroundColor;
	    }
	    this.bind();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.unbind();
	  },
	  methods: {
	    bind: function bind() {
	      if (this.bindContainer) {
	        this.unbind();
	      }
	      this.bindContainer = this.container ? this.container : this.$el.parentNode;
	      this.bindContainer.addEventListener('scroll', this.scrollHandler, false);
	    },
	    unbind: function unbind() {
	      if (this.bindContainer) {
	        this.bindContainer.removeEventListener('scroll', this.scrollHandler);
	        this.bindContainer = null;
	      }
	    },
	    scrollHandler: function scrollHandler(e) {
	      var scrollTop = e.target.scrollTop;
	      if (scrollTop <= this.start) {
	        this.percentage = 0;
	      } else if (scrollTop >= this.end) {
	        this.percentage = 100;
	      } else {
	        this.percentage = Math.ceil((scrollTop - this.start) / (this.end - this.start) * 100);
	      }
	      var opt = {
	        percentage: this.percentage,
	        start: this.start,
	        end: this.end,
	        scrollTop: scrollTop,
	        color: this.color
	      };
	      this.$emit('gradients', opt);
	    }
	  },
	  props: {
	    start: {
	      type: Number,
	      default: 0
	    },
	    end: {
	      type: Number,
	      required: true
	    },
	    startColor: String,
	    endColor: {
	      type: String,
	      default: 'transparent'
	    },
	    container: null
	  }
	}; //
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by Aker on 2016/12/22.
	 */
	var parseColor = function parseColor(hexStr, transparent) {
	  var rgbList = [];
	
	  if (hexStr.length === 4 || hexStr.length === 7) {
	    rgbList = hexStr.length === 4 ? hexStr.substr(1).split('').map(function (s) {
	      return 0x11 * parseInt(s, 16);
	    }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function (s) {
	      return parseInt(s, 16);
	    });
	    rgbList.push(1);
	  } else {
	    var reg = new RegExp(/rgba?\((.*)\)/);
	    var match = hexStr.match(reg);
	
	    if (match) {
	      rgbList = match[1].split(',');
	      if (rgbList.length === 3) {
	        rgbList.push(1);
	      } else if (rgbList.length === 4) {
	        var n = rgbList[3].split('.');
	
	        if (n.length === 2) {
	          rgbList[3] = '0.' + n[1];
	        }
	      }
	    }
	  }
	  if (transparent) {
	    rgbList[3] = 0;
	  }
	  return rgbList;
	};
	
	var gamma = 2.2;
	
	var normalize = function normalize(channel) {
	  return Math.pow(channel / 255, gamma);
	};
	
	var gradientColors = function gradientColors(start, end, percentage) {
	  if (start === end) {
	    return start;
	  }
	  var j = void 0;
	  var so = [];
	
	  var startColorList = start === 'transparent' ? parseColor(end, true) : parseColor(start);
	  var endColorList = end === 'transparent' ? parseColor(start, true) : parseColor(end);
	  var startOpacity = startColorList.pop();
	  var endOpacity = endColorList.pop();
	
	  startColorList = startColorList.map(normalize);
	  endColorList = endColorList.map(normalize);
	
	  for (j = 0; j < 3; j++) {
	    so[j] = Math.round(Math.pow(startColorList[j] * (100 - percentage) / 100 + endColorList[j] * percentage / 100, 1 / gamma) * 255);
	  }
	  so[3] = ((endOpacity - startOpacity) / 100 * percentage + parseFloat(startOpacity)).toFixed(2);
	  return 'rgba(' + so.join(',') + ')';
	};
	
	exports.default = gradientColors;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    ref: "bar",
	    staticClass: "tk-gradients-header",
	    style: (_vm.style)
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fac1df32", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map