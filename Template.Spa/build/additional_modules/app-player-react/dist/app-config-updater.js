/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import * as traverse from "traverse";
var AppConfigUpdater = /** @class */ (function (_super) {
    tslib_1.__extends(AppConfigUpdater, _super);
    function AppConfigUpdater(props) {
        var _this = _super.call(this, props) || this;
        _this.api = {
            updateAppConfig: function (appConfigDiff) {
                var appConfig = _this.state.appConfig, resultAppConfig = getUpdatedConfig(appConfig, appConfigDiff), entireConfigDiffs = getEntireConfigDiffs(_this.state.entireConfigDiffs, appConfigDiff);
                _this.setState(function (prevState) {
                    return tslib_1.__assign({}, prevState, { entireConfigDiffs: entireConfigDiffs, appConfig: resultAppConfig });
                });
            },
            getEntireConfigDiffs: function () { return _this.state.entireConfigDiffs; }
        };
        _this.state = {
            appConfig: props.appConfig,
            entireConfigDiffs: {}
        };
        return _this;
    }
    AppConfigUpdater.prototype.render = function () {
        var appConfig = this.state.appConfig;
        return this.props.children({ appConfig: appConfig, api: this.api });
    };
    return AppConfigUpdater;
}(React.Component));
export { AppConfigUpdater };
function findInitialValueKey(current, originalParent, diffValue) {
    if (Array.isArray(originalParent)) {
        if (!diffValue.id) {
            console.warn("diffValue doesn't have 'id' property. Difference not applayed, ", diffValue);
            // TODO: Vitik try find by possibleKeyPropNames = ["name"];
            return -1;
        }
        else {
            var id_1 = diffValue.id, index = originalParent.findIndex(function (item) { return item["id"] === id_1; });
            return index;
        }
    }
    else {
        return current.key;
    }
}
export function mergeDiffs(initial, diffs, pushNonExsitedValue) {
    var result = tslib_1.__assign({}, initial), diffsToResult = new Map();
    diffsToResult.set(diffs, result);
    traverse(diffs).forEach(function (diffValue) {
        if (this.isRoot) {
            return;
        }
        if (this.notLeaf) {
            var diffsParent = this.parent.node, resultParent = diffsToResult.get(diffsParent), key = findInitialValueKey(this, resultParent, diffValue);
            if (key === null) {
                return;
            }
            var originalValue = resultParent[key];
            var resultValue = void 0;
            if (originalValue) {
                resultValue = Array.isArray(originalValue) ? originalValue.slice() : tslib_1.__assign({}, originalValue);
            }
            else {
                resultValue = diffValue;
            }
            if (key !== -1) {
                resultParent[key] = resultValue;
            }
            else {
                if (pushNonExsitedValue) {
                    resultParent.push(resultValue);
                }
            }
            diffsToResult.set(diffValue, resultValue);
        }
        else {
            var diffParent = this.parent.node, resultParent = diffsToResult.get(diffParent);
            resultParent[this.key] = diffValue;
        }
    });
    return result;
}
export function getUpdatedConfig(appConfig, appConfigDiff) {
    return mergeDiffs(appConfig, appConfigDiff, false);
}
export function getEntireConfigDiffs(enireConfig, configDiffs) {
    return mergeDiffs(enireConfig, configDiffs, true);
}
