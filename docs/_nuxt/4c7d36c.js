(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{458:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},459:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},460:function(t,e,n){var r=n(480)("wks"),o=n(481),c=n(458).Symbol,l="function"==typeof c;(t.exports=function(t){return r[t]||(r[t]=l&&c[t]||(l?c:o)("Symbol."+t))}).store=r},461:function(t,e,n){var r=n(468),o=n(478);t.exports=n(464)?function(object,t,e){return r.f(object,t,o(1,e))}:function(object,t,e){return object[t]=e,object}},462:function(t,e){t.exports={}},463:function(t,e,n){var r=n(469);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},464:function(t,e,n){t.exports=!n(470)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},465:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},466:function(t,e,n){var r=n(489),o=n(467);t.exports=function(t){return r(o(t))}},467:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},468:function(t,e,n){var r=n(463),o=n(492),c=n(493),l=Object.defineProperty;e.f=n(464)?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),o)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},469:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},470:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},471:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},472:function(t,e,n){var r=n(480)("keys"),o=n(481);t.exports=function(t){return r[t]||(r[t]=o(t))}},473:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},474:function(t,e,n){"use strict";var r=n(475),o=n(476),c=n(494),l=n(461),d=n(462),f=n(495),v=n(483),m=n(503),h=n(460)("iterator"),w=!([].keys&&"next"in[].keys()),y="keys",x="values",k=function(){return this};t.exports=function(t,e,n,T,O,_,j){f(n,e,T);var C,S,A,L=function(t){if(!w&&t in z)return z[t];switch(t){case y:case x:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",P=O==x,E=!1,z=t.prototype,D=z[h]||z["@@iterator"]||O&&z[O],F=D||L(O),R=O?P?L("entries"):F:void 0,Y="Array"==e&&z.entries||D;if(Y&&(A=m(Y.call(new t)))!==Object.prototype&&A.next&&(v(A,M,!0),r||"function"==typeof A[h]||l(A,h,k)),P&&D&&D.name!==x&&(E=!0,F=function(){return D.call(this)}),r&&!j||!w&&!E&&z[h]||l(z,h,F),d[e]=F,d[M]=k,O)if(C={values:P?F:L(x),keys:_?F:L(y),entries:R},j)for(S in C)S in z||c(z,S,C[S]);else o(o.P+o.F*(w||E),e,C);return C}},475:function(t,e){t.exports=!0},476:function(t,e,n){var r=n(458),o=n(459),c=n(490),l=n(461),d=n(465),f=function(t,e,source){var n,v,m,h=t&f.F,w=t&f.G,y=t&f.S,x=t&f.P,k=t&f.B,T=t&f.W,O=w?o:o[e]||(o[e]={}),_=O.prototype,j=w?r:y?r[e]:(r[e]||{}).prototype;for(n in w&&(source=e),source)(v=!h&&j&&void 0!==j[n])&&d(O,n)||(m=v?j[n]:source[n],O[n]=w&&"function"!=typeof j[n]?source[n]:k&&v?c(m,r):T&&j[n]==m?function(t){var e=function(a,b,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,e)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(m):x&&"function"==typeof m?c(Function.call,m):m,x&&((O.virtual||(O.virtual={}))[n]=m,t&f.R&&_&&!_[n]&&l(_,n,m)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},477:function(t,e,n){var r=n(469),o=n(458).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},478:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},479:function(t,e,n){var r=n(498),o=n(482);t.exports=Object.keys||function(t){return r(t,o)}},480:function(t,e,n){var r=n(459),o=n(458),c="__core-js_shared__",l=o[c]||(o[c]={});(t.exports=function(t,e){return l[t]||(l[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(475)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},481:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},482:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},483:function(t,e,n){var r=n(468).f,o=n(465),c=n(460)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},484:function(t,e,n){var r=n(467);t.exports=function(t){return Object(r(t))}},485:function(t,e,n){n(486);for(var r=n(458),o=n(461),c=n(462),l=n(460)("toStringTag"),d="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<d.length;i++){var f=d[i],v=r[f],m=v&&v.prototype;m&&!m[l]&&o(m,l,f),c[f]=c.Array}},486:function(t,e,n){"use strict";var r=n(487),o=n(488),c=n(462),l=n(466);t.exports=n(474)(Array,"Array",(function(t,e){this._t=l(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},487:function(t,e){t.exports=function(){}},488:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},489:function(t,e,n){var r=n(473);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},490:function(t,e,n){var r=n(491);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(a){return t.call(e,a)};case 2:return function(a,b){return t.call(e,a,b)};case 3:return function(a,b,n){return t.call(e,a,b,n)}}return function(){return t.apply(e,arguments)}}},491:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},492:function(t,e,n){t.exports=!n(464)&&!n(470)((function(){return 7!=Object.defineProperty(n(477)("div"),"a",{get:function(){return 7}}).a}))},493:function(t,e,n){var r=n(469);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},494:function(t,e,n){t.exports=n(461)},495:function(t,e,n){"use strict";var r=n(496),o=n(478),c=n(483),l={};n(461)(l,n(460)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(l,{next:o(1,n)}),c(t,e+" Iterator")}},496:function(t,e,n){var r=n(463),o=n(497),c=n(482),l=n(472)("IE_PROTO"),d=function(){},f=function(){var t,iframe=n(477)("iframe"),i=c.length;for(iframe.style.display="none",n(502).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;i--;)delete f.prototype[c[i]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=r(t),n=new d,d.prototype=null,n[l]=t):n=f(),void 0===e?n:o(n,e)}},497:function(t,e,n){var r=n(468),o=n(463),c=n(479);t.exports=n(464)?Object.defineProperties:function(t,e){o(t);for(var n,l=c(e),d=l.length,i=0;d>i;)r.f(t,n=l[i++],e[n]);return t}},498:function(t,e,n){var r=n(465),o=n(466),c=n(499)(!1),l=n(472)("IE_PROTO");t.exports=function(object,t){var e,n=o(object),i=0,d=[];for(e in n)e!=l&&r(n,e)&&d.push(e);for(;t.length>i;)r(n,e=t[i++])&&(~c(d,e)||d.push(e));return d}},499:function(t,e,n){var r=n(466),o=n(500),c=n(501);t.exports=function(t){return function(e,n,l){var d,f=r(e),v=o(f.length),m=c(l,v);if(t&&n!=n){for(;v>m;)if((d=f[m++])!=d)return!0}else for(;v>m;m++)if((t||m in f)&&f[m]===n)return t||m||0;return!t&&-1}}},500:function(t,e,n){var r=n(471),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},501:function(t,e,n){var r=n(471),o=Math.max,c=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):c(t,e)}},502:function(t,e,n){var r=n(458).document;t.exports=r&&r.documentElement},503:function(t,e,n){var r=n(465),o=n(484),c=n(472)("IE_PROTO"),l=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},504:function(t,e,n){"use strict";var r=n(505)(!0);n(474)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},505:function(t,e,n){var r=n(471),o=n(467);t.exports=function(t){return function(e,n){var a,b,s=String(o(e)),i=r(n),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},506:function(t,e,n){var r=n(463),o=n(507);t.exports=n(459).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},507:function(t,e,n){var r=n(508),o=n(460)("iterator"),c=n(462);t.exports=n(459).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[r(t)]}},508:function(t,e,n){var r=n(473),o=n(460)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,l;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:c?r(e):"Object"==(l=r(e))&&"function"==typeof e.callee?"Arguments":l}},509:function(t,e,n){var r=n(484),o=n(479);n(510)("keys",(function(){return function(t){return o(r(t))}}))},510:function(t,e,n){var r=n(476),o=n(459),c=n(470);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],l={};l[t]=e(n),r(r.S+r.F*c((function(){n(1)})),"Object",l)}},512:function(t,e,n){n(485),n(504),t.exports=n(506)},513:function(t,e,n){n(509),t.exports=n(459).Object.keys},514:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},549:function(t,e){t.exports=[{id:"Q6A7gcLJVCY",name:"Звернення Президента України Володимира Зеленського",translated:!1,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-28T23:40:40",text:"«Зло, озброєне ракетами, бомбами й артилерією, треба зупинити негайно. Знищити економічно. Показати, що людяність уміє себе захищати»",description:"«Зло, озброєне ракетами, бомбами й артилерією, треба зупинити негайно. Знищити економічно. Показати, що людяність уміє себе захищати»",url:"https://www.youtube.com/watch?v=Q6A7gcLJVCY"},{id:"l5XTh2DSZCE",name:"Брифінг Прем’єр-міністра України Дениса Шмигаля",translated:!1,russianTimestamp:"",speaker:["Денис Шмигаль"],date:"2022-02-28T19:14:03",text:"Брифінг Прем’єр-міністра України Дениса Шмигаля",description:"Брифінг Прем’єр-міністра України Дениса Шмигаля",url:"https://www.youtube.com/watch?v=l5XTh2DSZCE"},{id:"mRwkk2mgfnU",name:"Звернення Президента України Володимира Зеленського",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-28T12:17:17",text:"«Коли я йшов у Президенти, я говорив, що кожен із нас – Президент. Бо ми всі відповідаємо за нашу державу. За нашу прекрасну Україну. А зараз так сталося, що кожен із нас – воїн. Воїн на своєму місці. І я впевнений, що кожен із нас переможе»",description:"«Коли я йшов у Президенти, я говорив, що кожен із нас – Президент. Бо ми всі відповідаємо за нашу державу. За нашу прекрасну Україну. А зараз так сталося, що кожен із нас – воїн. Воїн на своєму місці. І я впевнений, що кожен із нас переможе»",url:"https://www.youtube.com/watch?v=mRwkk2mgfnU"},{id:"dA5f9CXh5bY",name:"Брифінг радника керівника Офісу Президента Олексія Арестовича",translated:!0,russianTimestamp:"",speaker:["Олексій Арестович"],date:"2022-02-27T23:49:59",text:"Брифінг радника керівника Офісу Президента Олексія Арестовича.",description:"Брифінг радника керівника Офісу Президента Олексія Арестовича.",url:"https://www.youtube.com/watch?v=dA5f9CXh5bY"},{id:"BeidqIRfLhE",name:"Володимир Зеленський розповів про телефонну розмову з Олександром Лукашенком",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-27T18:45:12",text:"«Я не хочу, щоб із Білорусі в Україну летіли ракети, літаки та гвинтокрили. Я не хочу, щоб в Україну з Білорусі йшли війська. І він мене запевнив у цьому», – Володимир Зеленський у зверненні розповів про телефонну розмову з Олександром Лукашенком.",description:"«Я не хочу, щоб із Білорусі в Україну летіли ракети, літаки та гвинтокрили. Я не хочу, щоб в Україну з Білорусі йшли війська. І він мене запевнив у цьому», – Володимир Зеленський у зверненні розповів про телефонну розмову з Олександром Лукашенком.",url:"https://www.youtube.com/watch?v=BeidqIRfLhE"},{id:"v4qucYm0y70",name:"Брифінг радника керівника Офісу Президента Олексія Арестовича",translated:!0,russianTimestamp:"",speaker:["Олексій Арестович"],date:"2022-02-27T18:45:12",text:"Брифінг радника керівника Офісу Президента Олексія Арестовича.",description:"Брифінг радника керівника Офісу Президента Олексія Арестовича.",url:"https://www.youtube.com/watch?v=v4qucYm0y70"},{id:"WFxK6Ozpw3w",name:"Ситуація щодо російського вторгнення – брифінг Олексія Арестовича",translated:!0,russianTimestamp:"",speaker:["Олексій Арестович"],date:"2022-02-27T12:09:26",text:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича.",description:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича.",url:"https://www.youtube.com/watch?v=WFxK6Ozpw3w"},{id:"Ds6RsUMZ7c8",name:"Брифінг Дмитра Кулеби щодо російського вторгнення в Україну",translated:!1,russianTimestamp:"",speaker:["Дмитро Кулеба"],date:"2022-02-27T16:46:05",text:"Брифінг Дмитра Кулеби для міжнародних журналістів щодо російського вторгнення в Україну",description:"Брифінг Дмитра Кулеби для міжнародних журналістів щодо російського вторгнення в Україну",url:"https://www.youtube.com/watch?v=Ds6RsUMZ7c8"},{id:"oDYG09WSD-Q",name:"Заява Володимира Зеленського",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-27T11:09:12",text:"«Те, що окупанти роблять Харкову, Охтирці, Києву, Одесі та іншим містам і селищам, тягне на міжнародний трибунал». Заява Володимира Зеленського.",description:"«Те, що окупанти роблять Харкову, Охтирці, Києву, Одесі та іншим містам і селищам, тягне на міжнародний трибунал». Заява Володимира Зеленського.",url:"https://www.youtube.com/watch?v=oDYG09WSD-Q"},{id:"L97NvIYQDIA",name:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича",translated:!1,russianTimestamp:"",speaker:["Олексій Арестович"],date:"2022-02-27T10:55:08",text:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича.",description:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича.",url:"https://www.youtube.com/watch?v=L97NvIYQDIA"},{id:"iwkFfesUFxY",name:"Президент України Володимир Зеленський звернувся до громадян Білорусі",translated:!0,russianTimestamp:"https://www.youtube.com/watch?v=iwkFfesUFxY",speaker:["Володимир Зеленський"],date:"2022-02-27T10:26:53",text:"Президент України Володимир Зеленський звернувся до громадян Білорусі.",description:"Президент України Володимир Зеленський звернувся до громадян Білорусі.",url:"https://www.youtube.com/watch?v=iwkFfesUFxY"},{id:"yH4JfdzSItk",name:"Заява Володимира Зеленського.",translated:!1,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-27T10:01:47",text:"«Те, що окупанти роблять Харкову, Охтирці, Києву, Одесі та іншим містам і селищам, тягне на міжнародний трибунал». Заява Володимира Зеленського.",description:"«Те, що окупанти роблять Харкову, Охтирці, Києву, Одесі та іншим містам і селищам, тягне на міжнародний трибунал». Заява Володимира Зеленського.",url:"https://www.youtube.com/watch?v=yH4JfdzSItk"},{id:"7ZHUyOBpQi4",name:"Брифінг Прем’єр-міністра України Дениса Шмигаля",translated:!1,russianTimestamp:"",speaker:["Денис Шмигаль"],date:"2022-02-26T21:11:24",text:"Ситуація щодо російського вторгнення – брифінг Прем’єр-міністра України Дениса Шмигаля.",description:"Ситуація щодо російського вторгнення – брифінг Прем’єр-міністра України Дениса Шмигаля.",url:"https://www.youtube.com/watch?v=7ZHUyOBpQi4"},{id:"3pg-K1pMsqM",name:"Брифінг радника керівника Офісу Президента Олексія Арестовича",translated:!0,russianTimestamp:"",speaker:["Олексій Арестович"],date:"2022-02-26T21:06:06",text:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича.",description:"Ситуація щодо російського вторгнення – брифінг радника керівника Офісу Президента Олексія Арестовича.",url:"https://www.youtube.com/watch?v=3pg-K1pMsqM"},{id:"RZIf5oaWKBw",name:"Звернення Президента Володимира Зеленського",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-26T21:00:50",text:"«Світ побачив – українці могутні. Українці сміливі. Українці – на своїй рідній землі і ніколи її не здадуть». Звернення Президента Володимира Зеленського.",description:"«Світ побачив – українці могутні. Українці сміливі. Українці – на своїй рідній землі і ніколи її не здадуть». Звернення Президента Володимира Зеленського.",url:"https://www.youtube.com/watch?v=RZIf5oaWKBw"},{id:"jJRYocGoHWQ",name:"«Ми вистояли й успішно відбиваємо атаки ворога». Звернення Володимира Зеленського",translated:!0,russianTimestamp:"https://youtu.be/jJRYocGoHWQ?t=218",speaker:["Володимир Зеленський"],date:"2022-02-26T13:34:00",text:"«Ми вистояли й успішно відбиваємо атаки ворога». Звернення Володимира Зеленського.",description:"«Ми вистояли й успішно відбиваємо атаки ворога». Звернення Володимира Зеленського.",url:"https://www.youtube.com/watch?v=jJRYocGoHWQ"},{id:"wkJjhwKCXiw",name:"Звернення Ірини Верещук до Міжнародного комітету Червоного Хреста.",translated:!1,russianTimestamp:"",speaker:["Ірина Верещук"],date:"2022-02-26T11:13:07",text:"вернення Ірини Верещук до Міжнародного комітету Червоного Хреста.",description:"вернення Ірини Верещук до Міжнародного комітету Червоного Хреста.",url:"https://www.youtube.com/watch?v=wkJjhwKCXiw"},{id:"az2QFR5pJIs",name:"Не вірте фейкам!",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-26T08:29:51",text:"Не вірте фейкам!",description:"Не вірте фейкам!",url:"https://www.youtube.com/watch?v=az2QFR5pJIs"},{id:"w9Ej8IzV4fU",name:"Ситуація щодо російського вторгнення (ранок третього дня) – брифінг Михайла Подоляка ",translated:!0,russianTimestamp:"",speaker:["Михайло Подоляк"],date:"2022-02-26T08:18:14",text:"Ситуація щодо російського вторгнення (ранок третього дня) – брифінг радника керівника Офісу Президента Михайла Подоляка.",description:"Ситуація щодо російського вторгнення (ранок третього дня) – брифінг радника керівника Офісу Президента Михайла Подоляка.",url:"https://www.youtube.com/watch?v=w9Ej8IzV4fU"},{id:"p1653ejfNH0",name:"Звернення Президента України ввечері другого дня масштабної війни",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-26T06:58:46",text:"«Це був важкий, але сміливий день!» Звернення Президента України ввечері другого дня масштабної війни.",description:"«Це був важкий, але сміливий день!» Звернення Президента України ввечері другого дня масштабної війни.",url:"https://www.youtube.com/watch?v=p1653ejfNH0"},{id:"YnbAyPzqEcw",name:"Брифінг Михайла Подоляка та Дениса Шмигаля",translated:!0,russianTimestamp:"",speaker:["Михайло Подоляк","Денис Шмигаль"],date:"2022-02-25T20:15:28",text:"Брифінг радника керівника Офісу Президента Михайла Подоляка та Прем’єр-міністра України Дениса Шмигаля.",description:"Брифінг радника керівника Офісу Президента Михайла Подоляка та Прем’єр-міністра України Дениса Шмигаля.",url:"https://www.youtube.com/watch?v=YnbAyPzqEcw"},{id:"3zFAZ4ezNYE",name:"Звернення Президента України Володимира Зеленського",translated:!0,russianTimestamp:"https://youtu.be/3zFAZ4ezNYE?t=173",speaker:["Володимир Зеленський"],date:"2022-02-25T14:18:17",text:"«Вторгнення Росії в Україну – це не просто вторгнення, це початок війни проти Європи». Звернення Президента України Володимира Зеленського.",description:"«Вторгнення Росії в Україну – це не просто вторгнення, це початок війни проти Європи». Звернення Президента України Володимира Зеленського.",url:"https://www.youtube.com/watch?v=3zFAZ4ezNYE"},{id:"zYAsviOQZ3g",name:"Брифінг Михайла Подоляка та Олексія Арестовича щодо ситуації в Україні",translated:!1,russianTimestamp:"",speaker:["Михайло Подоляк","Олексій Арестович"],date:"2022-02-25T10:07:27",text:"Брифінг радників керівника Офісу Президента Михайла Подоляка та Олексія Арестовича щодо ситуації в Україні.",description:"Брифінг радників керівника Офісу Президента Михайла Подоляка та Олексія Арестовича щодо ситуації в Україні.",url:"https://www.youtube.com/watch?v=zYAsviOQZ3g"},{id:"07i3e0ouFNw",name:"Звернення Президента на другий ранок масштабної війни",translated:!0,russianTimestamp:"https://youtu.be/07i3e0ouFNw?t=209",speaker:["Володимир Зеленський"],date:"2022-02-25T08:53:00",text:"Звернення Президента на другий ранок масштабної війни.",description:"Звернення Президента на другий ранок масштабної війни.",url:"https://www.youtube.com/watch?v=07i3e0ouFNw"},{id:"WGqs0KAHDAo",name:"Володимир Зеленський звернувся до українців наприкінці першого дня атак Росії.",translated:!1,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-25T23:35:32",text:"Володимир Зеленський звернувся до українців наприкінці першого дня атак Росії.",description:"Володимир Зеленський звернувся до українців наприкінці першого дня атак Росії.",url:"https://www.youtube.com/watch?v=WGqs0KAHDAo"},{id:"VMkkuLN7pNs",name:"Брифінг Михайла Подоляка та Дениса Шмигаля щодо ситуації в Україні",translated:!0,russianTimestamp:"",speaker:["Михайло Подоляк","Денис Шмигаль"],date:"2022-02-24T20:55:04",text:"Брифінг Михайла Подоляка та Дениса Шмигаля щодо ситуації в Україні",description:"Брифінг Михайла Подоляка та Дениса Шмигаля щодо ситуації в Україні",url:"https://www.youtube.com/watch?v=VMkkuLN7pNs"},{id:"nR6Ct73vZN4",name:"Звернення Президента України",translated:!0,russianTimestamp:"https://youtu.be/nR6Ct73vZN4?t=118",speaker:["Володимир Зеленський"],date:"2022-02-24T18:22:48",text:"Звернення Президента України.",description:"Звернення Президента України.",url:"https://www.youtube.com/watch?v=nR6Ct73vZN4"},{id:"pufA6K8k1QY",name:"Термінове звернення міністра оборони Резнікова",translated:!1,russianTimestamp:"",speaker:["Олексій Рєзніков"],date:"2022-02-24T18:22:48",text:"Термінове звернення міністра оборони Олексія Резнікова від 24.02.2022",description:"Термінове звернення міністра оборони Олексія Резнікова від 24.02.2022",url:"https://www.youtube.com/watch?v=pufA6K8k1QY"},{id:"T8Gazh3lz8Y",name:"Президент України – про посилення обороноздатності держави",translated:!1,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-24T01:39:42",text:"Президент України – про посилення обороноздатності держави",description:"Президент України – про посилення обороноздатності держави",url:"https://www.youtube.com/watch?v=T8Gazh3lz8Y"},{id:"zr_EOydgOy8",name:"Виступ Дмитра Кулеби щодо ситуації на тимчасово окупованих територіях України",translated:!0,russianTimestamp:"",speaker:["Дмитро Кулеба"],date:"2022-02-23T20:46:09",text:"Виступ Дмитро Кулеба на Генасамблеї ООН щодо ситуації на тимчасово окупованих територіях України",description:"Виступ Дмитро Кулеба на Генасамблеї ООН щодо ситуації на тимчасово окупованих територіях України",url:"https://www.youtube.com/watch?v=zr_EOydgOy8"},{id:"TiXdsekwAN4",name:"Звернення Президента після зустрічі з лідерами всіх парламентських фракцій",translated:!0,russianTimestamp:"https://youtu.be/T8Gazh3lz8Y?t=122",speaker:["Володимир Зеленський"],date:"2022-02-23T09:27:19",text:"«Українці – мирна нація. Ми хочемо тиші. Але якщо ми сьогодні промовчимо, то завтра зникнемо. Нас чекає щоденна важка робота. І ми до неї готові. Впевненість у собі. Впевненість у країні. Впевненість у перемозі», – Володимир Зеленський звернувся до українців після зустрічі з лідерами всіх парламентських фракцій і груп.",description:"«Українці – мирна нація. Ми хочемо тиші. Але якщо ми сьогодні промовчимо, то завтра зникнемо. Нас чекає щоденна важка робота. І ми до неї готові. Впевненість у собі. Впевненість у країні. Впевненість у перемозі», – Володимир Зеленський звернувся до українців після зустрічі з лідерами всіх парламентських фракцій і груп.",url:"https://www.youtube.com/watch?v=TiXdsekwAN4"},{id:"88jGEXGFOBs",name:"Заява Володимира Зеленського за підсумками засідання РНБО",translated:!0,russianTimestamp:"",speaker:["Володимир Зеленський"],date:"2022-02-22T11:14:27",text:"«Останні дії РФ – це порушення суверенітету й територіальної цілісності нашої держави. Уся відповідальність за наслідки у зв’язку зі згаданими рішеннями покладається на Росію» – заява Президента України Володимира Зеленського.",description:"«Останні дії РФ – це порушення суверенітету й територіальної цілісності нашої держави. Уся відповідальність за наслідки у зв’язку зі згаданими рішеннями покладається на Росію» – заява Президента України Володимира Зеленського.",url:"https://www.youtube.com/watch?v=88jGEXGFOBs"}]},632:function(t,e,n){var content=n(889);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5a28f29e",content,!0,{sourceMap:!1})},633:function(t,e,n){var content=n(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("c827041c",content,!0,{sourceMap:!1})},888:function(t,e,n){"use strict";n(632)},889:function(t,e,n){var r=n(18)(!1);r.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=r},890:function(t,e,n){"use strict";n(633)},891:function(t,e,n){var r=n(18)(!1);r.push([t.i,'img[src$="#w-100"]{width:100%}.mw-100 *{max-width:100%}.video{position:relative;width:100%;height:0;padding-bottom:56.25%}iframe{position:absolute;top:0;left:0;width:100%;height:100%}.white-sign i{color:#fff!important}',""]),t.exports=r},892:function(t,e,n){var content=n(893);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("01907af4",content,!0,{sourceMap:!1})},893:function(t,e,n){var r=n(18)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},903:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(31),c=(n(87),n(117),n(4),n(307),n(511)),l=n.n(c),d=n(549),f=n.n(d),v={components:{VueMarkdown:l.a},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.params.id,console.log(n),n){e.next=4;break}return e.abrupt("return",t.$nuxt.error({statusCode:404,message:"Сторінку не знайдено!"}));case 4:if(o=f.a.find((function(t){return t.id===n}))){e.next=7;break}return e.abrupt("return",t.$nuxt.error({statusCode:404,message:"Сторінку не знайдено!"}));case 7:for(c=0,l=Object.entries(o);c<l.length;c++)d=Object(r.a)(l[c],2),v=d[0],m=d[1],t.$set(t,v,m);console.log(o),t.videokey++;case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{id:"",name:"",date:"",text:"",translated:!1,russianTimestamp:"",speaker:[],url:"",description:"",videokey:0}},computed:{}},m=(n(888),n(890),n(93)),h=n(138),w=n.n(h),y=n(131),x=(n(11),n(8),n(9),n(13),n(10),n(14),n(2)),k=(n(892),n(58)),T=k.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return k.a.options.computed.classes.call(this)}},methods:{genData:k.a.options.methods.genData}}),O=n(28),_=n(7);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(_.a)(T,O.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return C(C({},T.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,C({},T.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),A=n(209),L=n(171),M=n(544),P=n(205),E=n(451),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-h4 flex-grow-1 justify-top"},[n("div",{staticClass:"fill-height d-flex align-baseline"},[n("v-icon",{staticClass:"mr-4"},[t._v("mdi-message-reply-outline")]),t._v(" "+t._s(t.name)+"\n        ")],1)])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-0",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-h4 flex-grow-1 justify-top"},[n("div",{staticClass:"video"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/"+t.id,title:t.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1),t._v(" "),n("v-card",{staticClass:"mx-auto text-justify mw-100",attrs:{flat:""}},[n("v-card-text",[n("v-btn-toggle",[n("v-btn",{staticClass:"white-sign",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.url,target:"_blank",rounded:"",color:"#3b5998",dark:""}},[n("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"https://twitter.com/intent/tweet?url="+t.url+"&text="+t.text,target:"_blank",rounded:"",color:"#1DA1F2",dark:""}},[n("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"https://pinterest.com/pin/create/button/?url="+t.url+"&media=&description="+t.text,target:"_blank",rounded:"",color:"#0e76a8",dark:""}},[n("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url="+t.url,target:"_blank",rounded:"",color:"#c8232c",dark:""}},[n("v-icon",[t._v("mdi-pinterest")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"mailto:info@example.com?&subject=&cc=&bcc=&body="+t.url+"<br/><br/>"+t.text,rounded:"",color:"yellow darken-3",dark:""}},[n("v-icon",[t._v("mdi-email")])],1)],1)],1)],1),t._v(" "),n("v-card",{staticClass:"mx-auto mb-4 text-justify mw-100",attrs:{flat:""}},[n("v-card-text",[n("div",{staticClass:"mb-2 font-weight-bold"},[t._v("\n          "+t._s(new Date(t.date).toLocaleDateString("uk",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))+"\n        ")]),t._v(" "),n("vue-markdown",{key:t.videokey},[t._v(t._s(t.text))])],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-0",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:y.a,VBtnToggle:S,VCard:A.a,VCardText:L.c,VCol:M.a,VIcon:P.a,VRow:E.a})}}]);