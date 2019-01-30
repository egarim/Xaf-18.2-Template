import * as React from "react";
import { DisplayedViewInfo } from "../../views/displayed-views-info-producer";
import { PaneViewModel } from "../pane";
import { Command } from "../../widgets/info/commands-info";
declare type MobileLayoutViewModelResult = {
    rendered: boolean;
    mainPane: PaneViewModel;
};
declare type Props = {
    globalCommands: Command[];
    children: (layoutViewModel: MobileLayoutViewModelResult) => React.ReactElement<any>;
};
export declare class MobileLayoutViewModel extends React.Component<Props, never> {
    render(): JSX.Element;
    static createLayoutViewModel(displayedViewsInfo: DisplayedViewInfo[], globalCommands: Command[]): MobileLayoutViewModelResult;
    static getTopPane(displayedViewsInfo: DisplayedViewInfo[]): DisplayedViewInfo;
}
export {};
//# sourceMappingURL=mobile-layout-view-model.d.ts.map