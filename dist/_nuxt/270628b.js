(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{243:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7388ab72",content,!0,{sourceMap:!1})},281:function(t,e,r){"use strict";r(9),r(7),r(10),r(11),r(8),r(12);var n=r(28),o=r(1),c=(r(95),r(21),r(31),r(191),r(81));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{drawer:!1,search:"",results:[],items:[{icon:"mdi-bookmark-box-multiple",title:"Home",to:"/"}],right:!0,rightDrawer:!1,title:"Anime Station"}},head:{titleTemplate:"%s | Anime Station"},computed:d(d({},Object(c.b)(["getSearchBarStatus"])),{},{isHome:function(){return"/"===this.$route.path}}),methods:d({doSearch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kitsu.io/api/edge/anime?filter[text]=".concat(t.search)).then((function(t){return t.json()}));case 2:t.results=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},Object(c.c)(["changeSearchBarStatus"]))},f=r(94),h=r(132),m=r.n(h),_=r(433),x=r(444),w=r(434),k=r(282),y=r(200),S=r(109),V=r(435),O=r(445),j=r(443),C=r(436),B=r(199),P=r(163),A=r(201),D=r(125),E=r(202),I=r(92),N=r(437),T=r(438),F=r(198),L=r(439),R=r(440),H=r(441),$=r(442),M=r(57),J=r(203),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":!1,clipped:!0,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),t.isHome?r("v-app-bar",{attrs:{"clipped-left":!0,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("nuxt-link",{staticClass:"text-h5 white--text font-weight-bold text-decoration-none ml-5",attrs:{to:"/"}},[r("v-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.changeSearchBarStatus(!0)}}},[r("v-icon",[t._v("mdi-magnify")])],1)],1):r("v-app-bar",{attrs:{"clipped-left":!0,fixed:"",app:""}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$router.push({path:"/"})}}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("nuxt-link",{staticClass:"text-h5 white--text font-weight-bold text-decoration-none ml-5",attrs:{to:"/"}},[r("v-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")])],1)],1),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1),t._v(" "),r("keep-alive",[r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.getSearchBarStatus,callback:function(e){t.getSearchBarStatus=e},expression:"getSearchBarStatus"}},[r("v-card",[r("v-toolbar",[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.changeSearchBarStatus(!1)}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-col",{staticClass:"mx-auto",attrs:{cols:"12",lg:"6",md:"6"}},[r("v-text-field",{staticClass:"mr-5",attrs:{"hide-details":"","append-icon":"mdi-arrow-right",outlined:"",autofocus:"",dense:"",clearable:"",label:"Search","prepend-inner-icon":"mdi-magnify",color:"grey lighten-2"},on:{"click:append":function(e){return t.doSearch()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearch()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),r("v-card-text",[r("v-subheader",[t._v("\n              Result search berhasil\n            ")]),t._v(" "),r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:"","grid-list-sm":""}},[r("v-row",{staticClass:"my-3",attrs:{dense:""}},t._l(t.results.data,(function(e,i){return r("v-col",{key:i},[r("v-responsive",{attrs:{"aspect-ratio":16/9}},[r("v-card",{staticClass:"ma-4",attrs:{color:"primary",width:"210",height:"350",dark:"",nuxt:"",to:"/detail/"+e.id}},[r("v-img",{attrs:{src:e.attributes.posterImage.small,height:"350",width:"210"}},[r("v-card-title",{staticClass:"text-subtitle-1",staticStyle:{"background-color":"#4242429c"},domProps:{textContent:t._s(Object.values(e.attributes.titles)[0])}})],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-footer",{attrs:{app:"",padless:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n      "+t._s(t.title)+" © "+t._s((new Date).getFullYear())+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VApp:_.a,VAppBar:x.a,VAppBarNavIcon:w.a,VBtn:k.a,VCard:y.a,VCardText:S.a,VCardTitle:S.b,VCol:V.a,VContainer:O.a,VDialog:j.a,VFooter:C.a,VIcon:B.a,VImg:P.a,VList:A.a,VListItem:D.a,VListItemAction:E.a,VListItemContent:I.a,VListItemTitle:I.b,VMain:N.a,VNavigationDrawer:T.a,VResponsive:F.a,VRow:L.a,VSpacer:R.a,VSubheader:H.a,VTextField:$.a,VToolbar:M.a,VToolbarTitle:J.a})},285:function(t,e,r){r(286),t.exports=r(287)},315:function(t,e,r){"use strict";r(243)},316:function(t,e,r){var n=r(14)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},402:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return o})),r.d(e,"mutations",(function(){return c}));var n=function(){return{searchBar:!1}},o={getSearchBarStatus:function(t){return t.searchBar}},c={changeSearchBarStatus:function(t,e){t.searchBar=e}}},85:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(315),r(94)),c=r(132),l=r.n(c),d=r(433),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[285,8,1,9]]]);