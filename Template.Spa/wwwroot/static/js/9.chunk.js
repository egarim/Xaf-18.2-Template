webpackJsonp([9],{624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(865));var i=n(865);t.default=i.default},645:function(e,t,n){"use strict";e.exports=n(655),e.exports.default=e.exports},655:function(e,t,n){"use strict";var i=n(17),a=n(656);i("dxNumberBox",a),e.exports=a},656:function(e,t,n){"use strict";var i=n(7),a=n(3).extend,s=n(4).isNumeric,r=n(72),o=n(14),u=n(56).fitIntoRange,l=n(56).inRange,h=n(6).escapeRegExp,p=n(300),c=n(657),_=n(308).getFormat,d=n(658),f=n(8),m=n(4),v=function(e,t){return void 0===e?t:e},g=d.inherit({_getDefaultOptions:function(){return a(this.callBase(),{useMaskBehavior:!0,format:null})},_isDeleteKey:function(e){return"Delete"===e||"Del"===e},_supportedKeys:function(){if(!this._useMaskBehavior())return this.callBase();var e=this;return a(this.callBase(),{minus:e._revertSign.bind(e),del:e._removeHandler.bind(e),backspace:e._removeHandler.bind(e),leftArrow:e._arrowHandler.bind(e,-1),rightArrow:e._arrowHandler.bind(e,1),home:e._moveCaretToBoundary.bind(e,1),enter:e._updateFormattedValue.bind(e),end:e._moveCaretToBoundary.bind(e,-1)})},_focusInHandler:function(e){this.callBase(e);var t=this._caret();t.start===t.end&&(r.msie?(clearTimeout(this._ieCaretTimeout),this._ieCaretTimeout=setTimeout(this._moveCaretToBoundary.bind(this,-1,e))):this._moveCaretToBoundary(-1,e))},_focusOutHandler:function(e){this._focusOutOccurs=!0,this._useMaskBehavior()&&this._updateFormattedValue(),this.callBase(e),this._focusOutOccurs=!1},_hasValueBeenChanged:function(e){var t=this._getFormatPattern(),n=this.option("value");return(this._format(n,t)||"")!==e},_updateFormattedValue:function(){var e=this._getInputVal();this._hasValueBeenChanged(e)&&(this._parsedValue=this._tryParse(e,this._caret()),this._adjustParsedValue(),this._setTextByParsedValue(),this._parsedValue!==this.option("value")&&i.trigger(this._input(),"change"))},_arrowHandler:function(e,t){if(this._useMaskBehavior()){var n=this._getInputVal(),i=this._getFormatPattern(),a=c.getCaretWithOffset(this._caret(),e);c.isCaretInBoundaries(a,n,i)||(a=1===e?a.end:a.start,t.preventDefault(),this._caret(c.getCaretInBoundaries(a,n,i)))}},_moveCaretToBoundary:function(e,t){if(this._useMaskBehavior()&&!t.shiftKey){var n=c.getCaretBoundaries(this._getInputVal(),this._getFormatPattern()),i=c.getCaretWithOffset(1===e?n.start:n.end,0);this._caret(i),t&&t.preventDefault()}},_shouldMoveCaret:function(e,t){var n=p.getDecimalSeparator(),i=e.charAt(t.end)===n,a="0"===e.charAt(t.end),s=this._lastKey===n&&i,r="0"===this._lastKey&&a;return s||r},_getInputVal:function(){return p.convertDigits(this._input().val(),!0)},_keyboardHandler:function(e){if(this._lastKey=p.convertDigits(e.originalEvent.key,!0),!this._shouldHandleKey(e.originalEvent))return this.callBase(e);var t=this._getInputVal(),n=this._caret(),i="-"===this._lastKey?"":this._lastKey,a=this._tryParse(t,n,i);return void 0===a?("-"!==this._lastKey&&e.originalEvent.preventDefault(),this._shouldMoveCaret(t,n)&&this._moveCaret(1)):this._parsedValue=a,this.callBase(e)},_keyPressHandler:function(e){this._useMaskBehavior()||this.callBase(e)},_removeHandler:function(e){var t=this._caret(),n=this._getInputVal(),i=t.start,a=t.end;this._lastKey=e.key,t.start===t.end&&(this._isDeleteKey(e.key)?a++:i--);var s=n.slice(i,a);if(this._isStub(s))return this._moveCaret(this._isDeleteKey(e.key)?1:-1),(this._parsedValue<0||1/this._parsedValue===-1/0)&&(this._revertSign(e),this._setTextByParsedValue()),void e.preventDefault();var r=p.getDecimalSeparator();if(s===r){var o=n.indexOf(r);return void(this._isNonStubAfter(o+1)&&(this._moveCaret(this._isDeleteKey(e.key)?1:-1),e.preventDefault()))}if(a-i<n.length){if(this._replaceSelectedText(n,{start:i,end:a},"").search(/[0-9]/)<0&&this._isValueInRange(0))return void(this._parsedValue=this._parsedValue<0||1/this._parsedValue===-1/0?-0:0)}var u=this._tryParse(n,{start:i,end:a},"");void 0===u?e.preventDefault():this._parsedValue=u},_isPercentFormat:function(){return-1!==this._getFormatPattern().replace(/'[^']+'/g,"").indexOf("%")},_parse:function(e,t){var n=this.option("format");return(m.isFunction(n.formatter)?n.parser:p.parse)(e,t)},_format:function(e,t){var n=this.option("format");return(m.isFunction(n.formatter)?n.formatter:p.format)(e,t)},_getFormatPattern:function(){var e=this.option("format");return"string"===typeof e&&(e.indexOf("0")>=0||e.indexOf("#")>=0)?e:_(function(t){return this._format(t,e)}.bind(this))},_getFormatForSign:function(e){var t=this._getFormatPattern(),n=t.split(";"),i=p.getSign(e,t);return n[1]=n[1]||"-"+n[0],i<0?n[1]:n[0]},_removeStubs:function(e,t){var n=this._getFormatForSign(e),i=p.getThousandsSeparator(),a=n.replace(/[#0.,]/g,""),s=new RegExp("[-"+h((t?"":i)+a)+"]","g");return e.replace(s,"")},_truncateToPrecision:function(e,t,n){if(m.isDefined(e)){var i=e.toString(),a=i.indexOf(t);if(i&&a>-1){var s=parseFloat(i.substr(0,a+n+1));return isNaN(s)?e:s}}return e},_tryParse:function(e,t,n){var i=this._replaceSelectedText(e,t,n),a=this._getFormatPattern(),s=t.start!==t.end,r=this._parse(i,a),o=this._getPrecisionLimits(a,i).max,u=r!==this._parsedValue,l=p.getDecimalSeparator(),h=n===l&&0===o,c=!s&&!u&&"-"!==n&&!this._isValueIncomplete(i)&&this._isStub(n);if(!h&&!c&&(""===i&&(r=0),!isNaN(r))){var _=null===r?this._parsedValue:r;return r=this._truncateToPrecision(_,l,o),this._isPercentFormat()?r&&r/100:r}},_isValueIncomplete:function(e){if(!this._useMaskBehavior())return this.callBase(e);var t=this._caret(),n=p.getDecimalSeparator(),i=e.indexOf(n),a=i>=0&&i<t.start,s=this._removeStubs(e,!0).split(n);if(!a||2!==s.length)return!1;var r=s[1].length,o=this._getPrecisionLimits(this._getFormatPattern(),e),u=l(r,o.min,o.max),h="0"===s[1].charAt(r-1);return u&&(h||!r)},_isValueInRange:function(e){var t=v(this.option("min"),-1/0),n=v(this.option("max"),1/0);return l(e,t,n)},_setInputText:function(e){var t=c.getCaretAfterFormat(this._getInputVal(),e,this._caret(),this._getFormatPattern()),n=p.convertDigits(e);this._input().val(n),this._toggleEmptinessEventHandler(),this._formattedValue=e,this._focusOutOccurs||this._caret(t)},_useMaskBehavior:function(){return!!this.option("format")&&this.option("useMaskBehavior")},_renderInputType:function(){var e="number"===this.option("mode"),t="desktop"!==o.real().deviceType;this._useMaskBehavior()&&e?this._setInputType(t?"tel":"text"):this.callBase()},_isChar:function(e){return"string"===typeof e&&1===e.length},_moveCaret:function(e){if(e){var t=c.getCaretWithOffset(this._caret(),e),n=c.getCaretInBoundaries(t,this._getInputVal(),this._getFormatPattern());this._caret(n)}},_shouldHandleKey:function(e){var t=e.ctrlKey||e.shiftKey||e.altKey||!this._isChar(e.key),n="-"===e.key;return this._useMaskBehavior()&&!t&&!n},_renderInput:function(){this.callBase(),this._renderFormatter()},_renderFormatter:function(){this._clearCache(),this._detachFormatterEvents(),this._useMaskBehavior()&&this._attachFormatterEvents()},_detachFormatterEvents:function(){i.off(this._input(),".dxNumberFormatter")},_attachFormatterEvents:function(){var e=this._input();i.on(e,f.addNamespace("input","dxNumberFormatter"),this._formatValue.bind(this)),i.on(e,f.addNamespace("dxclick","dxNumberFormatter"),function(){this._caret(c.getCaretInBoundaries(this._caret(),this._getInputVal(),this._getFormatPattern()))}.bind(this))},_forceRefreshInputValue:function(){if(!this._useMaskBehavior())return this.callBase()},_isNonStubAfter:function(e,t){return(t=(t||this._getInputVal()).slice(e))&&!this._isStub(t,!0)},_isStub:function(e,t){var n=h(p.getDecimalSeparator()),i="^[^0-9"+n+"]+$";return new RegExp(i,"g").test(e)&&(t||this._isChar(e))},_parseValue:function(e){return this._useMaskBehavior()?this._parsedValue:this.callBase(e)},_getPrecisionLimits:function(e){var t=this._getFormatForSign(e),n=(t.split(".")[1]||"").replace(/[^#0]/g,"");return{min:n.replace(/^(0*)#*/,"$1").length,max:n.length}},_revertSign:function(e){if(this._useMaskBehavior()){var t=this._caret();if(t.start!==t.end){if("-"===e.key||"Subtract"===e.key)return void this._applyRevertedSign(e,t,!0);this._caret(c.getCaretInBoundaries(0,this._getInputVal(),this._getFormatPattern()))}this._applyRevertedSign(e,t)}},_applyRevertedSign:function(e,t,n){var a=-1*v(this._parsedValue,null);if(this._isValueInRange(a)){if(this._parsedValue=a,n){var s=this._getFormatPattern(),o=this._getInputVal();this._setTextByParsedValue(),e.preventDefault();var u=this._getInputVal(),l=c.getCaretOffset(o,u,s);t=c.getCaretWithOffset(t,l);var h=c.getCaretInBoundaries(t,u,s);r.msie?(clearTimeout(this._ieCaretTimeout),this._ieCaretTimeout=setTimeout(this._caret.bind(this,h))):this._caret(h)}"Subtract"===e.key&&i.trigger(this._input(),"input")}},_removeMinusFromText:function(e,t){return"-"===this._lastKey&&"-"===e.charAt(t.start-1)?this._replaceSelectedText(e,{start:t.start-1,end:t.start},""):e},_setTextByParsedValue:function(){var e=this._getFormatPattern(),t=this._parseValue(),n=this._format(t,e)||"";this._setInputText(n)},_formatValue:function(){var e=this._getInputVal(),t=this._caret(),n=this._removeMinusFromText(e,t),i=n!==e;if(e=n,this._isValueIncomplete(n))return this._formattedValue=e,void(i&&this._setTextByParsedValue());if(this._formattedValue!==e){var a=this._tryParse(e,t,"");m.isDefined(a)&&(this._parsedValue=a)}this._setTextByParsedValue()},_renderDisplayText:function(){this._useMaskBehavior()?this._toggleEmptinessEventHandler():this.callBase.apply(this,arguments)},_renderValue:function(){this._useMaskBehavior()&&(this._parsedValue=this.option("value"),this._setTextByParsedValue()),this.callBase()},_adjustParsedValue:function(){if(this._useMaskBehavior()){var e=this._removeStubs(this._getInputVal()),t=e?this._parseValue():null;if(!s(t))return void(this._parsedValue=t);this._parsedValue=u(t,this.option("min"),this.option("max"))}},_valueChangeEventHandler:function(e){if(!this._useMaskBehavior())return this.callBase(e);this._saveValueChangeEvent(e),this._lastKey=null,this._adjustParsedValue(),this.option("value",this._parsedValue)},_optionChanged:function(e){switch(e.name){case"format":case"useMaskBehavior":this._renderFormatter(),this._renderValue();break;case"min":case"max":this._adjustParsedValue(),this.callBase(e);break;default:this.callBase(e)}},_optionValuesEqual:function(e,t,n){return"value"===e&&0===t&&0===n?1/t===1/n:this.callBase.apply(this,arguments)},_clearCache:function(){delete this._formattedValue,delete this._lastKey,delete this._parsedValue,delete this._focusOutOccurs,clearTimeout(this._ieCaretTimeout),delete this._ieCaretTimeout},_clean:function(){this._clearCache(),this.callBase()}});e.exports=g},657:function(e,t,n){"use strict";var i=n(56).fitIntoRange,a=n(6).escapeRegExp,s=n(300),r=function(e,t){var n=t.split(";"),i=s.getSign(e,t);n[1]=n[1]||"-"+n[0],t=n[i<0?1:0];t=function(e){return e.replace(/'([^']*)'/g,function(e){return e.split("").map(function(){return" "}).join("").substr(2)})}(t);var a=/^[^#0\.,]*/.exec(t)[0].length,r=/[^#0\.,]*$/.exec(t)[0].length;return{start:a,end:e.length-r}},o=function(e,t){var n=s.getDecimalSeparator(),i=new RegExp("[^0-9"+a(n)+"]","g");return t.slice(0,e).replace(i,"").length},u=function(e){return e.split("").reverse().join("")},l=function(e,t){if(!e)return-1;for(var n=/[0-9]/g,i=1,a=null,s=n.exec(t);s;){if(a=s.index,!e||i>=e)return a;i++,s=n.exec(t)}return null===a?t.length:a},h=function(e,t){return void 0===e.start&&(e={start:e,end:e}),{start:e.start+t,end:e.end+t}},p=function(e,t,n,i){n=h(n,0);var a=s.getDecimalSeparator(),r=e.indexOf(a),p=t.indexOf(a),c=e.split(a),d=t.split(a);if(-1!==r&&n.start>r){var f=n.start-r-1,m=o(f,c[1]),v=d[1]?p+1+l(m,d[1])+1:t.length;return _(v,t,i)}var g=c[0].length-n.start,y=o(g,u(c[0])),b=l(y,u(d[0])),V=d[0].length-(b+1);return _(V,t,i)},c=function(e,t,n){e=h(e,0);var i=_(e,t,n);return e.start>=i.start&&e.end<=i.end},_=function(e,t,n){e=h(e,0);var a=r(t,n);return{start:i(e.start,a.start,a.end),end:i(e.end,a.start,a.end)}},d=function(e,t,n){var i=r(e,n);return r(t,n).start-i.start};t.getCaretBoundaries=r,t.isCaretInBoundaries=c,t.getCaretWithOffset=h,t.getCaretInBoundaries=_,t.getCaretAfterFormat=p,t.getCaretOffset=d},658:function(e,t,n){"use strict";var i=n(1),a=n(11),s=n(7),r=n(6),o=n(56),u=n(3).extend,l=n(16).inArray,h=n(14),p=n(309),c=n(8),_=n(32),d=n(659),f=n(26),m=Math,v=["Tab","Del","Delete","Backspace","Left","ArrowLeft","Right","ArrowRight","Home","End","Enter"],g=p.inherit({_supportedKeys:function(){return u(this.callBase(),{upArrow:function(e){e.preventDefault(),e.stopPropagation(),this._spinUpChangeHandler(e)},downArrow:function(e){e.preventDefault(),e.stopPropagation(),this._spinDownChangeHandler(e)},enter:function(){}})},_getDefaultOptions:function(){return u(this.callBase(),{value:0,min:void 0,max:void 0,step:1,showSpinButtons:!1,useLargeSpinButtons:!0,mode:"text",invalidValueMessage:f.format("dxNumberBox-invalidValueMessage")})},_defaultOptionsRules:function(){return this.callBase().concat([{device:function(){return h.real().generic&&!h.isSimulator()},options:{useLargeSpinButtons:!1}},{device:function(){return"generic"!==h.real().platform},options:{mode:"number"}}])},_initMarkup:function(){this._renderSubmitElement(),this.$element().addClass("dx-numberbox"),this.callBase()},_renderContentImpl:function(){this.option("isValid")&&this._validateValue(this.option("value")),this.setAria("role","spinbutton")},_renderSubmitElement:function(){this._$submitElement=i("<input>").attr("type","hidden").appendTo(this.$element()),this._setSubmitValue(this.option("value"))},_setSubmitValue:function(e){this._$submitElement.val(r.applyServerDecimalSeparator(e))},_getSubmitElement:function(){return this._$submitElement},_keyPressHandler:function(e){if(this.callBase(e),!/[\d.,eE\-+]|Subtract/.test(e.key||String.fromCharCode(e.which))){if(e.metaKey||e.ctrlKey||e.key&&l(e.key,v)>=0)return;return e.preventDefault(),!1}this._keyPressed=!0},_onMouseWheel:function(e){e.delta>0?this._spinValueChange(1,e):this._spinValueChange(-1,e)},_renderValue:function(){var e=this._input().val();e.length&&Number(e)===this.option("value")||(this._forceValueRender(),this._toggleEmptinessEventHandler());var t=this.option("value");this._renderInputAddons(),this.setAria("valuenow",t),this.option("text",this._input().val())},_renderValueEventName:function(){return this.callBase()+" keypress"},_toggleDisabledState:function(e){this._$spinUp&&d.getInstance(this._$spinUp).option("disabled",e),this._$spinDown&&d.getInstance(this._$spinDown).option("disabled",e),this.callBase.apply(this,arguments)},_forceValueRender:function(){var e=this.option("value"),t=Number(e),n=isNaN(t)?"":this._applyValueFormat(e);this._renderDisplayText(n)},_applyValueFormat:function(e){return this.option("valueFormat")(e)},_renderProps:function(){this.callBase(),this._input().prop({min:this.option("min"),max:this.option("max"),step:this.option("step")}),this.setAria({valuemin:this.option("min")||"undefined",valuemax:this.option("max")||"undefined"})},_renderInputAddons:function(){this.callBase(),this._renderSpinButtons()},_renderSpinButtons:function(){var e=this.option("showSpinButtons");if(this.$element().toggleClass("dx-numberbox-spin",e),this._toggleTouchFriendlyClass(),!e)return this._$spinContainer&&this._$spinContainer.remove(),void(this._$spinContainer=null);this._$spinContainer||(this._$spinContainer=this._createSpinButtons()),this._$spinContainer.prependTo(this._buttonsContainer())},_toggleTouchFriendlyClass:function(){this.$element().toggleClass("dx-numberbox-spin-touch-friendly",this.option("showSpinButtons")&&this.option("useLargeSpinButtons"))},_createSpinButtons:function(){var e=c.addNamespace(_.down,this.NAME),t=this._createAction(this._spinButtonsPointerDownHandler.bind(this)),n=i("<div>").addClass("dx-numberbox-spin-container");return s.off(n,e),s.on(n,e,function(e){t({event:e})}),this._$spinUp=i("<div>").appendTo(n),this._createComponent(this._$spinUp,d,{direction:"up",onChange:this._spinUpChangeHandler.bind(this)}),this._$spinDown=i("<div>").appendTo(n),this._createComponent(this._$spinDown,d,{direction:"down",onChange:this._spinDownChangeHandler.bind(this)}),n},_spinButtonsPointerDownHandler:function(){var e=this._input();this.option("useLargeSpinButtons")||a.getActiveElement()===e[0]||s.trigger(e,"focus")},_spinUpChangeHandler:function(e){this.option("readOnly")||this._spinValueChange(1,e.event||e)},_spinDownChangeHandler:function(e){this.option("readOnly")||this._spinValueChange(-1,e.event||e)},_spinValueChange:function(e,t){var n=parseFloat(this._normalizeInputValue())||0,i=parseFloat(this.option("step"));n=this._correctRounding(n,i*e);var a=this.option("min"),s=this.option("max");void 0!==a&&(n=Math.max(a,n)),void 0!==s&&(n=Math.min(s,n)),this._saveValueChangeEvent(t),this.option("value",n)},_correctRounding:function(e,t){var n=/[,.](.*)/,i=n.test(e),a=n.test(t);if(i||a){var s=i?n.exec(e)[0].length:0,r=a?n.exec(t)[0].length:0,o=m.max(s,r);return e=this._round(e+t,o)}return e+t},_round:function(e,t){t=t||0;var n=Math.pow(10,t);return e*=n,e=Math.round(e)/n},_renderValueChangeEvent:function(){this.callBase(),s.on(this._input(),"focusout",this._forceRefreshInputValue.bind(this))},_forceRefreshInputValue:function(){if("number"!==this.option("mode")){var e=this._input(),t=this._applyValueFormat(this.option("value"));e.val(null),e.val(t)}},_valueChangeEventHandler:function(e){var t=this._input(),n=this._normalizeText(),i=this._parseValue(n),a="."!==n&&"-"!==n;if(this._isValueValid()&&!this._validateValue(i))return void t.val(this._applyValueFormat(i));a&&this.callBase(e,isNaN(i)?null:i),this._applyValueBoundaries(n,i),this.validationRequest.fire({value:i,editor:this})},_applyValueBoundaries:function(e,t){var n=this._isValueIncomplete(e),i=this._isValueInRange(e);n||i||null===t||Number(e)!==t&&this._input().val(this._applyValueFormat(t))},_replaceCommaWithPoint:function(e){return e.replace(",",".")},_inputIsInvalid:function(){var e="number"===this.option("mode"),t=this._input().get(0).validity;return e&&t&&t.badInput},_renderDisplayText:function(e){this._inputIsInvalid()||this.callBase(e)},_isValueIncomplete:function(e){return/(^-$)|(^-?\d*\.$)|(\d+e-?$)/i.test(e)},_isValueInRange:function(e){return o.inRange(e,this.option("min"),this.option("max"))},_isNumber:function(e){return null!==this._parseValue(e)},_validateValue:function(e){var t=this._normalizeText(),n=this._isValueValid(),i=!0,a=this._isNumber(t);return isNaN(Number(e))&&(i=!1),!e&&n?i=!0:a||n||(i=!1),this.option({isValid:i,validationError:i?null:{editorSpecific:!0,message:this.option("invalidValueMessage")}}),i},_normalizeInputValue:function(){return this._parseValue(this._normalizeText())},_normalizeText:function(){var e=this._input().val().trim();return this._replaceCommaWithPoint(e)},_parseValue:function(e){var t=parseFloat(e);return isNaN(t)?null:o.fitIntoRange(t,this.option("min"),this.option("max"))},reset:function(){this.option("value",null)},_clean:function(){delete this._$spinContainer,delete this._$spinUp,delete this._$spinDown,this.callBase()},_optionChanged:function(e){switch(e.name){case"value":this._validateValue(e.value),this._setSubmitValue(e.value),this.callBase(e),this._resumeValueChangeAction();break;case"step":this._renderProps();break;case"min":case"max":this._renderProps(),this.option("value",this._parseValue(this.option("value")));break;case"showSpinButtons":this._renderInputAddons();break;case"useLargeSpinButtons":this._toggleTouchFriendlyClass();break;case"invalidValueMessage":break;default:this.callBase(e)}}});e.exports=g},659:function(e,t,n){"use strict";var i=n(1),a=n(11),s=n(7),r=n(43),o=n(3).extend,u=n(8),l=n(32),h=n(126),p=n(173),c=n(10).Deferred,_=u.addNamespace(l.up,"dxNumberBox"),d=u.addNamespace(l.cancel,"dxNumberBox"),f=r.inherit({_getDefaultOptions:function(){return o(this.callBase(),{direction:"up",onChange:null,activeStateEnabled:!0,hoverStateEnabled:!0})},_initMarkup:function(){this.callBase();var e="dx-numberbox-spin-"+this.option("direction");this.$element().addClass("dx-numberbox-spin-button").addClass(e),this._spinIcon=i("<div>").addClass(e+"-icon").appendTo(this.$element())},_render:function(){this.callBase();var e=u.addNamespace(l.down,this.NAME),t=this.$element();s.off(t,e),s.on(t,e,this._spinDownHandler.bind(this)),this._spinChangeHandler=this._createActionByOption("onChange")},_spinDownHandler:function(e){e.preventDefault(),this._clearTimer(),s.on(this.$element(),p.name,function(){this._feedBackDeferred=new c,h.lock(this._feedBackDeferred),this._spinChangeHandler({event:e}),this._holdTimer=setInterval(this._spinChangeHandler,100,{event:e})}.bind(this));var t=a.getDocument();s.on(t,_,this._clearTimer.bind(this)),s.on(t,d,this._clearTimer.bind(this)),this._spinChangeHandler({event:e})},_dispose:function(){this._clearTimer(),this.callBase()},_clearTimer:function(){s.off(this.$element(),p.name);var e=a.getDocument();s.off(e,_),s.off(e,d),this._feedBackDeferred&&this._feedBackDeferred.resolve(),this._holdTimer&&clearInterval(this._holdTimer)},_optionChanged:function(e){switch(e.name){case"onChange":case"direction":this._invalidate();break;default:this.callBase(e)}}});e.exports=f},865:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(645),s=n(15),r=n(38),o=n(51),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._WidgetClass=a.default,t._defaults={defaultValue:"value"},t._expectedChildren={format:{optionName:"format",isCollectionItem:!1}},t}return i(t,e),Object.defineProperty(t.prototype,"instance",{get:function(){return this._instance},enumerable:!0,configurable:!0}),t}(r.Component);t.NumberBox=u,u.propTypes={accessKey:s.PropTypes.string,activeStateEnabled:s.PropTypes.bool,disabled:s.PropTypes.bool,elementAttr:s.PropTypes.object,focusStateEnabled:s.PropTypes.bool,format:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.func,s.PropTypes.string]),height:s.PropTypes.oneOfType([s.PropTypes.func,s.PropTypes.number,s.PropTypes.string]),hint:s.PropTypes.string,hoverStateEnabled:s.PropTypes.bool,inputAttr:s.PropTypes.object,invalidValueMessage:s.PropTypes.string,isValid:s.PropTypes.bool,max:s.PropTypes.number,min:s.PropTypes.number,mode:s.PropTypes.oneOf(["number","text","tel"]),name:s.PropTypes.string,onChange:s.PropTypes.func,onContentReady:s.PropTypes.func,onCopy:s.PropTypes.func,onCut:s.PropTypes.func,onDisposing:s.PropTypes.func,onEnterKey:s.PropTypes.func,onFocusIn:s.PropTypes.func,onFocusOut:s.PropTypes.func,onInitialized:s.PropTypes.func,onInput:s.PropTypes.func,onKeyDown:s.PropTypes.func,onKeyPress:s.PropTypes.func,onKeyUp:s.PropTypes.func,onOptionChanged:s.PropTypes.func,onPaste:s.PropTypes.func,onValueChanged:s.PropTypes.func,placeholder:s.PropTypes.string,readOnly:s.PropTypes.bool,rtlEnabled:s.PropTypes.bool,showClearButton:s.PropTypes.bool,showSpinButtons:s.PropTypes.bool,step:s.PropTypes.number,stylingMode:s.PropTypes.oneOf(["outlined","underlined","filled"]),tabIndex:s.PropTypes.number,text:s.PropTypes.string,useLargeSpinButtons:s.PropTypes.bool,validationError:s.PropTypes.object,validationMessageMode:s.PropTypes.oneOf(["always","auto"]),value:s.PropTypes.number,valueChangeEvent:s.PropTypes.string,visible:s.PropTypes.bool,width:s.PropTypes.oneOfType([s.PropTypes.func,s.PropTypes.number,s.PropTypes.string])};var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.OptionName="format",t}(o.default);t.Format=l,t.default=u}});
//# sourceMappingURL=9.chunk.js.map