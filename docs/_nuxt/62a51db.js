(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1213:function(t,e,n){"use strict";n.r(e);var r=n(32),o=(n(94),n(525),n(848)),c=n.n(o),f={mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.$set(t,"randomQuote",c.a[Math.floor(Math.random()*c.a.length)]),window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),deferredPrompt=e,t.showAddToDestkop=!0,t.$vuetify.breakpoint.smAndDown||(t.showAddToDestkop=!1),t.$refs.todestkop.addEventListener("click",(function(t){deferredPrompt.prompt(),deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),deferredPrompt=null}))}))}));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{randomQuote:"",showAddToDestkop:!1}},methods:{addToDesktop:function(){}},beforeDestroy:function(){var t=this;window.removeEventListener("beforeinstallprompt",(function(e){e.preventDefault(),deferredPrompt=e,t.showAddToDestkop=!0,t.$vuetify.breakpoint.smAndDown||(t.showAddToDestkop=!1),t.$refs.todestkop.addEventListener("click",(function(t){deferredPrompt.prompt(),deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),deferredPrompt=null}))}))}))}},l=(n(849),n(101)),d=n(145),v=n.n(d),h=n(138),y=n(216),m=n(178),x=n(550),w=n(212),_=n(174),k=n(464),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("v-card",{staticClass:"mx-auto mb-4",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-h4 flex-grow-1"},[n("div",{staticClass:"fill-height d-flex flex-column justify-center text-center"},[t._v("How to resist the Russian war")])])],1),t._v(" "),n("v-card",{staticClass:"mx-auto quote",attrs:{color:"#26c6da",dark:""}},[n("v-img",{staticClass:"white--text d-flex",staticStyle:{"min-height":"250px",height:"250px"},attrs:{src:"/bkg/bullets3.jpg",gradient:"to top right, rgba(0,0,0,.6), rgba(25,32,72,.8)"}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:"",small:t.$vuetify.breakpoint.smAndDown}},[t._v("mdi-format-quote-open")]),t._v(" "),n("span",{staticClass:"font-weight-light",class:{"text-h5":t.$vuetify.breakpoint.mdAndUp}},[t._v("Quote of the day")])],1),t._v(" "),n("v-card-text",{staticClass:"text-h4 font-weight-bold flex-grow-1",class:{"text-h4":t.$vuetify.breakpoint.mdAndUp,"text-h6":t.$vuetify.breakpoint.smAndDown,"lh-15":t.$vuetify.breakpoint.smAndDown}},[n("div",{staticClass:"fill-height d-flex flex-column justify-center text-center"},[t._v(t._s(t.randomQuote))])]),t._v(" "),n("v-card-title")],1)],1),t._v(" "),n("v-card",{staticClass:"logo py-4 d-flex justify-center"}),t._v(" "),n("v-card",{attrs:{flat:""}},[n("v-card-text",{staticClass:"text-center text-h6"},[n("p",[t._v("Ukraine is defending itself and the whole civilized world against the Russian Federation!")]),t._v(" "),n("p",[t._v("We are defending Ukraine!")]),t._v(" "),n("p",[t._v("Everyone can defend others and themselves: in cities, in evacuation, from abroad.")])]),t._v(" "),n("hr"),t._v(" "),n("v-card-text",{staticStyle:{"max-width":"400px",margin:"auto"}},[n("p",[t._v("On the portal, you can find useful links and advice on how to:")]),t._v(" "),n("ul",[n("li",[t._v("defend yourself and your family")]),t._v(" "),n("li",[t._v("help cyber resistance")]),t._v(" "),n("li",[t._v("help financially")]),t._v(" "),n("li",[t._v("join as a volunteer")]),t._v(" "),n("li",[t._v("help the internally displaced")]),t._v(" "),n("li",[t._v("join the Army, Territorial defense, etc.")])]),t._v(" "),n("v-btn",{staticClass:"mb-4",attrs:{dark:"",to:"/tasks",block:"",color:"blue darken-1"}},[t._v("Participate")]),t._v(" "),n("v-btn",{attrs:{dark:"",to:"/volounteer",block:"",color:"blue darken-3"}},[t._v("Donate")])],1),t._v(" "),n("v-card-text",[n("p",{staticClass:"text-h4 text-center"},[t._v("Everyone can resist on different levels!")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showAddToDestkop,expression:"showAddToDestkop"}],ref:"todestkop",attrs:{color:"blue darken-3",dark:""},on:{click:t.addToDesktop}},[t._v("Add to Home Screen")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardText:m.c,VCardTitle:m.d,VCol:x.a,VIcon:w.a,VImg:_.a,VRow:k.a})},472:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},473:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},474:function(t,e,n){var r=n(494)("wks"),o=n(495),c=n(472).Symbol,f="function"==typeof c;(t.exports=function(t){return r[t]||(r[t]=f&&c[t]||(f?c:o)("Symbol."+t))}).store=r},475:function(t,e,n){var r=n(482),o=n(492);t.exports=n(478)?function(object,t,e){return r.f(object,t,o(1,e))}:function(object,t,e){return object[t]=e,object}},476:function(t,e){t.exports={}},477:function(t,e,n){var r=n(483);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},478:function(t,e,n){t.exports=!n(484)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},479:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},480:function(t,e,n){var r=n(503),o=n(481);t.exports=function(t){return r(o(t))}},481:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},482:function(t,e,n){var r=n(477),o=n(506),c=n(507),f=Object.defineProperty;e.f=n(478)?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),o)try{return f(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},483:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},484:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},485:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},486:function(t,e,n){var r=n(494)("keys"),o=n(495);t.exports=function(t){return r[t]||(r[t]=o(t))}},487:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},488:function(t,e,n){"use strict";var r=n(489),o=n(490),c=n(508),f=n(475),l=n(476),d=n(509),v=n(497),h=n(517),y=n(474)("iterator"),m=!([].keys&&"next"in[].keys()),x="keys",w="values",_=function(){return this};t.exports=function(t,e,n,k,S,O,A){d(n,e,k);var T,j,P,C=function(t){if(!m&&t in E)return E[t];switch(t){case x:case w:return function(){return new n(this,t)}}return function(){return new n(this,t)}},L=e+" Iterator",M=S==w,D=!1,E=t.prototype,R=E[y]||E["@@iterator"]||S&&E[S],V=R||C(S),U=S?M?C("entries"):V:void 0,F="Array"==e&&E.entries||R;if(F&&(P=h(F.call(new t)))!==Object.prototype&&P.next&&(v(P,L,!0),r||"function"==typeof P[y]||f(P,y,_)),M&&R&&R.name!==w&&(D=!0,V=function(){return R.call(this)}),r&&!A||!m&&!D&&E[y]||f(E,y,V),l[e]=V,l[L]=_,S)if(T={values:M?V:C(w),keys:O?V:C(x),entries:U},A)for(j in T)j in E||c(E,j,T[j]);else o(o.P+o.F*(m||D),e,T);return T}},489:function(t,e){t.exports=!0},490:function(t,e,n){var r=n(472),o=n(473),c=n(504),f=n(475),l=n(479),d=function(t,e,source){var n,v,h,y=t&d.F,m=t&d.G,x=t&d.S,w=t&d.P,_=t&d.B,k=t&d.W,S=m?o:o[e]||(o[e]={}),O=S.prototype,A=m?r:x?r[e]:(r[e]||{}).prototype;for(n in m&&(source=e),source)(v=!y&&A&&void 0!==A[n])&&l(S,n)||(h=v?A[n]:source[n],S[n]=m&&"function"!=typeof A[n]?source[n]:_&&v?c(h,r):k&&A[n]==h?function(t){var e=function(a,b,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,e)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):w&&"function"==typeof h?c(Function.call,h):h,w&&((S.virtual||(S.virtual={}))[n]=h,t&d.R&&O&&!O[n]&&f(O,n,h)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,t.exports=d},491:function(t,e,n){var r=n(483),o=n(472).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},492:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},493:function(t,e,n){var r=n(512),o=n(496);t.exports=Object.keys||function(t){return r(t,o)}},494:function(t,e,n){var r=n(473),o=n(472),c="__core-js_shared__",f=o[c]||(o[c]={});(t.exports=function(t,e){return f[t]||(f[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(489)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},495:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},496:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},497:function(t,e,n){var r=n(482).f,o=n(479),c=n(474)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},498:function(t,e,n){var r=n(481);t.exports=function(t){return Object(r(t))}},499:function(t,e,n){n(500);for(var r=n(472),o=n(475),c=n(476),f=n(474)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<l.length;i++){var d=l[i],v=r[d],h=v&&v.prototype;h&&!h[f]&&o(h,f,d),c[d]=c.Array}},500:function(t,e,n){"use strict";var r=n(501),o=n(502),c=n(476),f=n(480);t.exports=n(488)(Array,"Array",(function(t,e){this._t=f(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},501:function(t,e){t.exports=function(){}},502:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},503:function(t,e,n){var r=n(487);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},504:function(t,e,n){var r=n(505);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(a){return t.call(e,a)};case 2:return function(a,b){return t.call(e,a,b)};case 3:return function(a,b,n){return t.call(e,a,b,n)}}return function(){return t.apply(e,arguments)}}},505:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},506:function(t,e,n){t.exports=!n(478)&&!n(484)((function(){return 7!=Object.defineProperty(n(491)("div"),"a",{get:function(){return 7}}).a}))},507:function(t,e,n){var r=n(483);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},508:function(t,e,n){t.exports=n(475)},509:function(t,e,n){"use strict";var r=n(510),o=n(492),c=n(497),f={};n(475)(f,n(474)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(f,{next:o(1,n)}),c(t,e+" Iterator")}},510:function(t,e,n){var r=n(477),o=n(511),c=n(496),f=n(486)("IE_PROTO"),l=function(){},d=function(){var t,iframe=n(491)("iframe"),i=c.length;for(iframe.style.display="none",n(516).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),d=t.F;i--;)delete d.prototype[c[i]];return d()};t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[f]=t):n=d(),void 0===e?n:o(n,e)}},511:function(t,e,n){var r=n(482),o=n(477),c=n(493);t.exports=n(478)?Object.defineProperties:function(t,e){o(t);for(var n,f=c(e),l=f.length,i=0;l>i;)r.f(t,n=f[i++],e[n]);return t}},512:function(t,e,n){var r=n(479),o=n(480),c=n(513)(!1),f=n(486)("IE_PROTO");t.exports=function(object,t){var e,n=o(object),i=0,l=[];for(e in n)e!=f&&r(n,e)&&l.push(e);for(;t.length>i;)r(n,e=t[i++])&&(~c(l,e)||l.push(e));return l}},513:function(t,e,n){var r=n(480),o=n(514),c=n(515);t.exports=function(t){return function(e,n,f){var l,d=r(e),v=o(d.length),h=c(f,v);if(t&&n!=n){for(;v>h;)if((l=d[h++])!=l)return!0}else for(;v>h;h++)if((t||h in d)&&d[h]===n)return t||h||0;return!t&&-1}}},514:function(t,e,n){var r=n(485),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},515:function(t,e,n){var r=n(485),o=Math.max,c=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):c(t,e)}},516:function(t,e,n){var r=n(472).document;t.exports=r&&r.documentElement},517:function(t,e,n){var r=n(479),o=n(498),c=n(486)("IE_PROTO"),f=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},518:function(t,e,n){"use strict";var r=n(519)(!0);n(488)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},519:function(t,e,n){var r=n(485),o=n(481);t.exports=function(t){return function(e,n){var a,b,s=String(o(e)),i=r(n),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},520:function(t,e,n){var r=n(477),o=n(521);t.exports=n(473).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},521:function(t,e,n){var r=n(522),o=n(474)("iterator"),c=n(476);t.exports=n(473).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[r(t)]}},522:function(t,e,n){var r=n(487),o=n(474)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:c?r(e):"Object"==(f=r(e))&&"function"==typeof e.callee?"Arguments":f}},523:function(t,e,n){var r=n(498),o=n(493);n(524)("keys",(function(){return function(t){return o(r(t))}}))},524:function(t,e,n){var r=n(490),o=n(473),c=n(484);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],f={};f[t]=e(n),r(r.S+r.F*c((function(){n(1)})),"Object",f)}},526:function(t,e,n){n(499),n(518),t.exports=n(520)},527:function(t,e,n){n(523),t.exports=n(473).Object.keys},528:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},578:function(t,e,n){var content=n(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("49908d15",content,!0,{sourceMap:!1})},848:function(t,e){t.exports=["Russian ship, go f*ck yourself!","Diya is currently preparing a new service for Russian occupants – e-Grave","As a result of a lightning military special operation, the armed forces of Russia freed their country from its economy","What does one call the Russian special forces? “Chicken Kyiv!”","The See-Kyiv-And-Die tourist promotion is underway. Cocktails are on the house.","On seeing suspicious men, smart Kyivites asked them how to get to Monobank","KEEP CALM AND SUPPORT THE ARMED FORCES OF UKRAINE!","Mayor Sadovyi appealed to Lvivites to make Molotov cocktails and suggested calling them Bandera smoothies","Business media editors now need to start using a logarithmic scale to draw the USD to RUB rate"]},849:function(t,e,n){"use strict";n(578)},850:function(t,e,n){var r=n(18)(!1);r.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}.lh-15{line-height:1.5rem!important}",""]),t.exports=r}}]);