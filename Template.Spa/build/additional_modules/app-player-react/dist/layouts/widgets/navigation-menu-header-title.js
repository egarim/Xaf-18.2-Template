/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as React from "react";
import { createWithStyleComponent } from "../../widgets/with-style";
import { withDefaultStyle } from "../../widgets/default-style-provider";
export var NavigationHeaderTitle = withDefaultStyle(function (_a) {
    var title = _a.title, style = _a.style;
    return (React.createElement(WithStyle, null, function (_a) {
        var main = _a.main;
        return (React.createElement("div", { className: main, style: style }, title));
    }));
}, "navigationHeaderTitle");
var WithStyle = createWithStyleComponent({
    main: {
        fontWeight: "bold",
        marginTop: "-1px"
    }
});