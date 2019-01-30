/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { createDefaultStyleRegistration } from "./info/default-styles/widget-default-style";
import { ThemeScope } from "./scope-provider";
import { Theme } from "./theme-provider";
import { WithContexts } from "../utils/with-contexts";
var _a = createDefaultStyleRegistration({}), getDefaultStyle = _a.getDefaultStyle, registration = tslib_1.__rest(_a, ["getDefaultStyle"]);
export var registerDefaultStyle = registration.registerDefaultStyle;
export var registerAlias = registration.registerAlias;
export function withDefaultStyle(Component, type) {
    return function WithDefaultStyle(props) {
        var widget = type || props.type;
        return (React.createElement(WithContexts, { contexts: { theme: Theme, scope: ThemeScope } }, function (_a) {
            var _b = _a.theme, theme = _b === void 0 ? "desktop" : _b, _c = _a.scope, scope = _c === void 0 ? "root" : _c;
            return (React.createElement(Component, tslib_1.__assign({}, props, { style: tslib_1.__assign({}, getDefaultStyle({ widget: widget, scope: scope, theme: theme }), props.style) })));
        }));
    };
}
