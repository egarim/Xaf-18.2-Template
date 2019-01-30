/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as React from "react";
import { createWithStyleComponent } from "../../widgets/with-style";
import { NavigationMenuButton } from "./navigation-menu-button";
import { NavigationHeaderTitle } from "./navigation-menu-header-title";
import { withDefaultStyle } from "../../widgets/default-style-provider";
export var NavigationMenuToolbar = withDefaultStyle(function (_a) {
    var collapsed = _a.collapsed, toggleNavigationMenu = _a.toggleNavigationMenu, style = _a.style, title = _a.title;
    return (React.createElement(WithStyle, null, function (_a) {
        var main = _a.main;
        return (React.createElement("div", { className: main + " navbar-header", style: style },
            React.createElement(NavigationMenuButton, { toggleNavigationMenu: function () { return toggleNavigationMenu(false); } }),
            collapsed ? "" : React.createElement(NavigationHeaderTitle, { title: title })));
    }));
}, "navigationMenuToolbar");
var WithStyle = createWithStyleComponent({
    main: {
        display: "flex",
        flexShrink: 0,
        alignItems: "center"
    }
});
