/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import resolveAwaiter from "../utils/resolveAwater";
import { registerWidget } from "./info/components-info";
export function registerTestDynamicLoadingComponent(name, Component, customizeWidget) {
    var componentLoadingRA = resolveAwaiter(), componentRenderingRA = resolveAwaiter();
    registerWidget({
        name: name,
        customizeWidget: customizeWidget,
        loader: function () {
            componentLoadingRA.resolve(TestComponent);
            return componentLoadingRA.awaiter;
        }
    });
    var TestComponent = /** @class */ (function (_super) {
        tslib_1.__extends(TestComponent, _super);
        function TestComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestComponent.prototype.render = function () {
            return React.createElement(Component, tslib_1.__assign({}, this.props));
        };
        TestComponent.prototype.componentDidMount = function () {
            componentRenderingRA.resolve("ready");
        };
        return TestComponent;
    }(React.Component));
    return {
        loadingAwaiter: componentLoadingRA.awaiter,
        renderingAwaiter: componentRenderingRA.awaiter
    };
}
