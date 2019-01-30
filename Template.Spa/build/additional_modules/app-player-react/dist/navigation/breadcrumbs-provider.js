/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { getPane } from "./routing-pane-services";
var BreadcrumbsProvider = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbsProvider, _super);
    function BreadcrumbsProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.createTitleInfos = function (displayedViewsInfo, provider) {
            return displayedViewsInfo
                .map(function (info, index) {
                var localRunContext = info.localRunContext, config = info.routingPart.config, calcTitle = provider.findCalcProp(config, "title", localRunContext);
                if (calcTitle) {
                    var subscription = calcTitle.subscribe(function (newValue) {
                        var titleInfos = _this.state.titleInfos.slice();
                        titleInfos[index] = tslib_1.__assign({}, titleInfos[index], { value: newValue });
                        _this.setState({ titleInfos: titleInfos });
                    });
                    return { value: calcTitle.getValue(), subscription: subscription };
                }
                else {
                    return { value: config.title };
                }
            });
        };
        _this.disposeTitleInfos = function (titles) {
            titles.forEach(function (title) { return title.subscription && title.subscription.dispose(); });
        };
        _this.state = {
            createTitleInfos: _this.createTitleInfos,
            disposeTitleInfos: _this.disposeTitleInfos,
            titleInfos: []
        };
        return _this;
    }
    BreadcrumbsProvider.getDerivedStateFromProps = function (props, state) {
        if (props.displayedViewsInfo !== state.displayedViewsInfo) {
            var displayedViewsInfo = props.displayedViewsInfo, calcPropsProvider = props.calcPropsProvider, availablePanes = props.availablePanes, pane = props.pane, titleInfos = state.titleInfos, createTitleInfos = state.createTitleInfos, disposeTitleInfos = state.disposeTitleInfos, paneDisplayedViewsInfo = BreadcrumbsProvider.getPaneDisplayedViewsInfo(displayedViewsInfo, availablePanes, pane);
            disposeTitleInfos(titleInfos);
            return {
                titleInfos: createTitleInfos(paneDisplayedViewsInfo, calcPropsProvider),
                displayedViewsInfo: displayedViewsInfo
            };
        }
        return null;
    };
    BreadcrumbsProvider.getPaneDisplayedViewsInfo = function (displayedViewsInfo, availablePanes, pane) {
        return displayedViewsInfo.filter(function (info) { return getPane(info.routingPart, availablePanes) === pane; });
    };
    BreadcrumbsProvider.prototype.render = function () {
        return this.props.children(this.buildBreadcrumbs(this.state.titleInfos));
    };
    BreadcrumbsProvider.prototype.buildBreadcrumbs = function (titles) {
        var values = titles.map(function (_a) {
            var value = _a.value;
            return value;
        }), title = values.pop(), path = values.length ? values.join(" / ") : null;
        return { title: title, path: path };
    };
    return BreadcrumbsProvider;
}(React.Component));
export { BreadcrumbsProvider };
