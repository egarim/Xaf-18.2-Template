import { History } from "history";
import * as React from "react";
import { IAppConfig } from "../app-config";
import { IRunContext } from "../common/runtime";
import { ModelServices } from "../model/model";
import { IServices } from "../services";
import { RoutingPart } from "./routing-parts";
declare type RouterProps = {
    appConfig: IAppConfig;
    runContext: IRunContext;
    history?: History;
    children: (routingParts: RoutingPart[]) => React.ReactNode;
    parametersProcessor: IServices["parametersProcessor"];
    stores: any;
} & ModelServices;
interface IRouterState {
    history: History;
    runContext: IRunContext;
}
export declare class AppPlayerRouter extends React.PureComponent<RouterProps, IRouterState> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=router.d.ts.map