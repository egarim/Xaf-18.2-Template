/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import "../../css/layouts/desktop-layout.css";
import * as React from "react";
import { createSelector } from "reselect";
import { ReactStackPanel } from "../widgets/stack-panel-widget";
import ToolbarWithNavigation from "./widgets/toolbar-with-navigation";
import { DesktopLayoutViewModel } from "./desktop-layout-view-model";
import { compileNavigationHandlers, NavigationMenu } from "./widgets/navigation-menu";
import { Pane } from "./pane";
import { withPopup } from "./with-popup";
import { AppConfigContext } from "../app-config-context";
var PopupPane = withPopup(Pane);
var DesktopLayout = /** @class */ (function (_super) {
    tslib_1.__extends(DesktopLayout, _super);
    function DesktopLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navigationItemsSelector = createSelector([function (_a) {
                var appConfig = _a.appConfig;
                return appConfig.navigation.items;
            }, function (_a) {
                var runContext = _a.runContext;
                return runContext;
            }], function (items, runContext) { return compileNavigationHandlers(items, runContext); });
        return _this;
    }
    DesktopLayout.prototype.render = function () {
        var _this = this;
        var _a = this.props, runContext = _a.runContext, displayedViewsInfo = _a.displayedViewsInfo;
        return (React.createElement(AppConfigContext.Consumer, null, function (appConfig) {
            var navigationItems = _this.navigationItemsSelector({ appConfig: appConfig, runContext: runContext });
            return (React.createElement(DesktopLayoutViewModel, { displayedViewsInfo: displayedViewsInfo, globalCommands: appConfig.commands, runContext: runContext }, function (layoutViewModel) {
                return (React.createElement(ReactStackPanel, { className: "desktop-layout-container", orientation: "horizontal" },
                    React.createElement(NavigationMenu, { title: appConfig.title, items: navigationItems, applicationInfo: appConfig.applicationInfo, compact: _this.props.compactNavigation }),
                    React.createElement(ReactStackPanel, { className: "desktop-layout-container" },
                        React.createElement(ToolbarWithNavigation, { pane: "main", themeScope: "appbar", className: "desktop-global-toolbar", items: layoutViewModel.globalToolbar.items }),
                        React.createElement("div", { className: "desktop-layout-container" },
                            React.createElement(Pane, { key: "main", classes: "main-pane", paneViewModel: layoutViewModel.mainPane }),
                            React.createElement(Pane, { key: "preview", classes: "preview-pane", paneViewModel: layoutViewModel.previewPane }),
                            React.createElement(PopupPane, { key: "simplePopup", type: "simplePopup", popupSettings: { visible: layoutViewModel.simplePopupPane.visible }, paneViewModel: layoutViewModel.simplePopupPane }),
                            React.createElement(PopupPane, { key: "popup", type: "popup", popupSettings: { visible: layoutViewModel.popupPane.visible }, paneViewModel: layoutViewModel.popupPane })))));
            }));
        }));
    };
    return DesktopLayout;
}(React.PureComponent));
export { DesktopLayout };
