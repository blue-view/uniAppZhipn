(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"45c8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"v_imagecls"},[i("v-uni-image",{staticClass:"logo-img ",attrs:{src:"../../static/logo.png",mode:""}})],1),i("v-uni-form",{staticClass:"v_form",on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[t.user.msg?i("v-uni-view",{staticClass:"error-msg"},[t._v(t._s(t.user.msg))]):t._e(),i("v-uni-view",{staticClass:"v_line v_line_entity"},[i("v-uni-label",[t._v("用户名：")]),i("v-uni-input",{staticClass:"v_input ",attrs:{name:"username",type:"text",value:"",placeholder:"请输入用户名"}})],1),i("v-uni-view",{staticClass:"v_line v_line_entity"},[i("v-uni-label",[t._v("密 码：")]),i("v-uni-input",{staticClass:"v_input",attrs:{name:"password",value:"",password:"true",placeholder:"请输入密码"}})],1),i("v-uni-button",{staticClass:"v_line v_button",attrs:{type:"primary","form-type":"submit"}},[t._v("登录")]),i("v-uni-view",{staticClass:" v_text"},[i("v-uni-navigator",{attrs:{"open-type":"reLaunch",url:"../register/register"}},[t._v("还没有账户")])],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"64f4":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cebc")),s=i("2f62"),r={name:"login",computed:(0,a.default)({},(0,s.mapGetters)(["user"])),data:function(){return{}},onLoad:function(){this.errorMsg("")},onHide:function(){this.user.msg=""},methods:(0,a.default)({},(0,s.mapActions)(["login","errorMsg","getMsgList"]),{formSubmit:function(t){var e=this,i=t.detail.value,n=i.username,a=i.password;n?a?this.login({username:n,password:a}).then(function(t){console.log("res",t),e.getMsgList(t)}):this.errorMsg("密码不能为空"):this.errorMsg("用户名不能为空")}})};e.default=r},7722:function(t,e,i){"use strict";i.r(e);var n=i("45c8"),a=i("a6cf");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("b021");var r=i("2877"),o=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"7f379097",null);e["default"]=o.exports},a6cf:function(t,e,i){"use strict";i.r(e);var n=i("64f4"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},a83e:function(t,e,i){var n=i("bf15");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("cd94b0d4",n,!0,{sourceMap:!1,shadowMode:!1})},b021:function(t,e,i){"use strict";var n=i("a83e"),a=i.n(n);a.a},bf15:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".error-msg[data-v-7f379097]{color:red;text-align:center;font-size:18px;padding-top:%?20?%}.container[data-v-7f379097]{padding:0 %?40?%;-webkit-box-sizing:border-box;box-sizing:border-box}.v_imagecls[data-v-7f379097]{width:100%;height:%?480?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:%?30?% 0}.logo-img[data-v-7f379097]{width:%?480?%;height:%?480?%}.v_line[data-v-7f379097]{margin-bottom:%?30?%}.v_text[data-v-7f379097]{text-align:center;padding-bottom:%?30?%}.v_input[data-v-7f379097]{height:%?60?%;line-height:%?60?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.v_form[data-v-7f379097]{background:#fff;width:100%;display:block}.v_line_entity[data-v-7f379097]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?16?%;margin:%?16?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #ddd}.v_button[data-v-7f379097]{margin-top:%?30?%}",""])}}]);