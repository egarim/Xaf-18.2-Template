/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import { registerDefaultStyle } from "../../default-style-provider";
export var desktopWidgetVars = {
    idents: {
        toolbarLeftRightPaddings: "25px",
        extraLarge: "30px",
        veryLarge: "20px",
        large: "16px",
        middle: "12px",
        small: "8px",
        verySmall: "4px",
        empty: "0px"
    },
    fontSize: "16px",
    editorHeight: "34px",
    imageSize: "64px",
    toolbarHeight: "60px",
    globalToolbarHeight: "70px",
}, compactWidgetVars = {
    toolbarHeight: "46px"
};
registerDefaultStyle({
    "*": {
        width: "100%"
    },
    "root": {
        fontSize: desktopWidgetVars.fontSize,
        paddingLeft: desktopWidgetVars.idents.large,
        paddingTop: desktopWidgetVars.idents.middle
    }
}, {
    widgets: ["label", "link"],
    selectors: [
        { pattern: {}, value: ["*", "root"] },
        { pattern: { scope: "form" }, value: ["*"] },
        { pattern: { scope: "toolbar" }, value: ["*"] }
    ]
});
registerDefaultStyle({
    "*": {
        height: desktopWidgetVars.editorHeight,
        fontSize: desktopWidgetVars.fontSize
    },
    "root": {
        marginLeft: desktopWidgetVars.idents.large,
        marginRight: desktopWidgetVars.idents.large,
        marginTop: desktopWidgetVars.idents.small,
        marginBottom: desktopWidgetVars.idents.small,
    }
}, {
    widgets: ["button"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { scope: "root" }, value: ["*", "root"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: "100%"
    },
    "root": {
        marginLeft: desktopWidgetVars.idents.large,
        marginRight: desktopWidgetVars.idents.large,
        marginTop: desktopWidgetVars.idents.small,
        marginBottom: desktopWidgetVars.idents.small
    }
}, {
    widgets: ["input", "datebox", "selectBox", "lookup", "textarea", "passbox", "colorpicker", "numberbox"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { scope: "root" }, value: ["*", "root"] },
        { pattern: { widget: "datebox", scope: "root" }, value: ["*"] }
    ]
});
registerDefaultStyle({
    "root": {
        marginTop: desktopWidgetVars.idents.middle,
        marginBottom: desktopWidgetVars.idents.middle,
        marginRight: desktopWidgetVars.idents.large,
        marginLeft: desktopWidgetVars.idents.large
    }
}, {
    widgets: ["radio"],
    selectors: [
        { pattern: {}, value: [] },
        { pattern: { scope: "root" }, value: ["root"] }
    ]
});
registerDefaultStyle({
    "root": {
        width: "100%",
        paddingTop: desktopWidgetVars.idents.large,
        paddingBottom: desktopWidgetVars.idents.large,
        paddingLeft: desktopWidgetVars.idents.large
    }
}, {
    widgets: ["switch", "checkbox"],
    selectors: [
        { pattern: {}, value: [] },
        { pattern: { scope: "root" }, value: ["root"] }
    ]
});
registerDefaultStyle({
    "root": {
        width: "100%",
        paddingTop: desktopWidgetVars.idents.veryLarge,
        paddingBottom: desktopWidgetVars.idents.veryLarge,
        paddingLeft: desktopWidgetVars.idents.extraLarge,
        paddingRight: desktopWidgetVars.idents.extraLarge
    }
}, {
    widgets: ["form"],
    selectors: [
        { pattern: {}, value: [] },
        { pattern: { scope: "root" }, value: ["root"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "normal"
    },
    "root": {
        marginTop: desktopWidgetVars.idents.middle,
        marginBottom: desktopWidgetVars.idents.middle
    }
}, {
    widgets: ["fileImage"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { scope: "root" }, value: ["*", "root"] }
    ]
});
registerDefaultStyle({
    "root": {
        width: desktopWidgetVars.imageSize,
        height: desktopWidgetVars.imageSize,
        marginTop: desktopWidgetVars.idents.large,
        marginBottom: desktopWidgetVars.idents.large,
        marginLeft: desktopWidgetVars.idents.large,
        marginRight: desktopWidgetVars.idents.large
    }
}, {
    widgets: ["image"],
    selectors: [
        { pattern: {}, value: [] },
        { pattern: { scope: "root" }, value: ["root"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: "100%",
        height: "100%"
    }
}, {
    widgets: ["list", "grid"],
    selectors: [
        { pattern: {}, value: ["*"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: "100%",
        height: "100%"
    }
}, {
    widgets: ["list", "grid"],
    selectors: [
        { pattern: {}, value: ["*"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: "100%",
        height: "100%"
    }
}, {
    widgets: ["list", "grid"],
    selectors: [
        { pattern: {}, value: ["*"] }
    ]
});
registerDefaultStyle({
    "*": {
        paddingTop: desktopWidgetVars.idents.middle,
        paddingBottom: desktopWidgetVars.idents.middle,
        paddingRight: desktopWidgetVars.idents.toolbarLeftRightPaddings,
        paddingLeft: desktopWidgetVars.idents.toolbarLeftRightPaddings
    },
    "toolbar": {
        height: desktopWidgetVars.toolbarHeight
    },
    "global-toolbar": {
        height: desktopWidgetVars.globalToolbarHeight
    },
    "compact-toolbar": {
        height: compactWidgetVars.toolbarHeight
    }
}, {
    widgets: ["toolbar", "appbar", "toolbarWithNavigation"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { theme: "desktop" }, value: ["*", "toolbar"] },
        { pattern: { theme: "compact" }, value: ["*", "compact-toolbar"] },
        { pattern: { theme: "desktop", widget: "toolbarWithNavigation", scope: "root" }, value: ["*", "global-toolbar"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: "100%"
    }
}, {
    widgets: ["command.string", "command.integer", "command.list"],
    selectors: [
        { pattern: {}, value: ["*"] }
    ]
});
