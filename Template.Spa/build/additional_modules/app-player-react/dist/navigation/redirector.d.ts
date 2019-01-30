import * as React from "react";
import { RoutingPart } from "./routing-parts";
import { IRunContext } from "../common/runtime";
declare type RedirectorProps = {
    runContext: IRunContext;
    routingParts: RoutingPart[];
    canNavigateToDefaultView: boolean;
};
export declare class Redirector extends React.Component<RedirectorProps, any> {
    valid: boolean;
    constructor(props: any);
    shouldComponentUpdate(nextProps: RedirectorProps): boolean;
    render(): {};
    componentDidMount(): void;
    private validate;
}
export {};
//# sourceMappingURL=redirector.d.ts.map