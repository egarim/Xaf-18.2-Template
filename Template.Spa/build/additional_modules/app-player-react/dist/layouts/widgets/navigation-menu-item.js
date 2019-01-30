/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as React from "react";
import { ReactLabel } from "../../widgets/label-widget";
import { createWithStyleComponent } from "../../widgets/with-style";
import { withDefaultStyle } from "../../widgets/default-style-provider";
export var NavbarItem = withDefaultStyle(function (config) {
    return (React.createElement(WithStyle, { className: config.className }, function (_a) {
        var main = _a.main;
        return (React.createElement(ReactLabel, { text: config.title, style: config.style, className: main, onClick: config.onExecute }));
    }));
}, "navbarItem");
var WithStyle = createWithStyleComponent({
    main: {
        wordBreak: "break-word",
        color: "inherit"
    }
});
