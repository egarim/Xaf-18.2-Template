/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { getRoutingPartIdentifier } from "../navigation/routing-parts";
import { setOrPush } from "../utils";
import { ViewModelHelper } from "./view-model-helper";
import { isFunction } from "util";
var DisplayedViewsInfoProducer = /** @class */ (function (_super) {
    tslib_1.__extends(DisplayedViewsInfoProducer, _super);
    function DisplayedViewsInfoProducer(p) {
        var _this = _super.call(this, p) || this;
        _this.state = {
            parametersUpdatesQuery: {},
            resultViewsInfo: [],
            viewsInfoToUpdateCount: 0
        };
        return _this;
    }
    DisplayedViewsInfoProducer.getViewInfoToUpdate = function (routingPart, updatesQuery, appState) {
        var displayedViewsInfo = appState.displayedViewsInfo, cachedViewsInfo = appState.cachedViewsInfo, viewId = routingPart.config.id, viewInfo = displayedViewsInfo.filter(function (d) { return d.routingPart.config.id === viewId; })[0];
        if (!viewInfo) {
            if (cachedViewsInfo[viewId]) {
                return tslib_1.__assign({}, cachedViewsInfo[viewId], { routingPart: routingPart, isReady: !routingPart.params });
            }
            else {
                return { routingPart: routingPart, localRunContext: null, isReady: !routingPart.params };
            }
        }
        else {
            if (viewInfo.routingPart.params) {
                if (!routingPart.equals(viewInfo.routingPart) && !updatesQuery[getRoutingPartIdentifier(routingPart)]) {
                    return tslib_1.__assign({}, viewInfo, { routingPart: routingPart, isReady: false });
                }
            }
            else if (!viewInfo.isReady) {
                return tslib_1.__assign({}, viewInfo, { routingPart: routingPart, isReady: true });
            }
        }
        return null;
    };
    DisplayedViewsInfoProducer.getDerivedStateFromProps = function (nextProps, prevState) {
        var _this = this;
        var displayedViewsInfo = nextProps.displayedViewsInfo, routingParts = nextProps.routingParts, modelStorage = nextProps.modelStorage, typeInfoRepository = nextProps.typeInfoRepository, parametersProcessor = nextProps.parametersProcessor, runContext = nextProps.runContext, stores = nextProps.stores, parametersUpdatesQuery = prevState.parametersUpdatesQuery, viewsInfoToUpdateCount = routingParts.reduce(function (count, routingPart) {
            var viewInfo = DisplayedViewsInfoProducer.getViewInfoToUpdate(routingPart, parametersUpdatesQuery, nextProps);
            if (viewInfo) {
                var needToCreateModel = !viewInfo.localRunContext;
                if (needToCreateModel) {
                    var refreshParameter = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/];
                    }); }); }, $functions = tslib_1.__assign({}, runContext.$functions, { refreshParameter: refreshParameter }), localRunContext = tslib_1.__assign({}, runContext, { $functions: $functions });
                    viewInfo.localRunContext = localRunContext;
                    viewInfo.localRunContext.$local = ViewModelHelper.createModel(routingPart.config, { modelStorage: modelStorage, typeInfoRepository: typeInfoRepository }, localRunContext, stores);
                }
                if (viewInfo.routingPart.config.params && viewInfo.routingPart.config.params.length) {
                    parametersUpdatesQuery[getRoutingPartIdentifier(viewInfo.routingPart)] = ViewModelHelper.loadParameters(viewInfo, runContext, parametersProcessor)
                        .then(function () { return viewInfo.routingPart.viewId; });
                }
                displayedViewsInfo = DisplayedViewsInfoProducer.getUpdatedDisplayedViewsInfo(displayedViewsInfo, viewInfo);
                return count + 1;
            }
            return count;
        }, 0);
        return { resultViewsInfo: displayedViewsInfo, parametersUpdatesQuery: parametersUpdatesQuery, viewsInfoToUpdateCount: viewsInfoToUpdateCount };
    };
    DisplayedViewsInfoProducer.getUpdatedDisplayedViewsInfo = function (displayedViewsInfo, viewInfo) {
        var predicat = function (vi) { return vi.routingPart.config.id === viewInfo.routingPart.config.id; };
        return setOrPush(displayedViewsInfo.slice(), predicat, viewInfo);
    };
    DisplayedViewsInfoProducer.prototype.syncWithRoutingParts = function (routingParts, displayedViewsInfo) {
        var _this = this;
        var exists = [], notExists = [];
        displayedViewsInfo.forEach(function (vi) {
            var routingPart = routingParts.find(function (rp) { return rp.viewId === vi.routingPart.viewId; });
            routingPart ? exists.push(tslib_1.__assign({}, vi, { routingPart: routingPart })) : notExists.push(vi);
        });
        notExists.forEach(function (vi) {
            var _a = _this.props, modelStorage = _a.modelStorage, typeInfoRepository = _a.typeInfoRepository, runContext = _a.runContext;
            ViewModelHelper.clearModel(vi, { modelStorage: modelStorage, typeInfoRepository: typeInfoRepository }, runContext);
        });
        return exists;
    };
    DisplayedViewsInfoProducer.prototype.isViewConfigChanged = function (_a) {
        var routingParts = _a.routingParts, displayedViewsInfo = _a.displayedViewsInfo;
        return displayedViewsInfo.some(function (vi) {
            var routingPart = routingParts.find(function (rp) { return rp.viewId === vi.routingPart.viewId; });
            return routingPart && routingPart.config !== vi.routingPart.config;
        });
    };
    DisplayedViewsInfoProducer.prototype.updateAppStateDisplayedViewsInfo = function () {
        var resultViewsInfo = this.state.resultViewsInfo, _a = this.props, routingParts = _a.routingParts, updateAppState = _a.updateAppState;
        updateAppState({
            displayedViewsInfo: this.syncWithRoutingParts(routingParts, resultViewsInfo)
        });
    };
    DisplayedViewsInfoProducer.prototype.createRefreshParameterFn = function (viewInfo) {
        var _this = this;
        var _a = this.props, displayedViewsInfo = _a.displayedViewsInfo, parametersProcessor = _a.parametersProcessor, updateAppState = _a.updateAppState;
        return function (paramName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateAppState({
                            displayedViewsInfo: DisplayedViewsInfoProducer.getUpdatedDisplayedViewsInfo(displayedViewsInfo, tslib_1.__assign({}, viewInfo, { isReady: false }))
                        });
                        return [4 /*yield*/, ViewModelHelper.loadParameters(viewInfo, viewInfo.localRunContext, parametersProcessor, [paramName])];
                    case 1:
                        _a.sent();
                        updateAppState({
                            displayedViewsInfo: DisplayedViewsInfoProducer.getUpdatedDisplayedViewsInfo(displayedViewsInfo, tslib_1.__assign({}, viewInfo, { isReady: true }))
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    };
    DisplayedViewsInfoProducer.prototype.parametersUpdateComplete = function () {
        var _this = this;
        var parametersUpdatesQuery = this.state.parametersUpdatesQuery;
        Object.keys(parametersUpdatesQuery).forEach(function (key) {
            parametersUpdatesQuery[key].then(function (viewId) {
                if (viewId) {
                    var _a = _this.props, displayedViewsInfo = _a.displayedViewsInfo, updateAppState = _a.updateAppState, updatedViewInfo = displayedViewsInfo.find(function (dvi) { return dvi.routingPart.viewId === viewId; });
                    delete parametersUpdatesQuery[key];
                    updatedViewInfo.localRunContext.$functions.refreshParameter = _this.createRefreshParameterFn(updatedViewInfo);
                    updateAppState({
                        displayedViewsInfo: DisplayedViewsInfoProducer.getUpdatedDisplayedViewsInfo(displayedViewsInfo, tslib_1.__assign({}, updatedViewInfo, { isReady: true }))
                    });
                }
            });
        });
    };
    DisplayedViewsInfoProducer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var isViewConfigChanged = this.isViewConfigChanged(nextProps), isNavigateBack = nextProps.routingParts.length < nextProps.displayedViewsInfo.length, viewsInfoToUpdateCount = nextState.viewsInfoToUpdateCount;
        return isViewConfigChanged || !!viewsInfoToUpdateCount || isNavigateBack;
    };
    DisplayedViewsInfoProducer.prototype.componentDidMount = function () {
        this.updateAppStateDisplayedViewsInfo();
        this.parametersUpdateComplete();
    };
    DisplayedViewsInfoProducer.prototype.componentDidUpdate = function () {
        this.updateAppStateDisplayedViewsInfo();
        this.parametersUpdateComplete();
    };
    DisplayedViewsInfoProducer.prototype.render = function () {
        var children = this.props.children;
        return isFunction(children) ? children() : children;
    };
    return DisplayedViewsInfoProducer;
}(React.Component));
export { DisplayedViewsInfoProducer };
