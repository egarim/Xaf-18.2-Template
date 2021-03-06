/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { objectKey } from "../common";
import { withConfirmationMessage } from "./with-confirmation-message";
import { withSelectionDependentToolbar } from "./with-selection-dependent-toolbar";
import "app-player-react/dist/widgets/info/components-registration";
import { withSelectionOnItemHold } from "./with-selection-on-item-hold";
import { registerInheritWidget } from "app-player-react/dist/widgets/info/components-info";
import { registerAlias } from "app-player-react/dist/widgets/default-style-provider";
var rootDataServiceUrl = "./";
export function setRootDataServiceUrl(_rootDataServiceUrl) {
    rootDataServiceUrl = _rootDataServiceUrl;
}
function calcImageUrl(objectHolder, propertyName) {
    var obj = objectHolder;
    // TODO get objectKey from store
    if (obj && obj[objectKey]) {
        return [rootDataServiceUrl, "data", "streams", "MainDemo.Module.BusinessObjects.Contact", obj[objectKey], propertyName].join("/");
    }
    else {
        return null;
    }
}
registerInheritWidget({
    name: "xaf-image",
    inherit: "image",
    customizeWidget: function (Widget) { return function (props) {
        var ownedObject = props.ownedObject, propertyName = props.propertyName, rest = tslib_1.__rest(props, ["ownedObject", "propertyName"]), src = calcImageUrl(ownedObject, propertyName);
        return React.createElement(Widget, tslib_1.__assign({}, tslib_1.__assign({}, rest, { src: src })));
    }; }
});
registerAlias("xaf-image", "image");
registerInheritWidget({
    name: "xaf-fileImage",
    inherit: "fileImage",
    customizeWidget: function (Widget) { return function (props) {
        var ownedObject = props.ownedObject, propertyName = props.propertyName, rest = tslib_1.__rest(props, ["ownedObject", "propertyName"]), urlSrc = calcImageUrl(ownedObject, propertyName);
        return React.createElement(Widget, tslib_1.__assign({}, tslib_1.__assign({}, rest, { urlSrc: urlSrc })));
    }; }
});
registerAlias("xaf-fileImage", "fileImage");
registerInheritWidget({
    name: "xaf-toolbar",
    inherit: "toolbar",
    customizeWidget: [
        withSelectionDependentToolbar,
        withConfirmationMessage
    ]
});
registerAlias("xaf-toolbar", "toolbar");
registerInheritWidget({
    name: "xaf-appbar",
    inherit: "appbar",
    customizeWidget: [
        withSelectionDependentToolbar,
        withConfirmationMessage
    ]
});
registerAlias("xaf-appbar", "appbar");
registerInheritWidget({
    name: "xaf-list",
    inherit: "list",
    customizeWidget: withSelectionOnItemHold
});
registerAlias("xaf-list", "list");
