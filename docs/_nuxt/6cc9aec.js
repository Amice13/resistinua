(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{457:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},458:function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},459:function(t,n,e){var r=e(479)("wks"),o=e(480),c=e(457).Symbol,f="function"==typeof c;(t.exports=function(t){return r[t]||(r[t]=f&&c[t]||(f?c:o)("Symbol."+t))}).store=r},460:function(t,n,e){var r=e(467),o=e(477);t.exports=e(463)?function(object,t,n){return r.f(object,t,o(1,n))}:function(object,t,n){return object[t]=n,object}},461:function(t,n){t.exports={}},462:function(t,n,e){var r=e(468);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},463:function(t,n,e){t.exports=!e(469)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},464:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},465:function(t,n,e){var r=e(488),o=e(466);t.exports=function(t){return r(o(t))}},466:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},467:function(t,n,e){var r=e(462),o=e(491),c=e(492),f=Object.defineProperty;n.f=e(463)?Object.defineProperty:function(t,n,e){if(r(t),n=c(n,!0),r(e),o)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},468:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},469:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},470:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},471:function(t,n,e){var r=e(479)("keys"),o=e(480);t.exports=function(t){return r[t]||(r[t]=o(t))}},472:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},473:function(t,n,e){"use strict";var r=e(474),o=e(475),c=e(493),f=e(460),l=e(461),v=e(494),d=e(482),y=e(502),S=e(459)("iterator"),h=!([].keys&&"next"in[].keys()),A="keys",m="values",x=function(){return this};t.exports=function(t,n,e,B,I,T,w){v(e,n,B);var O,N,K,R=function(t){if(!h&&t in _)return _[t];switch(t){case A:case m:return function(){return new e(this,t)}}return function(){return new e(this,t)}},C=n+" Iterator",k=I==m,P=!1,_=t.prototype,j=_[S]||_["@@iterator"]||I&&_[I],E=j||R(I),U=I?k?R("entries"):E:void 0,L="Array"==n&&_.entries||j;if(L&&(K=y(L.call(new t)))!==Object.prototype&&K.next&&(d(K,C,!0),r||"function"==typeof K[S]||f(K,S,x)),k&&j&&j.name!==m&&(P=!0,E=function(){return j.call(this)}),r&&!w||!h&&!P&&_[S]||f(_,S,E),l[n]=E,l[C]=x,I)if(O={values:k?E:R(m),keys:T?E:R(A),entries:U},w)for(N in O)N in _||c(_,N,O[N]);else o(o.P+o.F*(h||P),n,O);return O}},474:function(t,n){t.exports=!0},475:function(t,n,e){var r=e(457),o=e(458),c=e(489),f=e(460),l=e(464),v=function(t,n,source){var e,d,y,S=t&v.F,h=t&v.G,A=t&v.S,m=t&v.P,x=t&v.B,B=t&v.W,I=h?o:o[n]||(o[n]={}),T=I.prototype,w=h?r:A?r[n]:(r[n]||{}).prototype;for(e in h&&(source=n),source)(d=!S&&w&&void 0!==w[e])&&l(I,e)||(y=d?w[e]:source[e],I[e]=h&&"function"!=typeof w[e]?source[e]:x&&d?c(y,r):B&&w[e]==y?function(t){var n=function(a,b,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,n)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(y):m&&"function"==typeof y?c(Function.call,y):y,m&&((I.virtual||(I.virtual={}))[e]=y,t&v.R&&T&&!T[e]&&f(T,e,y)))};v.F=1,v.G=2,v.S=4,v.P=8,v.B=16,v.W=32,v.U=64,v.R=128,t.exports=v},476:function(t,n,e){var r=e(468),o=e(457).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},477:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},478:function(t,n,e){var r=e(497),o=e(481);t.exports=Object.keys||function(t){return r(t,o)}},479:function(t,n,e){var r=e(458),o=e(457),c="__core-js_shared__",f=o[c]||(o[c]={});(t.exports=function(t,n){return f[t]||(f[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(474)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},480:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},481:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},482:function(t,n,e){var r=e(467).f,o=e(464),c=e(459)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,c)&&r(t,c,{configurable:!0,value:n})}},483:function(t,n,e){var r=e(466);t.exports=function(t){return Object(r(t))}},484:function(t,n,e){e(485);for(var r=e(457),o=e(460),c=e(461),f=e(459)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<l.length;i++){var v=l[i],d=r[v],y=d&&d.prototype;y&&!y[f]&&o(y,f,v),c[v]=c.Array}},485:function(t,n,e){"use strict";var r=e(486),o=e(487),c=e(461),f=e(465);t.exports=e(473)(Array,"Array",(function(t,n){this._t=f(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},486:function(t,n){t.exports=function(){}},487:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},488:function(t,n,e){var r=e(472);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},489:function(t,n,e){var r=e(490);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(a){return t.call(n,a)};case 2:return function(a,b){return t.call(n,a,b)};case 3:return function(a,b,e){return t.call(n,a,b,e)}}return function(){return t.apply(n,arguments)}}},490:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},491:function(t,n,e){t.exports=!e(463)&&!e(469)((function(){return 7!=Object.defineProperty(e(476)("div"),"a",{get:function(){return 7}}).a}))},492:function(t,n,e){var r=e(468);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},493:function(t,n,e){t.exports=e(460)},494:function(t,n,e){"use strict";var r=e(495),o=e(477),c=e(482),f={};e(460)(f,e(459)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(f,{next:o(1,e)}),c(t,n+" Iterator")}},495:function(t,n,e){var r=e(462),o=e(496),c=e(481),f=e(471)("IE_PROTO"),l=function(){},v=function(){var t,iframe=e(476)("iframe"),i=c.length;for(iframe.style.display="none",e(501).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),v=t.F;i--;)delete v.prototype[c[i]];return v()};t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=r(t),e=new l,l.prototype=null,e[f]=t):e=v(),void 0===n?e:o(e,n)}},496:function(t,n,e){var r=e(467),o=e(462),c=e(478);t.exports=e(463)?Object.defineProperties:function(t,n){o(t);for(var e,f=c(n),l=f.length,i=0;l>i;)r.f(t,e=f[i++],n[e]);return t}},497:function(t,n,e){var r=e(464),o=e(465),c=e(498)(!1),f=e(471)("IE_PROTO");t.exports=function(object,t){var n,e=o(object),i=0,l=[];for(n in e)n!=f&&r(e,n)&&l.push(n);for(;t.length>i;)r(e,n=t[i++])&&(~c(l,n)||l.push(n));return l}},498:function(t,n,e){var r=e(465),o=e(499),c=e(500);t.exports=function(t){return function(n,e,f){var l,v=r(n),d=o(v.length),y=c(f,d);if(t&&e!=e){for(;d>y;)if((l=v[y++])!=l)return!0}else for(;d>y;y++)if((t||y in v)&&v[y]===e)return t||y||0;return!t&&-1}}},499:function(t,n,e){var r=e(470),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},500:function(t,n,e){var r=e(470),o=Math.max,c=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):c(t,n)}},501:function(t,n,e){var r=e(457).document;t.exports=r&&r.documentElement},502:function(t,n,e){var r=e(464),o=e(483),c=e(471)("IE_PROTO"),f=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},503:function(t,n,e){"use strict";var r=e(504)(!0);e(473)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},504:function(t,n,e){var r=e(470),o=e(466);t.exports=function(t){return function(n,e){var a,b,s=String(o(n)),i=r(e),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},505:function(t,n,e){var r=e(462),o=e(506);t.exports=e(458).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},506:function(t,n,e){var r=e(507),o=e(459)("iterator"),c=e(461);t.exports=e(458).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[r(t)]}},507:function(t,n,e){var r=e(472),o=e(459)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:c?r(n):"Object"==(f=r(n))&&"function"==typeof n.callee?"Arguments":f}},508:function(t,n,e){var r=e(483),o=e(478);e(509)("keys",(function(){return function(t){return o(r(t))}}))},509:function(t,n,e){var r=e(475),o=e(458),c=e(469);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],f={};f[t]=n(e),r(r.S+r.F*c((function(){e(1)})),"Object",f)}},511:function(t,n,e){e(484),e(503),t.exports=e(505)},512:function(t,n,e){e(508),t.exports=e(458).Object.keys},513:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},607:function(t,n,e){var content=e(840);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("10e9eef2",content,!0,{sourceMap:!1})},608:function(t,n,e){var content=e(842);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("3b162648",content,!0,{sourceMap:!1})},839:function(t,n,e){"use strict";e(607)},840:function(t,n,e){var r=e(18)(!1);r.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=r},841:function(t,n,e){"use strict";e(608)},842:function(t,n,e){var r=e(18)(!1);r.push([t.i,'img[src$="#w-100"]{width:100%}.mw-100 *{max-width:100%}',""]),t.exports=r},930:function(t,n,e){"use strict";e.r(n);var r=e(29),o=(e(77),e(510)),c={components:{VueMarkdown:e.n(o).a},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{fab:!1}},computed:{text:function(){return"\nМОЗ України спільно з товариством Червоного Хреста в Україні відкрили спеціальний рахунок для допомоги закладам охорони здоров'я.\n\nВи можете здійснити на їх користь внесок прямо сьогодні.\n\n## У гривні:\n\n* 01024, м. Київ, вул. Пушкінська, 30\n* р/р UA613510050000026003879001526 в АТ «Укрсиббанк»\n* МФО 351005\n* Код ЄДРПОУ 00016797\n* Призначення: на медицину\n\n## У доларах США:\n\n* Legal entity: URCS\n* Enterprise code: 00016797\n* Currency of account: USD\n* Account number IBAN: UA983510050000026004271658800\n* Bank name: JOINT STOCK COMPANY «UKRBSIBBANK»\n* Beneficiary bank (JSC «UKRBSIBBANK»): 020061151200138 UKRBSIBBANK\n* ANDRIIVSKA STREET 2/21. KYIV, UKRAINE\n* SWIFT code: KHABUA2K\n* Intermediary bank: BNP PARIBAS U.S.A. -New York Branch\n* New York, USA\n* SWIFT- код: BNPAUS3N\n\n## У євро: \n\n* Legal entity: URCS\n* Enterprise code:  00016797\n* Currency of account: EUR\n* Account number IBAN: UA983510050000026004271658800\n* Bank name: JOINT STOCK COMPANY “UKRBSIBBANK”\n* Beneficiary bank (JSC “UKRBSIBBANK”): 07205696\n* UKRBSIBBANK\n* ANDRIIVSKA STREET 2/21, KYIV, UKRAINE\n* SWIFT code: KHABUA2K\n* Intermediary bank: BNP PARIBAS SA \n* Paris, FRANC\n* SWIFT- код: BNPAFRPP\n\n## У швейцарських франках:\n\n* Legal entity: URCS\n* Enterprise code: 00016797\n* Currency of account: CHF\n* Account number IBAN: UA983510050000026004271658800\nB* ank name: JOINT STOCK COMPANY “UKRBSIBBANK”\n* Beneficiary bank (JSC “UKRBSIBBANK”): 256446/1A\n* UKRBSIBBANK\n* ANDRIIVSKA STREET 2/21, KYIV, UKRAINE\n* SWIFT code: KHABUA2K\n* Intermediary bank: BNP PARIBAS (SUISSE) SA\n* Geneva, SWITZERLAND\n* SWIFT- код: BPPBCHGG\n\n## У фунтах стерлінгів:\n\n* Legal entity: URCS\n* Enterprise code: 00016797\n* Currency of account: GBP\n* Account number IBAN: UA903510050000026008879082023\n* Bank name: JOINT STOCK COMPANY “UKRBSIBBANK”\n* Beneficiary bank (JSC “UKRBSIBBANK”): 10947113\n* UKRBSIBBANK\n* ANDRIIVSKA STREET 2/21, KYIV, UKRAINE\n* SWIFT code: KHABUA2K\n* Intermediary bank: CITIBANK NA\n* London, GREAT BRITAIN\n* SWIFT- код: CITIGB2L\n\n[Джерело](https://moz.gov.ua/article/news/moz-ta-chervonij-hrest-vidkrivajut-rahunok-dlja-dopomogi-medikam)\n\n"}}},f=(e(839),e(841),e(93)),l=e(138),v=e.n(l),d=e(209),y=e(171),S=e(543),h=e(205),A=e(450),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-row",{staticClass:"mb-0",attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"mb-0",attrs:{cols:"12",sm:"10",md:"8"}},[e("v-card",{staticClass:"mx-auto mb-0",attrs:{flat:""}},[e("v-card-text",{staticClass:"text-h4 flex-grow-1 mb-0 pb-0"},[e("div",{staticClass:"fill-height d-flex"},[e("v-icon",{staticClass:"mr-4"},[t._v("mdi-check-outline")]),t._v(" Здійснити внесок на потреби Червоного Хреста\n        ")],1)])],1)],1)],1),t._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[e("v-card",{staticClass:"mx-auto mb-4 text-justify mw-100",attrs:{flat:""}},[e("v-card-text",[e("vue-markdown",[t._v("\n          "+t._s(t.text)+"\n        ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VCard:d.a,VCardText:y.c,VCol:S.a,VIcon:h.a,VRow:A.a})}}]);