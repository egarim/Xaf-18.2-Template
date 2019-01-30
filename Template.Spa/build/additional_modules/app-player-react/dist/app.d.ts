import "../css/app.css";
import * as React from "react";
import { IAppConfig } from "./app-config";
import { DisplayedViewInfo } from "./views/displayed-views-info-producer";
declare type AppProps = {
    appConfig?: IAppConfig;
    appConfigSource?: (device?: string) => IAppConfig;
    cachedViewsInfo: {
        [key: string]: DisplayedViewInfo;
    };
    onLoaded?: Function;
};
export declare class App extends React.Component<AppProps> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=app.d.ts.map