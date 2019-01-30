import * as React from "react";
import { DisplayedViewInfo } from "../../views/displayed-views-info-producer";
declare type MobileLayoutProps = {
    displayedViewsInfo: DisplayedViewInfo[];
};
export declare type ToggleNavigationMenu = (menuVisible: boolean) => void;
export declare const ToggleNavigationMenuContext: React.Context<ToggleNavigationMenu>;
export declare class MobileLayout extends React.PureComponent<MobileLayoutProps, never> {
    private drawer;
    render(): JSX.Element;
    toggleNavigationMenu: (menuVisible: boolean) => void;
}
export {};
//# sourceMappingURL=mobile-layout.d.ts.map