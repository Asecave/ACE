define("svgCommon",["lodash","componentsCore","prop-types","skins"],function(t,e,r,n){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1110)}({0:function(e,r){e.exports=t},1110:function(t,e,r){var n,i;n=[r(1111),r(3),r(5),r(1112)],void 0===(i=function(t,e,r,n){"use strict";var i={svgPrimitive:t};return e.compRegistrar.register("wysiwyg.viewer.components.svgPrimitive",i.svgPrimitive),r.skinsMap.addBatch(n),i}.apply(e,n))||(t.exports=i)},1111:function(t,e,r){var n,i;n=[r(0),r(4),r(3)],void 0===(i=function(t,e,r){"use strict";return{displayName:"SvgPrimitive",mixins:[r.mixins.skinBasedComp],propTypes:{id:e.string.isRequired,svgString:e.string.isRequired,compData:e.object,styleId:e.string},getSkinProperties:function(){return{"":{style:this.props.style,className:this.props.styleId,dangerouslySetInnerHTML:{__html:this.props.svgString}}}}}}.apply(e,n))||(t.exports=i)},1112:function(t,e,r){var n;void 0===(n=function(){"use strict";var t={"skins.viewer.svgPrimitive.SvgPrimitiveDefaultSkin":{react:[],css:{"% svg":"width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;"}}};return t}.apply(e,[]))||(t.exports=n)},3:function(t,r){t.exports=e},4:function(t,e){t.exports=r},5:function(t,e){t.exports=n}})});
//# sourceMappingURL=svgCommon.min.js.map