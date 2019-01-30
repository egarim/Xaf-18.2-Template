/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as React from "react";
import { NavigationItemIconWithSrc } from "./navigation-menu-item-icon-with-src";
import { NavigationItemTextIcon } from "./navigation-menu-item-text-icon";
import { NavbarItem } from "./navigation-menu-item";
import { createWithStyleComponent } from "../../widgets/with-style";
import { withDefaultStyle } from "../../widgets/default-style-provider";
export var RootNavbarItem = withDefaultStyle(function (config) {
    return (React.createElement(WithStyle, null, function (_a) {
        var main = _a.main, text = _a.text;
        return (React.createElement("div", { style: config.style, className: main },
            config.icon
                ? React.createElement(NavigationItemIconWithSrc, { src: config.icon })
                : React.createElement(NavigationItemTextIcon, { title: config.title }),
            React.createElement(NavbarItem, { id: config.id, title: config.title, className: text })));
    }));
}, "rootNavbarItem");
var WithStyle = createWithStyleComponent({
    main: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "inherit",
        paddingTop: "7px",
        paddingRight: "7px",
        paddingBottom: "7px"
    }
});
