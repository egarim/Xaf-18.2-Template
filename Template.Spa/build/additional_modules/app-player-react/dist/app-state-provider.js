/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
var AppStateProvider = /** @class */ (function (_super) {
    tslib_1.__extends(AppStateProvider, _super);
    function AppStateProvider(props) {
        var _this = _super.call(this, props) || this;
        var defaultAppState = props.defaultAppState;
        _this.state = {
            appState: defaultAppState,
            updateAppState: function (updateState) {
                _this.setState(function (prevState) {
                    return tslib_1.__assign({}, prevState, { appState: tslib_1.__assign({}, prevState.appState, updateState) });
                });
            }
        };
        return _this;
    }
    AppStateProvider.prototype.render = function () {
        return (React.createElement(AppStateContext.Provider, { value: this.state, children: this.props.children }));
    };
    AppStateProvider.defaultProps = {
        defaultAppState: {
            displayedViewsInfo: [],
            cachedViewsInfo: {}
        }
    };
    return AppStateProvider;
}(React.Component));
export { AppStateProvider };
export var AppStateContext = React.createContext(undefined);
