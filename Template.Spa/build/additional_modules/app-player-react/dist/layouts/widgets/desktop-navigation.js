/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { createWithStyleComponent } from "../../widgets/with-style";
import { Button } from "devextreme-react/ui/button";
import { ReactLabel } from "../../widgets/label-widget";
import { ReactStackPanel } from "../../widgets/stack-panel-widget";
import { WithContexts } from "../../utils/with-contexts";
import { RunContext } from "../../views/run-context";
import { AppStateContext } from "../../app-state-provider";
import { BreadcrumbsProvider } from "../../navigation/breadcrumbs-provider";
import { CalcPropsContext } from "../../model/calc-props-context";
var WithStyle = createWithStyleComponent({
    main: {
        marginLeft: "-9px",
        marginTop: "-6px"
    },
    button: {
        marginTop: "3px",
        marginRight: "10px"
    },
    rootButoon: {
        marginTop: "6px"
    },
    top: {
        fontSize: "18px",
        padding: "0px",
    },
    title: {
        marginTop: "3px",
        fontWeight: "bold",
        padding: "0px",
        fontSize: "26px"
    },
    rootTitle: {
        marginTop: "0px"
    },
    bottom: {
        fontWeight: "bold",
        marginTop: "-6px",
        padding: "0px",
        fontSize: "26px"
    }
});
var ReactDesktopNavigation = /** @class */ (function (_super) {
    tslib_1.__extends(ReactDesktopNavigation, _super);
    function ReactDesktopNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactDesktopNavigation.prototype.render = function () {
        var _this = this;
        return (React.createElement(WithContexts, { contexts: { runContext: RunContext, appStateContext: AppStateContext, calcProps: CalcPropsContext } }, function (_a) {
            var _b = _a.runContext, runContext = _b === void 0 ? _this.props.runContext : _b, _c = _a.appStateContext, appStateContext = _c === void 0 ? _this.props.appStateHolder : _c, calcProps = _a.calcProps;
            var displayedViewsInfo = appStateContext.appState.displayedViewsInfo, navigateBack = runContext.$functions.navigateBack;
            return (React.createElement(BreadcrumbsProvider, { displayedViewsInfo: displayedViewsInfo, calcPropsProvider: calcProps, availablePanes: ["main", "preview"], pane: _this.props.pane }, function (_a) {
                var title = _a.title, path = _a.path;
                return (React.createElement(WithStyle, { className: _this.props.className }, function (_a) {
                    var buttonClass = _a.button, rootButtonClass = _a.rootButoon, topClass = _a.top, bottomClass = _a.bottom, titleClass = _a.title, rootTitleClass = _a.rootTitle, main = _a.main;
                    if (title && path) {
                        return (React.createElement(ReactStackPanel, { orientation: "horizontal", verticalAlign: "middle", className: main },
                            React.createElement(Button, { stylingMode: "text", icon: "arrowleft", onClick: navigateBack, className: buttonClass }),
                            React.createElement(ReactStackPanel, { orientation: "vertical", verticalAlign: "middle" },
                                React.createElement(ReactLabel, { text: path, className: topClass }),
                                React.createElement(ReactLabel, { text: title, className: bottomClass }))));
                    }
                    else if (path) {
                        return (React.createElement(ReactStackPanel, { orientation: "horizontal", verticalAlign: "middle" },
                            React.createElement(Button, { stylingMode: "text", icon: "arrowleft", onClick: navigateBack, className: buttonClass + " " + rootButtonClass }),
                            React.createElement(ReactLabel, { text: path, className: titleClass + " " + rootTitleClass })));
                    }
                    else {
                        return React.createElement(ReactLabel, { text: title, className: titleClass });
                    }
                }));
            }));
        }));
    };
    return ReactDesktopNavigation;
}(React.PureComponent));
export default ReactDesktopNavigation;
