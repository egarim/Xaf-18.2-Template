import * as React from "react";
import { IAppConfig } from "./app-config";
import { IRunContext, IAuthApi } from "./common/runtime";
import { IModelStorage } from "./model/model-storage";
import { IServices } from "./services";
import { AppConfigUpdaterApi } from "./app-config-updater";
declare type Props = {
    appConfig: IAppConfig;
    appConfigUpdaterApi: AppConfigUpdaterApi;
    onLoaded?: Function;
    children: ({ authenticated, services }: {
        authenticated: any;
        services: any;
    }) => React.ReactChild;
};
declare type State = {
    loadingCount: number;
    services?: IServices;
    runContext?: IRunContext;
};
export declare class ServicesCreator extends React.Component<Props, State> {
    constructor(props: Props);
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
    private renderChildren;
    createServices(appConfig: IAppConfig): Promise<{
        services: IServices;
        runContext: IRunContext;
    }>;
    createAuthApi(modelStorage: IModelStorage): IAuthApi;
    busy: () => void;
    available: () => void;
}
export {};
//# sourceMappingURL=services-creator.d.ts.map