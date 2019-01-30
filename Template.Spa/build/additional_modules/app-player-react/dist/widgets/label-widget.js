/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { createWithStyleComponent } from "./with-style";
var WithStyle = createWithStyleComponent({
    main: {
        whiteSpace: "normal",
        flexDirection: "column",
        overflow: "hidden"
    }
});
var ReactLabel = /** @class */ (function (_super) {
    tslib_1.__extends(ReactLabel, _super);
    function ReactLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactLabel.prototype.render = function () {
        var _this = this;
        var text = this.props.text || "", style = this.props.style;
        return (React.createElement(WithStyle, { className: this.props.className }, function (classes) { return (React.createElement("div", { className: classes.main, style: style, onClick: _this.props.onClick }, text)); }));
    };
    ReactLabel.defaultProps = { text: "", style: {} };
    return ReactLabel;
}(React.Component));
export { ReactLabel };
