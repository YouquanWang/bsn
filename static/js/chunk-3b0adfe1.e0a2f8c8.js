(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b0adfe1"],{"076b":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["N"])("data-v-09b86ba6");Object(c["A"])("data-v-09b86ba6");var r={class:"container bg-container"},i={class:"list"},s={class:"item flex-middle"},o={class:"flex-item"},d={class:"flex row"},u=Object(c["i"])("div",{class:"label"},"结算周期：",-1),b={class:"flex-item cont"},l={class:"flex row"},f=Object(c["i"])("div",{class:"label"},"结算数量：",-1),v={class:"flex-item cont"};Object(c["y"])();var j=a((function(e,t,n,a,j,O){var w=Object(c["E"])("van-nav-bar");return Object(c["x"])(),Object(c["f"])("div",r,[Object(c["i"])(w,{"left-arrow":"",title:"矿池分红记录",onClickLeft:e.$goBack},null,8,["onClickLeft"]),Object(c["i"])("div",i,[Object(c["i"])("div",s,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(e.records,(function(e){return Object(c["x"])(),Object(c["f"])("div",o,[Object(c["i"])("div",d,[u,Object(c["i"])("div",b,Object(c["H"])(e.dayNum),1)]),Object(c["i"])("div",l,[f,Object(c["i"])("div",v,Object(c["H"])(e.canReceive)+" Wind Token",1)])])})),256))])])])})),O=n("5530"),w=n("1da1"),p=(n("96cf"),n("159b"),n("b680"),n("d9d1")),k=n("722f"),m=n("01ea"),x=n("5502"),C=n("901e"),h=n.n(C),B={setup:function(){var e=Object(x["b"])(),t=Object(c["B"])({records:[],address:Object(c["d"])((function(){return e.state.accounts[0]})),web3:Object(c["d"])((function(){return e.state.provider})),BsnContract:null,windTokenContract:null,initContract:function(){t.BsnContract=new t.web3.eth.Contract(p,m["a"].BsnAddress),t.windTokenContract=new t.web3.eth.Contract(k,m["a"].windToken),t.initData()},initData:function(){t.getList()},getList:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var n,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.windTokenContract.methods.decimals().call();case 2:return n=e.sent,e.next=5,t.BsnContract.getPastEvents("ReceiveDividends",{filter:{_user:[t.address]},fromBlock:0,toBlock:"latest"});case 5:c=e.sent,a=[],c.forEach((function(e){console.log(e);var t={user:e.returnValues._user,dayNum:e.returnValues._dayNum,canReceive:new h.a(e.returnValues._canReceive).dividedBy(Math.pow(10,n)).toFixed(3)};a.push(t)})),t.records=a;case 9:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()});t.address&&t.initContract(),Object(c["L"])((function(){return t.address}),(function(e){e&&t.initContract()}));var n=Object(c["I"])(t);return Object(O["a"])({},n)}};n("09df");B.render=j,B.__scopeId="data-v-09b86ba6";t["default"]=B},"09df":function(e,t,n){"use strict";n("e313")},e313:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3b0adfe1.e0a2f8c8.js.map