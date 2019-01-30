import "../../css/layouts/desktop-layout.css";
import * as React from "react";
import { IRunContext } from "../common/runtime";
import { DisplayedViewInfo } from "../views/displayed-views-info-producer";
import { IAppConfig } from "../app-config";
declare type DesktopLayoutProps = {
    runContext: IRunContext;
    displayedViewsInfo: DisplayedViewInfo[];
    compactNavigation: boolean;
};
export declare class DesktopLayout extends React.PureComponent<DesktopLayoutProps, {}> {
    navigationItemsSelector: import("reselect").OutputSelector<{
        appConfig: IAppConfig;
        runContext: IRunContext;
    }, any, (res1: import("../app-config").NavigationItem[], res2: IRunContext) => any>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=desktop-layout.d.ts.map