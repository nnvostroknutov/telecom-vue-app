(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/telecom-vue-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2090:function(e,t,a){"use strict";a("b52d")},"22ee":function(e,t,a){"use strict";a("5fce")},"2e51":function(e,t,a){"use strict";a("61c3")},4494:function(e,t,a){"use strict";a("df1b")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=a("2877"),l=Object(c["a"])(s,r,o,!1,null,null,null),u=l.exports,d=a("f309"),m=a("0879");n["a"].use(d["a"]),n["a"].component("my-component",{methods:{changeLocale:function(){this.$vuetify.lang.current="ru"}}});var p=new d["a"]({lang:{locales:{ru:m["a"]},current:"ru"}}),v=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("app-bar"),a("v-main",[a("router-view")],1)],1)},h=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{app:"",color:"#0091EA",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.updateDrawer()}}}),a("v-spacer"),a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{text:""}},[a("span",{staticClass:"mr-2"},[e._v("Выйти")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[e._v(" "+e._s(e.username)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.email)+" ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:t.path}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)],1)})),1)],1)],1)},g=[],x=a("1da1"),w=(a("96cf"),a("b0c0"),{name:"app-bar",data:function(){return{drawer:!1,items:[{title:"Мой кабинет",icon:"mdi-view-grid",path:"/home/cards"},{title:"Личные данные",icon:"mdi-account-circle",path:"/home/profile"},{title:"История операций",icon:"mdi-cog-transfer",path:"/home/actions"},{title:"Личный счет",icon:"mdi-account-cash",path:"/home/transactions"}],username:"",email:""}},methods:{updateDrawer:function(){this.drawer=!this.drawer}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");case 2:a=t.sent,n=a.data,e.username=n.name,e.email=n.email;case 6:case"end":return t.stop()}}),t)})))()}}),y=w,_=a("6544"),k=a.n(_),V=a("40dc"),j=a("5bc1"),C=a("8336"),O=a("ce7e"),T=a("132d"),R=a("8860"),E=a("da13"),S=a("5d23"),$=a("34c3"),A=a("f774"),L=a("2fa4"),I=Object(c["a"])(y,b,g,!1,null,"a7189f18",null),B=I.exports;k()(I,{VAppBar:V["a"],VAppBarNavIcon:j["a"],VBtn:C["a"],VDivider:O["a"],VIcon:T["a"],VList:R["a"],VListItem:E["a"],VListItemContent:S["a"],VListItemIcon:$["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VNavigationDrawer:A["a"],VSpacer:L["a"]});var D={name:"MainWrapper",components:{AppBar:B},data:function(){return{}}},P=D,M=a("7496"),q=a("f6c4"),F=Object(c["a"])(P,f,h,!1,null,null,null),U=F.exports;k()(F,{VApp:M["a"],VMain:q["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"form-container"},[a("v-form",{staticClass:"info-form"},[a("v-text-field",{attrs:{counter:20,label:"Логин",outlined:"",required:""},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),a("v-text-field",{attrs:{counter:20,label:"Фамилия",outlined:"",required:""},model:{value:e.family_name,callback:function(t){e.family_name=t},expression:"family_name"}}),a("v-text-field",{attrs:{counter:20,label:"Имя",outlined:"",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{counter:20,label:"Отчество",outlined:"",required:""},model:{value:e.patronymic,callback:function(t){e.patronymic=t},expression:"patronymic"}}),a("v-text-field",{attrs:{counter:20,label:"Пароль",outlined:"",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{counter:20,label:"E-mail",outlined:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.changeUser}},[e._v(" Обновить ")])],1)],1)},J=[],N={name:"user-profile",data:function(){return{id:"",login:"",name:"",family_name:"",patronymic:"",password:"",email:""}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");case 2:a=t.sent,n=a.data,console.log(n),e.id=n.id,e.login=n.login,e.name=n.name,e.family_name=n.family_name,e.patronymic=n.patronymic,e.password=n.password,e.email=n.email;case 12:case"end":return t.stop()}}),t)})))()},methods:{changeUser:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.patch("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1",{id:e.id,login:e.login,name:e.name,family_name:e.family_name,patronymic:e.patronymic,password:e.password,email:e.email});case 2:a=t.sent,a.data;case 4:case"end":return t.stop()}}),t)})))()}}},K=N,W=(a("4494"),a("a523")),G=a("4bd4"),H=a("8654"),Q=Object(c["a"])(K,z,J,!1,null,"4d711004",null),X=Q.exports;k()(Q,{VBtn:C["a"],VContainer:W["a"],VForm:G["a"],VTextField:H["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h2",[e._v("Архив действий")]),a("v-divider"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,loading:e.loadTable,"items-per-page":5,locale:"ru"}})],1)},Z=[],ee={name:"user-actions",data:function(){return{headers:[{text:"Дата и время",align:"start",sortable:!1,value:"date"},{text:"Действие",value:"action_type"},{text:"Статус",value:"status"},{text:"Примечание",value:"comment"}],items:[],loadTable:!0}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");case 2:a=t.sent,n=a.data,console.log(n),e.items=n.actions,console.log(e.items),e.loadTable=!1;case 8:case"end":return t.stop()}}),t)})))()}},te=ee,ae=(a("2e51"),a("8fea")),ne=Object(c["a"])(te,Y,Z,!1,null,"36955576",null),re=ne.exports;k()(ne,{VContainer:W["a"],VDataTable:ae["a"],VDivider:O["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h2",[e._v("Ваш баланс: "+e._s(e.currentBalance)+"Р")]),a("v-divider"),a("h2",[e._v("История изменения баланса:")]),a("v-data-table",{staticClass:"elevation-1",attrs:{"items-per-page":10,headers:e.headers,items:e.items,loading:e.loadTable,locale:"ru"}})],1)},ie=[],se={name:"user-transactions",data:function(){return{headers:[{text:"№",align:"start",sortable:!1,value:"id"},{text:"Дата",value:"date"},{text:"Приход/Расход",value:"receipt"},{text:"Остаток",value:"remainder"},{text:"Комментарий",value:"source"}],items:[],loadTable:!0,currentBalance:""}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");case 2:a=t.sent,n=a.data,console.log(n),e.items=n.transactions,console.log(e.items),e.loadTable=!1,e.currentBalance=n.transactions[n.transactions.length-1].remainder;case 9:case"end":return t.stop()}}),t)})))()}},ce=se,le=(a("2090"),Object(c["a"])(ce,oe,ie,!1,null,"cd70ff08",null)),ue=le.exports;k()(le,{VContainer:W["a"],VDataTable:ae["a"],VDivider:O["a"]});var de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{class:{"pa-3":e.$vuetify.breakpoint.smAndUp}},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[a("v-card",{attrs:{elevation:"4",light:"",tag:"section"}},[a("v-card-title",[a("h3",{staticClass:"headline"},[e._v(" Телеком компания ")]),a("v-flex",[a("v-img",{staticClass:"ml-3",attrs:{contain:"",height:"80px",position:"center right",src:"https://5.imimg.com/data5/OM/OR/CK/SELLER-72915260/wirless-internet-service-providers-500x500.png"}})],1)],1),a("v-divider"),a("v-card-text",[a("p",[e._v("Авторизация")]),a("v-form",[a("v-text-field",{attrs:{outline:"",label:"Email",type:"text"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{outline:"","hide-details":"",label:"Пароль",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-divider"),a("v-card-actions",{class:{"pa-3":e.$vuetify.breakpoint.smAndUp}},[a("v-spacer"),a("v-btn",{attrs:{color:"info",large:e.$vuetify.breakpoint.smAndUp},on:{click:function(t){return t.stopPropagation(),e.login()}}},[e._v(" Войти ")])],1)],1)],1)],1)],1)],1)},me=[],pe={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1",{email:e.id,password:e.password}).then((function(e){console.log("response"),Re.push("/home/cards")}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},ve=pe,fe=a("b0af"),he=a("99d9"),be=a("0e8f"),ge=a("adda"),xe=a("a722"),we=Object(c["a"])(ve,de,me,!1,null,null,null),ye=we.exports;k()(we,{VApp:M["a"],VBtn:C["a"],VCard:fe["a"],VCardActions:he["a"],VCardText:he["b"],VCardTitle:he["c"],VContainer:W["a"],VDivider:O["a"],VFlex:be["a"],VForm:G["a"],VImg:ge["a"],VLayout:xe["a"],VSpacer:L["a"],VTextField:H["a"]});var _e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"card-container"},[a("v-card",{staticClass:"card",attrs:{elevation:"7"}},[a("v-icon",{attrs:{size:"100",color:"blue darken-1"}},[e._v(" mdi-account-circle ")]),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/home/profile"}},[a("v-card-title",[e._v(" Личные данные ")])],1)],1),a("v-card",{staticClass:"card",attrs:{elevation:"7"}},[a("v-icon",{attrs:{size:"100",color:"blue darken-1"}},[e._v(" mdi-cog-transfer ")]),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/home/actions"}},[a("v-card-title",{staticClass:"card-title"},[e._v(" История операций ")])],1)],1),a("v-card",{staticClass:"card",attrs:{elevation:"7"}},[a("v-icon",{attrs:{size:"100",color:"blue darken-1"}},[e._v(" mdi-account-cash ")]),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/home/transactions"}},[a("v-card-title",[e._v(" Личный счет ")])],1)],1)],1)},ke=[],Ve={name:"cards",data:function(){return{drawer:!1,username:"",email:""}}},je=Ve,Ce=(a("22ee"),Object(c["a"])(je,_e,ke,!1,null,"658f9492",null)),Oe=Ce.exports;k()(Ce,{VCard:fe["a"],VCardTitle:he["c"],VContainer:W["a"],VIcon:T["a"]}),n["a"].use(v["a"]);var Te=new v["a"]({routes:[{path:"/home",name:"home",component:U,children:[{path:"profile",component:X},{path:"actions",component:re},{path:"transactions",component:ue},{path:"cards",component:Oe}]},{path:"/",name:"login",component:ye}]}),Re=Te,Ee=a("bc3a"),Se=a.n(Ee),$e=a("2106"),Ae=a.n($e);Se.a.defaults.withCredentials=!0,n["a"].config.productionTip=!1,n["a"].use(Ae.a,Se.a),new n["a"]({vuetify:p,render:function(e){return e(u)},router:Re}).$mount("#app")},"5fce":function(e,t,a){},"61c3":function(e,t,a){},b52d:function(e,t,a){},df1b:function(e,t,a){}});
//# sourceMappingURL=app.eea05f25.js.map