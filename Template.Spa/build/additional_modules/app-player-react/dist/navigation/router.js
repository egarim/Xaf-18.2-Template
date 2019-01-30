/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import createHistory from "history/createBrowserHistory";
import * as React from "react";
import { Route, Router } from "react-router-dom";
import { RunContext } from "../views/run-context";
import { createRouterApi } from "./router-api";
import { createRoutingPart, Path } from "./routing-parts";
var AppPlayerRouter = /** @class */ (function (_super) {
    tslib_1.__extends(AppPlayerRouter, _super);
    function AppPlayerRouter(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, appConfig = _a.appConfig, _b = _a.history, history = _b === void 0 ? createHistory() : _b, parametersProcessor = _a.parametersProcessor, runContext = _a.runContext, routerApi = createRouterApi(history, appConfig, parametersProcessor);
        _this.state = {
            history: history,
            runContext: tslib_1.__assign({}, runContext, { $functions: tslib_1.__assign({}, runContext.$functions, routerApi) })
        };
        return _this;
    }
    AppPlayerRouter.prototype.render = function () {
        var _a = this.props, appConfig = _a.appConfig, children = _a.children, _b = this.state, history = _b.history, runContext = _b.runContext;
        return (React.createElement(RunContext.Provider, { value: runContext },
            React.createElement(Router, { history: history },
                React.createElement(Route, { exact: true, path: "/(.*)" }, function (_a) {
                    var match = _a.match;
                    var routingParts = Path.parse(match.url).map(function (p) { return (createRoutingPart(p, appConfig.views)); });
                    return children(routingParts);
                }))));
    };
    return AppPlayerRouter;
}(React.PureComponent));
export { AppPlayerRouter };
