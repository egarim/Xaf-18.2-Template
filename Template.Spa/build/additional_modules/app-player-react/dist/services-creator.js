/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import { LoadPanel } from "devextreme-react/ui/load-panel";
import * as React from "react";
import { createStoreApi, createStores } from "./data/create-stores";
import { TypeInfoRepository } from "./logic/types";
import Model from "./model/model";
import { ModelStorage } from "./model/model-storage";
import { ParametersProcessor } from "./navigation/router-api";
import { Services } from "./services";
import { RunContext } from "./views/run-context";
import { continueFunc } from "./utils";
import * as shortcuts from "./common/shortcuts";
import { AppStateProvider } from "./app-state-provider";
import { AppConfigContext } from "./app-config-context";
var ServicesCreator = /** @class */ (function (_super) {
    tslib_1.__extends(ServicesCreator, _super);
    function ServicesCreator(props) {
        var _this = _super.call(this, props) || this;
        _this.busy = function () {
            shortcuts.pushScope("busy");
            _this.setState(function (state) { return (tslib_1.__assign({}, state, { loadingCount: state.loadingCount + 1 })); });
        };
        _this.available = function () {
            shortcuts.popScope();
            _this.setState(function (state) { return (tslib_1.__assign({}, state, { loadingCount: state.loadingCount - 1 })); });
        };
        var _a = _this.props, appConfig = _a.appConfig, _b = _a.onLoaded, onLoaded = _b === void 0 ? function () { return void 0; } : _b;
        _this.createServices(appConfig)
            .then(function (_a) {
            var services = _a.services, runContext = _a.runContext;
            onLoaded();
            _this.setState({ services: services, runContext: runContext });
        });
        _this.state = { loadingCount: 0 };
        return _this;
    }
    ServicesCreator.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return nextState.loadingCount === 0 || this.state.loadingCount === 0;
    };
    ServicesCreator.prototype.render = function () {
        var _a = this.state, loadingCount = _a.loadingCount, services = _a.services, runContext = _a.runContext;
        return (React.createElement(React.Fragment, null,
            loadingCount ? React.createElement(LoadPanel, { visible: true }) : null,
            services ? this.renderChildren(services, this.props.appConfig, runContext) : React.createElement("p", null, "Loading services...")));
    };
    ServicesCreator.prototype.renderChildren = function (services, appConfig, runContext) {
        var authenticated = services.modelStorage.get(this.props.appConfig.id, "authenticated");
        return (React.createElement(Services.Provider, { value: services },
            React.createElement(AppConfigContext.Provider, { value: appConfig },
                React.createElement(RunContext.Provider, { value: runContext },
                    React.createElement(AppStateProvider, null, this.props.children({ authenticated: authenticated, services: services }))))));
    };
    ServicesCreator.prototype.createServices = function (appConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modelStorage, typeInfoRepository, runContext, $global, stores, parametersProcessor;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelStorage = new ModelStorage(appConfig.id), typeInfoRepository = new TypeInfoRepository(appConfig.dataStores), runContext = {}, $global = Model.createGlobalModel(appConfig, { modelStorage: modelStorage, typeInfoRepository: typeInfoRepository }, runContext);
                        return [4 /*yield*/, createStores(appConfig.dataStores, runContext)];
                    case 1:
                        stores = _a.sent(), parametersProcessor = new ParametersProcessor(typeInfoRepository, stores);
                        runContext.$global = $global;
                        $global.stores = stores;
                        runContext.$functions = tslib_1.__assign({}, this.createAuthApi(modelStorage), createStoreApi(stores), this.props.appConfigUpdaterApi, { busy: this.busy, available: this.available });
                        return [2 /*return*/, { services: { modelStorage: modelStorage, stores: stores, typeInfoRepository: typeInfoRepository, parametersProcessor: parametersProcessor }, runContext: runContext }];
                }
            });
        });
    };
    ServicesCreator.prototype.createAuthApi = function (modelStorage) {
        var _this = this;
        var setAuthenticated = function (value) {
            modelStorage.put(_this.props.appConfig.id, "authenticated", value);
            _this.setState(tslib_1.__assign({}, _this.state));
        };
        var unauthorizedErrorHandler = function (error) {
            if (error.message === "Unauthorized") {
                setAuthenticated(false);
            }
            return error;
        };
        var handlers = require("devextreme/data/errors");
        handlers.errorHandler = continueFunc(handlers.errorHandler, unauthorizedErrorHandler);
        return {
            login: function () {
                setAuthenticated(true);
            },
            logout: function () {
                setAuthenticated(false);
            }
        };
    };
    return ServicesCreator;
}(React.Component));
export { ServicesCreator };
