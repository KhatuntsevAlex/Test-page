(window["webpackJsonptest-page"]=window["webpackJsonptest-page"]||[]).push([[0],{105:function(e,t,a){e.exports={wrapper:"OrdersBar_wrapper__3_MyC",ordersBarGroup:"OrdersBar_ordersBarGroup__12TdD"}},109:function(e,t,a){e.exports={App:"App_App__3BU9_",else:"App_else__2J8Nd",settings:"App_settings__2uoda"}},110:function(e,t,a){e.exports={percentage:"TotalStatistics_percentage__1tVLh",details:"TotalStatistics_details__1yOcv",total:"TotalStatistics_total__3s_Vn"}},111:function(e,t,a){e.exports={wrapper:"OrdersInfoCard_wrapper__3iaIK",graph:"OrdersInfoCard_graph__r4Y3y",buttonsGroup:"OrdersInfoCard_buttonsGroup__1B_Qk"}},112:function(e,t,a){e.exports={wrapper:"TransactionsContainer_wrapper__29XSB",tableWrapper:"TransactionsContainer_tableWrapper__3uU-z",loading:"TransactionsContainer_loading__2jRLg"}},117:function(e,t,a){e.exports={wrapper:"StyledSpan_wrapper__3FqUt",initial:"StyledSpan_initial__3wgW4"}},131:function(e,t,a){e.exports={topCardGroup:"TotalInfoCard_topCardGroup__2J4rC"}},132:function(e,t,a){e.exports={cardHeader:"CardHeader_cardHeader__3xFcI"}},133:function(e,t,a){e.exports={cardContent:"CardContent_cardContent__1xDOt"}},135:function(e,t,a){e.exports={card:"Card_card__jU5gq"}},136:function(e,t,a){e.exports={progress:"Progress_progress__18QNN"}},137:function(e,t,a){e.exports={wrapper:"IconGroup_wrapper__zUyP2",message:"IconGroup_message__1llpi"}},138:function(e,t,a){e.exports={wrapper:"StyledTable_wrapper__2qLGM"}},139:function(e,t,a){e.exports={wrapper:"UserProject_wrapper__3KhTX"}},152:function(e,t,a){e.exports=a(180)},157:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(87),c=a.n(o),l=(a(157),a(108)),s=a(69),i=a(128),m=a(114),u=a.n(m),p=a(129),d=a(104),g=a(130).create({baseURL:"./"}),E={getItems:function(){return g.get("transactions.json")}};function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={isReady:!1,items:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return v({},e,{items:t.items,isReady:!0});case"SET_IS_READY":return v({},e,{isReady:t.isReady});default:return e}},w=function(e){return{type:"SET_IS_READY",isReady:e}},b=Object(s.c)({transactions:_}),y=Object(s.d)(b,Object(s.a)(i.a)),O=a(109),x=a.n(O),N=a(52),j=a(131),D=a.n(j),k=a(132),I=a.n(k),S=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:"".concat(I.a.cardHeader," spaceBetween")},r.a.createElement("span",null,t),a)},T=a(133),C=a.n(T),P=function(e){var t=e.children,a=e.flex;return r.a.createElement("div",{className:"".concat(C.a.cardContent," ").concat(a)},t)},A=a(134),L=a(110),B=a.n(L),M=function(e){var t=e.total,a=e.name,n=e.color,o=e.percentage,c=e.icon;Object(A.a)(e,["total","name","color","percentage","icon"]);return r.a.createElement("div",null,r.a.createElement("span",{className:B.a.total},t),r.a.createElement("div",{className:"".concat(B.a.percentage," spaceBetween")},a&&r.a.createElement("span",null,a),r.a.createElement("span",{className:"".concat(n," ").concat(B.a.details)},a&&t?"".concat(o,"% ").concat(c):"".concat(c," ").concat(o,"%"))))},G=a(135),U=a.n(G),W=function(e){var t=e.children;return r.a.createElement("div",{className:U.a.card},t)},R=a(117),J=a.n(R),Y=function(e){var t=e.children,a=e.color,n=e.cursor;return r.a.createElement("span",{className:"".concat(a||J.a.initial," ").concat(n&&n," ").concat(J.a.wrapper," noWrap")},t)},F=function(e){var t=e.name,a=e.period,n=e.total,o=e.totalName,c=e.percentage,l=e.icon,s=e.color;return r.a.createElement("div",{className:D.a.wrapper,"data-area":""},r.a.createElement(W,null,r.a.createElement(S,{title:t},r.a.createElement(Y,{color:s},a)),r.a.createElement(P,null,r.a.createElement(M,{total:n,name:o,color:s,percentage:c,icon:l}))))};var H=function(){var e={thunder:"\u26a1",up:"\u2191",down:"\u2193",close:"\u2715",settings:"\u2699",collapse:"\u2227",expand:"\u2228",envelope:"\u2709",clock:"\ud83d\udd58"},t=e.thunder,a=e.up,o=e.down,c=Object(n.useState)([{name:"Income",period:"Monthly",total:"40 886,200",totalName:"Total incoms",percentage:98,icon:t,color:"blue"},{name:"Orders",period:"Annual",total:"275,800",totalName:"New orders",percentage:20,icon:a,color:"olive"},{name:"Visits",period:"Today",total:"106,120",totalName:"New visits",percentage:44,icon:a,color:"green"},{name:"User activity",period:"Low value",total:"80,600",totalName:"In first month",percentage:38,icon:o,color:"red"}]),l=Object(N.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,l.map((function(e){return r.a.createElement(F,e)})))},V=a(111),q=a.n(V),z=a(105),Q=a.n(z),K=a(136),X=a.n(K),$=function(e){var t=e.color,a=e.value;return r.a.createElement("progress",{className:"".concat(X.a.progress," ").concat(t),max:"100",value:a})},Z=function(e){var t=e.name,a=e.total,n=e.percentage,o=e.icon,c=e.color;return r.a.createElement("div",{className:Q.a.wrapper},r.a.createElement(M,{total:a,name:t,color:c,percentage:n,icon:o}),r.a.createElement($,{color:c,value:n}))},ee=function(){var e={thunder:"\u26a1",up:"\u2191",down:"\u2193",close:"\u2715",settings:"\u2699",collapse:"\u2227",expand:"\u2228",envelope:"\u2709",clock:"\ud83d\udd58"},t=e.thunder,a=e.up,o=e.down,c=Object(n.useState)([{name:"Total orders in period",total:"2,346",percentage:48,icon:a,color:"green"},{name:"Orders in a last month",total:"4,422",percentage:60,icon:o,color:"green"},{name:"Monthly income from orders",total:"9,180",percentage:22,icon:t,color:"green"}]),l=Object(N.a)(c,1)[0];return r.a.createElement("div",{className:Q.a.ordersBarGroup},l.map((function(e){return r.a.createElement(Z,e)})))},te=function(){return r.a.createElement("div",{className:q.a.wrapper},r.a.createElement(W,null,r.a.createElement(S,{title:"Orders"},r.a.createElement("div",{className:q.a.buttonsGroup},r.a.createElement("button",null,"Today"),r.a.createElement("button",null,"Monthly"),r.a.createElement("button",null,"Annual"))),r.a.createElement(P,{flex:"spaceBetween"},r.a.createElement("span",{className:"graph ".concat(q.a.graph)}),r.a.createElement(ee,null))))},ae=a(82),ne=a.n(ae),re=function(e){var t=e.author,a=e.visitDate,n=e.text,o=e.messageDate,c=e.color;return r.a.createElement("div",{className:ne.a.message},r.a.createElement("div",{className:"spaceBetween"},r.a.createElement("span",{className:"noWrap"},t),r.a.createElement("span",{className:"".concat(c," no-background-color noWrap")},a)),r.a.createElement("p",null,r.a.createElement("span",null,n)),r.a.createElement("p",null,r.a.createElement("span",{className:"noWrap"},o)))},oe=a(137),ce=a.n(oe),le=function(){var e={thunder:"\u26a1",up:"\u2191",down:"\u2193",close:"\u2715",settings:"\u2699",collapse:"\u2227",expand:"\u2228",envelope:"\u2709",clock:"\ud83d\udd58"},t=e.close,a=e.settings,n=e.collapse;return r.a.createElement("div",{className:ce.a.wrapper},r.a.createElement("span",null,n),r.a.createElement("span",null,a),r.a.createElement("span",null,t))},se=function(){var e=Object(n.useState)([{author:"Monica Smith",visitDate:"1m ago",text:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",messageDate:"Today 5:60 pm - 12.06.2014",color:"green"},{author:"John Angel",visitDate:"2m ago",text:"There are many variations of passages of Lorem Ipsum available",messageDate:"Today 2:23 pm - 11.06.2014"},{author:"Jesica Ocean",visitDate:"5m ago",text:"Contrary to popular belief, Lorem Ipsum",messageDate:"Today 1:00 pm - 08.06.2014"},{author:"Monica Jackson",visitDate:"5m ago",text:"The jenerated Lorem Ipsum is therefore",messageDate:"Yesterday 8:48 pm - 10.06.2014"},{author:"Anna Legend",visitDate:"5m ago",text:"All the Lorem Ipsum generators on the Internet tend to repeat",messageDate:"Yesterday 8:48 pm - 10.06.2014"},{author:"Damian Nowak",visitDate:"5m ago",text:"The standard chunk of Lorem Ipsum used",messageDate:"Yesterday 8:48 pm - 10.06.2014"},{author:"Gary Smith",visitDate:"5m ago",text:"200 Latin words combined a handful",messageDate:"Yesterday 8:48 pm - 10.06.2014"}]),t=Object(N.a)(e,1)[0];return r.a.createElement("div",{className:ne.a.wrapper},r.a.createElement(W,null,r.a.createElement(S,{title:"Messages"},r.a.createElement(le,null)),r.a.createElement("div",{className:ne.a.messagesInfo},r.a.createElement("span",null,"New messages"),r.a.createElement("span",null,"You have 22 new messages and 16 waiting in draft folder")),r.a.createElement(P,null,r.a.createElement("div",{className:ne.a.messages},t.map((function(e){return r.a.createElement(re,e)}))))))},ie=a(138),me=a.n(ie),ue=function(e){var t=e.children,a=e.headers;return r.a.createElement("table",{className:me.a.wrapper},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){return r.a.createElement("th",null,e)})))),t)},pe=function(e){var t=e.status,a=e.date,n=e.user,o=e.value,c=e.icon,l=e.clock;return r.a.createElement("tr",null,r.a.createElement("td",null,"Pending..."!==t?r.a.createElement(Y,{color:"Completed"===t?"green":"orange",cursor:"cursorUnset"},t):r.a.createElement(Y,{cursor:"cursorUnset"},t)),r.a.createElement("td",{className:"noWrap"},"".concat(l," ").concat(a)),r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(M,{color:"green",percentage:o,icon:c})))},de=a(139),ge=a.n(de),Ee=function(){var e={thunder:"\u26a1",up:"\u2191",down:"\u2193",close:"\u2715",settings:"\u2699",collapse:"\u2227",expand:"\u2228",envelope:"\u2709",clock:"\ud83d\udd58"},t=e.up,a=e.clock,o=Object(n.useState)([{status:"Pending...",date:"11:20pm",user:"Samantha",value:24,icon:t},{status:"Canceled",date:"10:40am",user:"Monica",value:66,icon:t},{status:"Pending...",date:"01:30pm",user:"John",value:54,icon:t},{status:"Pending...",date:"02:20pm",user:"Agnes",value:12,icon:t},{status:"Completed",date:"04:10am",user:"Amelia",value:66,icon:t},{status:"Pending...",date:"12:08am",user:"Damlan",value:23,icon:t}]),c=Object(N.a)(o,1)[0];return r.a.createElement("div",{className:ge.a.wrapper},r.a.createElement(W,null,r.a.createElement(S,{title:"User project list"},r.a.createElement(le,null)),r.a.createElement(P,null,r.a.createElement(ue,{headers:["Status","Data","User","Value"]},r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement(pe,Object.assign({},e,{clock:a}))})))))))},fe=a(86),ve=a.n(fe),he=function(e){var t=e.id,a=e.todo,n=e.expires,o={thunder:"\u26a1",up:"\u2191",down:"\u2193",close:"\u2715",settings:"\u2699",collapse:"\u2227",expand:"\u2228",envelope:"\u2709",clock:"\ud83d\udd58"}.clock;return r.a.createElement("div",{className:"".concat(ve.a.todo," bgGrey ")},r.a.createElement("input",{type:"checkbox",className:ve.a.checkbox,id:"checkbox".concat(t)}),r.a.createElement("label",{for:"checkbox".concat(t)},a),n&&r.a.createElement(Y,{color:"green",cursor:"cursorUnset"},"".concat(o,"   ").concat(n)))},_e=function(){var e=Object(n.useState)([{id:1,todo:"Buy a milk"},{id:2,todo:"Go to shop and find some products"},{id:3,todo:"Send documents to Mike",expires:"1 mins"},{id:4,todo:"Go to the doctor dr Smith"},{id:5,todo:"Plan vacation"},{id:6,todo:"Create new staff"},{id:7,todo:"Call to Anna for Dinner"}]),t=Object(N.a)(e,1)[0];return r.a.createElement("div",{className:ve.a.wrapper},r.a.createElement(W,null,r.a.createElement(S,{title:"Small toto list"},r.a.createElement(le,null)),r.a.createElement(P,null,t.map((function(e){return r.a.createElement(he,e)})))))},we=function(e){var t=e.num,a=e.transaction,n=e.date,o=e.amount;return r.a.createElement("tr",null,r.a.createElement("td",null," ",t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(Y,{color:"$125,00"===o?"orange":"green",cursor:"cursorUnset"},o)))},be=function(e){var t=e.transactions;return r.a.createElement(ue,{headers:["No.","Transaction","Date","Amount"]},r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(we,e)}))))},ye=a(112),Oe=a.n(ye),xe=a(140),Ne=a(141),je=a(146),De=a(142),ke=a(147),Ie=a(72),Se=a(71),Te=a(145),Ce=a(148),Pe=a(149);function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}Ie.c(Ce.a),Ie.c(Pe.a);var Le=function(e){function t(e){var a;return Object(xe.a)(this,t),(a=Object(je.a)(this,Object(De.a)(t).call(this,e))).state={bubble:{}},a.green="#1AB394",a.grey="#E6E6E6",a.transactions=e.transactions,a}return Object(ke.a)(t,e),Object(Ne.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Ie.b("worldmap",Se.a);t.zoomControl=new Se.d,t.geodata=Te.a,t.projection=new Se.e.Miller;var a=t.series.push(new Se.c);a.exclude=["AQ"],a.useGeodata=!0;var n=a.mapPolygons.template;n.fill=Ie.a(this.grey),a.data=this.transactions.map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{fill:Ie.a(e.green)})})),n.tooltipText="{name}\n    {transaction} {amount}\n    {date}",n.propertyFields.fill="fill",n.states.create("hover").properties.fill=Ie.a("#1AB394");var r=t.series.push(new Se.b);function o(e){var t=e.dataItem.component.chart,a=document.createElement("div");a.className="map-marker",a.title=e.dataItem.dataContext.title,a.style.position="absolute",void 0!==e.url&&(a.onclick=function(){window.location.href=e.url},a.className+=" map-clickable");var n=document.createElement("div");n.className="dot",a.appendChild(n);var r=document.createElement("div");return r.className="pulse",a.appendChild(r),t.svgContainer.htmlElement.appendChild(a),a}r.mapImages.template.propertyFields.longitude="longitude",r.mapImages.template.propertyFields.latitude="latitude",t.events.on("mappositionchanged",(function(){r.mapImages.each((function(e){e.dummyData&&e.dummyData.externalElement||(e.dummyData={externalElement:o(e)});var a=t.geoPointToSVG({longitude:e.longitude,latitude:e.latitude});e.dummyData.externalElement.style.top=a.y+"px",e.dummyData.externalElement.style.left=a.x+"px"}))})),t.zoomControl=new Se.d}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return r.a.createElement("div",{id:"worldmap",style:{width:"49%",height:"inherit"}})}}]),t}(n.Component),Be=Object(l.b)((function(e){var t=e.transactions;return{items:t.items,isReady:t.isReady}}),{getItems:function(){return function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!1)),e.next=3,E.getItems();case 3:a=e.sent,(n=a.data).error||t({type:"SET_ITEMS",items:n}),t(w(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.items,a=e.isReady,o=e.getItems;return Object(n.useEffect)((function(){t||o()}),[t,o]),r.a.createElement("div",{className:Oe.a.wrapper},r.a.createElement(W,null,r.a.createElement(S,{title:"Transactions worldwide"},r.a.createElement(le,null)),r.a.createElement(P,{flex:a&&"spaceBetween"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Oe.a.tableWrapper},r.a.createElement(be,{transactions:t})),r.a.createElement(Le,{transactions:t})):r.a.createElement("span",{className:Oe.a.loading},"Loading..."))))}));var Me=function(){var e={thunder:"\u26a1",up:"\u2191",down:"\u2193",close:"\u2715",settings:"\u2699",collapse:"\u2227",expand:"\u2228",envelope:"\u2709",clock:"\ud83d\udd58"}.settings;return r.a.createElement("div",{className:x.a.App},r.a.createElement(H,null),r.a.createElement(te,null),r.a.createElement("div",{className:x.a.else},r.a.createElement(se,null),r.a.createElement(Ee,null),r.a.createElement(_e,null),r.a.createElement(Be,null)),r.a.createElement("div",{className:"".concat(x.a.settings," green")},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{store:y},r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports={wrapper:"Messages_wrapper__swqEL",messages:"Messages_messages__2Tkbn",messagesInfo:"Messages_messagesInfo__1ifWk",message:"Messages_message__3QHxb"}},86:function(e,t,a){e.exports={wrapper:"TodoList_wrapper__1JmC0",todo:"TodoList_todo__2aE26",checkbox:"TodoList_checkbox__3w0Zl"}}},[[152,1,3]]]);
//# sourceMappingURL=main.4dd5b35f.chunk.js.map