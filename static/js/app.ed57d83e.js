(function(e){function n(n){for(var r,c,u=n[0],i=n[1],f=n[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-389075d9":"73fd941b","chunk-7bf1e2cb":"9cc48df1","chunk-82ea6ca8":"2ccb6b94","chunk-a623e6e2":"a552b935","chunk-2d0e44a1":"5f89046f","chunk-7a07c5da":"e5b726ca","chunk-7e81a696":"67f75a57","chunk-d2f8228c":"2b3aa8da"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-7bf1e2cb":1,"chunk-82ea6ca8":1,"chunk-7a07c5da":1,"chunk-7e81a696":1,"chunk-d2f8228c":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-389075d9":"31d6cfe0","chunk-7bf1e2cb":"1234931b","chunk-82ea6ca8":"d7da4929","chunk-a623e6e2":"31d6cfe0","chunk-2d0e44a1":"31d6cfe0","chunk-7a07c5da":"a347f6ef","chunk-7e81a696":"a6e0d7a1","chunk-d2f8228c":"594e0c56"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var f=o[u],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){f=l[u],d=f.getAttribute("data-href");if(d===r||d===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],s.parentNode.removeChild(s),t(o)},s.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var s=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"06de":function(e,n,t){},1:function(e,n){},10:function(e,n){},11:function(e,n){},12:function(e,n){},13:function(e,n){},14:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},4360:function(e,n,t){"use strict";var r=t("5502");n["a"]=Object(r["a"])({state:{accounts:[],provider:null,currentBalance:""},mutations:{updateAccount:function(e,n){e.accounts=n},updateProvider:function(e,n){e.provider=n},updateCurrentBalance:function(e,n){e.currentBalance=n}},actions:{},modules:{}})},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c={class:"app-content"};function a(e,n,t,a,o,u){var i=Object(r["E"])("router-view");return Object(r["x"])(),Object(r["f"])("div",c,[Object(r["i"])(i)])}var o=t("ee10"),u={name:"App",setup:function(){o["a"].initWeb3()}};t("9031");u.render=a;var i=u,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),d=[{path:"/",name:"Index",component:function(){return Promise.all([t.e("chunk-389075d9"),t.e("chunk-a623e6e2"),t.e("chunk-2d0e44a1"),t.e("chunk-7a07c5da")]).then(t.bind(null,"37f9"))},meta:{title:"首页"}},{path:"/list",name:"List",component:function(){return Promise.all([t.e("chunk-389075d9"),t.e("chunk-a623e6e2"),t.e("chunk-d2f8228c")]).then(t.bind(null,"f736"))},meta:{title:"期权委托记录"}},{path:"/list/pool",name:"ListPool",component:function(){return Promise.all([t.e("chunk-389075d9"),t.e("chunk-a623e6e2"),t.e("chunk-2d0e44a1"),t.e("chunk-7e81a696")]).then(t.bind(null,"076b"))},meta:{title:"矿池分红记录"}},{path:"/list/frozenpool",name:"FrozenPool",component:function(){return Promise.all([t.e("chunk-389075d9"),t.e("chunk-82ea6ca8")]).then(t.bind(null,"6203"))},meta:{title:"领取记录"}},{path:"/list/freeze",name:"ListFreeze",component:function(){return Promise.all([t.e("chunk-389075d9"),t.e("chunk-7bf1e2cb")]).then(t.bind(null,"6f0a"))},meta:{title:"冻结记录"}}],l=Object(f["a"])({history:Object(f["b"])(),routes:d});l.beforeEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var s=l,h=t("b970"),p=t("4360"),b=(t("157a"),function(){s.go(-1)}),m=Object(r["e"])(i);m.config.globalProperties.$goBack=b,m.use(s).use(p["a"]).use(h["a"]).mount("#app")},6:function(e,n){},7:function(e,n){},8:function(e,n){},9:function(e,n){},9031:function(e,n,t){"use strict";t("06de")},ee10:function(e,n,t){"use strict";var r=t("1da1"),c=(t("96cf"),t("d3b7"),t("99e5")),a=t.n(c),o=t("4360"),u={web3:{},factoryContract:{},web3Provider:{},getBlance:function(e){u.web3.eth.getBalance(e).then((function(e){o["a"].commit("updateCurrentBalance",u.web3.utils.fromWei(e,"ether"))}))},initWeb3:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return u.web3Provider=window.ethereum,window.ethereum.on("accountsChanged",(function(e){o["a"].commit("updateAccount",e)})),u.web3=new a.a(u.web3Provider),e.prev=4,e.next=7,window.ethereum.enable();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](4),Promise.reject(e.t0);case 12:e.next=15;break;case 14:window.web3?(u.web3Provider=window.web3.currentProvider,u.web3=new a.a(u.web3Provider)):(u.web3Provider=new a.a.providers.HttpProvider("http://okexchaintest.okexcn.com:26659"),u.web3=new a.a(u.web3Provider));case 15:o["a"].commit("updateProvider",u.web3),u.web3.eth.getAccounts().then((function(e){return o["a"].commit("updateAccount",e),u.getBlance(e[0])}));case 17:case"end":return e.stop()}}),e,null,[[4,9]])})));function n(){return e.apply(this,arguments)}return n}()};n["a"]=u}});
//# sourceMappingURL=app.ed57d83e.js.map