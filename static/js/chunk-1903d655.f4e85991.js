(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1903d655"],{"076b":function(e,t,n){"use strict";n.r(t);n("a9e3");var a=n("7a23"),c=Object(a["O"])("data-v-682ba7a6");Object(a["B"])("data-v-682ba7a6");var r={class:"container bg-container"},s={class:"list"},i={class:"item flex-middle"},o={class:"flex-item"},d={class:"flex row"},u=Object(a["j"])("div",{class:"label"},"结算周期：",-1),l={class:"flex-item cont"},b={class:"flex row"},f=Object(a["j"])("div",{class:"label"},"分红数量：",-1),j={class:"flex-item cont"},v={key:1,class:"num c-2FBBA1"};Object(a["z"])();var O=c((function(e,t,n,c,O,w){var m=Object(a["F"])("van-nav-bar");return Object(a["y"])(),Object(a["f"])("div",r,[Object(a["j"])(m,{"left-arrow":"",title:"矿池分红记录",onClickLeft:e.$goBack},null,8,["onClickLeft"]),Object(a["j"])("div",s,[(Object(a["y"])(!0),Object(a["f"])(a["a"],null,Object(a["E"])(e.records,(function(t){return Object(a["y"])(),Object(a["f"])("div",i,[Object(a["j"])("div",o,[Object(a["j"])("div",d,[u,Object(a["j"])("div",l,Object(a["I"])(t.dayNum),1)]),Object(a["j"])("div",b,[f,Object(a["j"])("div",j,Object(a["I"])(t.amount)+" Wind Token",1)])]),!t.isGive&&Number(t.amount)?(Object(a["y"])(),Object(a["f"])("div",{key:0,class:"btn",onClick:function(n){return e.getDividends(t.dayNum)}},"领取",8,["onClick"])):(Object(a["y"])(),Object(a["f"])("div",v,"已领取"))])})),256))])])})),w=n("5530"),m=n("1da1"),C=(n("96cf"),n("b680"),n("d9d1")),h=n("722f"),p=n("01ea"),k=n("5502"),B=n("901e"),x=n.n(B),g=n("fb9e"),y={setup:function(){var e=Object(k["b"])(),t=Object(a["C"])({records:[],address:Object(a["d"])((function(){return e.state.accounts[0]})),web3:Object(a["d"])((function(){return e.state.provider})),BsnContract:null,BusdContract:null,freezeContract:null,windTokenContract:null,BsnDataContract:null,initContract:function(){t.BsnContract=new t.web3.eth.Contract(C,p["a"].BsnAddress),t.BusdContract=new t.web3.eth.Contract(h,p["a"].BusdAddress),t.BsnDataContract=new t.web3.eth.Contract(g,p["a"].BsnDataAddress),t.windTokenContract=new t.web3.eth.Contract(h,p["a"].windToken),t.initData()},initData:function(){t.getList()},getList:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a,c,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,t.BsnDataContract.methods.getCurDayNum().call();case 3:return a=e.sent,e.next=6,t.windTokenContract.methods.decimals().call();case 6:c=e.sent,r=1;case 8:if(!(r<a)){e.next=20;break}return e.next=11,t.BsnContract.methods.getDividends(r).call({from:t.address});case 11:return s=e.sent,e.next=14,t.BsnDataContract.methods.isDividend(t.address,r).call({from:t.address});case 14:i=e.sent,o={amount:new x.a(s).dividedBy(Math.pow(10,c)).toFixed(3),isGive:i,dayNum:r},n.push(o);case 17:r++,e.next=8;break;case 20:t.records=n,console.log(n);case 22:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getDividends:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getGasPrice();case 2:return a=e.sent,e.next=5,t.BsnContract.methods.receiveDividends(n).send({from:t.address,gasPrice:a});case 5:t.getList();case 6:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});t.address&&t.initContract(),Object(a["M"])((function(){return t.address}),(function(e){e&&t.initContract()}));var n=Object(a["J"])(t);return Object(w["a"])({},n)}};n("8d1a");y.render=O,y.__scopeId="data-v-682ba7a6";t["default"]=y},"2e3c":function(e,t,n){},"8d1a":function(e,t,n){"use strict";n("2e3c")}}]);
//# sourceMappingURL=chunk-1903d655.f4e85991.js.map