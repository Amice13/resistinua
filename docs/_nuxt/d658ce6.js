(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1212:function(t,e,r){"use strict";r.r(e);var n=r(32),c=(r(94),{mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{}}}),o=r(101),l=r(145),f=r.n(l),d=r(216),v=r(178),O=r(550),j=r(212),m=r(464),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"pb-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto ma-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"text-h4 flex-grow-1 pb-0"},[r("div",{staticClass:"fill-height d-flex"},[r("v-icon",{staticClass:"mr-4"},[t._v("mdi-earth")]),t._v(" Світ\n        ")],1)])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"text-justify ma-0",attrs:{flat:""}},[r("v-card-text",[t._v("\n        Світ об'єднується на підтримку України у війні розв'язаній Росією. Надходить фінансова, санкційна та військова допомога.\n\n      ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:d.a,VCardText:v.c,VCol:O.a,VIcon:j.a,VRow:m.a})},550:function(t,e,r){"use strict";r(8),r(11),r(12),r(13);var n=r(3),c=(r(4),r(24),r(10),r(22),r(61),r(297),r(38),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(41),r(40),r(9),r(74),r(228),r(2)),o=r(75),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=v.reduce((function(t,e){return t["offset"+Object(l.v)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.v)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(O),offset:Object.keys(j),order:Object.keys(m)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=c.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var n=r[t],c=w(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),h.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})}}]);