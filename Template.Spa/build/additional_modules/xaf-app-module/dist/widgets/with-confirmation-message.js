/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { showDialog } from "../dialogs";
import * as shortcuts from "app-player-react/dist/common/shortcuts";
import { createSelector } from "reselect";
export function withConfirmationMessage(Component) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithConfirmationMessage, _super);
        function WithConfirmationMessage() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemsSelector = createItemsSelector(function (_a) {
                var items = _a.items;
                return items;
            }, function () {
                return createSelector([function (command) { return command; }], function (command) {
                    var message = command.onExecute && command.confirmationMessage;
                    if (message) {
                        return tslib_1.__assign({}, command, { onExecute: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            shortcuts.pushScope("confirmation");
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, , 3, 4]);
                                            return [4 /*yield*/, showDialog({
                                                    title: command.text,
                                                    message: command.confirmationMessage,
                                                    success: command.onExecute
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            shortcuts.popScope();
                                            return [7 /*endfinally*/];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); } });
                    }
                    else {
                        return command;
                    }
                });
            });
            return _this;
        }
        WithConfirmationMessage.prototype.render = function () {
            var items = this.itemsSelector(this.props);
            return React.createElement(Component, tslib_1.__assign({}, this.props, { items: items }));
        };
        return WithConfirmationMessage;
    }(React.Component));
}
function createItemsSelector(getItems, createItemSelector) {
    var selectors = [];
    return createSelector([getItems], function (items) {
        selectors = selectors.splice(0, items.length);
        return items.map(function (item, index) {
            var itemSelector = selectors[index];
            if (!itemSelector) {
                itemSelector = createItemSelector();
                selectors[index] = itemSelector;
            }
            var newItemValue = itemSelector(item);
            return newItemValue;
        });
    });
}
