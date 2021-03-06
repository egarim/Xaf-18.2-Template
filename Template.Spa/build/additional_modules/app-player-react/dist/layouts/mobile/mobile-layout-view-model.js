/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { AppStateContext } from "../../app-state-provider";
import { WithContexts } from "../../utils/with-contexts";
var MobileLayoutViewModel = /** @class */ (function (_super) {
    tslib_1.__extends(MobileLayoutViewModel, _super);
    function MobileLayoutViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileLayoutViewModel.prototype.render = function () {
        var _a = this.props, children = _a.children, globalCommands = _a.globalCommands;
        return (React.createElement(WithContexts, { contexts: { appStateContext: AppStateContext } }, function (_a) {
            var appState = _a.appStateContext.appState;
            return children(MobileLayoutViewModel.createLayoutViewModel(appState.displayedViewsInfo, globalCommands));
        }));
    };
    MobileLayoutViewModel.createLayoutViewModel = function (displayedViewsInfo, globalCommands) {
        var topPane = this.getTopPane(displayedViewsInfo);
        return {
            rendered: false,
            mainPane: {
                visible: true,
                name: "main",
                viewToolbar: {
                    items: globalCommands
                },
                displayedViewInfo: topPane
            }
        };
    };
    MobileLayoutViewModel.getTopPane = function (displayedViewsInfo) {
        var lastPanePart = displayedViewsInfo[displayedViewsInfo.length - 1];
        return lastPanePart;
    };
    return MobileLayoutViewModel;
}(React.Component));
export { MobileLayoutViewModel };
