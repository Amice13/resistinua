(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{511:function(t,e,r){var n=r(26);t.exports=function(t){return n(Set.prototype.values,t)}},517:function(t,e,r){"use strict";r(304)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(305))},518:function(t,e,r){"use strict";r(6)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(534)})},519:function(t,e,r){"use strict";r(6)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(306)})},520:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(26),l=r(44),f=r(17),d=r(94),v=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),n=l(r.delete);return v(t,(function(t){o(n,r,t)})),r}})},521:function(t,e,r){"use strict";var n=r(6),c=r(17),o=r(42),l=r(511),f=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=c(this),r=l(e),n=o(t,arguments.length>1?arguments[1]:void 0);return!f(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},522:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(26),l=r(44),f=r(17),d=r(42),v=r(94),m=r(511),h=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=f(this),r=m(e),n=d(t,arguments.length>1?arguments[1]:void 0),k=new(v(e,c("Set"))),w=l(k.add);return h(r,(function(t){n(t,t,e)&&o(w,k,t)}),{IS_ITERATOR:!0}),k}})},523:function(t,e,r){"use strict";var n=r(6),c=r(17),o=r(42),l=r(511),f=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=c(this),r=l(e),n=o(t,arguments.length>1?arguments[1]:void 0);return f(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},524:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(26),l=r(44),f=r(17),d=r(94),v=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=f(this),r=new(d(e,c("Set"))),n=l(e.has),m=l(r.add);return v(t,(function(t){o(n,e,t)&&o(m,r,t)})),r}})},525:function(t,e,r){"use strict";var n=r(6),c=r(26),o=r(44),l=r(17),f=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),r=o(e.has);return!f(t,(function(t,n){if(!0===c(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},526:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(26),l=r(44),f=r(24),d=r(17),v=r(172),m=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=v(this),r=d(t),n=r.has;return f(n)||(r=new(c("Set"))(t),n=l(r.has)),!m(e,(function(t,e){if(!1===o(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},527:function(t,e,r){"use strict";var n=r(6),c=r(26),o=r(44),l=r(17),f=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),r=o(e.has);return!f(t,(function(t,n){if(!1===c(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},528:function(t,e,r){"use strict";var n=r(6),c=r(12),o=r(17),l=r(35),f=r(511),d=r(43),v=c([].join),m=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=o(this),r=f(e),n=void 0===t?",":l(t),c=[];return d(r,m,{that:c,IS_ITERATOR:!0}),v(c,n)}})},529:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(42),l=r(26),f=r(44),d=r(17),v=r(94),m=r(511),h=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=d(this),r=m(e),n=o(t,arguments.length>1?arguments[1]:void 0),k=new(v(e,c("Set"))),w=f(k.add);return h(r,(function(t){l(w,k,n(t,t,e))}),{IS_ITERATOR:!0}),k}})},530:function(t,e,r){"use strict";var n=r(6),c=r(5),o=r(44),l=r(17),f=r(511),d=r(43),v=c.TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=l(this),r=f(e),n=arguments.length<2,c=n?void 0:arguments[1];if(o(t),d(r,(function(r){n?(n=!1,c=r):c=t(c,r,r,e)}),{IS_ITERATOR:!0}),n)throw v("Reduce of empty set with no initial value");return c}})},531:function(t,e,r){"use strict";var n=r(6),c=r(17),o=r(42),l=r(511),f=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=c(this),r=l(e),n=o(t,arguments.length>1?arguments[1]:void 0);return f(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},532:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(26),l=r(44),f=r(17),d=r(94),v=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),n=l(r.delete),m=l(r.add);return v(t,(function(t){o(n,r,t)||o(m,r,t)})),r}})},533:function(t,e,r){"use strict";var n=r(6),c=r(45),o=r(44),l=r(17),f=r(94),d=r(43);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),r=new(f(e,c("Set")))(e);return d(t,o(r.add),{that:r}),r}})},534:function(t,e,r){"use strict";var n=r(26),c=r(44),o=r(17);t.exports=function(){for(var t=o(this),e=c(t.add),r=0,l=arguments.length;r<l;r++)n(e,t,arguments[r]);return t}},538:function(t,e,r){"use strict";r(8),r(9),r(13),r(14);var n=r(2),c=(r(4),r(27),r(11),r(22),r(59),r(290),r(38),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(39),r(54),r(10),r(69),r(220),r(1)),o=r(70),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),k=v.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(k)};function S(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var y=new Map;e.a=c.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=y.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var n=r[t],c=S(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),y.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},551:function(t,e){t.exports=[{id:"business-petition",name:"Підписати петицію щодо припинення ділових зв'язків з Росією",skills:["Без навичок"],tags:["Цифровий напрямок"],reccuring:!1},{id:"cyber-security",name:"Забезпечити власну кібербезпеку",skills:["Без навичок"],tags:["Цифровий напрямок"],reccuring:!1},{id:"communication",name:"Забезпечити себе засобами комунікації",skills:["Без навичок"],tags:["Цифровий напрямок"],reccuring:!1},{id:"make-photo",name:"Фіксувати військові злочини путінського режиму",skills:["Без навичок"],tags:["Інформаційний напрямок"],reccuring:!1},{id:"copywriting",name:"Допомогти перекладом, редактурою, копірайтингом",skills:["Переклад","Журналістика","Копірайтинг"],tags:["Інформаційний напрямок"],reccuring:!1},{id:"thousand",name:"Використати тисячу є-Підтримки на армію",skills:["Без навичок"],tags:["Благодійність"],reccuring:!1},{id:"media",name:"Забезпечити себе джерелом достовірної інформації",skills:["Без навичок"],tags:["Цифровий напрямок"],reccuring:!1},{id:"volounteer",name:"Записатись у волонтери",skills:["Без навичок"],tags:["Волонтерство"],reccuring:!1},{id:"tro",name:"Записатися в територіальну оборону",skills:["Військовий"],tags:["Оборона"],reccuring:!1},{id:"cyber-army",name:"Записатися у кібер-війська",skills:["Інформаційні технології"],tags:["Цифровий напрямок"],reccuring:!1},{id:"upvote",name:"Підтримати українські проекти голосуванням",skills:["Без навичок"],tags:["Цифровий напрямок"],reccuring:!1},{id:"refugee-home",name:"Надати помешкання тим, хто евакуююється",skills:["Без навичок"],tags:["Житло"],reccuring:!1},{id:"find-home",name:"Знайти помешкання у випадку евакуації",skills:["Без навичок"],tags:["Житло"],reccuring:!1},{id:"sign-petition",name:"Підписати петицію щодо підтримки України",skills:["Без навичок"],tags:["Цифровий напрямок"],reccuring:!1},{id:"psychology-aid",name:"Долучитися до надання психологічної допомоги",skills:["Психолог"],tags:["Волонтерство"],reccuring:!1},{id:"nbu-donation",name:"Здійснити внесок на потреби армії до НБУ",skills:["Без навичок"],tags:["Благодійність"],reccuring:!0},{id:"red-cross-donation",name:"Здійснити внесок на потреби Червоного Хреста",skills:["Без навичок"],tags:["Благодійність"],reccuring:!0},{id:"give-transport",name:"Надати допомогу із транспортом тим, хто евакуююється",skills:["Водій"],tags:["Транспорт"],reccuring:!0},{id:"refugee-transport",name:"Отримати допомогу із переміщенням",skills:["Без навичок"],tags:["Транспорт"],reccuring:!0},{id:"remove-targets",name:"Знищити мітки на об'єктах інфрастуктури",skills:["Без навичок"],tags:["Оборона"],reccuring:!0},{id:"notify-targets",name:"Повідомити про мітки на об'єктах залізниці",skills:["Без навичок"],tags:["Оборона"],reccuring:!0},{id:"notify-troops",name:"Повідомити про про російські війська",skills:["Без навичок"],tags:["Оборона"],reccuring:!0},{id:"inform-enemies",name:"Вести пропаганду",skills:["Без навичок"],tags:["Інформування"],reccuring:!0},{id:"give-blood",name:"Здати кров на потреби поранених",skills:["Без навичок"],tags:["Донорство"],reccuring:!0},{id:"cocktail",name:'Готувати "Бандера-Смузі" ("коктейль Молотова")',skills:["Без навичок"],tags:["Оборона"],reccuring:!0},{id:"barricades",name:"Облаштувати завали та барикади",skills:["Без навичок"],tags:["Оборона"],reccuring:!0},{id:"remove-signs",name:"Демонтувати дорожні знаки із вказівниками напрямків руху",skills:["Без навичок"],tags:["Оборона"],reccuring:!0},{id:"arrest-enemies",name:"Затримати ворожих диверсантів",skills:["Військовий"],tags:["Оборона"],reccuring:!0},{id:"fund",name:"Здійснити благодійний внесок",skills:["Без навичок"],tags:["Благодійність"],reccuring:!0},{id:"help",name:"Надати гуманітарну допомогу",skills:["Без навичок"],tags:["Волонтерство"],reccuring:!0},{id:"ddos",name:"Здійснити DDOS-атаку",skills:["Інформаційні технології"],tags:["Цифровий напрямок"],reccuring:!0},{id:"bloggers",name:"Запросити блогерів підтримати Україну",skills:["Без навичок"],tags:["Інформування"],reccuring:!0},{id:"whistleblower",name:"Зафіксувати військові злочини",skills:["Юрист"],tags:["Юридична робота"],reccuring:!0},{id:"block-tg",name:"Заблокувати російські Телеграм-канали",skills:["Інформаційні технології"],tags:["Цифровий напрямок"],reccuring:!0}]},944:function(t,e,r){"use strict";r.r(e);var n=r(31),c=r(139),o=(r(87),r(9),r(4),r(54),r(68),r(67),r(29),r(517),r(38),r(518),r(519),r(520),r(521),r(522),r(523),r(524),r(525),r(526),r(527),r(528),r(529),r(530),r(531),r(532),r(533),r(39),r(289),r(551)),l=r.n(o),f=function(t,e){return t.filter((function(t){return e.includes(t)}))},d=function(t,e){var r=t.map((function(t){return t[e]}));return r=[].concat.apply([],r),(r=(r=Object(c.a)(new Set(r))).filter(Boolean)).sort((function(a,b){return a.localeCompare(b)})),r},v={mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$set(t,"tasks",l.a),t.$set(t,"filtersBySkills",d(l.a,"skills")),t.$set(t,"filtersByTopic",d(l.a,"tags"));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{tasks:[],filtersByTopic:[],filterTopic:[],showTopic:!1,filtersBySkills:[],filterSkills:[],showSkills:!0}},computed:{filtered:function(){var t=this,e=this.tasks,r=this.filterTopic.map((function(e){return t.filtersByTopic[e]})),n=this.filterSkills.map((function(e){return t.filtersBySkills[e]}));return r.length&&(e=e.filter((function(t){return f(r,t.tags).length}))),n.length&&(e=e.filter((function(t){return f(n,t.skills).length}))),e}}},m=r(93),h=r(138),k=r.n(h),w=r(209),S=r(171),y=r(938),_=r(538),T=r(205),O=r(206),C=r(132),x=r(207),j=r(88),R=r(208),I=r(451),E=r(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"pb-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"text-h4 flex-grow-1 pb-0"},[r("div",{staticClass:"fill-height d-flex"},[r("v-icon",{staticClass:"mr-4"},[t._v("mdi-check-outline")]),t._v(" Завдання\n        ")],1)])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",[r("p",[t._v("Долучайтеся до допомоги Україні вже сьогодні!")])])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"pt-0"},[r("v-row",[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"text-justify",attrs:{color:"blue-grey lighten-4",flat:""}},[r("v-card-title",{staticClass:"pb-0"},[t._v("\n              Фільтри\n            ")]),t._v(" "),r("v-card-text",{staticClass:"pa-4 pt-0"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersBySkills.length,expression:"filtersBySkills.length"}],staticClass:"mt-6",on:{click:function(e){t.showSkills=!t.showSkills}}},[r("strong",[t._v("Фільтр за навичками")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showSkills?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showSkills,expression:"showSkills"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterSkills,callback:function(e){t.filterSkills=e},expression:"filterSkills"}},t._l(t.filtersBySkills,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(filter))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.filtersByTopic.length,expression:"filtersByTopic.length"}],staticClass:"mt-6",on:{click:function(e){t.showTopic=!t.showTopic}}},[r("strong",[t._v("Фільтр за видом діяльності")]),t._v(" "),r("v-icon",{staticStyle:{cursor:"pointer",float:"right"}},[t._v(t._s(t.showTopic?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),r("v-scroll-y-transition",[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showTopic,expression:"showTopic"}],staticClass:"w-100",attrs:{dense:"",color:"blue-grey lighten-4"}},[r("v-list-item-group",{attrs:{multiple:""},model:{value:t.filterTopic,callback:function(e){t.filterTopic=e},expression:"filterTopic"}},t._l(t.filtersByTopic,(function(filter){return r("v-list-item",{key:filter,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active;return[r("v-list-item-action",{staticClass:"mr-4 mb-0 mt-0"},[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(filter))])],1)]}}],null,!0)})})),1)],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify pa-0",attrs:{color:"lighten-3",flat:""}},[r("v-card-text",{staticClass:"pa-0"},[0===t.filtered.length?r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n                  На жаль, за вашими фільтрами немає жодного завдання\n                ")])],1):r("v-row",{staticClass:"pt-2"},[r("v-list",{staticClass:"w-100"},[r("v-list-item",{staticClass:"orange lighten-4",attrs:{to:"/task/add-task"}},[[r("v-list-item-action",{staticClass:"text-right",class:{"break-word":t.$vuetify.breakpoint.smAndDown}},[r("v-icon",[t._v("mdi-refresh")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"blue--text"},[t._v("Додати завдання або інформацію")])],1)]],2),t._v(" "),t._l(t.filtered,(function(e,n){return r("v-list-item",{key:"task-"+n,class:{"break-word":t.$vuetify.breakpoint.smAndDown},attrs:{to:"/task/"+e.id}},[[r("v-list-item-action",{staticClass:"text-right"},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.reccuring,expression:"task.reccuring"}]},[t._v("mdi-refresh")]),t._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.reccuring&&!e.completed,expression:"!task.reccuring && !task.completed"}]},[t._v("mdi-check-bold")]),t._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.reccuring&&e.completed,expression:"!task.reccuring && task.completed"}]},[t._v("mdi-check-bold")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"blue--text"},[t._v(t._s(e.name))])],1)]],2)}))],2)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VCard:w.a,VCardText:S.c,VCardTitle:S.d,VCheckbox:y.a,VCol:_.a,VIcon:T.a,VList:O.a,VListItem:C.a,VListItemAction:x.a,VListItemContent:j.a,VListItemGroup:R.a,VListItemTitle:j.c,VRow:I.a,VScrollYTransition:E.c})}}]);