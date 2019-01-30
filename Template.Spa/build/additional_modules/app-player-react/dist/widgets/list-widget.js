/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import { List } from "devextreme-react/ui/list";
import * as React from "react";
import { createRunContextWithItem } from "../logic/event-compiler";
import { RunContext } from "../views/run-context";
import { createWithStyleComponent } from "./with-style";
import { CalcPropsWidgetRenderer } from "./component-renderer";
var WithStyle = createWithStyleComponent({});
var ReactList = /** @class */ (function (_super) {
    tslib_1.__extends(ReactList, _super);
    function ReactList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactList.prototype.listRef = function (e) {
        if (e) {
            var scrollTop_1, list_1 = e.instance, dataSource = list_1.getDataSource();
            if (dataSource) {
                dataSource.on("loadingChanged", function (isLoading) {
                    if (isLoading) {
                        scrollTop_1 = list_1.scrollTop();
                    }
                });
                dataSource.on("changed", function () {
                    var maxPosition = list_1.scrollHeight() - list_1.clientHeight();
                    if (scrollTop_1 < maxPosition) {
                        list_1.scrollTo(scrollTop_1);
                    }
                });
            }
        }
    };
    ReactList.prototype.render = function () {
        var _this = this;
        var itemComponents = this.props.itemComponents, groupComponents = this.props.groupComponents;
        return (React.createElement(RunContext.Consumer, null, function (runContext) {
            if (runContext === void 0) { runContext = _this.props.runContext; }
            return (React.createElement(WithStyle, { className: _this.props.className }, function (_a) {
                var main = _a.main;
                return (React.createElement(List, tslib_1.__assign({}, _this.props, { style: _this.props.style, className: main, itemComponent: function (itemHolder) { return React.createElement(ItemComponents, { name: "itemComponents", components: itemComponents, runContext: runContext, itemHolder: itemHolder }); }, groupComponent: function (itemHolder) { return React.createElement(ListGroupItem, { name: "groupComponents", components: groupComponents, runContext: runContext, itemHolder: itemHolder }); }, ref: _this.listRef })));
            }));
        }));
    };
    ReactList.defaultProps = { editConfig: {} };
    return ReactList;
}(React.Component));
export { ReactList };
var ItemComponents = /** @class */ (function (_super) {
    tslib_1.__extends(ItemComponents, _super);
    function ItemComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemComponents.render = function (props) {
        var runContext = props.runContext, itemHolder = props.itemHolder, components = props.components, itemContext = createRunContextWithItem(runContext, itemHolder);
        // NOTE: div wrapper is needed by devextreme: https://github.com/DevExpress/devextreme-react/issues/87 
        return (React.createElement("div", null,
            React.createElement(RunContext.Provider, { value: itemContext }, components.map(function (component, index) {
                return (React.createElement(CalcPropsWidgetRenderer, tslib_1.__assign({ key: index }, component)));
            }))));
    };
    ItemComponents.prototype.render = function () {
        return ItemComponents.render(this.props);
    };
    return ItemComponents;
}(React.PureComponent));
export { ItemComponents };
var itemKey = "itemHolder";
var ListGroupItem = /** @class */ (function (_super) {
    tslib_1.__extends(ListGroupItem, _super);
    function ListGroupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListGroupItem.prototype.shouldComponentUpdate = function (nextProps) {
        var _this = this;
        return Object.keys(nextProps).some(function (key) {
            if (key === itemKey) {
                var items_1 = _this.props[itemKey].items || [], nextItems = nextProps[itemKey].items || [];
                return nextItems.some(function (nextItem, index) { return nextItem !== items_1[index]; });
            }
            return nextProps[key] !== _this.props[key];
        });
    };
    ListGroupItem.prototype.render = function () {
        return ItemComponents.render(this.props);
    };
    return ListGroupItem;
}(React.Component));
export { ListGroupItem };
