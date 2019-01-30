/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
export var createDefaultStyleRegistration = function (storage, cache, aliases) {
    if (storage === void 0) { storage = defaultStyleStorage; }
    if (cache === void 0) { cache = defaultStyleGetterCache; }
    if (aliases === void 0) { aliases = widgetAliases; }
    return ({
        registerDefaultStyle: function (styleDeclarations, options) {
            var widgets = options.widgets, selectors = options.selectors;
            widgets.forEach(function (widget) {
                storage[widget] = selectors
                    .map(function (_a) {
                    var pattern = _a.pattern, value = _a.value;
                    return ({
                        pattern: pattern,
                        value: value.reduce(function (prev, curr) {
                            return tslib_1.__assign({}, prev, styleDeclarations[curr]);
                        }, {})
                    });
                });
            });
        },
        registerAlias: function (alias, widget) {
            aliases[alias] = widget;
        },
        getDefaultStyle: function (selectorPattern) {
            selectorPattern = tslib_1.__assign({}, selectorPattern, { widget: aliases[selectorPattern.widget] || selectorPattern.widget });
            var cachedValue = getFromCache(cache, selectorPattern);
            if (!cachedValue) {
                var widget = selectorPattern.widget, selectors = storage[widget];
                if (aliases[widget]) {
                    console.error("Alias \"" + aliases[widget] + "\" should be used instead of \"" + widget + "\".");
                }
                if (!selectors) {
                    return {};
                }
                var matchingSelectors = findMatchingSelectors(selectors, selectorPattern);
                if (!matchingSelectors.length) {
                    console.error("No selectors found to match this pattern: " + JSON.stringify(selectorPattern) + ".");
                    return {};
                }
                if (matchingSelectors.length > 1) {
                    console.error("Unable to process pattern: " + JSON.stringify(selectorPattern) + ". Selector conflict: " + JSON.stringify(matchingSelectors) + ".");
                    return {};
                }
                cachedValue = matchingSelectors[0].value;
                setToCache(cache, selectorPattern, cachedValue);
            }
            return cachedValue;
        }
    });
};
export var findMatchingSelectors = function (selectors, selectorPattern) {
    var groupedByLength = [[]];
    selectors.forEach(function (s) {
        if (testSelector(selectorPattern, s.pattern)) {
            var selectorLength = Object.keys(s.pattern).length;
            groupedByLength[selectorLength] = groupedByLength[selectorLength] ? groupedByLength[selectorLength].concat([s]) : [s];
        }
    });
    return groupedByLength[groupedByLength.length - 1];
};
function testSelector(pattern, toMatch) {
    return Object.keys(toMatch).every(function (propName) { return toMatch[propName] === pattern[propName]; });
}
function getFromCache(cache, selectorPattern) {
    return cache[JSON.stringify(selectorPattern)];
}
function setToCache(cache, selectorPattern, value) {
    cache[JSON.stringify(selectorPattern)] = value;
}
var defaultStyleStorage = {}, defaultStyleGetterCache = {}, widgetAliases = {};
