/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import "../css/app.css";
import * as React from "react";
import { AppConfigUpdater } from "./app-config-updater";
import { AppStateContext } from "./app-state-provider";
import { AppConfigAndThemeLoader } from "./app-config-and-theme-loader";
import { Authorization } from "./common/authorization";
import { Device } from "./layouts/device";
import { Layouts } from "./layouts/layouts";
import { AppPlayerRouter } from "./navigation/router";
import { Redirector } from "./navigation/redirector";
import { Services } from "./services";
import { ServicesCreator } from "./services-creator";
import { WithContexts } from "./utils/with-contexts";
import { DisplayedViewsInfoProducer } from "./views/displayed-views-info-producer";
import { RunContext } from "./views/run-context";
import * as DxConfig from "devextreme/core/config";
import { CalcPropsProvider } from "./model/calc-props-context";
DxConfig.default({
    editorStylingMode: "filled"
});
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(Device, null, function (device) {
            var appConfigFromProps = _this.props.appConfig || _this.props.appConfigSource(device);
            return (React.createElement(AppConfigAndThemeLoader, { appConfigSource: appConfigFromProps, key: device }, function (initialAppConfig) { return (React.createElement(CalcPropsProvider, { config: initialAppConfig }, function (patchedCalcConfig) {
                return (React.createElement(AppConfigUpdater, { appConfig: patchedCalcConfig }, function (_a) {
                    var appConfig = _a.appConfig, appConfigUpdaterApi = _a.api;
                    // console.log("renderer", appState);
                    return (React.createElement(ServicesCreator, { appConfig: appConfig, appConfigUpdaterApi: appConfigUpdaterApi, onLoaded: _this.props.onLoaded }, function (_a) {
                        var authenticated = _a.authenticated;
                        return (React.createElement(WithContexts, { contexts: { runContext: RunContext, services: Services } }, function (_a) {
                            var runContext = _a.runContext, _b = _a.services, modelStorage = _b.modelStorage, parametersProcessor = _b.parametersProcessor, stores = _b.stores, typeInfoRepository = _b.typeInfoRepository;
                            return (React.createElement(AppPlayerRouter, { runContext: runContext, appConfig: appConfig, modelStorage: modelStorage, parametersProcessor: parametersProcessor, stores: stores, typeInfoRepository: typeInfoRepository }, function (routingParts) { return (React.createElement(WithContexts, { contexts: { globalRunContext: RunContext } }, function (_a) {
                                var globalRunContext = _a.globalRunContext;
                                return (React.createElement(Redirector, { routingParts: routingParts, canNavigateToDefaultView: !appConfig.authorization || authenticated, runContext: globalRunContext },
                                    React.createElement(Authorization, { config: appConfig.authorization, routingParts: routingParts, authenticated: authenticated },
                                        React.createElement(WithContexts, { contexts: { appStateContext: AppStateContext, } }, function (_a) {
                                            var _b = _a.appStateContext, appState = _b.appState, updateAppState = _b.updateAppState;
                                            return (React.createElement(DisplayedViewsInfoProducer, { routingParts: routingParts, runContext: globalRunContext, cachedViewsInfo: appState.cachedViewsInfo, displayedViewsInfo: appState.displayedViewsInfo, updateAppState: updateAppState, modelStorage: modelStorage, typeInfoRepository: typeInfoRepository, parametersProcessor: parametersProcessor, stores: stores },
                                                React.createElement(Layouts, { compact: appConfig.theme.themeName === "light-compact" })));
                                        }))));
                            })); }));
                        }));
                    }));
                }));
            })); }));
        }));
    };
    return App;
}(React.Component));
export { App };
