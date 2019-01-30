import * as React from "react";
import { ComponentWithStyleProps } from "./with-style";
import { ComponentBaseProps } from "../common/base-component";
declare type LinkProps = ComponentBaseProps & ComponentWithStyleProps & {
    text?: string;
    link?: string;
};
export declare class ReactLink extends React.Component<LinkProps, {}> {
    static defaultProps: {
        link: string;
        text: string;
    };
    render(): JSX.Element;
    static defaultClickHandler(event: Event): void;
}
export {};
//# sourceMappingURL=link-widget.d.ts.map