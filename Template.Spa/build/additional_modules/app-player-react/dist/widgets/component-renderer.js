/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import "./info/components-registration";
import "./info/commands-registration";
import "../widgets/info/default-styles/widget-default-style-registration";
import { getComponentInfo } from "./info/components-info";
import { Visible } from "./visible-hoc";
import { withFlexStyle } from "./with-flex-style";
import { withCalcProps } from "../model/with-calc-props";
import { withDefaultStyle } from "./default-style-provider";
function ComponentRendererBase(props) {
    var _a = props, _b = _a.visible, visible = _b === void 0 ? true : _b, style = _a.style, rest = tslib_1.__rest(_a, ["visible", "style"]), Widget = getComponentInfo(props.type).widget;
    return (React.createElement(Visible, { visible: visible }, function () { return (React.createElement(Widget, tslib_1.__assign({}, rest, { style: style }))); }));
}
export var ComponentRenderer = withDefaultStyle(ComponentRendererBase);
export var FlexComponentRenderer = withFlexStyle(ComponentRendererBase);
export var FlexCalcPropsWidgetRenderer = withFlexStyle(withCalcProps(ComponentRendererBase));
export var CalcPropsWidgetRenderer = withCalcProps(withDefaultStyle(ComponentRendererBase));
