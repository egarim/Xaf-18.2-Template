/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { createSelector } from "reselect";
import * as sanitize from "sanitize-html";
import { createWithStyleComponent } from "./with-style";
var WithStyle = createWithStyleComponent({
    main: {
        whiteSpace: "normal",
        flexDirection: "column",
        overflow: "hidden"
    }
});
var ReactEncodedLabel = /** @class */ (function (_super) {
    tslib_1.__extends(ReactEncodedLabel, _super);
    function ReactEncodedLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textSelector = createSelector(function (props) { return props.text || ""; }, function (text) { return sanitize(text || "", { allowedTags: ["br"] }); });
        return _this;
    }
    ReactEncodedLabel.prototype.render = function () {
        var _this = this;
        var text = this.textSelector(this.props), style = this.props.style;
        return (React.createElement(WithStyle, { className: this.props.className }, function (classes) { return (React.createElement("div", { className: classes.main, style: style, onClick: _this.props.onClick, dangerouslySetInnerHTML: { __html: text } })); }));
    };
    ReactEncodedLabel.defaultProps = { text: "", style: {} };
    return ReactEncodedLabel;
}(React.PureComponent));
export { ReactEncodedLabel };
