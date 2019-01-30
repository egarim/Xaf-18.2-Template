/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
var _this = this;
import * as tslib_1 from "tslib";
import { actionsStoreId, actionsAuthStoreId } from "./stores";
import { detailModelProperty, listModelProperty, baseModelProperty } from "./views";
import { getCollectionContext } from "./collection-contexts";
import { applayAppConfigDiff } from "./common";
export function defaultPostProcess(actionResponse, keyPropertyName, runContext, collectionContext, ownerContext) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, viewState, newViewState, $functions, $global, 
        // TODO Vitik: remove when xaf generate right view name
        viewId, actionStore, key, params, isNeedRefreshListWidget, listWidget, currentObject, configDiffs, objectsState, criteria;
        return tslib_1.__generator(this, function (_b) {
            viewState = actionResponse.viewState, newViewState = actionResponse.newViewState, $functions = runContext.$functions, $global = runContext.$global;
            if (newViewState) {
                viewId = newViewState.viewId === "Contact_DetailView$View" ? "Contact_DetailView$Edit" : newViewState.viewId, actionStore = $global.stores[actionsStoreId], key = actionStore.xafKeyOf(newViewState.currentObject, keyPropertyName), params = (_a = {}, _a[detailModelProperty.currentObjPropName] = key, _a);
                $functions.navigateToView(/*result.newViewState.viewId*/ viewId, params);
            }
            else {
                isNeedRefreshListWidget = (collectionContext[baseModelProperty.viewState] || {}).criteria !== viewState.criteria;
                if (isNeedRefreshListWidget) {
                    listWidget = collectionContext[listModelProperty.selectionSourceWidget];
                    listWidget.refresh ? listWidget.refresh() : listWidget.getDataSource().load();
                }
                if (viewState.isClosed) {
                    $functions.navigateBack();
                }
                else {
                    currentObject = viewState.currentObject, configDiffs = viewState.configDiffs, objectsState = viewState.objectsState, criteria = viewState.criteria;
                    ownerContext[baseModelProperty.viewState] = tslib_1.__assign({}, ownerContext[baseModelProperty.viewState], { currentObject: currentObject, configDiffs: configDiffs, objectsState: objectsState });
                    ownerContext[detailModelProperty.currentObjPropName] = currentObject;
                    collectionContext[baseModelProperty.viewState] = tslib_1.__assign({}, collectionContext[baseModelProperty.viewState], { criteria: criteria });
                    applayAppConfigDiff({ $functions: $functions, configDiffs: configDiffs });
                }
            }
            return [2 /*return*/];
        });
    });
}
var actionExecutor = function (storeId) { return function (params) { return function (runContext) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var actionId, actionParameter, propertyName, keyPropertyName, postProcess, $functions, $local, _a, $value, _b, $focusedItem, collectionContext, selectedObjects, actionOptions, viewState, actionResult, _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                actionId = params.actionId, actionParameter = params.actionParameter, propertyName = params.propertyName, keyPropertyName = params.keyPropertyName, postProcess = params.postProcess, $functions = runContext.$functions, $local = runContext.$local, _a = runContext.$value, $value = _a === void 0 ? actionParameter : _a, _b = runContext.$focusedItem, $focusedItem = _b === void 0 ? null : _b, collectionContext = getCollectionContext(propertyName)($local), selectedObjects = $focusedItem ? [$focusedItem] : collectionContext[listModelProperty.selectedItems], actionOptions = { actionId: actionId, actionParameter: $value };
                $functions.busy();
                _d.label = 1;
            case 1:
                _d.trys.push([1, , 8, 9]);
                viewState = tslib_1.__assign({}, collectionContext[baseModelProperty.viewState], { objectsState: $local[baseModelProperty.viewState] && $local[baseModelProperty.viewState].objectsState, currentObject: $local[detailModelProperty.currentObjPropName], selectedObjects: selectedObjects, configDiffs: $functions.getEntireConfigDiffs() });
                return [4 /*yield*/, $functions
                        .load(storeId, tslib_1.__assign({}, actionOptions, { viewId: $local[baseModelProperty.viewId], viewState: viewState,
                        propertyName: propertyName,
                        keyPropertyName: keyPropertyName }))];
            case 2:
                actionResult = _d.sent();
                if (!postProcess) return [3 /*break*/, 5];
                _c = postProcess;
                return [4 /*yield*/, defaultPostProcess(actionResult, keyPropertyName, runContext, collectionContext, $local)];
            case 3: return [4 /*yield*/, _c.apply(void 0, [_d.sent(), runContext])];
            case 4: return [2 /*return*/, _d.sent()];
            case 5: return [4 /*yield*/, defaultPostProcess(actionResult, keyPropertyName, runContext, collectionContext, $local)];
            case 6: return [2 /*return*/, _d.sent()];
            case 7: return [3 /*break*/, 9];
            case 8:
                $functions.available();
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}); }; }; };
var authStoreActions = actionExecutor(actionsAuthStoreId), viewStoreActions = actionExecutor(actionsStoreId);
var preDefinedActions = {
    "Logon": authStoreActions({ actionId: "Logon", postProcess: function (_, _a) {
            var $functions = _a.$functions;
            return $functions.login();
        } })
};
export function getActionExecute(actionOptions) {
    var action = preDefinedActions[actionOptions.actionId];
    if (!action) {
        return viewStoreActions(actionOptions);
    }
    else {
        return action;
    }
}
