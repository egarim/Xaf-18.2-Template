import * as React from "react";
import { IAppConfig } from "./app-config";
declare type Props = {
    appConfig: IAppConfig;
    children: (params: {
        appConfig: IAppConfig;
        api: AppConfigUpdaterApi;
    }) => React.ReactChild;
};
declare type State = {
    appConfig: IAppConfig;
    entireConfigDiffs: {};
};
export declare type AppConfigUpdaterApi = AppConfigUpdater["api"];
export interface IGlobalFunctions extends AppConfigUpdaterApi {
}
export declare class AppConfigUpdater extends React.Component<Props, State> {
    api: {
        updateAppConfig: (appConfigDiff: any) => void;
        getEntireConfigDiffs: () => {};
    };
    constructor(props: Props);
    render(): React.ReactChild;
}
export declare function mergeDiffs(initial: any, diffs: any, pushNonExsitedValue: any): any;
export declare function getUpdatedConfig(appConfig: any, appConfigDiff: any): any;
export declare function getEntireConfigDiffs(enireConfig: any, configDiffs: any): any;
export {};
//# sourceMappingURL=app-config-updater.d.ts.map