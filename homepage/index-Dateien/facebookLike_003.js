define("facebookLike",["lodash","coreUtils","santa-components","componentsCore","skins","components","socialCommon"],function(e,n,t,o,r,i,a){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=762)}({0:function(n,t){n.exports=e},1:function(e,t){e.exports=n},18:function(e,n){e.exports=i},2:function(e,n){e.exports=t},3:function(e,n){e.exports=o},30:function(e,n){e.exports=a},5:function(e,n){e.exports=r},762:function(e,n,t){var o,r;o=[t(2),t(0),t(1),t(30),t(18),t(5),t(763),t(3)],void 0===(r=function(e,n,t,o,r,i,a,s){"use strict";var u="//www.facebook.com/plugins/like.php?a=a",c={da:"da_DK",de:"de_DE",en:"en_US",es:"es_ES",fr:"fr_FR",it:"it_IT",ja:"ja_JP",kr:"ko_KR",nl:"nl_NL",no:"nn_NO",pl:"pl_PL",pt:"pt_BR",ru:"ru_RU",sv:"sv_SE",tr:"tr_TR"};var p=t.urlUtils;function l(e,n){return"userLang"===e?n:e}function f(e,n){var t,o,r,i=e.compProp,a={href:n,layout:i.layout,show_faces:i.show_faces,action:i.action,colorscheme:i.colorScheme,send:i.send,locale:(t=i.language,o=e.userLanguage,r=l(t,o),c[r]||c.en)};return p.addProtocolIfMissing(u+"&"+p.toQueryString(a),"https:")}function d(e){var n=l(e.compProp.language,e.cookie,e.currentUrl);return t.translationsLoader.getTranslation("component_label",n,"component_label_ facebookLikeTitle")}var m={displayName:"FacebookLike",mixins:[s.mixins.skinBasedComp,o.socialCompMixin],propTypes:{rootId:e.santaTypesDefinitions.Component.rootId,structure:e.santaTypesDefinitions.Component.structure.isRequired,compProp:e.santaTypesDefinitions.Component.compProp.isRequired,currentUrl:e.santaTypesDefinitions.currentUrl,userLanguage:e.santaTypesDefinitions.WixUserSantaTypes.userLanguage.isRequired},getSkinProperties:function(){var e,n,t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",t="box_count",o="like",r={standard:{like:{w:250,h:40},recommend:{w:290,h:40}},standard_showFaces:{like:{w:250,h:85},recommend:{w:290,h:85}},button_count:{like:{w:{en:77,es:105,ru:125,pt:95,kr:98,de:114,da:159,fr:92,it:114,ja:104,nl:150,no:123,pl:114,sv:75,tr:100}[n],h:20},recommend:{w:{en:121,es:124,ru:153,pt:132,kr:89,de:116,da:121,fr:135,it:121,ja:104,nl:151,no:101,pl:97,sv:133,tr:120}[n],h:20}},box_count:{like:{w:{en:51,es:76,ru:81,pt:58,kr:57,de:83,da:107,fr:63,it:72,ja:72,nl:89,no:74,pl:75,sv:52,tr:62}[n],h:40},recommend:{w:{en:95,es:95,ru:109,pt:95,kr:48,de:85,da:69,fr:105,it:78,ja:72,nl:90,no:52,pl:58,sv:111,tr:82}[n],h:40}},box_count_showFaces:{like:{w:85,h:65},recommend:{w:125,h:65}},button_count_showFaces:{like:{w:137,h:20},recommend:{w:137,h:20}}},i=e?e.layout:t;i=e&&e.show_faces?i+"_showFaces":i;var a=e?e.action:o;return r[i][a]}(this.props.compProp,l(this.props.compProp.language,this.props.userLanguage));return{"":{style:{width:t.w+"px",height:t.h+"px"},tabIndex:0,title:d(this.props),"aria-label":d(this.props)},iframe:(e=this.props,n=this.getSocialUrl("masterPage"===this.props.rootId),{"data-src":f(e,n),frameBorder:"0",width:"100%",height:"100%",scrolling:"no",overflow:"hidden",allowtransparency:"true",title:d(e),"aria-label":d(e)})}}};return s.compRegistrar.register("wysiwyg.viewer.components.WFacebookLike",m),r.translationRequirementsChecker.registerCommonLanguageRequirement("wysiwyg.viewer.components.WFacebookLike",function(e,t){return n.get(t,["properties","language"])}),i.skinsMap.addBatch(a),m}.apply(n,o))||(e.exports=r)},763:function(e,n,t){var o;void 0===(o=function(){"use strict";var e={"skins.core.FacebookLikeSkin":{react:[["div","facebook",[],{},["iframe","iframe",[],{}]]],css:{"%":"display:-webkit-box;display:-webkit-flex;display:flex;"}}};return e}.apply(n,[]))||(e.exports=o)}})});
//# sourceMappingURL=facebookLike.min.js.map