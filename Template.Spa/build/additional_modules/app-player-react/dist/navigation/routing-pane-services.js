/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
var cashedViews = null, cashedMapViews = {};
export function getViewById(views) {
    cashedMapViews = cashedViews === views ? cashedMapViews : views.reduce(function (acc, view) { acc[view.id] = view; return acc; }, {});
    cashedViews = views;
    return function (viewId) {
        return cashedMapViews[viewId];
    };
}
export function getPane(routingPart, availablePanes) {
    if (availablePanes.length === 0) {
        throw new Error("availablePanes shouldn't be an empty array");
    }
    var viewConfig = routingPart.config;
    return availablePanes.indexOf(viewConfig.pane) === -1 ? availablePanes[0] : viewConfig.pane;
}
