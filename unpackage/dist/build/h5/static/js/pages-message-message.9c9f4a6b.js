(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-message-message"],{"172e":function(t,e,i){"use strict";var s=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("55dd");var n=s(i("e814")),a=s(i("cebc")),o=s(i("2f98")),r=s(i("5ede")),d=s(i("a905")),c=i("5dcb"),f=i("2f62"),l={data:function(){return{emojis:[],isshowgrid:!1,targetId:"",emoji:{text:""},msgcontent:"",msgs:[],users:{},option:{}}},watch:{messages:{handler:function(t,e){this.loadMsg(t)},deep:!0}},onLoad:function(t){this.targetId=t.targetUserId,this.loadMsg(this.messages),this.emojis=["😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣"],this.emojis=this.emojis.map(function(t){return{text:t}})},computed:(0,a.default)({},(0,f.mapGetters)(["messages","user"]),{scrollH:function(){var t=uni.getSystemInfoSync(),e=t.windowWidth,i=750/e,s=(0,n.default)(t.windowHeight*i);return s}}),components:{uniIcons:o.default,uniGrid:r.default,uniGridItem:d.default},methods:(0,a.default)({},(0,f.mapActions)(["sendMsg"]),{loadMsg:function(t){if(uni.getStorageSync(c.CACH_MESSAGE)||0!=t.chatMsgs.length){var e=t.chatMsgs.length>0?t:JSON.parse(uni.getStorageSync(c.CACH_MESSAGE)),i=e.users,s=e.chatMsgs,n=(e.unReadCount,this.user.username?this.user:JSON.parse(uni.getStorageSync(c.CACH_USER)));this.users=i,this.users[this.targetId]&&uni.setNavigationBarTitle({title:this.users[this.targetId].username});var a=n._id;if(!i[a])return null;var o=[a,this.targetId].sort().join("_");this.msgs=s.filter(function(t){return t.chat_id===o})}},sendChat:function(t){var e=JSON.parse(uni.getStorageSync(c.CACH_USER)),i=this.user._id||e._id,s=this.targetId,n=t.detail.value.content;this.content=n,n?(this.sendMsg({from:i,to:s,content:n+this.emoji.text}),this.$refs.resrtBtn.$dispatch("Form","uni-form-reset",{type:"reset"}),this.isshowgrid=!1,this.emoji={text:""}):uni.showToast({title:"内容不能为空"})},showGrid:function(){this.isshowgrid=!this.isshowgrid},textChange:function(){this.isshowgrid=!1},change:function(t){var e=t.detail.index;this.emoji=this.emojis[e],this.msgcontent=this.msgcontent+this.emoji.text},formReset:function(){}})};e.default=l},"1c5d":function(t,e,i){"use strict";i.r(e);var s=i("172e"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=n.a},2737:function(t,e,i){"use strict";i.r(e);var s=i("bbdc"),n=i("1c5d");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("d897");var o=i("2877"),r=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,"0f55cfa4",null);e["default"]=r.exports},bbdc:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-scroll-view",{style:{height:t.scrollH+"upx"},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticStyle:{"padding-bottom":"88upx"}},[i("v-uni-view",{staticClass:"message_head"},[t._l(t.msgs,function(e){return[t.targetId===e.from?i("v-uni-view",{key:e._id+"_0",staticClass:"m_list_item1 m_list_item"},[t.users[t.targetId]?i("v-uni-image",{staticClass:"m_cls",attrs:{src:"../../static/images/"+t.users[t.targetId].header+".png",mode:""}}):i("v-uni-image",{staticClass:"m_cls",attrs:{src:"../../static/images/header1.png",mode:""}}),i("v-uni-view",{staticClass:"m_content"},[t._v(t._s(e.content))])],1):i("v-uni-view",{staticClass:"m_list_item2 m_list_item"},[i("v-uni-view",{staticClass:"m_content"},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"m_content2"},[t._v("我")])],1)]})],2),i("v-uni-view",{staticClass:"message_foot"},[i("v-uni-form",{staticClass:"message_foot_form",on:{submit:function(e){e=t.$handleEvent(e),t.sendChat(e)},reset:function(e){e=t.$handleEvent(e),t.formReset(e)}}},[i("v-uni-view",{staticClass:"foot-operate"},[i("v-uni-input",{staticClass:"m_input",attrs:{value:"",name:"content",type:"text",placeholder:"请输入发送消息"},on:{focus:function(e){e=t.$handleEvent(e),t.textChange(e)}},model:{value:t.msgcontent,callback:function(e){t.msgcontent=e},expression:"msgcontent"}}),i("v-uni-view",{staticClass:"m_icons",on:{click:function(e){e=t.$handleEvent(e),t.showGrid(e)}}},[t._v(t._s(t.emojis[1].text))]),i("v-uni-button",{staticClass:"m_button",attrs:{type:"primary","form-type":"submit"}},[t._v("发送")]),i("v-uni-button",{ref:"resrtBtn",staticStyle:{display:"none"},attrs:{"form-type":"reset"}},[t._v("Reset")])],1)],1),t.isshowgrid?i("v-uni-view",{staticClass:"v_uni_grid"},[i("uni-grid",{attrs:{"show-border":!1,square:!1,column:8,highlight:!0},on:{change:function(e){e=t.$handleEvent(e),t.change(e)}}},t._l(t.emojis,function(e,s){return i("uni-grid-item",{key:s},[i("v-uni-view",{},[t._v(t._s(e.text))])],1)}),1)],1):t._e()],1)],1)],1)},n=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n})},d6f9:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".m_cls[data-v-0f55cfa4]{width:%?44?%;height:%?44?%;vertical-align:middle}.m_list_item[data-v-0f55cfa4]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:%?30?%;min-height:%?88?%;background-color:#fff;vertical-align:middle;overflow:hidden;-webkit-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:box-border;box-sizing:box-border}.m_list_item1[data-v-0f55cfa4]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-bottom:1px solid #ddd}.m_list_item2[data-v-0f55cfa4]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:0;padding-right:%?30?%;border-bottom:1px solid #ddd}.m_content[data-v-0f55cfa4]{margin-left:%?30?%}.message_foot[data-v-0f55cfa4]{bottom:0;position:fixed;min-height:%?88?%;width:100%;background-color:#fff}.message_foot_form[data-v-0f55cfa4]{width:100%;padding:0 0 0 %?0?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:display;-webkit-flex:display;-ms-flex:display;flex:display}.m_input[data-v-0f55cfa4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.m_button[data-v-0f55cfa4]{font-size:15px;background-color:#fff;color:#888;padding-left:%?20?%;padding-right:%?0?%}.m_button[data-v-0f55cfa4]:after{border:1px solid #fff}.foot-operate[data-v-0f55cfa4]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:%?88?%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.m_icons[data-v-0f55cfa4]{padding-left:%?10?%}.m_content2[data-v-0f55cfa4]{margin-left:%?30?%}",""])},d897:function(t,e,i){"use strict";var s=i("e6be"),n=i.n(s);n.a},e6be:function(t,e,i){var s=i("d6f9");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("7aaca510",s,!0,{sourceMap:!1,shadowMode:!1})}}]);