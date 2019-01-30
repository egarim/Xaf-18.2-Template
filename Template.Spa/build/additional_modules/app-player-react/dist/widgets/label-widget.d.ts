import * as React from "react";
import { ComponentWithStyleProps } from "./with-style";
import { ComponentBaseProps } from "../common/base-component";
export declare type LabelProps = ComponentBaseProps & ComponentWithStyleProps & {
    text?: string;
    onClick?: (e: any) => void;
};
export declare class ReactLabel extends React.Component<LabelProps> {
    static defaultProps: Partial<LabelProps>;
    render(): JSX.Element;
}
//# sourceMappingURL=label-widget.d.ts.map