(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponents"] = factory();
	else
		root["VueComponents"] = factory();
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

	module.exports = __webpack_require__(12);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;
	
	var _tkStatusBar = __webpack_require__(13);
	
	var _tkStatusBar2 = _interopRequireDefault(_tkStatusBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function install(Vue) {
	  Vue.component('tk-status-bar', Vue.extend(_tkStatusBar2.default));
	}
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(14)
	
	/* script */
	__vue_exports__ = __webpack_require__(15)
	
	/* template */
	var __vue_template__ = __webpack_require__(18)
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
	__vue_options__.__file = "E:\\h5\\vue-components\\src\\components\\tkStatusBar\\tkStatusBar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2944193a"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2944193a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2944193a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tkStatusBar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _state = __webpack_require__(16);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'StatusBar',
	  data: function data() {
	    return {
	      state: _state2.default
	    };
	  },
	
	  computed: {
	    _class: function _class() {
	      return this.state.class;
	    },
	    _style: function _style() {
	      var rt = {
	        height: this.state.height() + 'px'
	      };
	
	      if (this.state._color) {
	        rt['background-color'] = this.state._color;
	      } else if (this.color) {
	        rt['background-color'] = this.color;
	      }
	      return rt;
	    },
	    isShow: function isShow() {
	      return this.state.isShow() && this.state.height() !== 0;
	    }
	  },
	  props: {
	    color: String
	  }
	}; //
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(17);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Rxports = {
	  _class: null,
	  _color: null,
	  _show: true,
	  _space: true,
	  setClass: function setClass(cls) {
	    this._class = cls;
	  },
	  setColor: function setColor(color) {
	    this._color = color;
	  },
	  show: function show() {
	    this._show = true;
	  },
	  hide: function hide() {
	    this._show = false;
	  },
	  reset: function reset() {
	    this._color = this._class = null;
	    this._show = this._space = true;
	  },
	  height: function height() {
	    if (!this._height) {
	      if (_util2.default.plus && window.plus.navigator.isImmersedStatusbar()) {
	        this._height = window.plus.navigator.getStatusbarHeight();
	      } else {
	        this._height = 0;
	      }
	    }
	    return this._height;
	  },
	  toggle: function toggle() {
	    this._show = !this._show;
	  },
	  isShow: function isShow() {
	    return this._show;
	  },
	  setSpace: function setSpace(bool) {
	    this._space = bool;
	  }
	}; /**
	    * Created by AKer on 2016/12/20.
	    */
	
	
	module.exports = Rxports;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by Aker on 2016/12/23.
	 */
	
	var detect = function detect() {
	  var ua = navigator.userAgent;
	  var self = this;
	  var os = {};
	  var funcs = [function () {
	    // wechat
	    var wechat = ua.match(/(MicroMessenger)\/([\d\.]+)/i);
	
	    if (wechat) {
	      // wechat
	      os.wechat = {
	        version: wechat[2].replace(/_/g, '.')
	      };
	    }
	    return false;
	  }, function () {
	    // android
	    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	
	    if (android) {
	      os.android = true;
	      os.version = android[2];
	
	      os.isBadAndroid = !/Chrome\/\d/.test(window.navigator.appVersion);
	    }
	    return os.android === true;
	  }, function () {
	    // ios
	    var iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/);
	
	    if (iphone) {
	      // iphone
	      os.ios = os.iphone = true;
	      os.version = iphone[2].replace(/_/g, '.');
	    } else {
	      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	
	      if (ipad) {
	        // ipad
	        os.ios = os.ipad = true;
	        os.version = ipad[2].replace(/_/g, '.');
	      }
	    }
	    return os.ios === true;
	  }];[].every.call(funcs, function (func) {
	    return !func.call(self);
	  });
	  // 单独判断plus
	  var plus = ua.match(/Html5Plus/i);
	
	  if (plus) {
	    os.plus = true;
	  }
	
	  return os;
	};
	
	var os = detect();
	
	module.exports = os;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return (_vm.isShow) ? _c('div', {
	    staticClass: "status-bar-wrapper"
	  }, [_c('div', {
	    staticClass: "status-bar fixed",
	    class: _vm._class,
	    style: (_vm._style)
	  }), _vm._v(" "), (_vm.state._space) ? _c('div', {
	    staticClass: "status-bar",
	    class: _vm._class,
	    style: (_vm._style)
	  }) : _vm._e()]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2944193a", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map