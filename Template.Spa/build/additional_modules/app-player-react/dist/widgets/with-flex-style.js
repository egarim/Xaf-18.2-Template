/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { getFlexStyle } from "./flex-helper";
import { withDefaultStyle } from "./default-style-provider";
export function withFlexStyle(Component) {
    return function (options) {
        return (withDefaultStyle(function (props) {
            return (React.createElement(Component, tslib_1.__assign({}, props, { style: getFlexStyle(props.style, options.orientation) })));
        }))(options.widgetProps);
    };
}
