(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messagelist/messagelist"],{4384:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("2f62");n("5dcb");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"fe19"))},i=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"61e1"))},c={data:function(){return{lastMsgs:[]}},components:{uniList:o,uniListItem:i},onShow:function(){parseInt(this.messages.unReadCount)>0?e.setTabBarBadge({index:1,text:this.messages.unReadCount+""}):e.removeTabBarBadge({index:1})},watch:{messages:{handler:function(t,n){var a=JSON.parse(e.getStorageSync("UNIUSER")),s=a._id,r=t.chatMsgs,u=t.users;t.unReadCount;this.getLastMsgs(r,u,s),parseInt(t.unReadCount)>0?e.setTabBarBadge({index:1,text:t.unReadCount+""}):e.removeTabBarBadge({index:1})},deep:!0}},computed:r({},(0,s.mapGetters)(["messages","user"])),methods:r({},(0,s.mapActions)(["getMsgList","msgRead"]),{showMsg:function(t,n){console.log(a("from,to",{from:t,to:n}," at pages\\messagelist\\messagelist.vue:80")),this.msgRead({from:t,to:n});var s=JSON.parse(e.getStorageSync("UNIUSER")),r=s._id,u=r==t?n:t;e.navigateTo({url:"../message/message?targetUserId="+u})},getLastMsgs:function(e,t,n){var a={};e.forEach(function(e){e.to!==n||e.read?e.unReadCount=0:e.unReadCount=1;var t=e.chat_id,s=a[t];if(s){var r=s.unReadCount+e.unReadCount;e.create_time>s.create_time&&(a[t]=e),a[t].unReadCount=r}else a[t]=e});var s=Object.values(a);s.sort(function(e,t){return t.create_time-e.create_time}),s.map(function(e){var a=e.to===n?e.from:e.to,s=t[a];return e.targetUserId=a,e.targetUser=s,e.unReadCount=e.unReadCount?e.unReadCount:"",e}),this.lastMsgs=s}}),onLoad:function(){var t=JSON.parse(e.getStorageSync("UNIUSER"));console.log(a(t," at pages\\messagelist\\messagelist.vue:160")),this.getMsgList(t._id)}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},c458:function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");a(n("66fd"));var t=a(n("e099"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c55c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},e099:function(e,t,n){"use strict";n.r(t);var a=n("c55c"),s=n("e8c0");for(var r in s)"default"!==r&&function(e){n.d(t,e,function(){return s[e]})}(r);var u=n("2877"),o=Object(u["a"])(s["default"],a["a"],a["b"],!1,null,"4bae580e",null);t["default"]=o.exports},e8c0:function(e,t,n){"use strict";n.r(t);var a=n("4384"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=s.a}},[["c458","common/runtime","common/vendor"]]]);