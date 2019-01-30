import { IView } from "../app-config";
import { RoutingPart } from "./routing-parts";
export declare function getViewById(views: {
    id: string;
}[]): (viewId: string) => IView;
export declare function getPane(routingPart: RoutingPart, availablePanes: string[]): string;
//# sourceMappingURL=routing-pane-services.d.ts.map