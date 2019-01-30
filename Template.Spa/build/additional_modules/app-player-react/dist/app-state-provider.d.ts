import * as React from "react";
import { DisplayedViewInfo } from "./views/displayed-views-info-producer";
export declare type AppStateUpdater = {
    updateAppState: (diffState: any) => void;
};
export declare type AppStateHolder = {
    appState: AppState;
};
export declare type AppState = {
    displayedViewsInfo: DisplayedViewInfo[];
    cachedViewsInfo: {
        [key: string]: DisplayedViewInfo;
    };
};
declare type Props = {
    defaultAppState?: AppState;
};
export declare class AppStateProvider extends React.Component<Props, AppStateHolder & AppStateUpdater> {
    static defaultProps: {
        defaultAppState: {
            displayedViewsInfo: any[];
            cachedViewsInfo: {};
        };
    };
    constructor(props: Props);
    render(): JSX.Element;
}
export declare const AppStateContext: React.Context<AppStateHolder & AppStateUpdater>;
export {};
//# sourceMappingURL=app-state-provider.d.ts.map