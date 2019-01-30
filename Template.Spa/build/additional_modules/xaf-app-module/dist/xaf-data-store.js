/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import CustomStore from "devextreme/data/custom_store";
import { createStore as aspCreateStore } from "devextreme-aspnet-data-nojquery";
import JQuery from "app-player-react/dist/utils/jquery.stub";
import { AppPlayerError } from "app-player-react/dist/logic/operations";
var customLoadOptionsNames = ["viewId", "currentObject", "propertyName", "viewState", "getViewState"];
var XafDataStore = /** @class */ (function (_super) {
    tslib_1.__extends(XafDataStore, _super);
    function XafDataStore(options) {
        var _this = this;
        var patchedOptions = tslib_1.__assign({}, options, { 
            // list-view load
            load: function (loadOptions) {
                if (loadOptions.searchValue) {
                    loadOptions.filter = [loadOptions.searchExpr, loadOptions.searchOperation, loadOptions.searchValue];
                }
                var viewId = loadOptions.viewId, propertyName = loadOptions.propertyName, currentObject = loadOptions.currentObject, getViewState = loadOptions.getViewState, viewState = loadOptions.viewState, aspNetLoadOptions = tslib_1.__rest(loadOptions, ["viewId", "propertyName", "currentObject", "getViewState", "viewState"]), postViewState = (getViewState ? getViewState() : viewState), key = currentObject && (_this.keyOf(currentObject) || "New"), loadUrl = "" + options.url + [viewId, key, propertyName].reduce(function (a, s) { return a += (s !== undefined ? "/" + s : ""); }, ""), postData = { viewState: postViewState, loadOptions: aspNetLoadOptions }, aspNetOptions = _this.getAspNetOption(options, loadUrl, postData);
                var _underlineStore = aspCreateStore(aspNetOptions);
                return _underlineStore.load(aspNetLoadOptions);
            }, 
            // get current lookup value
            byKey: function (key, extra) {
                var currentObject = extra.currentObject, propertyName = extra.propertyName;
                // search lookup value.
                if (currentObject && propertyName) {
                    if (currentObject[propertyName] && _this.keyOf(currentObject[propertyName]) !== key) {
                        throw new Error("Not implemented on server side");
                    }
                    return currentObject[propertyName];
                }
                else {
                    if (!currentObject) {
                        return null;
                    }
                    throw new Error("Not supported");
                }
            } });
        _this = _super.call(this, patchedOptions) || this;
        return _this;
    }
    XafDataStore.prototype._customLoadOptions = function () {
        return customLoadOptionsNames;
    };
    XafDataStore.prototype.getAspNetOption = function (options, loadUrl, postData) {
        return tslib_1.__assign({}, options, { loadUrl: loadUrl, loadMethod: "POST", onBeforeSend: function (_, ajaxSetting) {
                ajaxSetting.xhrFields = {
                    withCredentials: true
                };
                ajaxSetting.headers = {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                ajaxSetting.cache = true;
                ajaxSetting.data = JSON.stringify(postData);
            } });
    };
    return XafDataStore;
}(CustomStore));
export { XafDataStore };
var serverCache = {};
var XafModelActionStore = /** @class */ (function (_super) {
    tslib_1.__extends(XafModelActionStore, _super);
    function XafModelActionStore(options) {
        var _this = this;
        var patchedOptions = tslib_1.__assign({}, options, { 
            // NOTE used for data/actions
            load: function (loadOptions) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var viewId, viewState, propertyName, actionId, actionParameter, keyPropertyName, aspNetLoadOptions, _a, currentObject, selectedObjects, key, loadUrl, selectedObjectKeys, postDataViewState, postData, response;
                var _this = this;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if ("searchValue" in loadOptions) {
                                console.warn("load option \"searchValue\" isn't supported");
                            }
                            viewId = loadOptions.viewId, viewState = loadOptions.viewState, propertyName = loadOptions.propertyName, actionId = loadOptions.actionId, actionParameter = loadOptions.actionParameter, keyPropertyName = loadOptions.keyPropertyName, aspNetLoadOptions = tslib_1.__rest(loadOptions, ["viewId", "viewState", "propertyName", "actionId", "actionParameter", "keyPropertyName"]), _a = viewState || {}, currentObject = _a.currentObject, selectedObjects = _a.selectedObjects, key = (this.key() || keyPropertyName) && currentObject && (this.xafKeyOf(currentObject, keyPropertyName) || "New"), loadUrl = "" + options.url + [viewId, key, propertyName].reduce(function (a, s) { return a += (s ? "/" + s : ""); }, ""), selectedObjectKeys = (selectedObjects || []).map(function (x) { return _this.xafKeyOf(x, keyPropertyName) || x; }), postDataViewState = tslib_1.__assign({}, viewState, { currentObject: currentObject, selectedObjects: selectedObjectKeys }), postData = { viewState: postDataViewState, loadOptions: aspNetLoadOptions, actionId: actionId, actionParameter: actionParameter };
                            return [4 /*yield*/, this._execRequest(loadUrl, postData)];
                        case 1:
                            response = _b.sent();
                            if (response.newViewState && response.newViewState.currentObject) {
                                serverCache[JSON.stringify({ key: this.xafKeyOf(response.newViewState.currentObject, keyPropertyName) || null, viewId: response.newViewState.viewId })] = response.newViewState;
                            }
                            return [2 /*return*/, this.processResponse(response)];
                    }
                });
            }); }, 
            // NOTE bykey used for data/model endpoint
            byKey: function (key, extra) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var currentObject, viewId, viewState, aspNetLoadOptions, 
                // currentObject needed if propertyName specicied for find object in property collection. Otherwise we load data by key
                postData, cacheKey, cachedValue, url, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!extra || !extra.viewId) {
                                throw new Error("viewId property for store extra parameter doesn't specified");
                            }
                            currentObject = extra.currentObject, viewId = extra.viewId, viewState = extra.viewState, aspNetLoadOptions = tslib_1.__rest(extra, ["currentObject", "viewId", "viewState"]), postData = { viewState: tslib_1.__assign({}, viewState, { currentObject: currentObject }), loadOptions: aspNetLoadOptions }, cacheKey = JSON.stringify({ key: key, viewId: viewId }), cachedValue = serverCache[cacheKey], url = options.url + "/" + viewId + "/" + key;
                            if (!cachedValue) return [3 /*break*/, 1];
                            delete serverCache[cacheKey];
                            response = { viewState: cachedValue };
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this._execRequest(url, postData)];
                        case 2:
                            response = _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, this.processResponse(response)];
                    }
                });
            }); } });
        _this = _super.call(this, patchedOptions) || this;
        return _this;
    }
    XafModelActionStore.prototype._customLoadOptions = function () {
        return customLoadOptionsNames;
    };
    XafModelActionStore.prototype.keyOf = function (object) {
        throw "keyOf method isn't supported. Use xafKeyOf instead";
    };
    XafModelActionStore.prototype.xafKeyOf = function (object, keyPropertyName) {
        return keyPropertyName ? object[keyPropertyName] : _super.prototype.keyOf.call(this, object);
    };
    XafModelActionStore.prototype.processResponse = function (response) {
        response.viewState = response.viewState || {};
        return response;
    };
    XafModelActionStore.prototype._execRequest = function (url, postData) {
        return JQuery.ajax({
            xhrFields: {
                withCredentials: true
            },
            dataType: "json",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            url: url,
            data: JSON.stringify(postData)
        }).catch(this.processAjaxError);
    };
    XafModelActionStore.prototype.processAjaxError = function (xhr) {
        var error = new AppPlayerError(xhr.statusText);
        try {
            var response = JSON.parse(xhr.responseText);
            error.details = response.Message;
        }
        catch (e) {
            // noop
        }
        var deferred = JQuery.Deferred();
        deferred.reject(error);
        return deferred;
    };
    return XafModelActionStore;
}(CustomStore));
export { XafModelActionStore };
export function createDataStore(options) {
    return new XafDataStore(options);
}
export function createModelActionStore(options) {
    return new XafModelActionStore(options);
}
