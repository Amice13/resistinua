(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{457:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},458:function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},459:function(t,n,e){var r=e(479)("wks"),o=e(480),c=e(457).Symbol,f="function"==typeof c;(t.exports=function(t){return r[t]||(r[t]=f&&c[t]||(f?c:o)("Symbol."+t))}).store=r},460:function(t,n,e){var r=e(467),o=e(477);t.exports=e(463)?function(object,t,n){return r.f(object,t,o(1,n))}:function(object,t,n){return object[t]=n,object}},461:function(t,n){t.exports={}},462:function(t,n,e){var r=e(468);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},463:function(t,n,e){t.exports=!e(469)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},464:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},465:function(t,n,e){var r=e(488),o=e(466);t.exports=function(t){return r(o(t))}},466:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},467:function(t,n,e){var r=e(462),o=e(491),c=e(492),f=Object.defineProperty;n.f=e(463)?Object.defineProperty:function(t,n,e){if(r(t),n=c(n,!0),r(e),o)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},468:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},469:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},470:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},471:function(t,n,e){var r=e(479)("keys"),o=e(480);t.exports=function(t){return r[t]||(r[t]=o(t))}},472:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},473:function(t,n,e){"use strict";var r=e(474),o=e(475),c=e(493),f=e(460),l=e(461),v=e(494),d=e(482),h=e(502),x=e(459)("iterator"),y=!([].keys&&"next"in[].keys()),_="keys",m="values",w=function(){return this};t.exports=function(t,n,e,S,O,j,k){v(e,n,S);var L,C,T,M=function(t){if(!y&&t in V)return V[t];switch(t){case _:case m:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",A=O==m,E=!1,V=t.prototype,R=V[x]||V["@@iterator"]||O&&V[O],I=R||M(O),F=O?A?M("entries"):I:void 0,D="Array"==n&&V.entries||R;if(D&&(T=h(D.call(new t)))!==Object.prototype&&T.next&&(d(T,P,!0),r||"function"==typeof T[x]||f(T,x,w)),A&&R&&R.name!==m&&(E=!0,I=function(){return R.call(this)}),r&&!k||!y&&!E&&V[x]||f(V,x,I),l[n]=I,l[P]=w,O)if(L={values:A?I:M(m),keys:j?I:M(_),entries:F},k)for(C in L)C in V||c(V,C,L[C]);else o(o.P+o.F*(y||E),n,L);return L}},474:function(t,n){t.exports=!0},475:function(t,n,e){var r=e(457),o=e(458),c=e(489),f=e(460),l=e(464),v=function(t,n,source){var e,d,h,x=t&v.F,y=t&v.G,_=t&v.S,m=t&v.P,w=t&v.B,S=t&v.W,O=y?o:o[n]||(o[n]={}),j=O.prototype,k=y?r:_?r[n]:(r[n]||{}).prototype;for(e in y&&(source=n),source)(d=!x&&k&&void 0!==k[e])&&l(O,e)||(h=d?k[e]:source[e],O[e]=y&&"function"!=typeof k[e]?source[e]:w&&d?c(h,r):S&&k[e]==h?function(t){var n=function(a,b,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,n)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(h):m&&"function"==typeof h?c(Function.call,h):h,m&&((O.virtual||(O.virtual={}))[e]=h,t&v.R&&j&&!j[e]&&f(j,e,h)))};v.F=1,v.G=2,v.S=4,v.P=8,v.B=16,v.W=32,v.U=64,v.R=128,t.exports=v},476:function(t,n,e){var r=e(468),o=e(457).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},477:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},478:function(t,n,e){var r=e(497),o=e(481);t.exports=Object.keys||function(t){return r(t,o)}},479:function(t,n,e){var r=e(458),o=e(457),c="__core-js_shared__",f=o[c]||(o[c]={});(t.exports=function(t,n){return f[t]||(f[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(474)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},480:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},481:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},482:function(t,n,e){var r=e(467).f,o=e(464),c=e(459)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,c)&&r(t,c,{configurable:!0,value:n})}},483:function(t,n,e){var r=e(466);t.exports=function(t){return Object(r(t))}},484:function(t,n,e){e(485);for(var r=e(457),o=e(460),c=e(461),f=e(459)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<l.length;i++){var v=l[i],d=r[v],h=d&&d.prototype;h&&!h[f]&&o(h,f,v),c[v]=c.Array}},485:function(t,n,e){"use strict";var r=e(486),o=e(487),c=e(461),f=e(465);t.exports=e(473)(Array,"Array",(function(t,n){this._t=f(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},486:function(t,n){t.exports=function(){}},487:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},488:function(t,n,e){var r=e(472);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},489:function(t,n,e){var r=e(490);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(a){return t.call(n,a)};case 2:return function(a,b){return t.call(n,a,b)};case 3:return function(a,b,e){return t.call(n,a,b,e)}}return function(){return t.apply(n,arguments)}}},490:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},491:function(t,n,e){t.exports=!e(463)&&!e(469)((function(){return 7!=Object.defineProperty(e(476)("div"),"a",{get:function(){return 7}}).a}))},492:function(t,n,e){var r=e(468);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},493:function(t,n,e){t.exports=e(460)},494:function(t,n,e){"use strict";var r=e(495),o=e(477),c=e(482),f={};e(460)(f,e(459)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(f,{next:o(1,e)}),c(t,n+" Iterator")}},495:function(t,n,e){var r=e(462),o=e(496),c=e(481),f=e(471)("IE_PROTO"),l=function(){},v=function(){var t,iframe=e(476)("iframe"),i=c.length;for(iframe.style.display="none",e(501).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),v=t.F;i--;)delete v.prototype[c[i]];return v()};t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=r(t),e=new l,l.prototype=null,e[f]=t):e=v(),void 0===n?e:o(e,n)}},496:function(t,n,e){var r=e(467),o=e(462),c=e(478);t.exports=e(463)?Object.defineProperties:function(t,n){o(t);for(var e,f=c(n),l=f.length,i=0;l>i;)r.f(t,e=f[i++],n[e]);return t}},497:function(t,n,e){var r=e(464),o=e(465),c=e(498)(!1),f=e(471)("IE_PROTO");t.exports=function(object,t){var n,e=o(object),i=0,l=[];for(n in e)n!=f&&r(e,n)&&l.push(n);for(;t.length>i;)r(e,n=t[i++])&&(~c(l,n)||l.push(n));return l}},498:function(t,n,e){var r=e(465),o=e(499),c=e(500);t.exports=function(t){return function(n,e,f){var l,v=r(n),d=o(v.length),h=c(f,d);if(t&&e!=e){for(;d>h;)if((l=v[h++])!=l)return!0}else for(;d>h;h++)if((t||h in v)&&v[h]===e)return t||h||0;return!t&&-1}}},499:function(t,n,e){var r=e(470),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},500:function(t,n,e){var r=e(470),o=Math.max,c=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):c(t,n)}},501:function(t,n,e){var r=e(457).document;t.exports=r&&r.documentElement},502:function(t,n,e){var r=e(464),o=e(483),c=e(471)("IE_PROTO"),f=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},503:function(t,n,e){"use strict";var r=e(504)(!0);e(473)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},504:function(t,n,e){var r=e(470),o=e(466);t.exports=function(t){return function(n,e){var a,b,s=String(o(n)),i=r(e),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},505:function(t,n,e){var r=e(462),o=e(506);t.exports=e(458).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},506:function(t,n,e){var r=e(507),o=e(459)("iterator"),c=e(461);t.exports=e(458).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[r(t)]}},507:function(t,n,e){var r=e(472),o=e(459)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:c?r(n):"Object"==(f=r(n))&&"function"==typeof n.callee?"Arguments":f}},508:function(t,n,e){var r=e(483),o=e(478);e(509)("keys",(function(){return function(t){return o(r(t))}}))},509:function(t,n,e){var r=e(475),o=e(458),c=e(469);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],f={};f[t]=n(e),r(r.S+r.F*c((function(){e(1)})),"Object",f)}},511:function(t,n,e){e(484),e(503),t.exports=e(505)},512:function(t,n,e){e(508),t.exports=e(458).Object.keys},513:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},635:function(t,n,e){var content=e(899);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("1b7833da",content,!0,{sourceMap:!1})},897:function(t,n){t.exports=["Русский корабль, иди нахуй!","В цей час у Дії готують нову послугу для російських окупантів - е-Могила","У результаті блискавичної військової спецоперації озброєні сили Росії звільнили свою країну від економіки","Про що думають ці диверсанти? На Троєщину, ніччю... там же небезпечно!",'Як в Україні називають російський спецназ? "Котлета по-київськи"!','Триває туристична акція "Увідєть Кієв і умєрєть!". Коктейлі за рахунок закладу.',"Кмітливі кияні, побачивши підозрілих чоловіків, спитали в них, як пройти в Монобанк","ЗБЕРІГАЙ СПОКІЙ ТА ПІДТРИМУЙ ЗСУ!",'Мер Садовий закликав львів\'ян готувати "коктейлі Молотова", які запропонував називати "Бандера-смузі".',"А ми попереджали росіян, що варто відрізняти «НА» і «В». Вони наївно вирішили, що йдуть на українську землю. А потрапляють в...","Редакторам ділових медіа для графіків курсу USD/RUB уже пора готувати логарифмічну шкалу."]},898:function(t,n,e){"use strict";e(635)},899:function(t,n,e){var r=e(18)(!1);r.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=r},943:function(t,n,e){"use strict";e.r(n);var r=e(29),o=(e(77),e(510),e(897)),c=e.n(o),f={mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$set(t,"randomQuote",c.a[Math.floor(Math.random()*c.a.length)]);case 1:case"end":return n.stop()}}),n)})))()},data:function(){return{randomQuote:""}}},l=(e(898),e(93)),v=e(138),d=e.n(v),h=e(209),x=e(171),y=e(543),_=e(205),m=e(168),w=e(450),component=Object(l.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[e("v-card",{staticClass:"mx-auto mb-4",attrs:{flat:""}},[e("v-card-text",{staticClass:"text-h4 flex-grow-1"},[e("div",{staticClass:"fill-height d-flex flex-column justify-center text-center"},[t._v("Як чинити опір російській війні")])])],1),t._v(" "),e("v-card",{staticClass:"mx-auto quote",attrs:{color:"#26c6da",dark:""}},[e("v-img",{staticClass:"white--text d-flex",staticStyle:{"min-height":"250px",height:"250px"},attrs:{src:"/bkg/bullets3.jpg",gradient:"to top right, rgba(0,0,0,.6), rgba(25,32,72,.8)"}},[e("v-card-title",[e("v-icon",{attrs:{large:"",left:"",small:t.$vuetify.breakpoint.smAndDown}},[t._v("mdi-format-quote-open")]),t._v(" "),e("span",{staticClass:"font-weight-light",class:{"text-h5":t.$vuetify.breakpoint.mdAndUp}},[t._v("Цитата дня")])],1),t._v(" "),e("v-card-text",{staticClass:"text-h4 font-weight-bold flex-grow-1",class:{"text-h4":t.$vuetify.breakpoint.mdAndUp,"text-h6":t.$vuetify.breakpoint.smAndDown}},[e("div",{staticClass:"fill-height d-flex flex-column justify-center text-center"},[t._v(t._s(t.randomQuote))])]),t._v(" "),e("v-card-title")],1)],1),t._v(" "),e("v-card",{staticClass:"logo py-4 d-flex justify-center"}),t._v(" "),e("v-card",{attrs:{flat:""}},[e("v-card-text",{staticClass:"text-center text-h6"},[e("p",[t._v("Україна захищає себе і весь цивілізований світ від Російської Федерації!")]),t._v(" "),e("p",[t._v("Ми захищаємо Україну!")]),t._v(" "),e("p",[t._v("Захищати і захищатись може кожен: у містах, в евакуації, з-за кордону.")])]),t._v(" "),e("hr"),t._v(" "),e("v-card-text",{staticStyle:{"max-width":"400px",margin:"auto"}},[e("p",[t._v("На порталі можна знайти корисні посилання і поради щодо того як:")]),t._v(" "),e("ul",[e("li",[t._v("захистити себе і свою родину")]),t._v(" "),e("li",[t._v("допомогти кібер-супротиву")]),t._v(" "),e("li",[t._v("допомогти фінансово")]),t._v(" "),e("li",[t._v("долучитись волонтером")]),t._v(" "),e("li",[t._v("допомогти переселенцям")]),t._v(" "),e("li",[t._v("долучитись до війська, ТрО та інше")])])]),t._v(" "),e("v-card-text",[e("p",{staticClass:"text-h4 text-center"},[t._v("Супротив чинити може кожен на різних рівнях!")])])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VCard:h.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VIcon:_.a,VImg:m.a,VRow:w.a})}}]);