/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as ko from "knockout";
import { CalcPropsSubscriptions } from "./calc-props-subscriptions";
export function createCalcProp(getDescriptor) {
    var subscriptions = new CalcPropsSubscriptions();
    return function (propId, nodeId, runContext) {
        if (!runContext) {
            throw new Error("runContext scope not initialized");
        }
        var computed = null;
        var computedCalledHolder = { computedCalled: false }, descriptor = getDescriptor(propId);
        return {
            propName: descriptor.propName,
            getValue: function () {
                return descriptor.modelGetter(runContext);
            },
            setValue: function (value) {
                computedCalledHolder.computedCalled = false;
                descriptor.modelSetter(runContext, value);
                if (!computedCalledHolder.computedCalled) {
                    subscriptions.onValueChanged(propId, nodeId, runContext, value);
                }
            },
            subscribe: function (callback, onDisposedCallback) {
                var parentNodeIds = descriptor.nodeIds.filter(function (id) { return id < nodeId; });
                subscriptions.removeSubscriptions(propId, parentNodeIds);
                var subscriptionId = subscriptions.addSubscription(nodeId, propId, { callback: callback, onDisposedCallback: onDisposedCallback, runContext: runContext });
                var inited = true;
                computed = computed || ko.computed({
                    read: function () {
                        computedCalledHolder.computedCalled = true;
                        var value = descriptor.modelGetter(runContext);
                        if (!inited) {
                            subscriptions.onValueChanged(propId, nodeId, runContext, value);
                        }
                        inited = false;
                    }
                });
                return {
                    dispose: function () {
                        if (computed && subscriptions.removeSubscription(propId, nodeId, subscriptionId).disposeComputed) {
                            computed.dispose();
                            computed = null;
                        }
                    }
                };
            }
        };
    };
}
