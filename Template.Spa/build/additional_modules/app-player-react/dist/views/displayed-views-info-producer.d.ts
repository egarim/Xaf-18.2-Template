import * as React from "react";
import { AppState, AppStateUpdater } from "../app-state-provider";
import { IRunContext } from "../common/runtime";
import { ModelServices } from "../model/model";
import { ServiceParametersProcessor } from "../navigation/router-api";
import { RoutingPart } from "../navigation/routing-parts";
import { ServiceStores } from "../services";
export declare type DisplayedViewInfo = {
    routingPart: RoutingPart;
    isReady?: boolean;
    localRunContext: IRunContext;
};
declare module "../common/runtime" {
    interface IGlobalFunctions {
        refreshParameter(paramName: string): any;
    }
}
declare type AppStateProps = Pick<AppState, "cachedViewsInfo" | "displayedViewsInfo"> & AppStateUpdater;
declare type Props = {
    routingParts: RoutingPart[];
    runContext: IRunContext;
    children: any;
} & ServiceParametersProcessor & ModelServices & AppStateProps & ServiceStores;
declare type State = {
    parametersUpdatesQuery: UpdatesQuery;
    resultViewsInfo: DisplayedViewInfo[];
    viewsInfoToUpdateCount: number;
};
declare type UpdatesQuery = {
    [key: string]: Promise<string>;
};
export declare class DisplayedViewsInfoProducer extends React.Component<Props, State> {
    constructor(p: any);
    static getViewInfoToUpdate(routingPart: RoutingPart, updatesQuery: UpdatesQuery, appState: AppStateProps): DisplayedViewInfo;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    static getUpdatedDisplayedViewsInfo(displayedViewsInfo: DisplayedViewInfo[], viewInfo: DisplayedViewInfo): DisplayedViewInfo[];
    private syncWithRoutingParts;
    private isViewConfigChanged;
    private updateAppStateDisplayedViewsInfo;
    createRefreshParameterFn(viewInfo: DisplayedViewInfo): (paramName: any) => Promise<void>;
    private parametersUpdateComplete;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): any;
}
export {};
//# sourceMappingURL=displayed-views-info-producer.d.ts.map