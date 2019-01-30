/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
// tslint:disable-next-line:quotemark
import * as React from 'react';
import { withNormalizedCssProperties } from "../with-normalized-css-properties";
import { compose } from "../../utils";
import { Loadable } from "../with-loadable";
export var componentsInfo = {};
export function getComponentInfo(type) {
    var result = findComponentInfo(type);
    if (!result) {
        throw new Error("Widget with type \"" + type + "\" not found");
    }
    return result;
}
export function findComponentInfo(type) {
    return componentsInfo[type];
}
export function registerInheritWidget(widgetOptions) {
    var inherit = widgetOptions.inherit, displayingContext = widgetOptions.displayingContext, customizeWidget = widgetOptions.customizeWidget, rest = tslib_1.__rest(widgetOptions, ["inherit", "displayingContext", "customizeWidget"]), _a = getComponentInfo(inherit), loader = _a.loader, parentDisplayingContext = _a.displayingContext, parentCustomizeWidget = _a.customizeWidget;
    return registerWidget(tslib_1.__assign({}, rest, { loader: loader, displayingContext: displayingContext || parentDisplayingContext, customizeWidget: Array.prototype.concat(customizeWidget, parentCustomizeWidget) }));
}
export function registerWidget(widgetOptions) {
    var name = widgetOptions.name, componentType = widgetOptions.componentType, rest = tslib_1.__rest(widgetOptions, ["name", "componentType"]), customizeFn = makeCustomizeFn(rest.customizeWidget), widget = componentType
        ? customizeFn(componentType)
        : Loadable({ loader: rest.loader, render: customizeFn }), result = tslib_1.__assign({}, rest, { componentType: componentType,
        widget: widget });
    componentsInfo[name] = result;
    return result;
}
function makeCustomizeFn(customizeWidget) {
    var customizersArr = Array.prototype
        .concat(customizeWidget, defaultWidgetsCustomizersArray), toFirstItem = customizersArr.filter(function (item) { return item && item.toFirst; });
    if (toFirstItem.length > 1) {
        throw (new Error("There is more than one customizers with toFirstItem"));
    }
    customizersArr = toFirstItem[0] ? customizersArr.filter(function (item) { return item && item !== toFirstItem[0]; }).concat([toFirstItem[0].customizer]) : customizersArr;
    return compose.apply(null, customizersArr);
}
export function customizeProps(customizer) {
    return function (Widget) { return function (props) {
        return React.createElement(Widget, tslib_1.__assign({}, props, customizer(props)));
    }; };
}
export var defaultWidgetsCustomizersArray = [withNormalizedCssProperties];
