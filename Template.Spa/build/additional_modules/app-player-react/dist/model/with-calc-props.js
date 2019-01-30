/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import * as traverse from "traverse";
import update from "immutability-helper";
import { CalcPropsContext } from "./calc-props-context";
import { WithContexts } from "../utils/with-contexts";
import { RunContext } from "../views/run-context";
export function withCalcProps(Widget) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithCalcProps, _super);
        function WithCalcProps() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithCalcProps.prototype.render = function () {
            var _this = this;
            return (React.createElement(WithContexts, { contexts: { provider: CalcPropsContext, runContext: RunContext } }, function (_a) {
                var provider = _a.provider, runContext = _a.runContext;
                return _this.renderCalcProps({ provider: provider, runContext: runContext });
            }));
        };
        WithCalcProps.prototype.renderCalcProps = function (_a) {
            var provider = _a.provider, runContext = _a.runContext;
            if (provider && provider.hasSubtreeCalcProps(this.props)) {
                return (React.createElement(WithCalcPropsNoContext, { calcProps: this.props, calcPropsProvider: provider, runContext: runContext }, function (calcProps) { return (React.createElement(Widget, tslib_1.__assign({}, calcProps))); }));
            }
            else {
                return React.createElement(Widget, tslib_1.__assign({}, this.props));
            }
        };
        return WithCalcProps;
    }(React.PureComponent));
}
var WithCalcPropsNoContext = /** @class */ (function (_super) {
    tslib_1.__extends(WithCalcPropsNoContext, _super);
    function WithCalcPropsNoContext(props) {
        var _this = _super.call(this, props) || this;
        var subscriptions = {}, componentProps = _this.createComponentProps(props.calcPropsProvider, props.runContext, props.calcProps, subscriptions);
        _this.state = { prevCalcProps: props.calcProps, componentProps: componentProps, subscriptions: subscriptions };
        return _this;
    }
    WithCalcPropsNoContext.prototype.createComponentProps = function (provider, runContext, config, subscriptions) {
        var self = this, calcProps = provider.getSubtreeCalcProps(config, runContext), state = traverse(config).map(function (node) {
            var _this = this;
            if (this.isLeaf) {
                return;
            }
            var calcPropKeys = provider.getCalcPropIds(node);
            if (calcPropKeys) {
                calcPropKeys.forEach(function (key) {
                    var _a = calcProps[key], setValue = _a.setValue, getValue = _a.getValue, propName = _a.propName, subscribe = _a.subscribe;
                    node[propName] = getValue();
                    if (propName === "value") {
                        node["onValueChanged"] = function (_a) {
                            var value = _a.value;
                            setValue(value);
                        };
                    }
                    var subscription = subscribe(function (value) {
                        var componentProps = setImmutable(self.state.componentProps, _this.path.concat([propName]), value);
                        self.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { componentProps: componentProps })); });
                    }, function () {
                        delete subscriptions[key];
                    });
                    node[propName] = getValue();
                    subscriptions[key] = subscription;
                });
            }
        });
        return state;
    };
    WithCalcPropsNoContext.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.calcProps !== prevState.prevCalcProps) {
            var componentProps = WithCalcPropsNoContext.update(nextProps.calcProps, nextProps.calcPropsProvider, nextProps.runContext, prevState.subscriptions);
            var state = { prevCalcProps: nextProps.calcProps, componentProps: update(prevState.componentProps, { $merge: componentProps }) };
            return state;
        }
        return prevState;
    };
    WithCalcPropsNoContext.update = function (config, provider, runContext, subscriptions) {
        var calcProps = provider.getSubtreeCalcProps(config, runContext), state = traverse(config).map(function (node) {
            if (this.isLeaf) {
                return;
            }
            var calcPropKeys = provider.getCalcPropIds(node);
            if (calcPropKeys) {
                calcPropKeys
                    .filter(function (key) {
                    return !!subscriptions[key];
                })
                    .forEach(function (key) {
                    var _a = calcProps[key], getValue = _a.getValue, propName = _a.propName;
                    node[propName] = getValue();
                });
            }
        });
        return state;
    };
    WithCalcPropsNoContext.prototype.render = function () {
        return this.props.children(this.state.componentProps);
    };
    WithCalcPropsNoContext.prototype.componentWillUnmount = function () {
        var _this = this;
        Object
            .keys(this.state.subscriptions)
            .forEach(function (key) {
            _this.state.subscriptions[key].dispose();
            delete _this.state.subscriptions[key];
        });
    };
    return WithCalcPropsNoContext;
}(React.Component));
export { WithCalcPropsNoContext };
function setImmutable(object, path, value) {
    var updateObjectValue = path
        .reduceRight(function (a, i) {
        var _a;
        return _a = {}, _a[i] = a, _a;
    }, { $set: value });
    return update(object, updateObjectValue);
}
