(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1191:function(t,e,r){"use strict";r.r(e);var n=r(32),l=r(77),o=(r(94),r(11),r(4),r(40),r(61),r(73),r(27),r(531),r(38),r(532),r(533),r(534),r(535),r(536),r(537),r(538),r(539),r(540),r(541),r(542),r(543),r(544),r(545),r(546),r(547),r(41),r(297),r(578)),c=r.n(o),v=function(t,e){return t.filter((function(t){return e.includes(t)}))},f=function(t,e){var r=t.map((function(t){return t[e]}));return r=[].concat.apply([],r),(r=(r=Object(l.a)(new Set(r))).filter(Boolean)).sort((function(a,b){return a.localeCompare(b)})),r},m={mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$set(t,"resources",c.a),t.$set(t,"filtersByType",f(c.a,"type")),t.$set(t,"filtersByTopic",f(c.a,"tags"));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{resources:[],filtersByTopic:[],filterTopic:[],showTopic:!1,filtersByLocation:["Україна","Київ","Світ"],filterLocation:[],showLocation:!0,filtersByType:[],filterType:[],showType:!0}},computed:{filtered:function(){var t=this,e=this.filterTopic.map((function(e){return t.filtersByTopic[e]})),r=this.filterLocation.map((function(e){return t.filtersByLocation[e]})),n=this.filterType.map((function(e){return t.filtersByType[e]})),l=this.resources;return e.length&&(l=l.filter((function(t){return v(e,t.tags).length}))),r.length&&(l=l.filter((function(t){return v(r,t.location).length}))),n.length&&(l=l.filter((function(t){return v(n,t.type).length}))),l}}},d=r(101),h=r(145),y=r.n(h),_=r(138),w=r(216),C=r(178),x=r(1188),T=r(552),k=r(212),B=r(213),L=r(139),D=r(214),V=r(95),S=r(215),j=r(464),I=r(76),N=r(465),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"pb-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"text-h4 flex-grow-1 pb-0"},[r("div",{staticClass:"fill-height d-flex"},[r("v-icon",{staticClass:"mr-4"},[t._v("mdi-web")]),t._v(" Ресурси\n        ")],1)])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",[r("p",[t._v("Тут зібрані корисні ресурси, які стануть вам у нагоді. Якщо ви знаєте ресурси, які не зазначені у переліку, "),r("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeVwAv7ljsnXolmVh2Qc3dljsUqtWy64ISD64mfcQGmVaciIQ/viewform?usp=pp_url&entry.600831188=%D0%86%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81"}},[t._v("напишіть нам!")])])])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"pt-0"},[r("v-row",[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"text-justify",attrs:{color:"blue-grey lighten-4",flat:""}},[r("v-card-title",{staticClass:"pb-0"},[t._v("\n              Фільтри\n            ")]),t._v(" "),r("v-card-text",{staticClass:"pa-4 pt-0"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersByLocation.length,expression:"filtersByLocation.length"}],staticClass:"mt-6",on:{click:function(e){t.showLocation=!t.showLocation}}},[r("strong",[t._v("Фільтр за охопленням")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showLocation?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showLocation,expression:"showLocation"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterLocation,callback:function(e){t.filterLocation=e},expression:"filterLocation"}},t._l(t.filtersByLocation,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(filter))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersByType.length,expression:"filtersByType.length"}],staticClass:"mt-6",on:{click:function(e){t.showType=!t.showType}}},[r("strong",[t._v("Фільтр за типом")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showType?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showType,expression:"showType"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterType,callback:function(e){t.filterType=e},expression:"filterType"}},t._l(t.filtersByType,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(filter))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersByTopic.length,expression:"filtersByTopic.length"}],staticClass:"mt-6",on:{click:function(e){t.showTopic=!t.showTopic}}},[r("strong",[t._v("Фільтр за видом діяльності")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showTopic?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showTopic,expression:"showTopic"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterTopic,callback:function(e){t.filterTopic=e},expression:"filterTopic"}},t._l(t.filtersByTopic,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(filter))])],1)]}}],null,!0)})})),1)],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pt-1",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify pa-0",attrs:{color:"lighten-3",flat:""}},[r("v-card-text",{staticClass:"pa-0"},[0===t.filtered.length?r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n                  На жаль, за вашими фільтрами немає жодної інформації\n                ")])],1):t._e(),t._v(" "),t.filtered.length?r("v-row",t._l(t.filtered,(function(e,n){return r("v-card",{key:"res-"+n,staticClass:"d-flex flex-column",attrs:{"max-width":"100%",flat:""}},[r("v-card-title",["string"==typeof e.link?r("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))]):r("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.link[0].url,target:"_blank"}},[t._v(t._s(e.name))])]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-2",staticStyle:{"flex-grow":"1"}},[t._v("\n                      "+t._s(e.description)+"\n                    ")]),t._v(" "),"string"==typeof e.link?r("v-card-actions",{staticClass:"pt-0"},[r("v-btn",{attrs:{small:"",href:e.link,target:"_blank",text:"",color:"blue darken-2"}},[t._v("Перейти")])],1):r("v-card-actions",{staticClass:"pt-0"},[t._l(e.link,(function(link,e){return r("v-btn",{key:"link-"+e,staticClass:"mx-auto",attrs:{small:"",href:link.url,target:"_blank",color:"blue darken-2",text:""}},[t._v(t._s(link.title))])})),t._v(" "),r("v-spacer")],2)],1)})),1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:_.a,VCard:w.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VCheckbox:x.a,VCol:T.a,VIcon:k.a,VList:B.a,VListItem:L.a,VListItemAction:D.a,VListItemContent:V.a,VListItemGroup:S.a,VListItemTitle:V.c,VRow:j.a,VScrollYTransition:I.c,VSpacer:N.a})}}]);