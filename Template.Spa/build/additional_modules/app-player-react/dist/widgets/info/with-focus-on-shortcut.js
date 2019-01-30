/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { ShortcutsScope, bind, unbind } from "../../common/shortcuts";
export function withFocusOnShortcut(Widget) {
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(FocusOnShortcutBinder, _super);
            function FocusOnShortcutBinder() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ref = React.createRef();
                return _this;
            }
            FocusOnShortcutBinder.prototype.render = function () {
                return React.createElement(Widget, tslib_1.__assign({}, this.props, { ref: this.ref }));
            };
            FocusOnShortcutBinder.prototype.componentDidMount = function () {
                var _this = this;
                var shortcut = this.props.shortcut, scope = this.context;
                if (shortcut) {
                    bind(shortcut, scope, function (e) {
                        e.preventDefault();
                        _this.ref.current.instance.focus();
                    });
                }
            };
            FocusOnShortcutBinder.prototype.componentWillUnmount = function () {
                var shortcut = this.props.shortcut, scope = this.context;
                if (shortcut) {
                    unbind(shortcut, scope);
                }
            };
            return FocusOnShortcutBinder;
        }(React.Component)),
        _a.contextType = ShortcutsScope,
        _a;
}
