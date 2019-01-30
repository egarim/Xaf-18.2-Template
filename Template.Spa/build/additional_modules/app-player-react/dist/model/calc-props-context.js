/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { createCalcPropsProvider } from "./calc-props/calc-props-provider";
export var CalcPropsContext = React.createContext(undefined);
export var CalcPropsProvider = function (props) {
    var _a = createCalcPropsProvider(props.config), patchedConfig = _a.patchedConfig, rest = tslib_1.__rest(_a, ["patchedConfig"]);
    return (React.createElement(CalcPropsContext.Provider, { value: rest }, props.children(patchedConfig)));
};
