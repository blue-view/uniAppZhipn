(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dashen/dashen"],{"4d29":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},5763:function(e,t,n){"use strict";n.r(t);var r=n("b95f"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=i.a},"6b42":function(e,t,n){"use strict";n.r(t);var r=n("4d29"),i=n("5763");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("9b54");var u=n("2877"),o=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"953410a0",null);t["default"]=o.exports},8980:function(e,t,n){},"9b54":function(e,t,n){"use strict";var r=n("8980"),i=n.n(r);i.a},b95f:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"5ede"))},c=function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"a905"))},s={data:function(){return{selectedIcon:"",headerList:[],path:""}},components:{uniGrid:o,uniGridItem:c},onLoad:function(e){this.path=e.path;for(var t=0;t<20;t++)this.headerList.push({textzw:"头像"+(t+1),text:"header"+(t+1),icon:"../../static/images/header".concat(t+1,".png")});this.getUser()},computed:a({},(0,i.mapGetters)(["user"]),{scrollH:function(){var t=e.getSystemInfoSync(),n=t.windowWidth,i=750/n,a=parseInt(t.windowHeight*i);return console.log(r("winHeight:"+a," at pages\\dashen\\dashen.vue:62")),a}}),watch:{user:function(e,t){this.selectedIcon=e.header}},methods:a({},(0,i.mapActions)(["updateUser","getUser","getHeader"]),{change:function(e){var t=e.detail.index;this.selectedIcon=this.headerList[t].text,this.getHeader(this.headerList[t].text)},formSubmit:function(e){var t=a({},this.user,e.detail.value,{path:this.path});console.log(r(t," at pages\\dashen\\dashen.vue:80")),this.updateUser(t)}})};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},cf92:function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");r(n("66fd"));var t=r(n("6b42"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["cf92","common/runtime","common/vendor"]]]);