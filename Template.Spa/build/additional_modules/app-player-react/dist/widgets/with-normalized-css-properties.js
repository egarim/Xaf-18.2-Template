/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { createSelector } from "reselect";
export var withNormalizedCssProperties = function (Widget) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithNormalizedCssProperties, _super);
        function WithNormalizedCssProperties() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.styleSelector = createSelector([function (_a) {
                    var _b = _a.style, style = _b === void 0 ? {} : _b;
                    return JSON.stringify(style);
                }], function (style) {
                return normalizeStyle(JSON.parse(style));
            });
            return _this;
        }
        WithNormalizedCssProperties.prototype.render = function () {
            return React.createElement(Widget, tslib_1.__assign({}, this.props, { style: this.styleSelector(this.props) }));
        };
        return WithNormalizedCssProperties;
    }(React.Component));
};
export function normalizeStyle(style) {
    if (style === void 0) { style = {}; }
    var result = tslib_1.__assign({}, style);
    Object.keys(style).forEach(function (name) {
        var value = style[name];
        var index = name.indexOf("-"), firstLetterUpper = function (str) {
            if (!str) {
                return "";
            }
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
        if (index !== -1) {
            var prefix = name.substring(0, index), postfix = firstLetterUpper(name.substring(index + 1));
            delete result[name];
            result["" + prefix + postfix] = value;
        }
        else {
            result[name] = value;
        }
    });
    return result;
}
