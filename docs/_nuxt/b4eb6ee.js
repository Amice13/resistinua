(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1003:function(t,n,e){"use strict";e(647)},1004:function(t,n,e){var r=e(18)(!1);r.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=r},1005:function(t,n,e){"use strict";e(648)},1006:function(t,n,e){var r=e(18)(!1);r.push([t.i,'img[src$="#w-100"]{width:100%}.mw-100 *{max-width:100%}',""]),t.exports=r},1255:function(t,n,e){"use strict";e.r(n);var r=e(32),o=(e(94),e(525)),c={components:{VueMarkdown:e.n(o).a},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{fab:!1}},computed:{text:function(){return"\nЯкщо у Вас є необхідність евакуюватися, але немає можливості, залиште заявку на ресурсі Ukraine Ua:\n\nТакож ви можете отримати додаткову інформацію про евакуацію на сторінці [Єдиної платформи в Notion](https://ukraineisforever.notion.site/61c28261da6041b884fb305c8cc2234e).\n\n[Подати заявку](https://www.ukrainenow.org/refuge#btn-center)\n"}}},f=(e(1003),e(1005),e(101)),l=e(145),v=e.n(l),d=e(216),y=e(178),h=e(550),x=e(212),m=e(464),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-row",{staticClass:"mb-0",attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"mb-0",attrs:{cols:"12",sm:"10",md:"8"}},[e("v-card",{staticClass:"mx-auto mb-0",attrs:{flat:""}},[e("v-card-text",{staticClass:"text-h4 flex-grow-1 mb-0 pb-0"},[e("div",{staticClass:"fill-height d-flex"},[e("v-icon",{staticClass:"mr-4"},[t._v("mdi-check-outline")]),t._v(" Отримати допомогу із переміщенням\n        ")],1)])],1)],1)],1),t._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[e("v-card",{staticClass:"mx-auto mb-4 text-justify mw-100",attrs:{flat:""}},[e("v-card-text",[e("vue-markdown",[t._v("\n          "+t._s(t.text)+"\n        ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VCard:d.a,VCardText:y.c,VCol:h.a,VIcon:x.a,VRow:m.a})},472:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},473:function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},474:function(t,n,e){var r=e(494)("wks"),o=e(495),c=e(472).Symbol,f="function"==typeof c;(t.exports=function(t){return r[t]||(r[t]=f&&c[t]||(f?c:o)("Symbol."+t))}).store=r},475:function(t,n,e){var r=e(482),o=e(492);t.exports=e(478)?function(object,t,n){return r.f(object,t,o(1,n))}:function(object,t,n){return object[t]=n,object}},476:function(t,n){t.exports={}},477:function(t,n,e){var r=e(483);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},478:function(t,n,e){t.exports=!e(484)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},479:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},480:function(t,n,e){var r=e(503),o=e(481);t.exports=function(t){return r(o(t))}},481:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},482:function(t,n,e){var r=e(477),o=e(506),c=e(507),f=Object.defineProperty;n.f=e(478)?Object.defineProperty:function(t,n,e){if(r(t),n=c(n,!0),r(e),o)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},483:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},484:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},485:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},486:function(t,n,e){var r=e(494)("keys"),o=e(495);t.exports=function(t){return r[t]||(r[t]=o(t))}},487:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},488:function(t,n,e){"use strict";var r=e(489),o=e(490),c=e(508),f=e(475),l=e(476),v=e(509),d=e(497),y=e(517),h=e(474)("iterator"),x=!([].keys&&"next"in[].keys()),m="keys",w="values",_=function(){return this};t.exports=function(t,n,e,O,S,j,k){v(e,n,O);var L,M,T,P=function(t){if(!x&&t in V)return V[t];switch(t){case m:case w:return function(){return new e(this,t)}}return function(){return new e(this,t)}},C=n+" Iterator",E=S==w,A=!1,V=t.prototype,R=V[h]||V["@@iterator"]||S&&V[S],I=R||P(S),F=S?E?P("entries"):I:void 0,G="Array"==n&&V.entries||R;if(G&&(T=y(G.call(new t)))!==Object.prototype&&T.next&&(d(T,C,!0),r||"function"==typeof T[h]||f(T,h,_)),E&&R&&R.name!==w&&(A=!0,I=function(){return R.call(this)}),r&&!k||!x&&!A&&V[h]||f(V,h,I),l[n]=I,l[C]=_,S)if(L={values:E?I:P(w),keys:j?I:P(m),entries:F},k)for(M in L)M in V||c(V,M,L[M]);else o(o.P+o.F*(x||A),n,L);return L}},489:function(t,n){t.exports=!0},490:function(t,n,e){var r=e(472),o=e(473),c=e(504),f=e(475),l=e(479),v=function(t,n,source){var e,d,y,h=t&v.F,x=t&v.G,m=t&v.S,w=t&v.P,_=t&v.B,O=t&v.W,S=x?o:o[n]||(o[n]={}),j=S.prototype,k=x?r:m?r[n]:(r[n]||{}).prototype;for(e in x&&(source=n),source)(d=!h&&k&&void 0!==k[e])&&l(S,e)||(y=d?k[e]:source[e],S[e]=x&&"function"!=typeof k[e]?source[e]:_&&d?c(y,r):O&&k[e]==y?function(t){var n=function(a,b,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,n)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(y):w&&"function"==typeof y?c(Function.call,y):y,w&&((S.virtual||(S.virtual={}))[e]=y,t&v.R&&j&&!j[e]&&f(j,e,y)))};v.F=1,v.G=2,v.S=4,v.P=8,v.B=16,v.W=32,v.U=64,v.R=128,t.exports=v},491:function(t,n,e){var r=e(483),o=e(472).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},492:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},493:function(t,n,e){var r=e(512),o=e(496);t.exports=Object.keys||function(t){return r(t,o)}},494:function(t,n,e){var r=e(473),o=e(472),c="__core-js_shared__",f=o[c]||(o[c]={});(t.exports=function(t,n){return f[t]||(f[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(489)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},495:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},496:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},497:function(t,n,e){var r=e(482).f,o=e(479),c=e(474)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,c)&&r(t,c,{configurable:!0,value:n})}},498:function(t,n,e){var r=e(481);t.exports=function(t){return Object(r(t))}},499:function(t,n,e){e(500);for(var r=e(472),o=e(475),c=e(476),f=e(474)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<l.length;i++){var v=l[i],d=r[v],y=d&&d.prototype;y&&!y[f]&&o(y,f,v),c[v]=c.Array}},500:function(t,n,e){"use strict";var r=e(501),o=e(502),c=e(476),f=e(480);t.exports=e(488)(Array,"Array",(function(t,n){this._t=f(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},501:function(t,n){t.exports=function(){}},502:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},503:function(t,n,e){var r=e(487);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},504:function(t,n,e){var r=e(505);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(a){return t.call(n,a)};case 2:return function(a,b){return t.call(n,a,b)};case 3:return function(a,b,e){return t.call(n,a,b,e)}}return function(){return t.apply(n,arguments)}}},505:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},506:function(t,n,e){t.exports=!e(478)&&!e(484)((function(){return 7!=Object.defineProperty(e(491)("div"),"a",{get:function(){return 7}}).a}))},507:function(t,n,e){var r=e(483);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},508:function(t,n,e){t.exports=e(475)},509:function(t,n,e){"use strict";var r=e(510),o=e(492),c=e(497),f={};e(475)(f,e(474)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(f,{next:o(1,e)}),c(t,n+" Iterator")}},510:function(t,n,e){var r=e(477),o=e(511),c=e(496),f=e(486)("IE_PROTO"),l=function(){},v=function(){var t,iframe=e(491)("iframe"),i=c.length;for(iframe.style.display="none",e(516).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),v=t.F;i--;)delete v.prototype[c[i]];return v()};t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=r(t),e=new l,l.prototype=null,e[f]=t):e=v(),void 0===n?e:o(e,n)}},511:function(t,n,e){var r=e(482),o=e(477),c=e(493);t.exports=e(478)?Object.defineProperties:function(t,n){o(t);for(var e,f=c(n),l=f.length,i=0;l>i;)r.f(t,e=f[i++],n[e]);return t}},512:function(t,n,e){var r=e(479),o=e(480),c=e(513)(!1),f=e(486)("IE_PROTO");t.exports=function(object,t){var n,e=o(object),i=0,l=[];for(n in e)n!=f&&r(e,n)&&l.push(n);for(;t.length>i;)r(e,n=t[i++])&&(~c(l,n)||l.push(n));return l}},513:function(t,n,e){var r=e(480),o=e(514),c=e(515);t.exports=function(t){return function(n,e,f){var l,v=r(n),d=o(v.length),y=c(f,d);if(t&&e!=e){for(;d>y;)if((l=v[y++])!=l)return!0}else for(;d>y;y++)if((t||y in v)&&v[y]===e)return t||y||0;return!t&&-1}}},514:function(t,n,e){var r=e(485),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},515:function(t,n,e){var r=e(485),o=Math.max,c=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):c(t,n)}},516:function(t,n,e){var r=e(472).document;t.exports=r&&r.documentElement},517:function(t,n,e){var r=e(479),o=e(498),c=e(486)("IE_PROTO"),f=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},518:function(t,n,e){"use strict";var r=e(519)(!0);e(488)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},519:function(t,n,e){var r=e(485),o=e(481);t.exports=function(t){return function(n,e){var a,b,s=String(o(n)),i=r(e),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},520:function(t,n,e){var r=e(477),o=e(521);t.exports=e(473).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},521:function(t,n,e){var r=e(522),o=e(474)("iterator"),c=e(476);t.exports=e(473).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[r(t)]}},522:function(t,n,e){var r=e(487),o=e(474)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:c?r(n):"Object"==(f=r(n))&&"function"==typeof n.callee?"Arguments":f}},523:function(t,n,e){var r=e(498),o=e(493);e(524)("keys",(function(){return function(t){return o(r(t))}}))},524:function(t,n,e){var r=e(490),o=e(473),c=e(484);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],f={};f[t]=n(e),r(r.S+r.F*c((function(){e(1)})),"Object",f)}},526:function(t,n,e){e(499),e(518),t.exports=e(520)},527:function(t,n,e){e(523),t.exports=e(473).Object.keys},528:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},647:function(t,n,e){var content=e(1004);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("68b107cf",content,!0,{sourceMap:!1})},648:function(t,n,e){var content=e(1006);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("5a5aadee",content,!0,{sourceMap:!1})}}]);