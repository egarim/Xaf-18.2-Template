/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { setRootScope, ShortcutsScope } from "../common/shortcuts";
import { FlexCalcPropsWidgetRenderer } from "../widgets/component-renderer";
import compileEventHandlers from "../logic/event-compiler";
var View = /** @class */ (function (_super) {
    tslib_1.__extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.render = function () {
        var _a = this.props, viewConfig = _a.viewConfig, runContext = _a.runContext, configWithCompiledEvents = compileEventHandlers(viewConfig, runContext);
        setRootScope(viewConfig.id);
        return (React.createElement(ShortcutsScope.Provider, { value: viewConfig.id }, (configWithCompiledEvents.components || [])
            .map(function (component, index) {
            return (React.createElement(FlexCalcPropsWidgetRenderer, { key: index, widgetProps: component }));
        })));
    };
    return View;
}(React.PureComponent));
export { View };
