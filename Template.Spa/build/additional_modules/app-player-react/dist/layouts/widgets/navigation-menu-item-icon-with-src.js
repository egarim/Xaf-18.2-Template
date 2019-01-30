/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as React from "react";
import { createWithStyleComponent } from "../../widgets/with-style";
import { ReactIcon } from "../../widgets/icon-widget";
import { withDefaultStyle } from "../../widgets/default-style-provider";
export var NavigationItemIconWithSrc = withDefaultStyle(function (_a) {
    var src = _a.src, style = _a.style;
    return (React.createElement(WithStyle, null, function (_a) {
        var main = _a.main;
        return (React.createElement(ReactIcon, { src: src, className: main, style: style }));
    }));
}, "navigationItemIcon");
var WithStyle = createWithStyleComponent({
    main: {
        width: 16
    }
});
