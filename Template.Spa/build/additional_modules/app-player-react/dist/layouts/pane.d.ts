import * as React from "react";
import { DisplayedViewInfo } from "../views/displayed-views-info-producer";
export declare type PaneViewModel = {
    name: string;
    visible: boolean;
    viewToolbar?: {
        items: any[];
    };
    displayedViewInfo: DisplayedViewInfo;
};
declare type PaneProps = {
    paneViewModel: PaneViewModel;
    style?: {
        [key: string]: any;
    };
    classes?: string;
};
export declare class Pane extends React.Component<PaneProps, {}> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=pane.d.ts.map