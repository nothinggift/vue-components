!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTk=e():t.VueTk=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){t.exports=n(19)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],s=d[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(u(r.parts[i],e))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(u(r.parts[i],e));d[r.id]={id:r.id,refs:1,parts:o}}}}function s(t){for(var e=[],n={},r=0;r<t.length;r++){var s=t[r],i=s[0],o=s[1],a=s[2],u=s[3],l={css:o,media:a,sourceMap:u};n[i]?n[i].parts.push(l):e.push(n[i]={id:i,parts:[l]})}return e}function i(t,e){var n=p(),r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t,e){var n,r,s;if(e.singleton){var i=g++;n=v||(v=a(e)),r=l.bind(null,n,i,!1),s=l.bind(null,n,i,!0)}else n=a(e),r=c.bind(null,n),s=function(){o(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}function l(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var i=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function c(t,e){var n=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=s(t);return r(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o],u=d[a.id];u.refs--,i.push(u)}if(t){var l=s(t);r(l,e)}for(var o=0;o<i.length;o++){var u=i[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=[];if(4===t.length||7===t.length)n=4===t.length?t.substr(1).split("").map(function(t){return 17*parseInt(t,16)}):[t.substr(1,2),t.substr(3,2),t.substr(5,2)].map(function(t){return parseInt(t,16)}),n.push(1);else{var r=new RegExp(/rgba?\((.*)\)/),s=t.match(r);if(s)if(n=s[1].split(","),3===n.length)n.push(1);else if(4===n.length){var i=n[3].split(".");2===i.length&&(n[3]="0."+i[1])}}return e&&(n[3]=0),n},r=2.2,s=function(t){return Math.pow(t/255,r)},i=function(t,e,i){if(t===e)return t;var o=void 0,a=[],u="transparent"===t?n(e,!0):n(t),l="transparent"===e?n(t,!0):n(e),c=u.pop(),d=l.pop();for(u=u.map(s),l=l.map(s),o=0;o<3;o++)a[o]=Math.round(255*Math.pow(u[o]*(100-i)/100+l[o]*i/100,1/r));return a[3]=((d-c)/100*i+parseFloat(c)).toFixed(2),"rgba("+a.join(",")+")"};e.default=i,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(7),i=r(s),o={_class:null,_color:null,_show:!0,_space:!0,_height:null,setClass:function(t){this._class=t},setColor:function(t){this._color=t},show:function(){this._show=!0},hide:function(){this._show=!1},reset:function(){this._color=this._class=null,this._show=this._space=!0},height:function(){return null===this._height&&(i.default.plus&&window.plus.navigator.isImmersedStatusbar()?this._height=window.plus.navigator.getStatusbarHeight():this._height=0),this._height},toggle:function(){this._show=!this._show},isShow:function(){return this._show},setSpace:function(t){this._space=t}};t.exports=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.tkGradients=e.install=e.default=void 0;var s=n(12),i=r(s),o=n(3),a=r(o),u=function(t){t.component("tk-gradients-bar",t.extend(i.default))};e.default=i.default,e.install=u,e.tkGradients=a.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.tkStatusBarState=e.install=e.default=void 0;var s=n(13),i=r(s),o=n(4),a=r(o),u=function(t){t.component("tk-status-bar",t.extend(i.default))};e.default=i.default,e.install=u,e.tkStatusBarState=a.default},function(t,e){"use strict";var n=function(){var t=navigator.userAgent,e=this,n={},r=[function(){var e=t.match(/(MicroMessenger)\/([\d\.]+)/i);return e&&(n.wechat={version:e[2].replace(/_/g,".")}),!1},function(){var e=t.match(/(Android);?[\s\/]+([\d.]+)?/);return e&&(n.android=!0,n.version=e[2],n.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion)),n.android===!0},function(){var e=t.match(/(iPhone\sOS)\s([\d_]+)/);if(e)n.ios=n.iphone=!0,n.version=e[2].replace(/_/g,".");else{var r=t.match(/(iPad).*OS\s([\d_]+)/);r&&(n.ios=n.ipad=!0,n.version=r[2].replace(/_/g,"."))}return n.ios===!0}];[].every.call(r,function(t){return!t.call(e)});var s=t.match(/Html5Plus/i);return s&&(n.plus=!0),n},r=n();t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=r(s);e.default={name:"tkGradientsBar",data:function(){return{styleColor:null,percentage:0,bindContainer:null}},computed:{color:function(){var t=this.startColor?this.startColor:this.styleColor;return 0===this.percentage?t:100===this.percentage?this.endColor:(0,i.default)(t,this.endColor,this.percentage)},style:function(){return{"background-color":this.color}}},watch:{container:function(){this.bind()}},mounted:function(){null===this.styleColor&&(this.styleColor=this.$el.style.backgroundColor),this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind()},methods:{bind:function(){this.bindContainer&&this.unbind(),this.bindContainer=this.container?this.container:this.$el.parentNode,this.bindContainer.addEventListener("scroll",this.scrollHandler,!1),this.scrollHandler()},unbind:function(){this.bindContainer&&(this.bindContainer.removeEventListener("scroll",this.scrollHandler),this.bindContainer=null)},scrollHandler:function(t){var e=t.target===window?window.pageYOffset:t.target.scrollTop;e<=this.start?this.percentage=0:e>=this.end?this.percentage=100:this.percentage=Math.ceil((e-this.start)/(this.end-this.start)*100);var n={percentage:this.percentage,start:this.start,end:this.end,scrollTop:e,color:this.color};this.$emit("gradients",n)}},props:{start:{type:Number,default:0},end:{type:Number,required:!0},startColor:String,endColor:{type:String,default:"transparent"},container:null}},t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),i=r(s);e.default={name:"StatusBar",data:function(){return{state:i.default}},computed:{_class:function(){return this.state.class},_style:function(){var t={height:this.state.height()+"px"};return this.state._color?t["background-color"]=this.state._color:this.color&&(t["background-color"]=this.color),t},isShow:function(){return this.state.isShow()&&0!==this.state.height()}},props:{color:String}},t.exports=e.default},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"div[data-v-2944193a]{background-color:#000;display:block;width:100%}.status-bar.fixed[data-v-2944193a]{position:fixed;top:0;left:0;width:100%;z-index:100000}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"",""])},function(t,e,n){var r,s;n(17),r=n(8);var i=n(15);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,s;n(16),r=n(9);var i=n(14);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-2944193a",t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return t.isShow?e("div",{staticClass:"status-bar-wrapper"},[e("div",{staticClass:"status-bar fixed",class:t._class,style:t._style}),t._v(" "),t.state._space?e("div",{staticClass:"status-bar",class:t._class,style:t._style}):t._e()]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{ref:"bar",staticClass:"tk-gradients-header",style:t.style},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.id,r,""]]);n(2)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.id,r,""]]);n(2)(r,{});r.locals&&(t.exports=r.locals)},,function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),i=r(s),o=n(5),a=r(o),u={tkStatusBar:i,tkGradientsBar:a},l={};l.install=function(t){for(var e in u)for(var n in u[e])if("install"===n){var r=u[e].install;r&&t.use(r)}else l[n]=u[e][n]},window.VueTk=l,e.default=l,t.exports=e.default}])});