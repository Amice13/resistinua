(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{215:function(t,e,n){"use strict";var r=n(1),o=n(216),l=n.n(o),c=n(217),d=n(285),v=n.n(d);r.default.use(l.a),r.default.use(c.a);var m=new c.a({locale:"uk",messages:v.a});e.a=new l.a({lang:{t:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return m.t(t,n)}}}),r.default.prototype._i18n=m},218:function(t,e,n){"use strict";var r=n(1),o=n(286),l=n.n(o);r.default.use(l.a,{config:{id:"G-G774558P57"}})},259:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7388ab72",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("56b15182",content,!0,{sourceMap:!1})},285:function(t,e){t.exports={en:{$vuetify:{noDataText:"No data found"},"Головна":"Main Page"},uk:{$vuetify:{noDataText:"Не знайдено даних"},"Головна":"Головна"},ru:{$vuetify:{noDataText:"Немає даних"},"Головна":"Главная"}}},288:function(t,e,n){"use strict";var r={mounted:function(){this.shrink="/"===this.$route.path,this.drawer=!1,this.loading=!1},data:function(){return{loading:!0,drawer:!1,model:0,shrink:!0,miniVariant:!1,shares:[{icon:"mdi-facebook",url:"https://www.facebook.com/sharer/sharer.php?u=https://resist.in.ua"},{icon:"mdi-twitter",url:"https://twitter.com/intent/tweet?url=https://resist.in.ua&text=Інтернет-портал спротиву військовим діям проти України"},{icon:"mdi-linkedin",url:"https://www.linkedin.com/shareArticle?mini=true&url=https://resist.in.ua"},{icon:"mdi-mail",url:"mailto:info@example.com?&subject=&cc=&bcc=&body=https://resist.in.ua"}],menu:[{icon:"mdi-home-outline",title:"Головна",to:"/"},{icon:"mdi-check-outline",title:"Завдання",to:"/tasks"},{icon:"mdi-message-reply-outline",title:"Офіційні звернення",to:"/messages"},{icon:"mdi-hand-front-right-outline",title:"Допомога",to:"/volounteer"},{icon:"mdi-web",title:"Ресурси",to:"/resources"}],title:"Український спротив"}},watch:{$route:function(t,e){this.$vuetify.goTo("#app",{offset:0}),this.shrink="/"===t.path}}},o=(n(345),n(93)),l=n(138),c=n.n(l),d=n(445),v=n(456),m=n(446),f=n(447),h=n(131),_=n(209),w=n(171),x=n(457),k=n(448),y=n(74),V=n(449),$=n(205),C=n(168),A=n(206),T=n(132),N=n(207),j=n(88),D=n(450),I=n(454),z=n(204),F=n(451),S=n(452),L=n(453),M=n(455),E=n(283),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[n("div",{staticClass:"text-center d-flex align-center justify-center fill-height"},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)])]),t._v(" "),n("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",fixed:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.menu,(function(e){var title=e.title,r=e.icon,o=e.to;return n("v-list-item",{key:"drawer-"+title,attrs:{to:o,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(r))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(title))}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{app:"",fixed:"",color:"light-blue darken-4",dark:"","shrink-on-scroll":t.shrink&&t.$vuetify.breakpoint.mdAndUp,prominent:t.shrink&&t.$vuetify.breakpoint.mdAndUp,src:"/ua.jpg"},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[n("v-img",t._b({attrs:{gradient:"to top, rgba(0,0,50,0.6), rgba(0,0,0,.2)"}},"v-img",r,!1))]}},t.$vuetify.breakpoint.mdAndUp?{key:"extension",fn:function(){return[n("v-tabs",{staticClass:"main-menu",attrs:{grow:""}},[n("v-tabs-slider",{attrs:{color:"yellow darken-2"}}),t._v(" "),t._l(t.menu,(function(e,i){var r=e.to,title=e.title;return n("v-tab",{key:"main-menu-"+i,attrs:{to:r}},["/"===r?n("span",[n("v-icon",[t._v("mdi-home")])],1):n("span",[t._v(t._s(t.$t(title)))])])}))],2)]},proxy:!0}:null],null,!0)},[t._v(" "),t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),n("v-app-bar-title",{staticClass:"mb-1",class:{"ml-6":t.$vuetify.breakpoint.mdAndUp,"pl-0":t.$vuetify.breakpoint.smAndDown}},[n("div",{staticStyle:{position:"relative"}},[n("v-icon",{staticClass:"ua-header",attrs:{left:"",color:"amber"}},[t._v("ua-ua")]),t._v(t._s(t.$t(t.title))+"\n      ")],1)]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-main",[n("v-container",{staticStyle:{height:"calc(100% + 24px)"},attrs:{fluid:""}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("Nuxt")],1)],1)],1),t._v(" "),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"light-blue darken-4 white--text text-center w-100",attrs:{flat:"",tile:""}},[n("v-card-text",[n("div",{staticClass:"text-h6 mb-2"},[t._v("Поділитися")]),t._v(" "),t._l(t.shares,(function(e){return n("v-btn",{key:e.icon,staticClass:"mx-4 white--text",attrs:{href:e.url,target:"_blank",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1)})),t._v(" "),n("v-row",{attrs:{justify:"center","no-gutters":""}},t._l(t.menu,(function(e){var title=e.title,r=e.to;return n("v-btn",{key:title,staticClass:"my-2",attrs:{to:r,color:"white",text:"",rounded:""}},[t._v("\n            "+t._s(t.$t(title))+"\n          ")])})),1)],2),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t._v("\n        © "),n("strong",[t._v(t._s(t.$t("Український спротив")))]),t._v(", "+t._s((new Date).getFullYear())),n("br"),t._v("\n        зміст доступний за ліцензією "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}},[t._v("Creative Commons Attribution 4.0 International license")]),t._v(", "),n("br"),t._v("\n        розробник "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://github.com/Amice13/resistinua"}},[t._v("Amice13")])])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:m.a,VAppBarTitle:f.a,VBtn:h.a,VCard:_.a,VCardText:w.c,VContainer:x.a,VDivider:k.a,VFadeTransition:y.b,VFooter:V.a,VIcon:$.a,VImg:C.a,VList:A.a,VListItem:T.a,VListItemAction:N.a,VListItemContent:j.a,VListItemTitle:j.c,VMain:D.a,VNavigationDrawer:I.a,VProgressCircular:z.a,VRow:F.a,VSpacer:S.a,VTab:L.a,VTabs:M.a,VTabsSlider:E.a})},309:function(t,e,n){n(310),t.exports=n(311)},339:function(t,e,n){"use strict";n(259)},340:function(t,e,n){var r=n(18)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},345:function(t,e,n){"use strict";n(261)},346:function(t,e,n){var r=n(18)(!1);r.push([t.i,'.v-app-bar-title__content{min-width:260px}.w-100{width:100%}a[href$="#btn-center"],a[href$="@gentls.com"]{height:36px;min-width:64px;padding:0 16px;background:#01579b!important;background-color:#01579b!important;color:#fff!important;caret-color:#fff!important;margin:auto!important;text-align:center;align-items:center;border-radius:4px;display:inline-flex;flex:0 0 auto;font-weight:500;letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.v-card__text h2,.v-card__text h3,.v-card__text ol,.v-card__text ul{margin-bottom:32px}.v-card__title{word-break:break-word!important;text-align:left!important}.x-small{font-size:80%}.break-word{overflow:inherit!important;white-space:inherit!important;text-align:left!important}',""]),t.exports=r},85:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(339),n(93)),l=n(138),c=n.n(l),d=n(445),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[309,47,3,48]]]);