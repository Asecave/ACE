define("singleAudioPlayer",["lodash","santa-components","componentsCore","skins","reactDOM","audioCommon"],function(t,o,e,a,i,r){return function(t){var o={};function e(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=o,e.d=function(t,o,a){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(a,i,function(o){return t[o]}.bind(null,i));return a},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=1069)}({0:function(o,e){o.exports=t},1069:function(t,o,e){var a,i;a=[e(2),e(0),e(7),e(3),e(132),e(5),e(1070)],void 0===(i=function(t,o,e,a,i,r,n){"use strict";var l=function(t){return 20*t},d=function(t){return t/1e3},s=function(t){var o=Math.floor(t/60),e=Math.floor(t%60);return(o<10?"0"+o:o)+":"+(e<10?"0"+e:e)},p=function(t,o,e){var a=(t.nativeEvent.offsetX?t.nativeEvent.offsetX:t.nativeEvent.layerX)/o;return Math.ceil(a*e)},u={displayName:"SingleAudioPlayer",mixins:[a.mixins.skinBasedComp,a.mixins.skinInfo,i.audioMixin],propTypes:{compData:t.santaTypesDefinitions.Component.compData.isRequired,compProp:t.santaTypesDefinitions.Component.compProp.isRequired,styleId:t.santaTypesDefinitions.Component.styleId.isRequired},getInitialState:function(){return this.audioVolume=this.props.compProp.volume,this.autoPlay=this.props.compProp.autoplay,{$playerState:"waiting",$device:this.getDeviceState(),$isduration:"duration",$isMuted:"unmuted",trackDuration:0,progressPosition:0,volumeBars:(t=this.props.compProp.volume,0===t?0:Math.ceil(t/20)),dragging:!1,$heightChanged:!1};var t},finishedPlayingAudio:function(){this.props.compProp.loop?this.playAudio():(this.initiatePause(),this.setState({$playerState:"repeat"}))},whileLoadingHandler:function(t){this.setState({trackDuration:d(t)})},whilePlayingHandler:function(t){this.setState({progressPosition:d(t)})},getProgressBarWidth:function(){return e.findDOMNode(this.refs.progressbar).offsetWidth},resetTrackPosition:function(){this.setState({progressPosition:0})},movingProgressbarHandle:function(t){var o=this.getProgressBarWidth(),e=this.getSkinExports("barSpaceLeft").barSpaceLeft,a=this.getSkinExports("barSpaceRight").barSpaceRight,i=this.props.style.width,r=t.pageX,n=this.getAudioDuration(),l=r<e||r>i-a,d=p(t,o,n);l||(this.setState({progressPosition:d/n*100}),this.seekAudio(d))},stoppedMovingProgressbarHandle:function(t){var o=this.getProgressBarWidth(),e=this.getAudioDuration(),a=p(t,o,e);this.setState({progressPosition:a/e*100}),this.seekAudio(a)},callSeek:function(t){var o=this.getProgressBarWidth(),e=this.getAudioDuration(),a=p(t,o,e);this.seekAudio(a)},buildVolumeScale:function(){var e=this.props.styleId,a=this.state.volumeBars;return o.times(5,function(o){return t.utils.createReactElement("li",{className:o<a?e+"_on":e+"_off",onClick:this.handleVolumeBarClick,"data-index":o+1},t.utils.createReactElement("div",{className:e+"_colorBlock"}),t.utils.createReactElement("div",{className:e+"_colorBlank"}))}.bind(this))},callToggleMute:function(){var t;t=this,"unmuted"===this.state.$isMuted?t.muteAudio():t.unmuteAudio(),"unmuted"===this.state.$isMuted?this.setState({$isMuted:"muted"}):this.setState({$isMuted:"unmuted"})},getTargetIndex:function(t){return t.getAttribute("data-index")},setNonPersistentVolume:function(t){t=Math.min(t,5),t=Math.max(t,0),this.setState({volumeBars:t}),this.setVolume(l(t))},handleVolumeBarClick:function(t){var o=this.getTargetIndex(t.currentTarget);this.setNonPersistentVolume(o)},updateComponentHeight:function(t){return this.getSkinExports(t+"Height")[t+"Height"]},handleMediaButtonPress:function(){switch(this.state.$playerState){case"waiting":case"pausing":case"repeat":this.initiatePlay();break;case"playing":this.initiatePause()}},getMediaButtonAriaLabel:function(){switch(this.state.$playerState){case"waiting":case"pausing":return"Play";case"playing":return"Pause";case"repeat":return"Repeat"}},changeTrackPlayingPosition:function(t){var o=this.state.trackDuration;t=Math.min(t,o),t=Math.max(t,0),this.setState({progressPosition:t}),this.seekAudio(1e3*t)},handleAudioPlayerKeyDown:function(t){var o=.1*this.state.trackDuration;switch(t.key){case"ArrowLeft":this.changeTrackPlayingPosition(this.state.progressPosition-o),t.preventDefault();break;case"ArrowRight":this.changeTrackPlayingPosition(this.state.progressPosition+o),t.preventDefault();break;case"ArrowUp":this.setNonPersistentVolume(this.state.volumeBars+1),t.preventDefault();break;case"ArrowDown":this.setNonPersistentVolume(this.state.volumeBars-1),t.preventDefault()}},isMuteToggled:function(){return"unmuted"!==this.state.$isMuted},getVolumeLabel:function(){return l(this.state.volumeBars)+"% volume"+(this.isMuteToggled()?", muted":"")},getProgressPercentage:function(){return Math.floor(this.state.progressPosition/this.state.trackDuration*100)},getSkinProperties:function(){return this.autoPlay=this.props.compProp.autoplay,this.updateAudioObject(),{"":{style:{height:this.updateComponentHeight(this.getDeviceState())}},player:{role:"application","aria-label":"Application, Audio player, "+this.props.compData.track,onKeyDown:this.handleAudioPlayerKeyDown},sep:{children:" - "},sep2:{children:" / "},artistLabel:{children:this.props.compData.artist},trackLabel:{children:this.props.compData.track},mediaButton:{onClick:this.handleMediaButtonPress,"aria-label":this.getMediaButtonAriaLabel()},bar:{onClick:this.callSeek},slider:{onClick:this.callSeek,style:{width:this.getProgressPercentage()+"%"}},handle:{onDrag:this.movingProgressbarHandle,onDragEnd:this.stoppedMovingProgressbarHandle,style:{cursor:"pointer",left:this.getProgressPercentage()+"%"},draggable:!0},volumeBtn:{onClick:this.callToggleMute,"aria-label":"Mute","aria-pressed":this.isMuteToggled()},volumeControls:{onKeyPress:this.handleVolumeBtnKeyPress},volumeScale:{tabIndex:"0",children:this.buildVolumeScale(),role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":20*this.state.volumeBars,"aria-valuetext":this.getVolumeLabel()},progressbar:{tabIndex:"0",role:"progressbar","aria-valuemin":"0","aria-valuemax":this.state.trackDuration,"aria-valuenow":this.state.progressPosition,"aria-valuetext":s(this.state.progressPosition)},trackDuration:{children:s(this.state.trackDuration)},trackPosition:{children:s(this.state.progressPosition)}}}};return a.compRegistrar.register("wysiwyg.common.components.singleaudioplayer.viewer.SingleAudioPlayer",u),r.skinsMap.addBatch(n),u}.apply(o,a))||(t.exports=i)},1070:function(t,o,e){var a;void 0===(a=function(){"use strict";var t={"wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerFramedPlay":{react:[["div","player",[],{},["div",null,["_iWrapper"],{},["div","info",[],{},["span","trackLabel",["_track"],{}],["span","sep",["_visible"],{}],["span","artistLabel",["_artist"],{}]],["span","durationOfTrack",["_duration"],{},["span","trackPosition",["_hidden"],{}],["span","sep2",["_hidden"],{}],["span","trackDuration",[],{}]]],["div",null,["_mediaControls"],{},["div",null,["_btnWrapper"],{},["div","mediaButtonContainer",["_mediaButtonContainer"],{},["button","mediaButton",["_button","_mediaButton"],{},["span",null,["_mediaButtonIcon"],{}]]]],["div","progressbar",[],{},["div","bar",[],{}],["div","slider",[],{}],["div","handle",[],{}]],["div","volumeControls",["_volumeControls"],{},["button","volumeBtn",["_button","_unmuted"],{},["span",null,["_mediaButtonIcon"],{}]],["ul","volumeScale",[],{},["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]]]]]]],exports:{barSpaceLeft:46,barSpaceRight:60,mobileHeight:82,desktopHeight:68},params:{brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA",ird:"BORDER_RADIUS",shd:"BOX_SHADOW",bg:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",audioIcons:"BORDER_COLOR_ALPHA",dividers:"BORDER_COLOR_ALPHA",audioText:"TEXT_COLOR",fnt:"FONT",fnts:"FONT",vol:"BORDER_COLOR_ALPHA",prog:"BG_COLOR_ALPHA"},paramsDefaults:{brw:"0",brd:"color_15",ird:["rd"],shd:"0 1px 4px rgba(0, 0, 0, 0.6)",bg:"color_13",rd:"0",audioIcons:"color_21",dividers:"color_15",audioText:"color_11",fnt:"font_9",fnts:"font_10",vol:"color_15",prog:"color_21"},css:{"%_hidden":"display:none;","%_visible":"display:inline;","%":"min-width:calc(250px + [brw]*2);min-height:calc(68px + [brw]*2);max-height:calc(68px + [brw]*2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;border:[brw] solid [brd];[ird]  [shd]  box-sizing:border-box;","%player":"min-width:250px;min-height:68px;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[rd]",'%[data-state~="mobile"]':"min-height:calc(82px + [brw]*2);max-height:calc(82px + [brw]*2);height:82px;",'%[data-state~="mobile"] %player':"min-height:82px;max-height:82px;min-height:82px;","%player:after":'content:"";overflow:hidden;z-index:-1;position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;background-color:[bg];',"%player %_mediaButtonIcon":"display:block;color:#fff;","%player %_mediaButtonIcon:before,%player %_mediaButtonIcon:after":'margin:-8px 0 0;background-color:[audioIcons];content:"";position:absolute;top:50%;left:0;',"%_iWrapper":"border-bottom:1px solid [dividers];float:left;width:100%;height:31px;","%info":"color:[audioText];text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;position:absolute;left:10px;right:40px;top:8px;[fnt]","%_mediaControls":"float:left;width:100%;","%_mediaButtonContainer":"float:left;","%_volumeControls":"float:right;margin:10px 10px 0 0;","%durationOfTrack":"text-align:right;min-width:30px;float:right;margin:10px 10px 0 0;[fnts]","%trackPosition,%trackDuration,%artistLabel,%trackLabel,%sep,%sep2":"color:[audioText];","%artistLabel":"opacity:0.5;","%trackPosition,%sep2":"display:none;","%_button":"position:relative;overflow:hidden;float:left;","%_button:before,%_button:after":'content:"";position:absolute;top:50%;left:0;',"%_btnWrapper":"float:left;width:37px;height:35px;border-right:1px solid [dividers];cursor:pointer;","%volumeBtn":"margin-top:-2px;width:20px;height:20px;","% ul":"padding:0;list-style-type:none;height:10px;",'%volumeScale,%[data-state~="unmuted"] %volumeScale,%[data-state~="muted"] %volumeScale':"float:left;height:10px;width:auto;margin:3px 0 0 2px;","%volumeScale li":"width:4px;height:10px;display:inline;float:left;margin:0;cursor:pointer;","%volumeScale li%_on %_colorBlock":"opacity:1;","%volumeScale li%_off %_colorBlock":"opacity:0.3;","%_colorBlock,%_colorBlank":"display:inline;float:left;width:2px;height:10px;","%_colorBlock":"background-color:[vol];","%_colorBlank":"background-color:[bg];","%progressbar":"position:absolute;left:46px;right:60px;height:10px;bottom:12px;","%bar":"cursor:pointer;width:100%;position:absolute;height:10px;background-color:[prog];box-shadow:inset 0 -1px 1px rgba(255, 255, 255, 0.3);opacity:0.3;","%slider":"position:absolute;height:10px;display:block;background-color:[prog];overflow:hidden;cursor:pointer;","%slider:after":'content:"";z-index:-1;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;',"%handle":"height:10px;width:10px;background-color:transparent;position:absolute;cursor:pointer;","%handle:hover":"background-color:[audioIcons];opacity:0.3;",'%[data-state~="unmuted"] %volumeScale li%_on %_colorBlock':"opacity:1;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeScale li%_on %_colorBlock':"opacity:0.3;",'%[data-state~="muted"] %volumeBtn:before':"width:16px;height:16px;border:1px solid [vol];margin-top:-9px;border-radius:16px;",'%[data-state~="muted"] %volumeBtn:after':"width:18px;border-top:1px solid [vol];-webkit-transform:rotate(-45deg);transform:rotate(-45deg);",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="playing"] %mediaButton':"width:16px;height:16px;margin:10px;",'%[data-state~="playing"] %mediaButton %_mediaButtonIcon:before':"left:0;margin-top:-8px;background:transparent;width:4px;height:14px;border:5px solid [audioIcons];border-width:0 5px;",'%[data-state~="pausing"] %mediaButton,%[data-state~="stopped"] %mediaButton,%[data-state~="waiting"] %mediaButton':"width:16px;height:16px;margin:10px;",'%[data-state~="pausing"] %mediaButton %_mediaButtonIcon:before,%[data-state~="stopped"] %mediaButton %_mediaButtonIcon:before,%[data-state~="waiting"] %mediaButton %_mediaButtonIcon:before':"left:0;margin-top:-8px;background:transparent;border:8px solid transparent;border-width:8px 16px;border-left-color:[audioIcons];",'%[data-state~="repeat"] %mediaButton':"width:16px;height:18px;margin:8px;",'%[data-state~="repeat"] %mediaButton %_mediaButtonIcon:before':"left:1px;width:9px;height:9px;border:3px solid [audioIcons];margin-top:-6px;background:transparent;border-radius:16px;",'%[data-state~="mobile"] %progressbar':"right:10px;",'%[data-state~="mobile"] %_iWrapper':"height:46px;",'%[data-state~="mobile"] %artistLabel,%[data-state~="mobile"] %trackLabel':"float:left;width:100%;",'%[data-state~="mobile"] %_volumeControls,%[data-state~="mobile"] %sep':"display:none;",'%[data-state~="loading"] %player *':"display:none;"}},"wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerLargePlay":{react:[["div","player",[],{},["div",null,["_mediaControls"],{},["div","mediaButtonContainer",["_mediaButtonContainer"],{},["button","mediaButton",["_button","_mediaButton"],{},["span",null,["_mediaButtonIcon"],{}]]],["ul","info",[],{},["li","trackLabel",["_track","_ellipsis"],{}],["li","sep",[],{}],["li","artistLabel",["_artist","_ellipsis"],{}]],["div",null,["_vWrapper"],{},["span","durationOfTrack",["_duration"],{},["span","trackPosition",[],{}],["span","sep2",[],{}],["span","trackDuration",[],{}]],["div","volumeControls",["_volumeControls"],{},["button","volumeBtn",["_button","_unmuted"],{},["span",null,["_mediaButtonIcon"],{}]],["ul","volumeScale",[],{},["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]]]]]],["div","progressbar",[],{},["div","bar",[],{}],["div","slider",[],{}],["div","handle",[],{}]]]],exports:{barSpaceLeft:0,barSpaceRight:0,mobileHeight:75,desktopHeight:75},params:{brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA",shd:"BOX_SHADOW",bg:"BG_COLOR_ALPHA",audioIcons:"BORDER_COLOR_ALPHA",audioText:"TEXT_COLOR",fnt:"FONT",dividers:"COLOR_ALPHA",fnts:"FONT",vol:"BORDER_COLOR_ALPHA",prog:"BG_COLOR_ALPHA"},paramsDefaults:{brw:"0",brd:"color_15",shd:"0 1px 4px rgba(0, 0, 0, 0.6)",bg:"color_13",audioIcons:"color_21",audioText:"color_11",fnt:"font_9",dividers:"color_15",fnts:"font_10",vol:"color_15",prog:"color_21"},css:{"%_hidden":"display:none;","%_visible":"display:inline;","%":"min-width:calc(250px + [brw]*2);min-height:calc(75px + [brw]*2);max-height:calc(75px + [brw]*2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;border:[brw] solid [brd];box-sizing:border-box;[shd]","%player":"min-width:250px;min-height:75px;overflow:hidden;margin:auto;background-color:[bg];position:absolute;top:0;right:0;bottom:0;left:0;",'%[data-state~="mobile"]':"min-height:calc(75px + [brw]*2);max-height:calc(75px + [brw]*2);",'%[data-state~="mobile"] %player':"min-height:75px;max-height:75px;","%player:after":'content:"";overflow:hidden;z-index:-1;position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;background-color:[bg];',"%player %_mediaButtonIcon":"display:block;color:#fff;","%player %_mediaButtonIcon:before,%player %_mediaButtonIcon:after":'margin:-8px 0 0;background-color:[audioIcons];content:"";position:absolute;top:50%;left:0;',"%info":"color:[audioText];padding:0;margin:20px 0 20px 14px;position:absolute;left:70px;right:70px;[fnt]","%_ellipsis":"text-overflow:ellipsis;white-space:nowrap;overflow:hidden;","%_mediaControls":"float:left;width:100%;","%_mediaButtonContainer":"float:left;width:70px;height:70px;border-right:1px solid [dividers];","%_volumeControls":"float:right;padding-top:2px;","%durationOfTrack":"width:100%;text-align:right;float:right;[fnts]","%trackPosition,%trackDuration,%artistLabel,%trackLabel,%sep,%sep2":"color:[audioText];","%artistLabel":"opacity:0.5;","%trackPosition,%sep,%sep2":"display:none !important;","%_button":"position:relative;overflow:hidden;float:left;","%_button:before,%_button:after":'content:"";position:absolute;top:50%;left:0;',"%mediaButton":"width:30px;height:30px;margin:20px;","%mediaButton %_mediaButtonIcon:before,%mediaButton %_mediaButtonIcon:after":"left:0;background:transparent;margin-top:-15px;","%_vWrapper":"float:right;width:50px;padding:20px 14px 20px 0;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeBtn:before':"width:16px;height:16px;border:1px solid [vol];margin-top:-9px;border-radius:16px;",'%[data-state~="muted"] %volumeBtn:after':"width:18px;border-top:1px solid [vol];-webkit-transform:rotate(-45deg);transform:rotate(-45deg);",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeScale li%_on %_colorBlock':"opacity:0.3;","%volumeBtn":"margin-top:-2px;width:20px;height:20px;","% ul":"padding:0;list-style-type:none;height:10px;",'%volumeScale,%[data-state~="unmuted"]%volumeScale,%[data-state~="muted"] %volumeScale':"float:left;height:10px;width:auto;margin:3px 0 0 2px;","%volumeScale li":"width:4px;height:10px;display:inline;float:left;margin:0;cursor:pointer;","%volumeScale li%_on %_colorBlock":"opacity:1;","%volumeScale li%_off %_colorBlock":"opacity:0.3;","%_colorBlock,%_colorBlank":"width:2px;height:10px;display:inline;float:left;","%_colorBlock":"background-color:[vol];","%_colorBlank":"background-color:[bg];","%progressbar,%bar":"height:5px;width:100%;","%progressbar":"position:absolute;bottom:0;","%bar":"cursor:pointer;position:absolute;background-color:[prog];box-shadow:inset 0 -1px 1px rgba(255, 255, 255, 0.3);opacity:0.3;","%slider":"position:absolute;height:5px;display:block;background-color:[prog];overflow:hidden;cursor:pointer;","%slider:after":'content:"";z-index:-1;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;',"%handle":"height:5px;width:5px;background-color:transparent;position:absolute;cursor:pointer;","%handle:hover":"background-color:[audioIcons];opacity:0.3;",'%[data-state~="playing"] %mediaButton %_mediaButtonIcon:before':"width:10px;height:30px;border:10px solid [audioIcons];border-width:0 10px;",'%[data-state~="repeat"] %mediaButton %_mediaButtonIcon:before':"left:3px;width:15px;height:15px;border:4px solid [audioIcons];margin-top:-10px;background:transparent;border-radius:15px;",'%[data-state~="pausing"] %mediaButton %_mediaButtonIcon:before,%[data-state~="stopped"] %mediaButton %_mediaButtonIcon:before,%[data-state~="waiting"] %mediaButton %_mediaButtonIcon:before':"border:8px solid transparent;border-width:15px 30px;border-left-color:[audioIcons];",'%[data-state~="mobile"] %_volumeControls':"display:none;",'%[data-state="loading"] %player *':"display:none;"}},"wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerRoundPlay":{react:[["div","player",[],{},["div",null,["_mediaControls"],{},["div","mediaButtonContainer",["_mediaButtonContainer"],{},["div",null,["_btnWrapper"],{},["button","mediaButton",["_button","_mediaButton"],{},["span",null,["_mediaButtonIcon"],{}]]]],["div","info",[],{},["span","trackLabel",["_track"],{}],["span","sep",["_visible"],{}],["span","artistLabel",["_artist"],{}]],["div","volumeControls",["_volumeControls"],{},["button","volumeBtn",["_button","_unmuted"],{},["span",null,["_mediaButtonIcon"],{}]],["ul","volumeScale",[],{},["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]]]],["span","durationOfTrack",["_duration"],{},["span","trackPosition",[],{}],["span","sep2",[],{}],["span","trackDuration",[],{}]],["div","progressbar",[],{},["div","bar",[],{}],["div","slider",[],{}],["div","handle",[],{}]]]]],exports:{barSpaceLeft:91,barSpaceRight:53,mobileHeight:65,desktopHeight:52},params:{brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA",ird:"BORDER_RADIUS",shd:"BOX_SHADOW",bg:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",audioIcons:"BORDER_COLOR_ALPHA",audioText:"TEXT_COLOR",fnt:"FONT",fnts:"FONT",vol:"BORDER_COLOR_ALPHA",prog:"BG_COLOR_ALPHA"},paramsDefaults:{brw:"0",brd:"color_15",ird:["rd"],shd:"0 1px 4px rgba(0, 0, 0, 0.6)",bg:"color_13",rd:"0",audioIcons:"color_21",audioText:"color_11",fnt:"font_9",fnts:"font_10",vol:"color_15",prog:"color_21"},css:{"%_hidden":"display:none;","%_visible":"display:inline;","%":"min-width:calc(250px + [brw]*2);min-height:calc(52px + [brw]*2);max-height:calc(52px + [brw]*2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;border:[brw] solid [brd];[ird]  [shd]","%player":"min-width:250px;min-height:52px;overflow:hidden;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[rd]",'%[data-state~="mobile"]':"min-height:calc(65px + [brw]*2);max-height:calc(65px + [brw]*2);height:65px;",'%[data-state~="mobile"] %player':"min-height:65px;max-height:65px;min-height:65px;","%player:after":'content:"";overflow:hidden;z-index:-1;position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;background-color:[bg];',"%player %_mediaButtonIcon":"display:block;color:#fff;","%player %_mediaButtonIcon:before,%player %_mediaButtonIcon:after":'margin:-8px 0 0;background-color:[audioIcons];content:"";position:absolute;top:50%;left:0;',"%info":"color:[audioText];text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;position:absolute;left:50px;right:52px;[fnt]","%_mediaControls":"float:left;width:100%;margin-top:10px;","%_mediaButtonContainer":"float:left;margin-left:10px;","%_volumeControls":"float:right;margin-right:10px;","%durationOfTrack":"position:absolute;left:50px;right:10px;bottom:12px;[fnts]","%trackPosition,%trackDuration,%artistLabel,%trackLabel,%sep,%sep2":"color:[audioText];","%trackPosition":"float:left;","%trackDuration":"float:right;","%artistLabel":"opacity:0.5;","%sep2":"display:none;","%_button":"position:relative;overflow:hidden;float:left;","%_button:before,%_button:after":'content:"";position:absolute;top:50%;left:0;',"%_btnWrapper":"float:left;width:30px;height:30px;border:1px solid [audioIcons];border-radius:28px;cursor:pointer;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeBtn:before':"width:16px;height:16px;border:1px solid [vol];margin-top:-9px;border-radius:16px;",'%[data-state~="muted"] %volumeBtn:after':"width:18px;border-top:1px solid [vol];-webkit-transform:rotate(-45deg);transform:rotate(-45deg);",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeScale li%_on %_colorBlock':"opacity:0.3;","%volumeBtn":"margin-top:-2px;width:20px;height:20px;","% ul":"padding:0;list-style-type:none;height:10px;",'%volumeScale,%[data-state~="unmuted"] %volumeScale,%[data-state~="muted"] %volumeScale':"float:left;height:10px;width:auto;margin:3px 0 0 2px;","%volumeScale li":"width:4px;height:10px;display:inline;float:left;margin:0;cursor:pointer;","%volumeScale li%_on %_colorBlock":"opacity:1;","%volumeScale li%_off %_colorBlock":"opacity:0.3;","%_colorBlock,%_colorBlank":"width:2px;height:10px;display:inline;float:left;","%_colorBlock":"background-color:[vol];","%_colorBlank":"background-color:[bg];","%progressbar":"position:absolute;left:90px;right:52px;bottom:12px;height:5px;margin:3px 1px;","%bar":"cursor:pointer;width:100%;position:absolute;height:5px;background-color:[prog];box-shadow:inset 0 -1px 1px rgba(255, 255, 255, 0.3);opacity:0.3;","%slider":"position:absolute;height:5px;display:block;background-color:[prog];overflow:hidden;cursor:pointer;","%slider:after":'content:"";z-index:-1;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;',"%handle":"cursor:pointer;width:10px;height:10px;border-radius:10px;position:absolute;left:-2px;top:-3px;background-color:[prog];display:block;",'%[data-state~="playing"] %mediaButton':"width:24px;height:20px;margin:5px 5px 0 3px;",'%[data-state~="playing"] %mediaButton %_mediaButtonIcon:before':"left:7px;width:4px;height:14px;border:4px solid [audioIcons];border-width:0 4px;margin-top:-7px;background:transparent;",'%[data-state~="repeat"] %mediaButton':"width:24px;height:20px;margin:4px 5px 0 1px;",'%[data-state~="repeat"] %mediaButton %_mediaButtonIcon:before':"left:6px;width:9px;height:9px;border:3px solid [audioIcons];margin-top:-6px;background:transparent;border-radius:16px;",'%[data-state~="pausing"] %mediaButton,%[data-state~="stopped"] %mediaButton,%[data-state~="waiting"] %mediaButton':"width:24px;height:20px;margin:5px 5px 0 3px;",'%[data-state~="pausing"] %mediaButton %_mediaButtonIcon:before,%[data-state~="stopped"] %mediaButton %_mediaButtonIcon:before,%[data-state~="waiting"] %mediaButton %_mediaButtonIcon:before':"left:8px;border:8px solid transparent;border-width:8px 12px;border-left-color:[audioIcons];margin-top:-8px;background:transparent;",'%[data-state~="mobile"] %handle':"cursor:pointer;width:10px;height:10px;border-radius:10px;position:absolute;left:-2px;top:-3px;background-color:[prog];display:block;",'%[data-state~="mobile"] %artistLabel,%[data-state~="mobile"] %trackLabel':"float:left;width:100%;",'%[data-state~="mobile"] %durationOfTrack':"bottom:12px;",'%[data-state~="mobile"] %_mediaButtonContainer':"margin-top:7px;",'%[data-state~="mobile"] %_volumeControls,%[data-state~="mobile"] %sep':"display:none;",'%[data-state~="loading"] %player *':"display:none;"}},"wysiwyg.common.components.singleaudioplayer.viewer.skins.SingleAudioPlayerSkin":{react:[["div","player",[],{},["div","info",[],{},["span","trackLabel",["_track"],{}],["span","sep",["_visible"],{}],["span","artistLabel",["_artist"],{}]],["div",null,["_mediaControls"],{},["div","mediaButtonContainer",["_mediaButtonContainer"],{},["button","mediaButton",["_button","_mediaButton"],{},["span",null,["_mediaButtonIcon"],{}]]],["div","progressbar",[],{},["div","bar",[],{}],["div","slider",[],{}],["div","handle",[],{}]],["div","volumeControls",["_volumeControls"],{},["button","volumeBtn",["_button"],{},["span",null,["_mediaButtonIcon"],{}]],["ul","volumeScale",[],{},["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]],["li",null,["_off"],{},["div",null,["_colorBlock"],{}],["div",null,["_colorBlank"],{}]]]],["span","durationOfTrack",["_duration"],{},["span","trackPosition",[],{}],["span","sep2",[],{}],["span","trackDuration",[],{}]]]]],exports:{barSpaceLeft:29,barSpaceRight:130,mobileHeight:76,desktopHeight:60},params:{brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA",ird:"BORDER_RADIUS",shd:"BOX_SHADOW",bg:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",audioIcons:"BORDER_COLOR_ALPHA",audioText:"TEXT_COLOR",fnt:"FONT",fnts:"FONT",vol:"BORDER_COLOR_ALPHA",prog:"BG_COLOR_ALPHA"},paramsDefaults:{brw:"0",brd:"color_15",ird:["rd"],shd:"0 1px 4px rgba(0, 0, 0, 0.6)",bg:"color_13",rd:"0",audioIcons:"color_21",audioText:"color_11",fnt:"font_9",fnts:"font_10",vol:"color_15",prog:"color_21"},css:{"%_hidden":"display:none;","%_visible":"display:inline;","%":"min-width:calc(250px + [brw]*2);min-height:calc(60px + [brw]*2);max-height:calc(60px + [brw]*2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;border:[brw] solid [brd];box-sizing:border-box;[ird]  [shd]","%player":"min-width:250px;min-height:60px;overflow:hidden;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[rd]",'%[data-state~="mobile"]':"min-height:calc(76px + [brw]*2);max-height:calc(76px + [brw]*2);height:76px;",'%[data-state~="mobile"] %player':"min-height:76px;max-height:76px;min-height:76px;","%player:after":'content:"";overflow:hidden;z-index:-1;position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;background-color:[bg];',"%player %_mediaButtonIcon":"display:block;color:#fff;","%player %_mediaButtonIcon:before,%player %_mediaButtonIcon:after":'margin:-8px 0 0;background-color:[audioIcons];content:"";position:absolute;top:50%;left:0;',"%info":"color:[audioText];padding:0 10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0 8px 0;display:block;min-height:7px;[fnt]","%_mediaControls":"float:left;width:100%;","%_mediaButtonContainer":"float:left;margin-left:10px;","%_volumeControls":"float:right;margin-right:10px;","%durationOfTrack,%trackPosition,%trackDuration,%artistLabel,%trackLabel,%sep,%sep2":"color:[audioText];","%durationOfTrack":"text-align:center;min-width:72px;float:right;margin-right:4px;[fnts]","%artistLabel":"opacity:0.5;","%_button":"position:relative;overflow:hidden;float:left;","%_button:before,%_button:after":'content:"";position:absolute;top:50%;left:0;','%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="unmuted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeBtn:before':"width:16px;height:16px;border:1px solid [vol];margin-top:-9px;border-radius:16px;",'%[data-state~="muted"] %volumeBtn:after':"width:18px;border-top:1px solid [vol];-webkit-transform:rotate(-45deg);transform:rotate(-45deg);",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:before':"left:-2px;border:7px solid transparent;border-right-color:[vol];margin-top:-7px;border-radius:3px;background:transparent;",'%[data-state~="muted"] %volumeBtn %_mediaButtonIcon:after':"left:4px;width:4px;height:6px;margin-top:-3px;background-color:[vol];",'%[data-state~="muted"] %volumeScale li%_on %_colorBlock':"opacity:0.3;","%volumeBtn":"margin-top:-3px;width:20px;height:20px;","% ul":"padding:0;list-style-type:none;height:10px;",'%volumeScale,%[data-state~="unmuted"] %volumeScale,%[data-state~="muted"] %volumeScale':"float:left;height:10px;width:auto;margin:2px 0 0 2px;","%_colorBlock,%_colorBlank":"width:2px;height:10px;display:inline;float:left;","%_colorBlock":"background-color:[vol];","%_colorBlank":"background-color:[bg];","%volumeScale li":"width:4px;height:10px;display:inline;float:left;margin:0;cursor:pointer;","%volumeScale li%_on %_colorBlock":"opacity:1;","%volumeScale li%_off %_colorBlock":"opacity:0.3;","%progressbar":"position:absolute;left:28px;right:129px;height:5px;margin:5px 1px;","%bar":"cursor:pointer;width:100%;position:absolute;height:5px;background-color:[prog];box-shadow:inset 0 -1px 1px rgbaa(255, 255, 255, 0.3);opacity:0.3;","%slider":"position:absolute;height:5px;display:block;background-color:[prog];overflow:hidden;cursor:pointer;","%slider:after":'content:"";z-index:-1;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;',"%handle":"height:5px;width:5px;background-color:transparent;position:absolute;cursor:pointer;","%handle:hover":"background-color:[audioIcons];opacity:0.3;",'%[data-state~="pausing"] %mediaButton,%[data-state~="stopped"] %mediaButton,%[data-state~="waiting"] %mediaButton':"width:16px;height:16px;margin:-1px 5px 0 0;",'%[data-state~="pausing"] %mediaButton %_mediaButtonIcon:before,%[data-state~="stopped"] %mediaButton %_mediaButtonIcon:before,%[data-state~="waiting"] %mediaButton %_mediaButtonIcon:before':"left:0;border:8px solid transparent;border-width:8px 12px;border-left-color:[audioIcons];margin-top:-8px;background:transparent;",'%[data-state~="playing"] %mediaButton':"width:16px;height:16px;margin:-1px 5px 0 0;",'%[data-state~="playing"] %mediaButton %_mediaButtonIcon:before':"left:0;width:4px;height:14px;border:4px solid [audioIcons];border-width:0 4px;margin-top:-7px;background:transparent;",'%[data-state~="repeat"] %mediaButton':"width:16px;height:18px;margin:-3px 5px 0 -2px;",'%[data-state~="repeat"] %mediaButton %_mediaButtonIcon:before':"left:1px;width:9px;height:9px;border:3px solid [audioIcons];margin-top:-6px;background:transparent;border-radius:16px;",'%[data-state~="mobile"] %progressbar':"right:88px;",'%[data-state~="mobile"] %artistLabel,%[data-state~="mobile"] %trackLabel':"float:left;width:100%;",'%[data-state~="mobile"] %durationOfTrack':"margin-right:10px;",'%[data-state~="mobile"] %_volumeControls,%[data-state~="mobile"] %sep':"display:none;",'%[data-state~="loading"] %player %player *':"display:none;"}}};return t}.apply(o,[]))||(t.exports=a)},132:function(t,o){t.exports=r},2:function(t,e){t.exports=o},3:function(t,o){t.exports=e},5:function(t,o){t.exports=a},7:function(t,o){t.exports=i}})});
//# sourceMappingURL=singleAudioPlayer.min.js.map