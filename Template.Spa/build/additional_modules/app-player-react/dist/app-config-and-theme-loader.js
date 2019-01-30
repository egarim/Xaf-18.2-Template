/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { Loading } from "./common/loading";
var AppConfigAndThemeLoader = /** @class */ (function (_super) {
    tslib_1.__extends(AppConfigAndThemeLoader, _super);
    function AppConfigAndThemeLoader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.load().then(function (appConfig) {
            _this.setState({ appConfig: appConfig });
        });
        return _this;
    }
    AppConfigAndThemeLoader.prototype.render = function () {
        var appConfig = this.state.appConfig, children = this.props.children;
        return appConfig ? children(appConfig) : React.createElement(Loading, null);
    };
    AppConfigAndThemeLoader.prototype.load = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, appConfig, ThemeGenerator, readyCallback;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.props.appConfigSource,
                            import("devextreme-theme"),
                            import("devextreme/core/utils/ready_callbacks")
                        ])];
                    case 1:
                        _a = _b.sent(), appConfig = _a[0], ThemeGenerator = _a[1].ThemeGenerator, readyCallback = _a[2];
                        return [4 /*yield*/, ThemeGenerator.applyTheme(appConfig)];
                    case 2:
                        _b.sent();
                        readyCallback.fire();
                        return [2 /*return*/, appConfig];
                }
            });
        });
    };
    return AppConfigAndThemeLoader;
}(React.Component));
export { AppConfigAndThemeLoader };
