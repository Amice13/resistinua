(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1059:function(t,n,r){"use strict";r(680)},1060:function(t,n,r){var e=r(18)(!1);e.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=e},1061:function(t,n,r){"use strict";r(681)},1062:function(t,n,r){var e=r(18)(!1);e.push([t.i,'img[src$="#w-100"]{width:100%}.remove-targets img{display:inline-block;width:33%}',""]),t.exports=e},1248:function(t,n,r){"use strict";r.r(n);var e=r(32),o=(r(94),r(525)),c={components:{VueMarkdown:r.n(o).a},mounted:function(){return Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{fab:!1}},computed:{text:function(){return"\nIf you can translate, proofread, or write texts in languages other than Ukrainian, you can join the [Translations for Ukraine Telegram channel](https://t.me/TranslatorsForUkraine) (“Переклади для України”).\n\n[Join now](https://t.me/TranslatorsForUkraine#btn-center)\n"}}},f=(r(1059),r(1061),r(101)),l=r(145),v=r.n(l),d=r(216),y=r(178),h=r(552),x=r(212),m=r(464),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("v-row",{staticClass:"mb-0",attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"mb-0",attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto mb-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"text-h4 flex-grow-1 mb-0 pb-0"},[r("div",{staticClass:"fill-height d-flex"},[r("v-icon",{staticClass:"mr-4"},[t._v("mdi-check-outline")]),t._v(" Help with translation, proofreading, writing texts\n        ")],1)])],1)],1)],1),t._v(" "),r("v-row",{staticClass:"mt-0",attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"mt-0",attrs:{cols:"12",sm:"10",md:"8"}},[r("v-card",{staticClass:"mx-auto mb-4 text-justify mw-100 mt-0",attrs:{flat:""}},[r("v-card-text",{staticClass:"remove-targets"},[r("vue-markdown",[t._v("\n          "+t._s(t.text)+"\n        ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VCard:d.a,VCardText:y.c,VCol:h.a,VIcon:x.a,VRow:m.a})},472:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},473:function(t,n){var r=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=r)},474:function(t,n,r){var e=r(494)("wks"),o=r(495),c=r(472).Symbol,f="function"==typeof c;(t.exports=function(t){return e[t]||(e[t]=f&&c[t]||(f?c:o)("Symbol."+t))}).store=e},475:function(t,n,r){var e=r(482),o=r(492);t.exports=r(478)?function(object,t,n){return e.f(object,t,o(1,n))}:function(object,t,n){return object[t]=n,object}},476:function(t,n){t.exports={}},477:function(t,n,r){var e=r(483);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},478:function(t,n,r){t.exports=!r(484)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},479:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},480:function(t,n,r){var e=r(503),o=r(481);t.exports=function(t){return e(o(t))}},481:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},482:function(t,n,r){var e=r(477),o=r(506),c=r(507),f=Object.defineProperty;n.f=r(478)?Object.defineProperty:function(t,n,r){if(e(t),n=c(n,!0),e(r),o)try{return f(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},483:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},484:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},485:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},486:function(t,n,r){var e=r(494)("keys"),o=r(495);t.exports=function(t){return e[t]||(e[t]=o(t))}},487:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},488:function(t,n,r){"use strict";var e=r(489),o=r(490),c=r(508),f=r(475),l=r(476),v=r(509),d=r(497),y=r(517),h=r(474)("iterator"),x=!([].keys&&"next"in[].keys()),m="keys",w="values",_=function(){return this};t.exports=function(t,n,r,O,S,j,k){v(r,n,O);var T,L,M,C=function(t){if(!x&&t in V)return V[t];switch(t){case m:case w:return function(){return new r(this,t)}}return function(){return new r(this,t)}},P=n+" Iterator",E=S==w,A=!1,V=t.prototype,F=V[h]||V["@@iterator"]||S&&V[S],I=F||C(S),R=S?E?C("entries"):I:void 0,G="Array"==n&&V.entries||F;if(G&&(M=y(G.call(new t)))!==Object.prototype&&M.next&&(d(M,P,!0),e||"function"==typeof M[h]||f(M,h,_)),E&&F&&F.name!==w&&(A=!0,I=function(){return F.call(this)}),e&&!k||!x&&!A&&V[h]||f(V,h,I),l[n]=I,l[P]=_,S)if(T={values:E?I:C(w),keys:j?I:C(m),entries:R},k)for(L in T)L in V||c(V,L,T[L]);else o(o.P+o.F*(x||A),n,T);return T}},489:function(t,n){t.exports=!0},490:function(t,n,r){var e=r(472),o=r(473),c=r(504),f=r(475),l=r(479),v=function(t,n,source){var r,d,y,h=t&v.F,x=t&v.G,m=t&v.S,w=t&v.P,_=t&v.B,O=t&v.W,S=x?o:o[n]||(o[n]={}),j=S.prototype,k=x?e:m?e[n]:(e[n]||{}).prototype;for(r in x&&(source=n),source)(d=!h&&k&&void 0!==k[r])&&l(S,r)||(y=d?k[r]:source[r],S[r]=x&&"function"!=typeof k[r]?source[r]:_&&d?c(y,e):O&&k[r]==y?function(t){var n=function(a,b,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,n)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(y):w&&"function"==typeof y?c(Function.call,y):y,w&&((S.virtual||(S.virtual={}))[r]=y,t&v.R&&j&&!j[r]&&f(j,r,y)))};v.F=1,v.G=2,v.S=4,v.P=8,v.B=16,v.W=32,v.U=64,v.R=128,t.exports=v},491:function(t,n,r){var e=r(483),o=r(472).document,c=e(o)&&e(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},492:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},493:function(t,n,r){var e=r(512),o=r(496);t.exports=Object.keys||function(t){return e(t,o)}},494:function(t,n,r){var e=r(473),o=r(472),c="__core-js_shared__",f=o[c]||(o[c]={});(t.exports=function(t,n){return f[t]||(f[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(489)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},495:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},496:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},497:function(t,n,r){var e=r(482).f,o=r(479),c=r(474)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,c)&&e(t,c,{configurable:!0,value:n})}},498:function(t,n,r){var e=r(481);t.exports=function(t){return Object(e(t))}},499:function(t,n,r){r(500);for(var e=r(472),o=r(475),c=r(476),f=r(474)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<l.length;i++){var v=l[i],d=e[v],y=d&&d.prototype;y&&!y[f]&&o(y,f,v),c[v]=c.Array}},500:function(t,n,r){"use strict";var e=r(501),o=r(502),c=r(476),f=r(480);t.exports=r(488)(Array,"Array",(function(t,n){this._t=f(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])}),"values"),c.Arguments=c.Array,e("keys"),e("values"),e("entries")},501:function(t,n){t.exports=function(){}},502:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},503:function(t,n,r){var e=r(487);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},504:function(t,n,r){var e=r(505);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(a){return t.call(n,a)};case 2:return function(a,b){return t.call(n,a,b)};case 3:return function(a,b,r){return t.call(n,a,b,r)}}return function(){return t.apply(n,arguments)}}},505:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},506:function(t,n,r){t.exports=!r(478)&&!r(484)((function(){return 7!=Object.defineProperty(r(491)("div"),"a",{get:function(){return 7}}).a}))},507:function(t,n,r){var e=r(483);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},508:function(t,n,r){t.exports=r(475)},509:function(t,n,r){"use strict";var e=r(510),o=r(492),c=r(497),f={};r(475)(f,r(474)("iterator"),(function(){return this})),t.exports=function(t,n,r){t.prototype=e(f,{next:o(1,r)}),c(t,n+" Iterator")}},510:function(t,n,r){var e=r(477),o=r(511),c=r(496),f=r(486)("IE_PROTO"),l=function(){},v=function(){var t,iframe=r(491)("iframe"),i=c.length;for(iframe.style.display="none",r(516).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),v=t.F;i--;)delete v.prototype[c[i]];return v()};t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=e(t),r=new l,l.prototype=null,r[f]=t):r=v(),void 0===n?r:o(r,n)}},511:function(t,n,r){var e=r(482),o=r(477),c=r(493);t.exports=r(478)?Object.defineProperties:function(t,n){o(t);for(var r,f=c(n),l=f.length,i=0;l>i;)e.f(t,r=f[i++],n[r]);return t}},512:function(t,n,r){var e=r(479),o=r(480),c=r(513)(!1),f=r(486)("IE_PROTO");t.exports=function(object,t){var n,r=o(object),i=0,l=[];for(n in r)n!=f&&e(r,n)&&l.push(n);for(;t.length>i;)e(r,n=t[i++])&&(~c(l,n)||l.push(n));return l}},513:function(t,n,r){var e=r(480),o=r(514),c=r(515);t.exports=function(t){return function(n,r,f){var l,v=e(n),d=o(v.length),y=c(f,d);if(t&&r!=r){for(;d>y;)if((l=v[y++])!=l)return!0}else for(;d>y;y++)if((t||y in v)&&v[y]===r)return t||y||0;return!t&&-1}}},514:function(t,n,r){var e=r(485),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},515:function(t,n,r){var e=r(485),o=Math.max,c=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):c(t,n)}},516:function(t,n,r){var e=r(472).document;t.exports=e&&e.documentElement},517:function(t,n,r){var e=r(479),o=r(498),c=r(486)("IE_PROTO"),f=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},518:function(t,n,r){"use strict";var e=r(519)(!0);r(488)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})}))},519:function(t,n,r){var e=r(485),o=r(481);t.exports=function(t){return function(n,r){var a,b,s=String(o(n)),i=e(r),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},520:function(t,n,r){var e=r(477),o=r(521);t.exports=r(473).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},521:function(t,n,r){var e=r(522),o=r(474)("iterator"),c=r(476);t.exports=r(473).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[e(t)]}},522:function(t,n,r){var e=r(487),o=r(474)("toStringTag"),c="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:c?e(n):"Object"==(f=e(n))&&"function"==typeof n.callee?"Arguments":f}},523:function(t,n,r){var e=r(498),o=r(493);r(524)("keys",(function(){return function(t){return o(e(t))}}))},524:function(t,n,r){var e=r(490),o=r(473),c=r(484);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],f={};f[t]=n(r),e(e.S+e.F*c((function(){r(1)})),"Object",f)}},526:function(t,n,r){r(499),r(518),t.exports=r(520)},527:function(t,n,r){r(523),t.exports=r(473).Object.keys},528:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},680:function(t,n,r){var content=r(1060);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("aef58214",content,!0,{sourceMap:!1})},681:function(t,n,r){var content=r(1062);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1dff6537",content,!0,{sourceMap:!1})}}]);