define("stripContainer",["santa-components","componentsCore","components","backgroundCommon"],function(e,n,t,r){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1098)}({1098:function(e,n,t){var r,i;r=[t(2),t(3),t(18),t(46)],void 0===(i=function(e,n,t,r){"use strict";var i={displayName:"StripContainer",mixins:[t.mediaCommon.mediaLogicMixins.fill,n.mixins.skinBasedComp,r.mixins.backgroundDetectionMixin,n.mixins.createChildComponentMixin],propTypes:{screenSize:e.santaTypesDefinitions.screenSize.isRequired},statics:{behaviors:t.mediaCommon.mediaBehaviors.fill},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"},getSkinProperties:function(){return{"":{},background:this.createFillLayers(),inlineContent:{children:this.props.children}}}};return n.compRegistrar.register("wysiwyg.viewer.components.StripContainer",i),i}.apply(n,r))||(e.exports=i)},18:function(e,n){e.exports=t},2:function(n,t){n.exports=e},3:function(e,t){e.exports=n},46:function(e,n){e.exports=r}})});
//# sourceMappingURL=stripContainer.min.js.map