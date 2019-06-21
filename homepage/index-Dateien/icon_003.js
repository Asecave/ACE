define("icon",["lodash","santa-components","componentsCore","prop-types","skins","image-client-api","svgShape"],function(e,t,i,n,o,s,r){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=813)}({0:function(t,i){t.exports=e},150:function(e,t){e.exports=r},2:function(e,i){e.exports=t},22:function(e,t){e.exports=s},3:function(e,t){e.exports=i},4:function(e,t){e.exports=n},5:function(e,t){e.exports=o},813:function(e,t,i){var n,o;n=[i(0),i(4),i(5),i(22),i(2),i(150),i(814),i(3)],void 0===(o=function(e,t,i,n,o,s,r,a){"use strict";function p(e){return{$iconType:(t=e.compData,t&&"Image"===t.type?"image":"svg")};var t}var c={displayName:"Icon",mixins:[a.mixins.skinBasedComp,a.mixins.createChildComponentMixin],propTypes:e.assign({id:t.string,compData:t.object.isRequired,shouldRenderSrc:o.santaTypesDefinitions.Media.shouldRenderSrc,svgProps:t.object},o.utils.santaTypesUtils.getSantaTypesFromPropTypes(o.components.Image.propTypes),o.utils.santaTypesUtils.getSantaTypesByDefinition(s.vectorImage)),getInitialState:function(){return p(this.props)},componentWillReceiveProps:function(t){var i=p(t);e.isMatch(this.state,i)||this.setState(i)},createImage:function(){return this.createChildComponent(this.props.compData,"core.components.Image","image",{ref:"image",id:this.props.id+"image",imageData:this.props.compData,containerWidth:this.props.iconSize,containerHeight:this.props.iconSize,shouldRenderSrc:this.props.shouldRenderSrc,displayMode:n.fittingTypes.SCALE_TO_FILL})},createSvg:function(){return this.createChildComponent(this.props.compData,"wysiwyg.viewer.components.VectorImage","svg",e.merge({ref:"svg",id:this.props.id+"svg",svgId:this.props.compData.svgId,strokeWidth:0,compProp:{displayMode:n.fittingTypes.SCALE_TO_FIT},shapeStyle:{width:this.props.iconSize,height:this.props.iconSize}},this.props.svgProps||{}))},getSkinProperties:function(){var e="image"===this.state.$iconType;return{"":{},image:e?this.createImage():null,svg:e?null:this.createSvg()}},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.IconSkin"}};return a.compRegistrar.register("wysiwyg.viewer.components.Icon",c),i.skinsMap.addBatch(r),c}.apply(t,n))||(e.exports=o)},814:function(e,t,i){var n;void 0===(n=function(){"use strict";var e={"wysiwyg.viewer.skins.IconSkin":{react:[["div","image",[],{}],["div","svg",[],{}]],exports:{image:{skin:"skins.core.ImageNewSkin"},svg:{skin:"skins.viewer.VectorImageShapeBasicSkin"}},css:{"%":"overflow:hidden;","%image":"position:static;box-shadow:#000 0 0 0;","%svg":"position:static;box-shadow:#000 0 0 0;",'%[data-state~="image"] %svg':"display:none;",'%[data-state~="svg"] %image':"display:none;",'%[data-state~="svg"] %svg':"width:100%;height:100%;"}}};return e}.apply(t,[]))||(e.exports=n)}})});
//# sourceMappingURL=icon.min.js.map