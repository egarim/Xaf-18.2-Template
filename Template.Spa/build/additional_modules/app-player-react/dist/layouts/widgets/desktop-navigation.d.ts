import * as React from "react";
import { ComponentWithStyleProps } from "../../widgets/with-style";
import { AppStateHolder } from "../../app-state-provider";
import { IRunContext } from "../../common/runtime";
export declare type DesktopNavigation = {
    pane: string;
};
declare type Props = DesktopNavigation & ComponentWithStyleProps & {
    runContext?: IRunContext;
    appStateHolder?: AppStateHolder;
};
export default class ReactDesktopNavigation extends React.PureComponent<Props, never> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=desktop-navigation.d.ts.map