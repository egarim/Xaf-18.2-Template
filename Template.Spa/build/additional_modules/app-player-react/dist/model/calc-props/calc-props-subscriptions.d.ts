import { IRunContext } from "../../common/runtime";
export declare type SubscriptionInfo = {
    id: number;
    callback: any;
    onDisposedCallback?: () => void;
    runContext: IRunContext;
};
export declare class CalcPropsSubscriptions {
    subscriptionId: number;
    subscriptions: {
        [subscriptionId: number]: SubscriptionInfo;
    };
    subscriptionsByNodeId: {
        [nodeId: string]: {
            [subscriptionId: string]: number[];
        };
    };
    addSubscription(nodeId: number, propId: string, subscription: Partial<SubscriptionInfo>): number;
    removeSubscriptions(propId: string, nodeIds: number[]): void;
    removeSubscription(propId: string, nodeId: number, subscriptionId: number): {
        disposeComputed: boolean;
    };
    getSubscriptionIds(propId: string, nodeId: number): number[];
    onValueChanged(propId: string, nodeId: number, runContext: IRunContext, value: any): void;
}
//# sourceMappingURL=calc-props-subscriptions.d.ts.map