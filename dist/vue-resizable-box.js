!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-resizable-box",[],t):"object"==typeof exports?exports["vue-resizable-box"]=t():n["vue-resizable-box"]=t()}("undefined"!=typeof self?self:this,function(){return function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/dist/",t(t.s=6)}([function(n,t,e){"use strict";var o=e(1);t.a=o.a},function(n,t,e){"use strict";var o=e(10),r=(e.n(o),function(){function n(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var s,a=n[Symbol.iterator]();!(o=(s=a.next()).done)&&(e.push(s.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}());t.a={name:"ResizableBox",props:{mode:{type:String,default:"horizontal"},option:{type:Object,default:function(){return{left:{size:1,buttons:[{direction:"right",icon:"iconfont icon-ios-arrow-forward",position:{right:"-1px"},isExpanded:!0}]},right:{size:1,buttons:[{direction:"left",icon:"iconfont icon-ios-arrow-back",position:{left:"-1px"},isExpanded:!0}]}}}}},data:function(){return{infoRecords:{},defaultOpt:{directions:["left","right","up","down"],icon:{left:"iconfont icon-ios-arrow-back",right:"iconfont icon-ios-arrow-forward",up:"iconfont icon-ios-arrow-up",down:"iconfont icon-ios-arrow-down"},position:{left:{left:"-1px"},right:{right:"-1px"},up:{top:"-1px"},down:{bottom:"-1px"}}}}},computed:{slotArr:function(){return Object.keys(this.option)},totalSize:function(){var n=0;return Object.values(this.option).forEach(function(t){var e=Number(t.size);n+=Number.isNaN(e)?0:e}),n}},created:function(){this.recordInfo()},methods:{recordInfo:function(){var n=this;Object.entries(this.option).forEach(function(t){var e=r(t,2),o=e[0],i=e[1];i=void 0===i?{}:i;var s=i.size,a=i.buttons,c=void 0===a?[]:a;n.infoRecords[o]={size:s,buttons:c.map(function(t){return n.setDefaultOpt(t),JSON.parse(JSON.stringify(t))})}})},setDefaultOpt:function(n){if(!n.hasOwnProperty("direction")||!this.defaultOpt.directions.includes(n.direction))throw new Error("请配置direction，使用left、right、up、down表示！");!n.hasOwnProperty("isExpanded")&&this.$set(n,"isExpanded",!0),!n.hasOwnProperty("icon")&&this.$set(n,"icon",this.defaultOpt.icon[n.direction]),!n.hasOwnProperty("position")&&this.$set(n,"position",this.defaultOpt.position[n.direction])},getTargetSlot:function(n,t){var e=this.slotArr.findIndex(function(t){return t===n}),o=e+1,r=e-1,i=this.slotArr.length,s={left:r<0?o:r,right:o>i-1?r:o,up:r<0?o:r,down:o>i-1?r:o};return this.slotArr[s[t]]},switchBox:function(n,t,e){var o=this.getTargetSlot(e,n.direction);this.option[e].size=n.isExpanded?this.option[e].size+this.option[o].size:this.infoRecords[e].size,this.option[o].size=n.isExpanded?0:this.infoRecords[o].size,n.isExpanded=!n.isExpanded}}}},function(n,t,e){"use strict";function o(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=o(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){n.exports=e.p+"15436ff4bb7856c6900ca2933fc826dd.eot"},function(n,t,e){"use strict";function o(n,t,e,o){h=e,v=o||{};var i=Object(u.a)(n,t);return r(i),function(t){for(var e=[],o=0;o<i.length;o++){var s=i[o],a=f[s.id];a.refs--,e.push(a)}t?(i=Object(u.a)(n,t),r(i)):i=[];for(var o=0;o<e.length;o++){var a=e[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}}function r(n){for(var t=0;t<n.length;t++){var e=n[t],o=f[e.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](e.parts[r]);for(;r<e.parts.length;r++)o.parts.push(s(e.parts[r]));o.parts.length>e.parts.length&&(o.parts.length=e.parts.length)}else{for(var i=[],r=0;r<e.parts.length;r++)i.push(s(e.parts[r]));f[e.id]={id:e.id,refs:1,parts:i}}}}function i(){var n=document.createElement("style");return n.type="text/css",p.appendChild(n),n}function s(n){var t,e,o=document.querySelector("style["+w+'~="'+n.id+'"]');if(o){if(h)return x;o.parentNode.removeChild(o)}if(g){var r=b++;o=l||(l=i()),t=a.bind(null,o,r,!1),e=a.bind(null,o,r,!0)}else o=i(),t=c.bind(null,o),e=function(){o.parentNode.removeChild(o)};return t(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;t(n=o)}else e()}}function a(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}function c(n,t){var e=t.css,o=t.media,r=t.sourceMap;if(o&&n.setAttribute("media",o),v.ssrId&&n.setAttribute(w,t.id),r&&(e+="\n/*# sourceURL="+r.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=e(16),d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f={},p=d&&(document.head||document.getElementsByTagName("head")[0]),l=null,b=0,h=!1,x=function(){},v=null,w="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),m=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t,e){var o=e(18);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e(4).default;r("64d1895a",o,!0,{})},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(7),r={};r.installed=!1,r.install=function(n,t){r.installed||(n.component(o.a.name,o.a),n.component("Vue"+o.a.name,o.a),r.installed=!0)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(n,t,e){"use strict";var o=e(8),r=e(0),i=(e(17),e(19)),s=Object(i.a)(r.a,o.a,o.b,!1,null,null,null);t.a=s.exports},function(n,t,e){"use strict";var o=e(9);e.d(t,"a",function(){return o.a}),e.d(t,"b",function(){return o.b})},function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"resizable-box"},[e("div",{staticClass:"content-wrap",class:n.mode},n._l(n.option,function(t,o){return e("div",{key:o,staticClass:"section-wrap",style:(r={},r["horizontal"===n.mode?"width":"height"]=100*t.size/n.totalSize+"%",r)},[e("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.size,expression:"val.size != 0"}],staticClass:"show-box"},[n._l(t.buttons,function(t,r){return e("div",{key:"buttons_"+r,staticClass:"expand-btn-box",class:[t.direction,t.isExpanded?"":"not-expand"],style:t.position,on:{click:function(e){return n.switchBox(t,r,o)}}},[e("i",{staticClass:"expand-btn",class:t.icon})])}),n._v(" "),n._t(o)],2)]);var r}),0)])},r=[]},function(n,t,e){var o=e(11);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e(4).default;r("d54c9862",o,!0,{})},function(n,t,e){t=n.exports=e(2)(!1);var o=e(12),r=o(e(3)),i=o(e(3)+"#iefix"),s=o(e(13)),a=o(e(14)),c=o(e(15)+"#iconfont");t.push([n.i,'@font-face {font-family: "iconfont";\n  src: url('+r+"); /* IE9 */\n  src: url("+i+") format('embedded-opentype'),\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL0AAsAAAAAB4QAAAKoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDIgqCEIFyATYCJAMUCwwABCAFhG0HbBuSBsgusG3kswI0GFxH0HPix/CY8CyCau3fnt29ewjuRyFKQMcKAMqnomKj2PlUNMsI90lH3+DNHYL6tCtSwnfHuoAZX9ED1oDa1pxDFC7CDGXViBTrv28KlF7KxsOyXxfBHewcMd5UV2vBqEv1P2X8JyB17SyAUWuNSq+cp0yoUjhAoXgvGArZRyRxzlI3GVdFj/7xmEDXFgQ8d3q8Kx0FWhWI16YuKp1OTFGSYluoJw4W8VGlnd6nGx/k52PT4WiTVBnaeOXpUa1sVqvVTn7X0G1O0ZznQXKMjL2AQjyczN1WF4kI617XcBBQK0JarVc7TcOZpra08U7N+5kk/3mihhr74JSfL6xWlBCs1oTEapuQWe1of0hjBbrdwjkV10PhVktg4wRt17+/bqLNia7wK3uMl3MmVak3pq+wdcVI7lT6s8qmyi1XretqXH7nPgi+7A0jb2scaI6gVRO+PwoXRwDnYUp/2N9AnKfv6S/kK7XT3V9UESyHb0f3xsf+1yvg31da2gp4vi2RaP62BthRah2yV6Vsp+oyUJkAMwldnKSBQlPuHOsC3EpoW+wItKxYZG1b6SLci0rPUdTaTqJrj/J4z8yoLkoHu60ewtiGZOgbsrGHLsIPlSWP2jgyuq7G7MKe7fGid5ZRhKhCnYGV5GnEGfZU8xP1yBHs6qT4ixyYSZBM9Itn9JDP2DLF+noONVBMLhTec+g4BD2ThTKcmzD0Fc7V1JvmDbmVnrMYEkJIBWoZYEnEo/Hxod6A+yekizgEXmCtFL8QC5jTA4kRAPps9kCsb3llEtOtzUIaoDDiAoXnQQ7OEdBPz7MgKTRndmR8Ch50U1Dz/H6r+40noAt9s4oUOUpUURu+oGBWMVMyq4W0XUNLe7ypP0MRJ4LVQR5d/EoF') format('woff2'),\n  url("+s+") format('woff'),\n  url("+a+") format('truetype'), \n  url("+c+') format(\'svg\'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ios-arrow-back:before {\n  content: "\\e705";\n}\n\n.icon-ios-arrow-down:before {\n  content: "\\e706";\n}\n\n.icon-ios-arrow-forward:before {\n  content: "\\e708";\n}\n\n.icon-ios-arrow-up:before {\n  content: "\\e709";\n}\n\n',""])},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){n.exports=e.p+"ebe35fa6f229b3e75b33863fc4db54b8.woff"},function(n,t,e){n.exports=e.p+"6f9bc71f778d4cafc2d551ed5b025898.ttf"},function(n,t,e){n.exports=e.p+"iconfont.svg?cfbd795fd1cba186354d4c35ad5abd2e"},function(n,t,e){"use strict";function o(n,t){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],c=i[2],u=i[3],d={id:n+":"+r,css:a,media:c,sourceMap:u};o[s]?o[s].parts.push(d):e.push(o[s]={id:s,parts:[d]})}return e}t.a=o},function(n,t,e){"use strict";var o=e(5),r=e.n(o);r.a},function(n,t,e){t=n.exports=e(2)(!1),t.push([n.i,".resizable-box {\n  width: 100%;\n  height: 100%;\n}\n.resizable-box .content-wrap {\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  min-height: 100px;\n}\n.resizable-box .content-wrap .section-wrap {\n  position: relative;\n  box-sizing: border-box;\n}\n.resizable-box .content-wrap .show-box {\n  box-sizing: border-box;\n  height: 100%;\n  transition: all 0.4s ease;\n}\n.resizable-box .content-wrap .expand-btn-box {\n  position: absolute;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #409eff;\n  border-radius: 4px;\n  box-sizing: border-box;\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 1998;\n  transition: transform 0.4s ease;\n}\n.resizable-box .content-wrap .expand-btn-box .expand-btn {\n  font-size: 14px;\n  color: #fff;\n}\n.resizable-box .content-wrap .expand-btn-box:hover {\n  opacity: 0.9;\n}\n.resizable-box .content-wrap .expand-btn-box:active {\n  opacity: 0.8;\n}\n.resizable-box .content-wrap .left {\n  border-radius: 0 4px 4px 0;\n}\n.resizable-box .content-wrap .right {\n  border-radius: 4px 0 0 4px;\n}\n.resizable-box .content-wrap .down {\n  border-radius: 4px 4px 0 0;\n}\n.resizable-box .content-wrap .up {\n  border-radius: 0 0 4px 4px;\n}\n.resizable-box .content-wrap .not-expand {\n  transform: rotate(180deg);\n  transform-origin: 50% 50%;\n}\n.resizable-box .content-wrap .not-expand.left {\n  border-radius: 4px 0 0 4px;\n}\n.resizable-box .content-wrap .not-expand.right {\n  border-radius: 0 4px 4px 0;\n}\n.resizable-box .content-wrap .not-expand.down {\n  border-radius: 0 0 4px 4px;\n}\n.resizable-box .content-wrap .not-expand.up {\n  border-radius: 4px 4px 0 0;\n}\n.resizable-box .horizontal {\n  flex-direction: row;\n}\n.resizable-box .horizontal>.section-wrap {\n  height: 100%;\n  min-height: 100px;\n  transition: width 0.4s ease;\n}\n.resizable-box .horizontal>.section-wrap>.show-box>.expand-btn-box {\n  width: 14px;\n  height: 42px;\n  top: 0;\n  bottom: 0;\n}\n.resizable-box .horizontal>.section-wrap + .section-wrap {\n  border-left: 1px solid #ebeef5;\n}\n.resizable-box .vertical {\n  flex-direction: column;\n}\n.resizable-box .vertical>.section-wrap {\n  width: 100%;\n  transition: height 0.4s ease;\n}\n.resizable-box .vertical>.section-wrap>.show-box>.expand-btn-box {\n  flex-direction: column;\n  width: 42px;\n  height: 14px;\n  left: 0;\n  right: 0;\n}\n.resizable-box .vertical>.section-wrap + .section-wrap {\n  border-top: 1px solid #ebeef5;\n}\n",""])},function(n,t,e){"use strict";function o(n,t,e,o,r,i,s,a){var c="function"==typeof n?n.options:n;t&&(c.render=t,c.staticRenderFns=e,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i);var u;if(s?(u=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,n||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),r&&r.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(n,t){return u.call(t),d(n,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:n,options:c}}t.a=o}])});
//# sourceMappingURL=vue-resizable-box.js.map