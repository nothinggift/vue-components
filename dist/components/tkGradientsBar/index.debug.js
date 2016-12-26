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
	exports.install = exports.default = undefined;
	
	var _tkGradientsBar = __webpack_require__(7);
	
	var _tkGradientsBar2 = _interopRequireDefault(_tkGradientsBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var install = function install(Vue) {
	  Vue.component('tk-gradients-bar', Vue.extend(_tkGradientsBar2.default));
	};
	
	exports.default = _tkGradientsBar2.default;
	exports.install = install;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(8)
	
	/* script */
	__vue_exports__ = __webpack_require__(10)
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
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
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fac1df32!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tkGradientsBar.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fac1df32!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tkGradientsBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(11);
	
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
/* 11 */
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
/* 12 */
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map