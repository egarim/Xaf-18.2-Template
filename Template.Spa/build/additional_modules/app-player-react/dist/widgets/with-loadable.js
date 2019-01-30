/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { Loading } from "../common/loading";
export function Loadable(options) {
    var _this = this;
    var loader = options.loader, _a = options.render, render = _a === void 0 ? function (args) { return args; } : _a, Widget = React.lazy(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { var _a, _b, _c; return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = simulateDefaultExport;
                _b = render;
                _c = resolveDefaultExport;
                return [4 /*yield*/, loader()];
            case 1: return [2 /*return*/, _a.apply(void 0, [_b.apply(void 0, [_c.apply(void 0, [_d.sent()])])])];
        }
    }); }); });
    return function WithLoadable(props) {
        return (React.createElement(React.Suspense, { fallback: React.createElement(Loading, null) },
            React.createElement(Widget, tslib_1.__assign({}, props))));
    };
}
function simulateDefaultExport(obj) {
    return { default: obj };
}
function resolveDefaultExport(obj) {
    return obj && obj.__esModule ? obj.default : obj;
}
