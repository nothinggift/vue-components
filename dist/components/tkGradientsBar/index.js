!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTk=e():t.VueTk=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){t.exports=n(5)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=f[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],e))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(u(r.parts[o],e));f[r.id]={id:r.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],s=i[1],a=i[2],u=i[3],l={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(l):e.push(n[o]={id:o,parts:[l]})}return e}function o(t,e){var n=h(),r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t,e){var n,r,i;if(e.singleton){var o=g++;n=v||(v=a(e)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=a(e),r=d.bind(null,n),i=function(){s(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function l(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function d(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=f[a.id];u.refs--,o.push(u)}if(t){var l=i(t);r(l,e)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete f[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=[];if(4===t.length||7===t.length)n=4===t.length?t.substr(1).split("").map(function(t){return 17*parseInt(t,16)}):[t.substr(1,2),t.substr(3,2),t.substr(5,2)].map(function(t){return parseInt(t,16)}),n.push(1);else{var r=new RegExp(/rgba?\((.*)\)/),i=t.match(r);if(i)if(n=i[1].split(","),3===n.length)n.push(1);else if(4===n.length){var o=n[3].split(".");2===o.length&&(n[3]="0."+o[1])}}return e&&(n[3]=0),n},r=2.2,i=function(t){return Math.pow(t/255,r)},o=function(t,e,o){if(t===e)return t;var s=void 0,a=[],u="transparent"===t?n(e,!0):n(t),l="transparent"===e?n(t,!0):n(e),d=u.pop(),f=l.pop();for(u=u.map(i),l=l.map(i),s=0;s<3;s++)a[s]=Math.round(255*Math.pow(u[s]*(100-o)/100+l[s]*o/100,1/r));return a[3]=((f-d)/100*o+parseFloat(d)).toFixed(2),"rgba("+a.join(",")+")"};e.default=o,t.exports=e.default},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.tkGradients=e.install=e.default=void 0;var i=n(12),o=r(i),s=n(3),a=r(s),u=function(t){t.component("tk-gradients-bar",t.extend(o.default))};e.default=o.default,e.install=u,e.tkGradients=a.default},,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=r(i);e.default={name:"tkGradientsBar",data:function(){return{styleColor:null,percentage:0,bindContainer:null}},computed:{color:function(){var t=this.startColor?this.startColor:this.styleColor;return 0===this.percentage?t:100===this.percentage?this.endColor:(0,o.default)(t,this.endColor,this.percentage)},style:function(){return{"background-color":this.color}}},watch:{container:function(){this.bind()}},mounted:function(){null===this.styleColor&&(this.styleColor=this.$el.style.backgroundColor),this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind()},methods:{bind:function(){this.bindContainer&&this.unbind(),this.bindContainer=this.container?this.container:this.$el.parentNode,this.bindContainer.addEventListener("scroll",this.scrollHandler,!1),this.scrollHandler()},unbind:function(){this.bindContainer&&(this.bindContainer.removeEventListener("scroll",this.scrollHandler),this.bindContainer=null)},scrollHandler:function(t){var e=t.target===window?window.pageYOffset:t.target.scrollTop;e<=this.start?this.percentage=0:e>=this.end?this.percentage=100:this.percentage=Math.ceil((e-this.start)/(this.end-this.start)*100);var n={percentage:this.percentage,start:this.start,end:this.end,scrollTop:e,color:this.color};this.$emit("gradients",n)}},props:{start:{type:Number,default:0},end:{type:Number,required:!0},startColor:String,endColor:{type:String,default:"transparent"},container:null}},t.exports=e.default},,,function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"",""])},function(t,e,n){var r,i;n(17),r=n(8);var o=n(15);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},,,function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{ref:"bar",staticClass:"tk-gradients-header",style:t.style},[t._t("default")],!0)},staticRenderFns:[]}},,function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.id,r,""]]);n(2)(r,{});r.locals&&(t.exports=r.locals)}])});