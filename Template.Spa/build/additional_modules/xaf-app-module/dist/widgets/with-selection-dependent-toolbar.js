/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
export function withSelectionDependentToolbar(Component) {
    return function WithSelectionDependentToolbar(props) {
        var _a = props.selectedItems, selectedItems = _a === void 0 ? [] : _a, _b = props.selectionIndependent, selectionIndependent = _b === void 0 ? [] : _b, _c = props.selectionDependent, selectionDependent = _c === void 0 ? [] : _c, rest = tslib_1.__rest(props, ["selectedItems", "selectionIndependent", "selectionDependent"]);
        return (React.createElement(React.Fragment, null,
            React.createElement(Component, tslib_1.__assign({}, rest, { items: selectionIndependent, visible: !selectedItems.length, themeScope: "toolbar" })),
            React.createElement(Component, tslib_1.__assign({}, rest, { items: selectionDependent, visible: !!selectedItems.length, themeScope: "selection-toolbar" }))));
    };
}
