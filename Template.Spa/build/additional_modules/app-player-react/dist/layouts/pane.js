/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import { LoadPanel } from "devextreme-react/ui/load-panel";
import * as React from "react";
import { AppStateContext } from "../app-state-provider";
import { Services } from "../services";
import { WithContexts } from "../utils/with-contexts";
import { RunContext } from "../views/run-context";
import { View } from "../views/view";
import { ViewsCacher } from "../views/views-cacher";
var Pane = /** @class */ (function (_super) {
    tslib_1.__extends(Pane, _super);
    function Pane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pane.prototype.render = function () {
        var _a = this.props, _b = _a.paneViewModel, visible = _b.visible, displayedViewInfo = _b.displayedViewInfo, style = _a.style;
        return (React.createElement("div", { className: this.props.classes, style: tslib_1.__assign({}, style, { display: visible ? "flex" : "none", height: "100%" }) },
            React.createElement(WithContexts, { contexts: { appStateContext: AppStateContext, serviceContext: Services, runContext: RunContext } }, function (_a) {
                var _b = _a.serviceContext, modelStorage = _b.modelStorage, parametersProcessor = _b.parametersProcessor, stores = _b.stores, typeInfoRepository = _b.typeInfoRepository, _c = _a.appStateContext, appState = _c.appState, updateAppState = _c.updateAppState, globalRunContext = _a.runContext;
                return (React.createElement(ViewsCacher, { displayedViewInfo: displayedViewInfo, parametersProcessor: parametersProcessor, modelStorage: modelStorage, updateAppState: updateAppState, stores: stores, typeInfoRepository: typeInfoRepository, cachedViewsInfo: appState.cachedViewsInfo, displayedViewsInfo: appState.displayedViewsInfo }, function (cachedView) {
                    if (cachedView) {
                        // console.log("render ", cachedView.routingPart.config.id);
                    }
                    return (React.createElement(RunContext.Provider, { value: cachedView.localRunContext },
                        React.createElement("div", { id: cachedView.routingPart.config.id.replace("$", ""), className: "view-container" },
                            cachedView.isReady
                                ? null
                                : React.createElement(LoadPanel, { visible: true, position: { my: "center", at: "center", of: "#" + cachedView.routingPart.config.id.replace("$", "") } }),
                            React.createElement(View, { key: cachedView.routingPart.config.id, viewConfig: cachedView.routingPart.config, runContext: cachedView.localRunContext }))));
                }));
            })));
    };
    return Pane;
}(React.Component));
export { Pane };
