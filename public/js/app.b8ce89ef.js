(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about",admin:"admin",account:"account"}[e]||e)+"."+{about:"61cef39a",admin:"475e91b4","chunk-69f8d7c8":"177ad866",account:"eb35fdfd","chunk-0c1a0121":"27155d4a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={admin:1,"chunk-69f8d7c8":1,account:1,"chunk-0c1a0121":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about",admin:"admin",account:"account"}[e]||e)+"."+{about:"31d6cfe0",admin:"28a0ee29","chunk-69f8d7c8":"83ba771f",account:"e496eed6","chunk-0c1a0121":"1c14266e"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(e),u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a99":function(e,t,n){"use strict";var r=n("c317"),a=n.n(r);a.a},"41cb":function(e,t,n){"use strict";var r=n("2b0e"),a=n("8c4f"),o=n("4360"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld")},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"body-2 ma-4 pa-4",attrs:{"justify-center":"","text-xs-center":""}},[n("div",[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("GoBase Demo Application")]),n("p",{staticClass:"subheading font-weight-regular"},[n("a",{attrs:{href:"https://github.com/dhax/go-base",target:"_blank",rel:"noopener"}},[e._v("Check out on GitHub")])])]),n("v-divider"),n("div",{staticClass:"ma-4 pa-4"},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's this?")]),n("p",[e._v("This Go demo application is using a passwordless authentication flow to receive a Json Web Token (JWT) for authentication.")]),n("p",[e._v("After submitting your email address a login token is sent to that address and will be used to login.")])]),n("v-divider"),n("div",{staticClass:"ma-4 pa-4"},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Available Logins")]),n("p",[e._v("Use one of these email addresses to login:")]),n("p",[e._v("admin@boot.io (access to admin panel)")]),n("p",[e._v("user@boot.io (own account management only)")]),n("p",[e._v("The login token for these to addresses only will be logged to console output. Grab it from there!")]),n("p",[e._v("Other registered addresses will recieve an email with login token.")])]),n("v-divider"),n("div",{staticClass:"ma-4 pa-4"},[n("p",[e._v("Database is reset every 24 hours in this demo, including refresh tokens.")])])],1)},u=[],l=n("2877"),f=n("6544"),d=n.n(f),p=n("a523"),h=n("ce7e"),v={},m=Object(l["a"])(v,s,u,!1,null,null,null);m.options.__file="HelloWorld.vue";var g=m.exports;d()(m,{VContainer:p["a"],VDivider:h["a"]});var b={components:{HelloWorld:g}},k=b,T=Object(l["a"])(k,i,c,!1,null,null,null);T.options.__file="Home.vue";var _=T.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-alert",{staticClass:"elevation-12 text-uppercase",attrs:{value:e.alert.msg,type:e.alert.type,dismissible:"",transition:"scale-transition"}},[e._v(e._s(e.alert.msg))]),n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",[n("v-toolbar-title",[e._v("Login")]),n("v-spacer"),n("v-spacer"),n("v-tooltip",{attrs:{top:"","nudge-top":""}},[n("v-btn",{attrs:{slot:"activator",icon:""},on:{click:function(t){e.showHelp=!e.showHelp}},slot:"activator"},[n("v-icon",[e._v("help")])],1),n("span",[e._v("Help")])],1)],1),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.showHelp,expression:"showHelp"}],attrs:{dark:""}},[n("p",[e._v("1. Submit your email to receive a login token.")]),n("p",[e._v("2. Enter received token here to login.")])])],1),n("v-card-text",[n("v-form",{ref:"loginForm",on:{submit:function(t){return t.preventDefault(),e.submit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{name:"input",rules:e.inputRules,label:"Email or Token",required:"",autofocus:""},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{name:"submit",color:"primary",disabled:!e.valid||e.authenticating,loading:e.authenticating},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)},E=[],R=n("be94"),O=n("2f62"),j=n("63e0"),y={name:"login",data:function(){var e=this;return{valid:!1,input:"",inputRules:[function(e){return!!e||"required"},function(){return e.isEmail||e.isToken||""}],showHelp:!1}},computed:Object(R["a"])({},Object(O["c"])(["authenticating","authenticationStatus","authenticationError","authenticationErrorCode"]),{isEmail:function(){return this.validEmail(this.input)},isToken:function(){return this.validToken(this.input)},alert:function(){return{msg:this.authenticationError||this.authenticationStatus,type:this.authenticationError?"error":"info"}}}),methods:Object(R["a"])({},Object(O["b"])([j["g"],j["c"]]),{submit:function(){this.$refs.loginForm.validate()&&(this.isEmail&&this.AUTH_TOKEN_REQUEST(this.input),this.isToken&&this.AUTH_LOGIN_REQUEST(this.input),this.clearForm())},validEmail:function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)},validToken:function(e){return e&&8==e.length&&!/@/.test(e)},clearForm:function(){this.$refs.loginForm.reset()}}),created:function(){var e=this.$route.params.token;this.validToken(e)&&this.AUTH_LOGIN_REQUEST(e)},beforeDestroy:function(){this.clearForm()}},x=y,S=(n("7fa3"),n("0798")),C=n("8336"),U=n("b0af"),A=n("99d9"),V=n("0e8f"),H=n("4bd4"),I=n("132d"),P=n("a722"),L=n("0789"),q=n("9910"),N=n("2677"),D=n("71d9"),B=n("2a7f"),M=n("3a2f"),F=Object(l["a"])(x,w,E,!1,null,null,null);F.options.__file="Login.vue";var Q=F.exports;d()(F,{VAlert:S["a"],VBtn:C["a"],VCard:U["a"],VCardActions:A["a"],VCardText:A["b"],VContainer:p["a"],VFlex:V["a"],VForm:H["a"],VIcon:I["a"],VLayout:P["a"],VSlideYTransition:L["e"],VSpacer:q["a"],VTextField:N["a"],VToolbar:D["a"],VToolbarTitle:B["b"],VTooltip:M["a"]}),r["a"].use(a["a"]);var G=function(e,t,n){o["a"].getters.loggedIn?n(!1):n()},$=function(e,t,n){o["a"].getters["hasRole"]("admin")?n():n(!1)},W=new a["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_,meta:{public:!0}},{path:"/about",name:"about",meta:{public:!0},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login/:token",component:Q,meta:{public:!0}},{path:"/login",name:"login",component:Q,meta:{public:!0},beforeEnter:G},{path:"/account",name:"account",component:function(){return Promise.all([n.e("chunk-69f8d7c8"),n.e("account")]).then(n.bind(null,"77be"))}},{path:"/admin",beforeEnter:$,component:function(){return n.e("admin").then(n.bind(null,"3530"))},children:[{path:"accounts",component:function(){return Promise.all([n.e("chunk-69f8d7c8"),n.e("chunk-0c1a0121")]).then(n.bind(null,"8c88"))}}]}]});W.beforeEach(function(e,t,n){var r=e.matched.some(function(e){return e.meta.public}),a=o["a"].getters.loggedIn;if(!r&&!a)return n({path:"/login",query:{redirect:e.fullPath}});n()});t["a"]=W},4360:function(e,t,n){"use strict";var r,a,o,i=n("2b0e"),c=n("2f62"),s=n("ade3"),u=(n("96cf"),n("1da1")),l=(n("cadf"),n("551c"),n("097d"),n("7f7f"),n("d4ec")),f=n("99de"),d=n("7e84"),p=n("262e"),h=n("9072"),v=n("c5fa"),m=function(e){function t(e,n){var r;return Object(l["a"])(this,t),r=Object(f["a"])(this,Object(d["a"])(t).call(this,n)),r.name=r.constructor.name,r.message=n,r.errorCode=e,r}return Object(p["a"])(t,e),t}(Object(h["a"])(Error)),g={getProfile:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v["a"].get("/api/profile");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),new m(e.t0.response.status,e.t0.response.data.error);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()},b=n("63e0"),k={status:"",profile:{}},T={getProfile:function(e){return e.profile},isProfileLoaded:function(e){return!!e.profile}},_=Object(s["a"])({},b["j"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,console.log("dispatch USER REQUEST"),n(b["j"]),e.prev=3,e.next=6,g.getProfile();case 6:r=e.sent,n(b["k"],r),e.next=14;break;case 10:return e.prev=10,e.t0=e["catch"](3),e.t0 instanceof m&&n(b["i"],{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}()),w=(r={},Object(s["a"])(r,b["j"],function(e){console.log("USER REQUEST"),e.status="loading"}),Object(s["a"])(r,b["k"],function(e,t){console.log("USER_SUCCESS"),e.profile=t}),Object(s["a"])(r,b["i"],function(e,t){var n=t.errorCode,r=t.errorMessage;console.log("USER_ERROR"),e.errorCode=n,e.errorMessage=r}),r),E={state:k,getters:T,actions:_,mutations:w},R=(n("a481"),n("28a5"),n("673e"),n("6762"),n("2fdb"),n("f6ed")),O=function(e){function t(e,n){var r;return Object(l["a"])(this,t),r=Object(f["a"])(this,Object(d["a"])(t).call(this,n)),r.name=r.constructor.name,r.message=n,r.errorCode=e,r}return Object(p["a"])(t,e),t}(Object(h["a"])(Error)),j={requestEmailToken:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={method:"post",url:"auth/login",data:{grant_type:"email",email:t}},e.prev=1,e.next=4,v["a"].customRequest(n);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e["catch"](1),new O(e.t0.response.status,e.t0.response.data.error);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}(),requestJWT:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={method:"post",url:"auth/token",data:{grant_type:"token",token:t}},e.prev=1,e.next=4,v["a"].customRequest(n);case 4:return r=e.sent,R["a"].saveToken(r.data.access_token),R["a"].saveRefreshToken(r.data.refresh_token),v["a"].setHeader(),v["a"].mount401Interceptor(),e.abrupt("return",r.data);case 12:throw e.prev=12,e.t0=e["catch"](1),new O(e.t0.response.status,e.t0.response.data.error);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));function t(t){return e.apply(this,arguments)}return t}(),refreshToken:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={method:"post",url:"auth/refresh",data:{grant_type:"refresh"}},e.prev=1,v["a"].setRefreshHeader(),e.next=5,v["a"].customRequest(t);case 5:return n=e.sent,R["a"].saveToken(n.data.access_token),R["a"].saveRefreshToken(n.data.refresh_token),v["a"].setHeader(),e.abrupt("return",n.data);case 12:throw e.prev=12,e.t0=e["catch"](1),new O(e.t0.response.status,e.t0.response.data.error);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=6;break}return n={method:"post",url:"auth/logout",headers:{Authorization:"Bearer ".concat(R["a"].getRefreshToken())}},v["a"].setRefreshHeader(),e.next=6,v["a"].customRequest(n);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),new O(e.t0.response.status,e.t0.response.data.error);case 11:return e.prev=11,v["a"].unmount401Interceptor(),v["a"].removeHeader(),R["a"].removeToken(),R["a"].removeRefreshToken(),e.finish(11);case 17:case"end":return e.stop()}},e,this,[[0,8,11,17]])}));function t(t){return e.apply(this,arguments)}return t}(),getAccount:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v["a"].getAccount();case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),new O(e.t0.response.status,e.t0.response.data.error);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()},y=n("41cb"),x={authenticating:!1,accessToken:R["a"].getToken(),refreshToken:R["a"].getRefreshToken(),authenticationErrorCode:0,authenticationError:"",tokenRequestEmail:"",subject:"",roles:[]},S={loggedIn:function(e){return!!e.accessToken},subject:function(e){return e.subject},roles:function(e){return e.roles},hasRole:function(e){return function(t){return e.roles.includes(t)}},authenticationStatus:function(e){return e.tokenRequestEmail?"Token sent to "+e.tokenRequestEmail:""},authenticationErrorCode:function(e){return e.authenticationErrorCode},authenticationError:function(e){return e.authenticationError},authenticating:function(e){return e.authenticating},localTokenID:function(e){return V(e.refreshToken).id}},C=(a={},Object(s["a"])(a,b["b"],function(e){var t=e.commit,n=e.state,r=e.dispatch;console.log("AUTH_INIT"),n.accessToken&&n.refreshToken&&(I(n.accessToken)?I(n.refreshToken)?r(b["d"]):r(b["e"]):t(b["f"],{access_token:n.accessToken,refresh_token:n.refreshToken}))}),Object(s["a"])(a,b["g"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r(b["g"],n),e.prev=2,e.next=5,j.requestEmailToken(n);case 5:r(b["h"],n),e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),e.t0 instanceof O&&r(b["a"],{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(s["a"])(a,b["c"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r(b["c"]),e.prev=2,e.next=5,j.requestJWT(n);case 5:a=e.sent,r(b["f"],a),y["a"].push(y["a"].history.current.query.redirect||"/"),e.next=14;break;case 10:return e.prev=10,e.t0=e["catch"](2),e.t0 instanceof O&&r(b["a"],{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(s["a"])(a,b["d"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,console.log("dispatch AUTH_LOGOUT"),e.prev=2,e.next=5,j.logout(!I(R["a"].getRefreshToken()));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),e.t0;case 10:return e.prev=10,n(b["d"]),y["a"].push("/"),e.finish(10);case 14:case"end":return e.stop()}},e,this,[[2,7,10,14]])}));return function(t){return e.apply(this,arguments)}}()),Object(s["a"])(a,b["e"],function(e){var t=e.commit,n=e.state;if(console.log("dispatch AUTH_REFRESH"),!n.refreshTokenPromise){var r=j.refreshToken();t("refreshTokenPromise",r),r.then(function(e){t("refreshTokenPromise",null),t(b["f"],e)},function(e){t("refreshTokenPromise",null),t(b["a"],{errorCode:e.errorCode,errorMessage:e.message})})}return n.refreshTokenPromise}),a),U=(o={},Object(s["a"])(o,b["g"],function(e){console.log("AUTH_TOKEN_REQUEST"),e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=0,e.tokenRequestEmail=""}),Object(s["a"])(o,b["h"],function(e,t){console.log("AUTH_TOKEN_REQUEST_SUCCESS"),e.authenticating=!1,e.authenticationError="",e.authenticationErrorCode=0,e.tokenRequestEmail=t}),Object(s["a"])(o,b["c"],function(e){console.log("AUTH_LOGIN_REQUEST"),e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=0,e.tokenRequestEmail=""}),Object(s["a"])(o,b["f"],function(e,t){var n=t.access_token,r=t.refresh_token;console.log("AUTH_SUCCESS"),e.accessToken=n,e.refreshToken=r,e.authenticating=!1,e.authenticationError="";var a=V(n);e.subject=a.sub,e.roles=a.roles}),Object(s["a"])(o,b["a"],function(e,t){var n=t.errorCode,r=t.errorMessage;console.log("AUTH_ERROR"),e.authenticating=!1,e.authenticationErrorCode=n,e.authenticationError=r}),Object(s["a"])(o,b["d"],function(e){console.log("AUTH_LOGOUT"),e.accessToken="",e.refreshToken="",e.subject="",e.roles=[]}),Object(s["a"])(o,"refreshTokenPromise",function(e,t){e.refreshTokenPromise=t}),o),A={namespaced:!1,state:x,getters:S,actions:C,mutations:U},V=function(e){if(!e)return{};var t=e.split("."),n=t[1].replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break}return JSON.parse(decodeURIComponent(atob(n)))},H=function(e){var t=V(e);if("undefined"===typeof t.exp)return null;var n=new Date(0);return n.setUTCSeconds(t.exp),n},I=function(e){var t=H(e);if(null===t)return!0;var n=new Date;return t.valueOf()<=n.valueOf()};i["a"].use(c["a"]);t["a"]=new c["a"].Store({modules:{user:E,auth:A},state:{},mutations:{},actions:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{theme:{primary:"#13232B",secondary:"#567280",accent:"#B0BEC5",error:"#D6473A",info:"#7799B8",success:"#4CAF50",warning:"#E57436"},customProperties:!0,iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{fixed:"",right:"",clipped:"",app:""},model:{value:e.drawerRight,callback:function(t){e.drawerRight=t},expression:"drawerRight"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.right=!e.right}}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Open Temporary Drawer")])],1)],1)],1)],1),n("v-toolbar",{attrs:{dense:"",color:"primary",dark:"",fixed:"",app:""}},[e.loggedIn?n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}):e._e(),n("v-toolbar-title",[n("router-link",{attrs:{to:"/"}},[n("v-btn",{attrs:{flat:""}},[e._v("Toolbar")])],1)],1),n("v-spacer"),n("v-toolbar-items",[n("AuthMenu")],1),e.loggedIn?n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawerRight=!e.drawerRight}}}):e._e()],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.left=!e.left}}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Open Temporary Drawer")])],1)],1)],1),e.hasRole("admin")?n("v-list",{staticClass:"subheader"},[n("v-divider"),n("v-subheader",[e._v("Admin Panel")]),n("v-list-tile",{attrs:{to:"/admin/accounts"}},[n("v-list-tile-action",[n("v-icon",[e._v("security")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Accounts")])],1)],1)],1):e._e()],1),n("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e.left,callback:function(t){e.left=t},expression:"left"}}),n("v-content",[n("router-view")],1),n("v-navigation-drawer",{attrs:{right:"",temporary:"",fixed:""},model:{value:e.right,callback:function(t){e.right=t},expression:"right"}}),n("v-footer",{staticClass:"white--text",attrs:{color:"grey",app:""}},[n("span",[e._v("Vuetify")]),n("v-spacer"),n("span",[e._v("© 2017")])],1)],1)},i=[],c=n("be94"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loggedIn?n("v-menu",{attrs:{dark:"",left:""}},[n("v-btn",{attrs:{slot:"activator",name:"menuAccount",flat:""},slot:"activator"},[n("v-icon",[e._v("account_box")]),n("v-icon",[e._v("more_vert")])],1),n("v-list",[n("v-list-tile",[e._v(e._s(e.subject))]),n("v-divider"),n("v-list-tile",[n("v-btn",{staticClass:"warning",attrs:{name:"logout",block:""},on:{click:e.logout}},[n("v-icon",{attrs:{left:""}},[e._v("logout")]),e._v("Logout\n      ")],1)],1),n("v-divider"),n("v-list-tile",[n("v-btn",{attrs:{name:"account",to:"/account",block:"",light:""}},[n("v-icon",{attrs:{left:""}},[e._v("account_box")]),e._v("Account\n      ")],1)],1)],1)],1):n("v-btn",{attrs:{slot:"activator",name:"login",to:"/login",flat:""},slot:"activator"},[e._v("Login")])},u=[],l=n("2f62"),f=n("63e0"),d={name:"AuthMenu",computed:Object(c["a"])({},Object(l["c"])(["loggedIn","subject"])),methods:Object(c["a"])({},Object(l["b"])({logout:f["d"]}))},p=d,h=(n("0a99"),n("2877")),v=n("6544"),m=n.n(v),g=n("8336"),b=n("ce7e"),k=n("132d"),T=n("8860"),_=n("ba95"),w=n("e449"),E=Object(h["a"])(p,s,u,!1,null,null,null);E.options.__file="AuthMenu.vue";var R=E.exports;m()(E,{VBtn:g["a"],VDivider:b["a"],VIcon:k["a"],VList:T["a"],VListTile:_["a"],VMenu:w["a"]});var O={components:{AuthMenu:R},props:{source:String},data:function(){return{drawer:!1,drawerRight:!1,right:!1,left:!1}},computed:Object(c["a"])({},Object(l["c"])(["loggedIn","subject","hasRole"]))},j=O,y=n("7496"),x=n("549c"),S=n("553a"),C=n("40fe"),U=n("5d23"),A=n("f774"),V=n("9910"),H=n("e0c7"),I=n("71d9"),P=n("2a7f"),L=n("706c"),q=Object(h["a"])(j,o,i,!1,null,null,null);q.options.__file="App.vue";var N=q.exports;m()(q,{VApp:y["a"],VBtn:g["a"],VContent:x["a"],VDivider:b["a"],VFooter:S["a"],VIcon:k["a"],VList:T["a"],VListTile:_["a"],VListTileAction:C["a"],VListTileContent:U["a"],VListTileTitle:U["b"],VNavigationDrawer:A["a"],VSpacer:V["a"],VSubheader:H["a"],VToolbar:I["a"],VToolbarItems:P["a"],VToolbarSideIcon:L["a"],VToolbarTitle:P["b"]});var D=n("41cb"),B=n("4360"),M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=n("c5fa"),Q=n("f6ed");r["a"].config.productionTip=!1,F["a"].init("http://localhost:3000/"),Q["a"].getToken()&&(F["a"].setHeader(),F["a"].mount401Interceptor()),r["a"].filter("formatDate",function(e){var t=new Date(e);return t.toLocaleDateString("en",{year:"numeric",month:"short",day:"2-digit"})}),new r["a"]({router:D["a"],store:B["a"],render:function(e){return e(N)}}).$mount("#app")},"63e0":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"h",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"j",function(){return f}),n.d(t,"k",function(){return d}),n.d(t,"i",function(){return p});n("cadf"),n("551c"),n("097d");var r="AUTH_INIT",a="AUTH_TOKEN_REQUEST",o="AUTH_TOKEN_REQUEST_SUCCESS",i="AUTH_LOGIN_REQUEST",c="AUTH_REFRESH_REQUEST",s="AUTH_SUCCESS",u="AUTH_ERROR",l="AUTH_LOGOUT",f="USER_REQUEST",d="USER_SUCCESS",p="USER_ERROR"},"7fa3":function(e,t,n){"use strict";var r=n("f8b5"),a=n.n(r);a.a},c317:function(e,t,n){},c5fa:function(e,t,n){"use strict";n("6762"),n("2fdb"),n("96cf");var r=n("1da1"),a=(n("cadf"),n("551c"),n("097d"),n("bc3a")),o=n.n(a),i=n("f6ed"),c=n("4360"),s=n("63e0"),u={init:function(e){o.a.defaults.baseURL=e,o.a.defaults.headers.common={Accept:"application/json","Content-Type":"application/json"},c["a"].dispatch(s["b"])},setHeader:function(){o.a.defaults.headers.common["Authorization"]="Bearer ".concat(i["a"].getToken())},setRefreshHeader:function(){o.a.defaults.headers.common["Authorization"]="Bearer ".concat(i["a"].getRefreshToken())},removeHeader:function(){o.a.defaults.headers.common={}},get:function(e,t){return o.a.get(e,{params:t})},post:function(e,t){return o.a.post(e,t)},put:function(e,t){return o.a.put(e,t)},delete:function(e){return o.a.delete(e)},customRequest:function(e){return o()(e)},_401interceptor:null,mount401Interceptor:function(){var e=this;this._401interceptor=o.a.interceptors.response.use(function(e){return e},function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(401!=n.request.status){t.next=15;break}if(!n.config.url.includes("/auth/refresh")&&!n.config.url.includes("/auth/logout")){t.next=6;break}throw c["a"].dispatch(s["d"],!1),n;case 6:return t.prev=6,t.next=9,c["a"].dispatch(s["e"]);case 9:return t.abrupt("return",e.customRequest({method:n.config.method,url:n.config.url,data:n.config.data}));case 12:throw t.prev=12,t.t0=t["catch"](6),n;case 15:throw n;case 16:case"end":return t.stop()}},t,this,[[6,12]])}));return function(e){return t.apply(this,arguments)}}())},unmount401Interceptor:function(){o.a.interceptors.response.eject(this._401interceptor)}};t["a"]=u},f6ed:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r="access_token",a="refresh_token",o={getToken:function(){return localStorage.getItem(r)},saveToken:function(e){localStorage.setItem(r,e)},removeToken:function(){localStorage.removeItem(r)},getRefreshToken:function(){return localStorage.getItem(a)},saveRefreshToken:function(e){localStorage.setItem(a,e)},removeRefreshToken:function(){localStorage.removeItem(a)}}},f8b5:function(e,t,n){}});
//# sourceMappingURL=app.b8ce89ef.js.map