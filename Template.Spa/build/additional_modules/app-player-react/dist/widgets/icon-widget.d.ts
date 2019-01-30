import * as React from "react";
import { ComponentWithStyleProps } from "./with-style";
import { ComponentBaseProps } from "../common/base-component";
export declare type IconProps = {
    src?: string;
} & ComponentBaseProps & ComponentWithStyleProps;
export declare class ReactIcon extends React.Component<IconProps, {}> {
    renderContent: (classes: {
        image: any;
        main: any;
    }) => JSX.Element;
    render(): JSX.Element;
}
//# sourceMappingURL=icon-widget.d.ts.map