import * as React from "react";
import { IAppConfig } from "./app-config";
declare type Props = {
    appConfigSource: any;
    children: (appConfig: IAppConfig) => React.ReactChild;
};
declare type State = {
    appConfig?: IAppConfig;
};
export declare class AppConfigAndThemeLoader extends React.Component<Props, State> {
    constructor(props: Props);
    render(): string | number | JSX.Element;
    private load;
}
export {};
//# sourceMappingURL=app-config-and-theme-loader.d.ts.map