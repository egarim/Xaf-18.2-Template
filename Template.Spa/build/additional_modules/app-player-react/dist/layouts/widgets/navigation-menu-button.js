/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as React from "react";
import { createWithStyleComponent } from "../../widgets/with-style";
import { Button } from "devextreme-react/ui/button";
import { withDefaultStyle } from "../../widgets/default-style-provider";
export var NavigationMenuButton = withDefaultStyle(function (_a) {
    var style = _a.style, toggleNavigationMenu = _a.toggleNavigationMenu;
    return (React.createElement(WithStyle, null, function (_a) {
        var main = _a.main;
        return (React.createElement(Button, { icon: "menu", type: "default", tabIndex: -1, focusStateEnabled: false, hoverStateEnabled: false, activeStateEnabled: false, className: main, style: style, onClick: toggleNavigationMenu }));
    }));
}, "menuButton");
var WithStyle = createWithStyleComponent({
    main: {
        height: "100%",
        borderRadius: 0,
        "& .dx-button-content:hover": {
            opacity: 0.5
        }
    }
});
