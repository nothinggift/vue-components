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

	module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;
	
	__webpack_require__(2);
	
	function install() {
	  if (install.installed) {
	    console.warn('Vue Components is already installed.');
	    return;
	  }
	  install.installed = true;
	} /* Code Components */
	
	/* Core Stylesheets */
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./core.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*  Structure\n   ========================================================================== */\nhtml {\n  height: 100%;\n  box-sizing: border-box; }\n  html *,\n  html *:before,\n  html *:after {\n    box-sizing: inherit; }\n\nbody {\n  min-height: 100%;\n  margin: 0;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.87); }\n\n[tabindex='-1']:focus {\n  outline: none; }\n\n/*  Fluid Media\n   ========================================================================== */\naudio,\nimg,\nsvg,\nobject,\nembed,\ncanvas,\nvideo,\niframe {\n  max-width: 100%;\n  height: auto;\n  font-style: italic;\n  vertical-align: middle; }\n\n/*  Suppress the focus outline on links that cannot be accessed via keyboard.\n    This prevents an unwanted focus outline from appearing around elements\n    that might still respond to pointer events.\n   ========================================================================== */\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
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
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fac1df32", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tkStatusBarState = exports.tkStatusBar = undefined;
	exports.default = install;
	
	var _tkStatusBar = __webpack_require__(13);
	
	var _tkStatusBar2 = _interopRequireDefault(_tkStatusBar);
	
	var _state = __webpack_require__(16);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.tkStatusBar = _tkStatusBar2.default;
	exports.tkStatusBarState = _state2.default;
	function install(Vue) {
	  Vue.component('tk-status-bar', Vue.extend(_tkStatusBar2.default));
	}

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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tools = undefined;
	
	var _core = __webpack_require__(1);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _tkStatusBar = __webpack_require__(12);
	
	var _tkStatusBar2 = _interopRequireDefault(_tkStatusBar);
	
	var _tkGradientsBar = __webpack_require__(6);
	
	var _tkGradientsBar2 = _interopRequireDefault(_tkGradientsBar);
	
	var _state = __webpack_require__(16);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var options = {
	  Core: _core2.default,
	  tkStatusBar: _tkStatusBar2.default,
	  tkGradientsBar: _tkGradientsBar2.default
	};
	
	// 工具方法
	
	
	var tools = {
	  tkStatusBarState: _state2.default
	};
	
	options.install = function (Vue) {
	  for (var component in options) {
	    var componentInstaller = options[component];
	
	    if (componentInstaller && component !== 'install') {
	      Vue.use(componentInstaller);
	    }
	  }
	};
	
	window.VueComponents = options;
	
	exports.default = options;
	exports.tools = tools;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-tk.debug.js.map