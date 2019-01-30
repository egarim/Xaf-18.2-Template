/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import { registerDefaultStyle } from "../../widgets/default-style-provider";
import { desktopWidgetVars, compactWidgetVars } from "../../widgets/info/default-styles/widget-default-style-registration";
var layoutVars = {
    rootNavbarItemHeight: "50px",
    menuButtonWidth: "70px",
    navigationMenuContainerWidth: "270px",
    navigationHeaderTitleFontWeight: 500,
    navigationHeaderTitleFontSize: 22,
    navbarItemFontSize: 14,
    iconMargin: "8px 16px 8px 0px",
    navbarPaddingTop: "0px",
    navbarPaddingBottom: "0px",
    navbarPaddingLeft: "20px",
    navbarPaddingRight: "20px"
}, collapsedLayoutVars = {
    navigationMenuContainerWidth: "70px",
    textIconMargin: "0 auto"
}, compactLayoutVars = {
    rootNavbarItemHeight: "28px",
    navbarItemFontSize: 12,
    navigationHeaderTitleFontSize: 20,
    navigationMenuContainerWidth: "200px",
    navbarPaddingLeft: "10px",
    menuButtonWidth: "46px"
}, mobileLayoutVars = {
    menuButtonWidth: "70px"
};
registerDefaultStyle({
    "*": {
        paddingTop: layoutVars.navbarPaddingTop,
        paddingBottom: layoutVars.navbarPaddingBottom,
        paddingRight: layoutVars.navbarPaddingRight,
        paddingLeft: layoutVars.navbarPaddingLeft
    },
    "compact": {
        paddingTop: layoutVars.navbarPaddingTop,
        paddingBottom: layoutVars.navbarPaddingBottom,
        paddingRight: layoutVars.navbarPaddingRight,
        paddingLeft: compactLayoutVars.navbarPaddingLeft
    }
}, {
    widgets: ["navbar"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { theme: "compact" }, value: ["compact"] }
    ]
});
registerDefaultStyle({
    "*": {
        height: layoutVars.rootNavbarItemHeight
    },
    "collapsed": {
        justifyContent: "center"
    },
    "compact": {
        height: compactLayoutVars.rootNavbarItemHeight
    }
}, {
    widgets: ["rootNavbarItem"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { scope: "navigation-collapsed" }, value: ["*", "collapsed"] },
        { pattern: { theme: "compact", scope: "navigation" }, value: ["compact"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: layoutVars.menuButtonWidth
    },
    "collapsed": {
        width: layoutVars.menuButtonWidth
    },
    "mobile": {
        width: mobileLayoutVars.menuButtonWidth
    },
    "compact": {
        width: compactLayoutVars.menuButtonWidth
    }
}, {
    widgets: ["menuButton"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { scope: "navigation-collapsed" }, value: ["collapsed"] },
        { pattern: { theme: "mobile", scope: "navigation" }, value: ["mobile"] },
        { pattern: { theme: "compact", scope: "navigation" }, value: ["compact"] }
    ]
});
registerDefaultStyle({
    "*": {
        width: layoutVars.navigationMenuContainerWidth
    },
    "compact": {
        width: compactLayoutVars.navigationMenuContainerWidth
    },
    "collapsed": {
        width: collapsedLayoutVars.navigationMenuContainerWidth
    },
    "compact-collapsed": {
        display: "none"
    }
}, {
    widgets: ["navigationMenuContainer"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { scope: "navigation-collapsed" }, value: ["collapsed"] },
        { pattern: { theme: "compact" }, value: ["compact"] },
        { pattern: { theme: "compact", scope: "navigation-collapsed" }, value: ["compact-collapsed"] }
    ]
});
registerDefaultStyle({
    "*": {
        fontWeight: layoutVars.navigationHeaderTitleFontWeight,
        fontSize: layoutVars.navigationHeaderTitleFontSize
    },
    "compact": {
        fontWeight: layoutVars.navigationHeaderTitleFontWeight,
        fontSize: compactLayoutVars.navigationHeaderTitleFontSize
    }
}, {
    widgets: ["navigationHeaderTitle"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { theme: "compact" }, value: ["compact"] }
    ]
});
registerDefaultStyle({
    "*": {
        margin: layoutVars.iconMargin
    },
    "compact": {
        display: "none"
    }
}, {
    widgets: ["navigationItemIcon"],
    selectors: [
        { pattern: {}, value: [] },
        { pattern: { scope: "navigation" }, value: ["*"] },
        { pattern: { theme: "compact" }, value: ["compact"] },
        { pattern: { theme: "compact", scope: "navigation" }, value: ["compact"] }
    ]
});
registerDefaultStyle({
    "*": {
        margin: collapsedLayoutVars.textIconMargin
    },
    "compact": {
        display: "none"
    }
}, {
    widgets: ["navigationItemTextIcon"],
    selectors: [
        { pattern: {}, value: [] },
        { pattern: { scope: "navigation-collapsed" }, value: ["*"] },
        { pattern: { theme: "compact" }, value: ["compact"] },
        { pattern: { theme: "compact", scope: "navigation-collapsed" }, value: ["compact"] }
    ]
});
registerDefaultStyle({
    "*": {
        fontSize: layoutVars.navbarItemFontSize
    },
    "compact": {
        fontSize: compactLayoutVars.navbarItemFontSize
    },
    "collapsed": {
        display: "none"
    }
}, {
    widgets: ["navbarItem"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { theme: "compact" }, value: ["compact"] },
        { pattern: { scope: "navigation-collapsed" }, value: ["collapsed"] },
        { pattern: { theme: "compact", scope: "navigation-collapsed" }, value: [] }
    ]
});
registerDefaultStyle({
    "*": {
        height: desktopWidgetVars.globalToolbarHeight
    },
    "mobile": {
        height: desktopWidgetVars.toolbarHeight
    },
    "compact": {
        height: compactWidgetVars.toolbarHeight
    }
}, {
    widgets: ["navigationMenuToolbar"],
    selectors: [
        { pattern: {}, value: ["*"] },
        { pattern: { theme: "mobile" }, value: ["mobile"] },
        { pattern: { theme: "compact" }, value: ["compact"] }
    ]
});
