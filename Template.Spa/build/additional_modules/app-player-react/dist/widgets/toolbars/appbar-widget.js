/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { AppStateContext } from "../../app-state-provider";
import { ToggleNavigationMenuContext } from "../../layouts/mobile/mobile-layout";
import { WithContexts } from "../../utils/with-contexts";
import { RunContext } from "../../views/run-context";
import { ReactToolbar } from "./toolbar-widget";
import { BreadcrumbsProvider } from "../../navigation/breadcrumbs-provider";
import { CalcPropsContext } from "../../model/calc-props-context";
var ReactAppbar = /** @class */ (function (_super) {
    tslib_1.__extends(ReactAppbar, _super);
    function ReactAppbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactAppbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.items, items = _b === void 0 ? [] : _b, restProps = tslib_1.__rest(_a, ["items"]);
        return (React.createElement(WithContexts, { contexts: { appStateContext: AppStateContext, runContext: RunContext, toggleNavigationMenu: ToggleNavigationMenuContext, calcProps: CalcPropsContext } }, function (_a) {
            var appState = _a.appStateContext.appState, runContext = _a.runContext, toggleNavigationMenu = _a.toggleNavigationMenu, calcProps = _a.calcProps;
            return (React.createElement(BreadcrumbsProvider, { displayedViewsInfo: appState.displayedViewsInfo, calcPropsProvider: calcProps, availablePanes: ["main"], pane: "main" }, function (breadcrumbs) {
                var toolbarItems = _this.generateToolbarItems(items, breadcrumbs, runContext, toggleNavigationMenu);
                return React.createElement(ReactToolbar, tslib_1.__assign({}, restProps, { items: toolbarItems }));
            }));
        }));
    };
    ReactAppbar.prototype.generateToolbarItems = function (viewItems, breadcrumbs, runContext, toggleNavigationMenu) {
        var result = viewItems;
        if (!viewItems.find(function (item) { return item.id === "title"; })) {
            result = [this.generateTitleItem(breadcrumbs.title || breadcrumbs.path)].concat(result);
        }
        if (!viewItems.find(function (item) { return item.id === "menu"; })) {
            result = [this.generateMenuItem(!breadcrumbs.path, runContext, toggleNavigationMenu)].concat(result);
        }
        return result;
    };
    ReactAppbar.prototype.generateMenuItem = function (isRoot, runContext, toggleNavigationMenu) {
        return isRoot
            ? {
                id: "menu",
                type: "command.button",
                location: "before",
                onExecute: function () { return toggleNavigationMenu(true); },
                icon: "menu"
            }
            : {
                id: "menu",
                type: "command.button",
                location: "before",
                onExecute: function () { return runContext.$functions.navigateBack(); },
                icon: "back"
            };
    };
    ReactAppbar.prototype.generateTitleItem = function (title) {
        return {
            id: "title",
            type: "label",
            location: "before",
            text: title
        };
    };
    return ReactAppbar;
}(React.Component));
export { ReactAppbar };
