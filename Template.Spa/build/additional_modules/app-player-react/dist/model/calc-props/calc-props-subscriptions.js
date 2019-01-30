/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
var CalcPropsSubscriptions = /** @class */ (function () {
    function CalcPropsSubscriptions() {
        this.subscriptionId = 0;
        this.subscriptions = {};
        this.subscriptionsByNodeId = {};
    }
    CalcPropsSubscriptions.prototype.addSubscription = function (nodeId, propId, subscription) {
        var nodeSubscriptions = this.subscriptionsByNodeId[nodeId] || {}, propertySubscriptions = nodeSubscriptions[propId] || [], subscriptionId = this.subscriptionId++;
        this.subscriptions[subscriptionId] = tslib_1.__assign({}, subscription, { subscriptionId: subscriptionId });
        propertySubscriptions.push(subscriptionId);
        nodeSubscriptions[propId] = propertySubscriptions;
        this.subscriptionsByNodeId[nodeId] = nodeSubscriptions;
        return subscriptionId;
    };
    CalcPropsSubscriptions.prototype.removeSubscriptions = function (propId, nodeIds) {
        var _this = this;
        nodeIds
            .reduce(function (subscriptionIds, nodeId) {
            var parentNodeSubscriptions = _this.subscriptionsByNodeId[nodeId];
            if (parentNodeSubscriptions && parentNodeSubscriptions[propId]) {
                subscriptionIds = subscriptionIds.concat(parentNodeSubscriptions[propId]);
                delete parentNodeSubscriptions[propId];
            }
            return subscriptionIds;
        }, [])
            .forEach(function (id) {
            var s = _this.subscriptions[id];
            if (s.onDisposedCallback) {
                s.onDisposedCallback();
            }
            delete _this.subscriptions[id];
        });
    };
    CalcPropsSubscriptions.prototype.removeSubscription = function (propId, nodeId, subscriptionId) {
        var subscriptionIds = this.getSubscriptionIds(propId, nodeId);
        delete this.subscriptions[subscriptionId];
        subscriptionIds.splice(subscriptionIds.indexOf(subscriptionId), 1);
        if (subscriptionIds.length === 0) {
            delete (this.subscriptionsByNodeId[nodeId])[propId];
            return { disposeComputed: true };
        }
        else {
            return { disposeComputed: false };
        }
    };
    CalcPropsSubscriptions.prototype.getSubscriptionIds = function (propId, nodeId) {
        var nodeSubscriptions = this.subscriptionsByNodeId[nodeId];
        return nodeSubscriptions && nodeSubscriptions[propId] || [];
    };
    CalcPropsSubscriptions.prototype.onValueChanged = function (propId, nodeId, runContext, value) {
        var _this = this;
        this.getSubscriptionIds(propId, nodeId)
            .map(function (id) { return _this.subscriptions[id]; })
            .filter(function (subscription) { return subscription.runContext === runContext; })
            .forEach(function (subscription) { return subscription.callback(value); });
    };
    return CalcPropsSubscriptions;
}());
export { CalcPropsSubscriptions };
