/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { showError } from "../utils/errors";
var Redirector = /** @class */ (function (_super) {
    tslib_1.__extends(Redirector, _super);
    function Redirector(props) {
        var _this = _super.call(this, props) || this;
        _this.validate(props, false);
        return _this;
    }
    Redirector.prototype.shouldComponentUpdate = function (nextProps) {
        this.validate(nextProps, true);
        return this.valid;
    };
    Redirector.prototype.render = function () {
        var children = this.props.children;
        return this.valid ? children : null;
    };
    Redirector.prototype.componentDidMount = function () {
        this.validate(this.props, true);
    };
    Redirector.prototype.validate = function (props, mounted) {
        this.valid = true;
        var routingParts = props.routingParts, canNavigateToDefaultView = props.canNavigateToDefaultView, runContext = props.runContext;
        var areRoutingPartsEmpty = !routingParts.length;
        if (areRoutingPartsEmpty && canNavigateToDefaultView) {
            if (mounted) {
                runContext.$functions.navigateToDefaultView(runContext);
            }
            this.valid = false;
        }
        var unknownRoutingPart = routingParts.find(function (routingPart) { return !routingPart.config; });
        if (unknownRoutingPart) {
            if (mounted) {
                showError("Error 404: View " + unknownRoutingPart.viewId + " not found");
                runContext.$functions.navigateToDefaultView(runContext);
            }
            this.valid = false;
        }
    };
    return Redirector;
}(React.Component));
export { Redirector };
