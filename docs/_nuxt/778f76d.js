(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1190:function(t,e,n){"use strict";n(743)},1191:function(t,e,n){var r=n(18)(!1);r.push([t.i,".quote .v-responsive__content{display:flex;flex-direction:column}",""]),t.exports=r},1192:function(t,e,n){"use strict";n(744)},1193:function(t,e,n){var r=n(18)(!1);r.push([t.i,'img[src$="#w-100"]{width:100%}.mw-100 *{max-width:100%}.video{position:relative;width:100%;height:0;padding-bottom:56.25%}iframe{position:absolute;top:0;left:0;width:100%;height:100%}.white-sign i{color:#fff!important}',""]),t.exports=r},1197:function(t,e,n){"use strict";n(10),n(8),n(11),n(4),n(12),n(9),n(13);var r=n(3),o=(n(563),n(66)),c=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}}),l=n(29),f=n(7);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(c,l.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return d(d({},c.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,d({},c.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},1289:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(32),c=(n(94),n(97),n(4),n(315),n(525)),l=n.n(c),f=n(577),v=n.n(f),d={components:{VueMarkdown:l.a},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,f,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.params.id){e.next=3;break}return e.abrupt("return",t.$nuxt.error({statusCode:404,message:"Сторінку не знайдено!"}));case 3:if(o=v.a.find((function(t){return t.id===n}))){e.next=6;break}return e.abrupt("return",t.$nuxt.error({statusCode:404,message:"Сторінку не знайдено!"}));case 6:for(c=0,l=Object.entries(o);c<l.length;c++)f=Object(r.a)(l[c],2),d=f[0],h=f[1],t.$set(t,d,h);t.videokey++;case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{id:"",name:"",date:"",text:"",translated:!1,russianTimestamp:"",speaker:[],url:"",description:"",videokey:0}},computed:{}},h=(n(1190),n(1192),n(101)),m=n(145),y=n.n(m),x=n(138),w=n(1197),_=n(216),O=n(178),k=n(551),j=n(212),S=n(464),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-h4 flex-grow-1 justify-top"},[n("div",{staticClass:"fill-height d-flex align-baseline"},[n("v-icon",{staticClass:"mr-4"},[t._v("mdi-message-reply-outline")]),t._v(" "+t._s(t.name)+"\n        ")],1)])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-0",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-card-text",{staticClass:"text-h4 flex-grow-1 justify-top"},[n("div",{staticClass:"video"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/"+t.id,title:t.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1),t._v(" "),n("v-card",{staticClass:"mx-auto text-justify mw-100",attrs:{flat:""}},[n("v-card-text",[n("v-btn-toggle",[n("v-btn",{staticClass:"white-sign",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.url,target:"_blank",rounded:"",color:"#3b5998",dark:""}},[n("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"https://twitter.com/intent/tweet?url="+t.url+"&text="+t.text,target:"_blank",rounded:"",color:"#1DA1F2",dark:""}},[n("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"https://pinterest.com/pin/create/button/?url="+t.url+"&media=&description="+t.text,target:"_blank",rounded:"",color:"#0e76a8",dark:""}},[n("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url="+t.url,target:"_blank",rounded:"",color:"#c8232c",dark:""}},[n("v-icon",[t._v("mdi-pinterest")])],1),t._v(" "),n("v-btn",{staticClass:"white-sign",attrs:{href:"mailto:info@example.com?&subject=&cc=&bcc=&body="+t.url+"<br/><br/>"+t.text,rounded:"",color:"yellow darken-3",dark:""}},[n("v-icon",[t._v("mdi-email")])],1)],1)],1)],1),t._v(" "),n("v-card",{staticClass:"mx-auto mb-4 text-justify mw-100",attrs:{flat:""}},[n("v-card-text",[n("div",{staticClass:"mb-2 font-weight-bold"},[t._v("\n          "+t._s(new Date(t.date).toLocaleDateString("uk",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))+"\n        ")]),t._v(" "),n("vue-markdown",{key:t.videokey},[t._v(t._s(t.text))])],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-0",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:x.a,VBtnToggle:w.a,VCard:_.a,VCardText:O.c,VCol:k.a,VIcon:j.a,VRow:S.a})},472:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},473:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},474:function(t,e,n){var r=n(494)("wks"),o=n(495),c=n(472).Symbol,l="function"==typeof c;(t.exports=function(t){return r[t]||(r[t]=l&&c[t]||(l?c:o)("Symbol."+t))}).store=r},475:function(t,e,n){var r=n(482),o=n(492);t.exports=n(478)?function(object,t,e){return r.f(object,t,o(1,e))}:function(object,t,e){return object[t]=e,object}},476:function(t,e){t.exports={}},477:function(t,e,n){var r=n(483);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},478:function(t,e,n){t.exports=!n(484)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},479:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},480:function(t,e,n){var r=n(503),o=n(481);t.exports=function(t){return r(o(t))}},481:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},482:function(t,e,n){var r=n(477),o=n(506),c=n(507),l=Object.defineProperty;e.f=n(478)?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),o)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},483:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},484:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},485:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},486:function(t,e,n){var r=n(494)("keys"),o=n(495);t.exports=function(t){return r[t]||(r[t]=o(t))}},487:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},488:function(t,e,n){"use strict";var r=n(489),o=n(490),c=n(508),l=n(475),f=n(476),v=n(509),d=n(497),h=n(517),m=n(474)("iterator"),y=!([].keys&&"next"in[].keys()),x="keys",w="values",_=function(){return this};t.exports=function(t,e,n,O,k,j,S){v(n,e,O);var C,P,T,L=function(t){if(!y&&t in D)return D[t];switch(t){case x:case w:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",E=k==w,A=!1,D=t.prototype,V=D[m]||D["@@iterator"]||k&&D[k],B=V||L(k),R=k?E?L("entries"):B:void 0,F="Array"==e&&D.entries||V;if(F&&(T=h(F.call(new t)))!==Object.prototype&&T.next&&(d(T,M,!0),r||"function"==typeof T[m]||l(T,m,_)),E&&V&&V.name!==w&&(A=!0,B=function(){return V.call(this)}),r&&!S||!y&&!A&&D[m]||l(D,m,B),f[e]=B,f[M]=_,k)if(C={values:E?B:L(w),keys:j?B:L(x),entries:R},S)for(P in C)P in D||c(D,P,C[P]);else o(o.P+o.F*(y||A),e,C);return C}},489:function(t,e){t.exports=!0},490:function(t,e,n){var r=n(472),o=n(473),c=n(504),l=n(475),f=n(479),v=function(t,e,source){var n,d,h,m=t&v.F,y=t&v.G,x=t&v.S,w=t&v.P,_=t&v.B,O=t&v.W,k=y?o:o[e]||(o[e]={}),j=k.prototype,S=y?r:x?r[e]:(r[e]||{}).prototype;for(n in y&&(source=e),source)(d=!m&&S&&void 0!==S[n])&&f(k,n)||(h=d?S[n]:source[n],k[n]=y&&"function"!=typeof S[n]?source[n]:_&&d?c(h,r):O&&S[n]==h?function(t){var e=function(a,b,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,b)}return new t(a,b,e)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):w&&"function"==typeof h?c(Function.call,h):h,w&&((k.virtual||(k.virtual={}))[n]=h,t&v.R&&j&&!j[n]&&l(j,n,h)))};v.F=1,v.G=2,v.S=4,v.P=8,v.B=16,v.W=32,v.U=64,v.R=128,t.exports=v},491:function(t,e,n){var r=n(483),o=n(472).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},492:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},493:function(t,e,n){var r=n(512),o=n(496);t.exports=Object.keys||function(t){return r(t,o)}},494:function(t,e,n){var r=n(473),o=n(472),c="__core-js_shared__",l=o[c]||(o[c]={});(t.exports=function(t,e){return l[t]||(l[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(489)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},495:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},496:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},497:function(t,e,n){var r=n(482).f,o=n(479),c=n(474)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},498:function(t,e,n){var r=n(481);t.exports=function(t){return Object(r(t))}},499:function(t,e,n){n(500);for(var r=n(472),o=n(475),c=n(476),l=n(474)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<f.length;i++){var v=f[i],d=r[v],h=d&&d.prototype;h&&!h[l]&&o(h,l,v),c[v]=c.Array}},500:function(t,e,n){"use strict";var r=n(501),o=n(502),c=n(476),l=n(480);t.exports=n(488)(Array,"Array",(function(t,e){this._t=l(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},501:function(t,e){t.exports=function(){}},502:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},503:function(t,e,n){var r=n(487);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},504:function(t,e,n){var r=n(505);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(a){return t.call(e,a)};case 2:return function(a,b){return t.call(e,a,b)};case 3:return function(a,b,n){return t.call(e,a,b,n)}}return function(){return t.apply(e,arguments)}}},505:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},506:function(t,e,n){t.exports=!n(478)&&!n(484)((function(){return 7!=Object.defineProperty(n(491)("div"),"a",{get:function(){return 7}}).a}))},507:function(t,e,n){var r=n(483);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},508:function(t,e,n){t.exports=n(475)},509:function(t,e,n){"use strict";var r=n(510),o=n(492),c=n(497),l={};n(475)(l,n(474)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(l,{next:o(1,n)}),c(t,e+" Iterator")}},510:function(t,e,n){var r=n(477),o=n(511),c=n(496),l=n(486)("IE_PROTO"),f=function(){},v=function(){var t,iframe=n(491)("iframe"),i=c.length;for(iframe.style.display="none",n(516).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),v=t.F;i--;)delete v.prototype[c[i]];return v()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[l]=t):n=v(),void 0===e?n:o(n,e)}},511:function(t,e,n){var r=n(482),o=n(477),c=n(493);t.exports=n(478)?Object.defineProperties:function(t,e){o(t);for(var n,l=c(e),f=l.length,i=0;f>i;)r.f(t,n=l[i++],e[n]);return t}},512:function(t,e,n){var r=n(479),o=n(480),c=n(513)(!1),l=n(486)("IE_PROTO");t.exports=function(object,t){var e,n=o(object),i=0,f=[];for(e in n)e!=l&&r(n,e)&&f.push(e);for(;t.length>i;)r(n,e=t[i++])&&(~c(f,e)||f.push(e));return f}},513:function(t,e,n){var r=n(480),o=n(514),c=n(515);t.exports=function(t){return function(e,n,l){var f,v=r(e),d=o(v.length),h=c(l,d);if(t&&n!=n){for(;d>h;)if((f=v[h++])!=f)return!0}else for(;d>h;h++)if((t||h in v)&&v[h]===n)return t||h||0;return!t&&-1}}},514:function(t,e,n){var r=n(485),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},515:function(t,e,n){var r=n(485),o=Math.max,c=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):c(t,e)}},516:function(t,e,n){var r=n(472).document;t.exports=r&&r.documentElement},517:function(t,e,n){var r=n(479),o=n(498),c=n(486)("IE_PROTO"),l=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},518:function(t,e,n){"use strict";var r=n(519)(!0);n(488)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},519:function(t,e,n){var r=n(485),o=n(481);t.exports=function(t){return function(e,n){var a,b,s=String(o(e)),i=r(n),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}},520:function(t,e,n){var r=n(477),o=n(521);t.exports=n(473).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},521:function(t,e,n){var r=n(522),o=n(474)("iterator"),c=n(476);t.exports=n(473).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||c[r(t)]}},522:function(t,e,n){var r=n(487),o=n(474)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,l;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:c?r(e):"Object"==(l=r(e))&&"function"==typeof e.callee?"Arguments":l}},523:function(t,e,n){var r=n(498),o=n(493);n(524)("keys",(function(){return function(t){return o(r(t))}}))},524:function(t,e,n){var r=n(490),o=n(473),c=n(484);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],l={};l[t]=e(n),r(r.S+r.F*c((function(){n(1)})),"Object",l)}},526:function(t,e,n){n(499),n(518),t.exports=n(520)},527:function(t,e,n){n(523),t.exports=n(473).Object.keys},528:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},563:function(t,e,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("01907af4",content,!0,{sourceMap:!1})},564:function(t,e,n){var r=n(18)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},743:function(t,e,n){var content=n(1191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5a28f29e",content,!0,{sourceMap:!1})},744:function(t,e,n){var content=n(1193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("c827041c",content,!0,{sourceMap:!1})}}]);