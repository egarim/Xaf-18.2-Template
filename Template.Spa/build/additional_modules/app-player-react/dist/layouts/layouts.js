/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import Media from "react-media";
import { AppStateContext } from "../app-state-provider";
import { WithContexts } from "../utils/with-contexts";
import { RunContext } from "../views/run-context";
import { DesktopLayout } from "./desktop-layout";
import { MobileLayout } from "./mobile/mobile-layout";
import { ThemeScope } from "../widgets/scope-provider";
import { Theme } from "../widgets/theme-provider";
import "../layouts/widgets/layout-default-style-registration";
var Layouts = /** @class */ (function (_super) {
    tslib_1.__extends(Layouts, _super);
    function Layouts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layouts.prototype.render = function () {
        var _this = this;
        return (React.createElement(WithContexts, { contexts: { appStateContext: AppStateContext, runContext: RunContext } }, function (_a) {
            var appState = _a.appStateContext.appState, runContext = _a.runContext;
            return (React.createElement(ThemeScope.Provider, { value: "root" },
                React.createElement(Media, { query: "(max-width: 599px)" }, function (media) {
                    return media
                        ? (React.createElement(Theme.Provider, { value: "mobile" },
                            React.createElement(MobileLayout, { displayedViewsInfo: appState.displayedViewsInfo })))
                        : (React.createElement(Media, { query: "(max-width: 1024px)" }, function (matches) { return (React.createElement(Theme.Provider, { value: _this.props.compact ? "compact" : "desktop" },
                            React.createElement(DesktopLayout, { displayedViewsInfo: appState.displayedViewsInfo, runContext: runContext, compactNavigation: matches }))); }));
                })));
        }));
    };
    return Layouts;
}(React.PureComponent));
export { Layouts };
