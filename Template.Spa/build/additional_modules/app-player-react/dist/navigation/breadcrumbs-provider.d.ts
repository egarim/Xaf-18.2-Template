import * as React from "react";
import { DisplayedViewInfo } from "../views/displayed-views-info-producer";
import { CalcPropsProviderType } from "../model/calc-props-context";
import { Subscription } from "../model/calc-props/calc-prop";
declare type Props = {
    displayedViewsInfo: DisplayedViewInfo[];
    pane: string;
    availablePanes: string[];
    calcPropsProvider: CalcPropsProviderType;
    children: (breadcrumbs: Breadcrumbs) => any;
};
declare type State = {
    createTitleInfos: BreadcrumbsProvider["createTitleInfos"];
    disposeTitleInfos: BreadcrumbsProvider["disposeTitleInfos"];
    titleInfos: TitleInfo[];
    displayedViewsInfo?: DisplayedViewInfo[];
};
declare type TitleInfo = {
    value: string;
    subscription?: Subscription;
};
export declare type Breadcrumbs = {
    title: string;
    path: string;
};
export declare class BreadcrumbsProvider extends React.Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromProps(props: Props, state: State): Partial<State>;
    private static getPaneDisplayedViewsInfo;
    private createTitleInfos;
    private disposeTitleInfos;
    render(): any;
    private buildBreadcrumbs;
}
export {};
//# sourceMappingURL=breadcrumbs-provider.d.ts.map