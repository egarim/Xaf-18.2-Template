import * as React from "react";
import { IRunContext } from "../common/runtime";
import { RoutingPart } from "../navigation/routing-parts";
import { DisplayedViewInfo } from "../views/displayed-views-info-producer";
import { Command } from "../widgets/info/commands-info";
import { PaneViewModel } from "./pane";
export declare type RoutingPartWithPane = DisplayedViewInfo & {
    pane: string;
};
export declare type IDesktopLayoutViewModel = {
    rendered: boolean;
    globalToolbar: {
        items: any[];
    };
    mainPane: PaneViewModel;
    previewPane: PaneViewModel;
    popupPane: PaneViewModel;
    simplePopupPane: PaneViewModel;
};
declare type Props = {
    globalCommands: Command[];
    children: (desktopViewModel: IDesktopLayoutViewModel) => React.ReactChild;
    displayedViewsInfo: DisplayedViewInfo[];
    runContext: IRunContext;
};
export declare class DesktopLayoutViewModel extends React.Component<Props, never> {
    render(): React.ReactChild;
    createDesktopLayoutViewModel(displayedViewsInfo: DisplayedViewInfo[], commands: any, runContext: IRunContext): {
        rendered: boolean;
        globalToolbar: {
            items: any;
        };
        mainPane: {
            visible: boolean;
            name: string;
            displayedViewInfo: DisplayedViewInfo;
        };
        previewPane: {
            visible: boolean;
            name: string;
            displayedViewInfo: DisplayedViewInfo;
        };
        simplePopupPane: {
            visible: boolean;
            name: string;
            displayedViewInfo: DisplayedViewInfo;
        };
        popupPane: {
            visible: boolean;
            name: string;
            displayedViewInfo: DisplayedViewInfo;
        };
    };
    getViewForPane(displayedViewsInfo: DisplayedViewInfo[], pane: string): DisplayedViewInfo;
    getPaneValue(routingPart: RoutingPart, indexInRoutingParts?: any): string;
    getTopPane(displayedViewsInfo: DisplayedViewInfo[], pane: string): {
        displayedViewInfo: DisplayedViewInfo;
        index: number;
    };
}
export {};
//# sourceMappingURL=desktop-layout-view-model.d.ts.map