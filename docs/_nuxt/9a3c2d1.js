(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1194:function(t,e,r){"use strict";r.r(e);var n=r(32),l=r(77),c=(r(94),r(11),r(4),r(40),r(61),r(73),r(27),r(531),r(38),r(532),r(533),r(534),r(535),r(536),r(537),r(538),r(539),r(540),r(541),r(542),r(543),r(544),r(545),r(546),r(547),r(41),r(297),r(581)),o=r.n(c),v=function(t,e){var r=t.map((function(t){return t[e]}));return r=[].concat.apply([],r),(r=(r=Object(l.a)(new Set(r))).filter(Boolean)).sort((function(a,b){return a.localeCompare(b)})),r},f={mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$set(t,"organizations",o.a),t.$set(t,"filtersByTopic",v(o.a,"tags"));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{organizations:[],filtersByTopic:[],filterTopic:[]}},computed:{filtered:function(){var t=this,e=this.filterTopic.map((function(e){return t.filtersByTopic[e]})),r=this.organizations;return e.length&&(r=r.filter((function(t){return(r=e,n=t.tags,r.filter((function(t){return n.includes(t)}))).length;var r,n}))),r}}},d=(r(862),r(101)),m=r(145),x=r.n(m),_=r(138),h=r(216),C=r(178),D=r(1188),w=r(552),B=r(212),y=r(174),V=r(213),k=r(139),j=r(214),T=r(95),I=r(215),A=r(464),E=r(76),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"pb-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"text-h4 flex-grow-1 pb-0"},[r("div",{staticClass:"fill-height d-flex"},[r("v-icon",{staticClass:"mr-4"},[t._v("mdi-hand-front-right-outline")]),t._v(" Допомога\n        ")],1)])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",[r("p",[t._v("Допоможи Україні впоратись з Російською військовою агресією. Зроби пожертву до перевірених проектів аби підтримати Збройні Сили України або благодійні фонди. Якщо ви знаєте організації, які не зазначені у переліку, "),r("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeVwAv7ljsnXolmVh2Qc3dljsUqtWy64ISD64mfcQGmVaciIQ/viewform?usp=pp_url&entry.600831188=%D0%A4%D0%BE%D0%BD%D0%B4+%D0%B0%D0%B1%D0%BE+%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8E+%D0%B4%D0%BB%D1%8F+%D0%B4%D0%BE%D0%BF%D0%BE%D0%BC%D0%BE%D0%B3%D0%B8"}},[t._v("напишіть нам!")])])])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"pt-0"},[r("v-row",[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"text-justify",attrs:{color:"blue-grey lighten-4",flat:""}},[r("v-card-title",{staticClass:"pb-0"},[t._v("\n              Фільтри\n            ")]),t._v(" "),r("v-card-text",{staticClass:"pa-4 pt-0"},[r("div",{staticClass:"mt-6"},[r("strong",[t._v("Фільтр за видом діяльності")])]),t._v(" "),r("v-scroll-y-transition",[r("v-list",{staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterTopic,callback:function(e){t.filterTopic=e},expression:"filterTopic"}},t._l(t.filtersByTopic,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(filter))])],1)]}}],null,!0)})})),1)],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pt-1",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify pa-0",attrs:{color:"lighten-3",flat:""}},[r("v-card-text",{class:{"pa-0":t.$vuetify.breakpoint.mdAndUp}},[0===t.filtered.length?r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n                  На жаль, за вашими фільтрами немає жодної інформації\n                ")])],1):t._e(),t._v(" "),t.filtered.length?r("v-row",t._l(t.filtered,(function(e,n){return r("v-card",{key:"org-"+n,staticClass:"d-flex flex-column",class:{"w-50":t.$vuetify.breakpoint.mdAndUp,"w-100":t.$vuetify.breakpoint.smAndDown}},[r("v-img",{staticClass:"d-flex align-center justify-center flex-grow-0",attrs:{height:"200px"}},[r("v-img",{staticClass:"mx-auto",attrs:{"max-width":"160px","max-height":"120px",contain:"",src:e.logo}})],1),t._v(" "),r("v-card-title",[r("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])]),t._v(" "),r("v-card-subtitle",{staticStyle:{"flex-grow":"1"}},[t._v("\n                      "+t._s(e.description)+"\n                    ")]),t._v(" "),r("v-card-actions",{staticClass:"blue darken-3"},[r("v-btn",{staticClass:"mx-auto",attrs:{href:e.donateLink,target:"_blank",block:"",color:"yellow lighten-2",text:""}},[t._v("Зробити внесок")])],1)],1)})),1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:_.a,VCard:h.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VCheckbox:D.a,VCol:w.a,VIcon:B.a,VImg:y.a,VList:V.a,VListItem:k.a,VListItemAction:j.a,VListItemContent:T.a,VListItemGroup:I.a,VListItemTitle:T.c,VRow:A.a,VScrollYTransition:E.c})},582:function(t,e,r){var content=r(863);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1eb1fe3a",content,!0,{sourceMap:!1})},862:function(t,e,r){"use strict";r(582)},863:function(t,e,r){var n=r(18)(!1);n.push([t.i,".w-50{max-width:48%;margin:1%}",""]),t.exports=n}}]);