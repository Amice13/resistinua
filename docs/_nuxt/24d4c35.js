(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1200:function(t,e,r){"use strict";r.r(e);var l=r(32),n=r(77),o=(r(94),r(11),r(4),r(40),r(62),r(73),r(27),r(531),r(38),r(532),r(534),r(535),r(536),r(537),r(538),r(539),r(540),r(541),r(542),r(543),r(544),r(545),r(546),r(547),r(548),r(41),r(311),r(525)),c=r.n(o),v=r(577),f=r.n(v),m=function(t,e){return t.filter((function(t){return e.includes(t)}))},d=function(t,e){var r=t.map((function(t){return t[e]}));return r=[].concat.apply([],r),(r=(r=Object(n.a)(new Set(r))).filter(Boolean)).sort((function(a,b){return a.localeCompare(b)})),r},h={components:{VueMarkdown:c.a},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$set(t,"filtersBySpeaker",d(f.a,"speaker")),t.$set(t,"filtersByCity",d(f.a,"cities")),t.$set(t,"filtersByTopic",d(f.a,"topics")),t.$set(t,"messages",f.a);case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{messages:[],filterSpeaker:[],filterCity:[],filterTopic:[],filterDate:void 0,showSpeaker:!0,showCity:!1,showTopic:!1,showDate:!1,filtersBySpeaker:[],filtersByCity:[],filtersByTopic:[],filtersByDate:["Сьогодні","Вчора","Два дні назад","Більше трьох днів назад"],signLanguageOnly:!1,russianMessage:!1}},computed:{filteredMessages:function(){var t=this,e=this.messages,r=this.filterSpeaker.map((function(e){return t.filtersBySpeaker[e]})),l=this.filterCity.map((function(e){return t.filtersByCity[e]})),n=this.filterTopic.map((function(e){return t.filtersByTopic[e]}));if(r.length&&(e=e.filter((function(t){return!!t.speaker&&m(r,t.speaker).length}))),l.length&&(e=e.filter((function(t){return!!t.cities&&m(l,t.cities).length}))),n.length&&(e=e.filter((function(t){return!!t.topics&&m(n,t.topics).length}))),void 0!==this.filterDate){var o=(new Date).setDate((new Date).getDate()-this.filterDate);o=new Date(o),3===this.filterDate?e=e.filter((function(t){return new Date(t.date)<o})):(o=o.toISOString().substr(0,10),console.log(o),e=e.filter((function(t){return-1!==t.date.indexOf(o)})))}return this.signLanguageOnly&&(e=e.filter((function(t){return t.translated}))),this.russianMessage&&(e=e.filter((function(t){return t.russianTimestamp}))),e}}},w=(r(846),r(848),r(101)),_=r(145),y=r.n(_),C=r(216),k=r(178),x=r(1198),S=r(551),D=r(212),T=r(213),B=r(139),M=r(214),L=r(95),V=r(215),$=r(464),O=r(76),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"pb-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"text-h4 flex-grow-1 pb-0"},[r("div",{staticClass:"fill-height d-flex"},[r("v-icon",{staticClass:"mr-4"},[t._v("mdi-message-reply-outline")]),t._v(" Офіційні звернення\n        ")],1)])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"ma-0",attrs:{flat:""}},[r("v-card-text",[r("v-row",[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"text-justify",attrs:{color:"blue-grey lighten-4",flat:""}},[r("v-card-title",{staticClass:"pb-0"},[t._v("\n              Фільтри\n            ")]),t._v(" "),r("v-card-text",{staticClass:"pa-4 pt-0"},[r("v-checkbox",{attrs:{label:"Наявний сурдопереклад","hide-details":""},model:{value:t.signLanguageOnly,callback:function(e){t.signLanguageOnly=e},expression:"signLanguageOnly"}}),t._v(" "),r("v-checkbox",{attrs:{label:"Містить звернення російською","hide-details":""},model:{value:t.russianMessage,callback:function(e){t.russianMessage=e},expression:"russianMessage"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersBySpeaker.length,expression:"filtersBySpeaker.length"}],staticClass:"mt-6",on:{click:function(e){t.showSpeaker=!t.showSpeaker}}},[r("strong",[t._v("Фільтр за спікером")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showSpeaker?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showSpeaker,expression:"showSpeaker"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterSpeaker,callback:function(e){t.filterSpeaker=e},expression:"filterSpeaker"}},t._l(t.filtersBySpeaker,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var l=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":l}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t(filter)))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersByTopic.length,expression:"filtersByTopic.length"}],staticClass:"mt-6",on:{click:function(e){t.showTopic=!t.showTopic}}},[r("strong",[t._v("Фільтр за темою")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showTopic?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showTopic,expression:"showTopic"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterTopic,callback:function(e){t.filterTopic=e},expression:"filterTopic"}},t._l(t.filtersByTopic,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var l=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":l}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t(filter)))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersByCity.length,expression:"filtersByCity.length"}],staticClass:"mt-6",on:{click:function(e){t.showCity=!t.showCity}}},[r("strong",[t._v("Фільтр за містами")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showCity?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showCity,expression:"showCity"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterCity,callback:function(e){t.filterCity=e},expression:"filterCity"}},t._l(t.filtersByCity,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var l=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":l}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t(filter)))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("div",{staticClass:"mt-6",on:{click:function(e){t.showDate=!t.showDate}}},[r("strong",[t._v("Фільтр за датою")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showDate?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showDate,expression:"showDate"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{model:{value:t.filterDate,callback:function(e){t.filterDate=e},expression:"filterDate"}},t._l(t.filtersByDate,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var l=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":l}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t(filter)))])],1)]}}],null,!0)})})),1)],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"pa-0",attrs:{color:"lighten-3",flat:""}},[r("v-card-text",{staticClass:"pa-0"},[0===t.filteredMessages.length?r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n                  На жаль, за вашими фільтрами немає жодної інформації\n                ")])],1):t._e(),t._v(" "),t.filteredMessages.length?r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"}},[r("div",{staticClass:"video w-100"},[r("iframe",{staticClass:"w-100",attrs:{src:"https://www.youtube.com/embed/"+t.filteredMessages[0].id,title:t.filteredMessages[0].name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"7"}},[r("NuxtLink",{staticClass:"text-h5 blue--text text-inherit",staticStyle:{"text-decoration":"none","text-align":"left !important"},attrs:{to:"/message/"+t.filteredMessages[0].id}},[t._v(t._s(t.filteredMessages[0].name))]),t._v(" "),r("div",{staticClass:"small"},[r("small",[r("strong",[t._v("\n                      "+t._s(new Date(t.filteredMessages[0].date).toLocaleDateString("uk",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))+"\n                    ")])])]),t._v(" "),r("div",{staticClass:"text-justify"},[t._v(t._s(t.filteredMessages[0].description))])],1)],1):t._e(),t._v(" "),t.filteredMessages.length>1?r("v-row",{staticClass:"pt-2",staticStyle:{"border-top":"1px solid #ccc"}},[r("v-list",{staticClass:"w-100",attrs:{"three-line":""}},t._l(t.filteredMessages.slice(1),(function(e,l){return r("v-list-item",{key:"video-"+l,attrs:{to:"/message/"+e.id}},[[r("v-list-item-action",{staticClass:"text-right",class:{"mr-6":t.$vuetify.breakpoint.smAndDown}},[r("div",[r("strong",[t._v(t._s(new Date(e.date).toLocaleTimeString("uk",{hour:"2-digit",minute:"2-digit"})))]),t._v(" "),r("br"),t._v(" "),r("span",{class:{"x-small":t.$vuetify.breakpoint.smAndDown}},[t._v(t._s(new Date(e.date).toLocaleDateString("uk",{year:"numeric",month:"numeric",day:"numeric"})))])])]),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"blue--text"},[t._v(t._s(e.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(e.description))])],1)]],2)})),1)],1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCard:C.a,VCardText:k.c,VCardTitle:k.d,VCheckbox:x.a,VCol:S.a,VIcon:D.a,VList:T.a,VListItem:B.a,VListItemAction:M.a,VListItemContent:L.a,VListItemGroup:V.a,VListItemSubtitle:L.b,VListItemTitle:L.c,VRow:$.a,VScrollYTransition:O.c})},578:function(t,e,r){var content=r(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("314eeba8",content,!0,{sourceMap:!1})},579:function(t,e,r){var content=r(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5b97c28b",content,!0,{sourceMap:!1})},846:function(t,e,r){"use strict";r(578)},847:function(t,e,r){var l=r(18)(!1);l.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=l},848:function(t,e,r){"use strict";r(579)},849:function(t,e,r){var l=r(18)(!1);l.push([t.i,'img[src$="#w-100"]{width:100%}.mw-100 *{max-width:100%}.v-input--selection-controls__ripple{min-width:34px}',""]),t.exports=l}}]);