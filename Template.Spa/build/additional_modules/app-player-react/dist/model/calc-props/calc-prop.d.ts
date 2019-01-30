import { CalcPropDescriptor } from "./calc-props-provider";
import { IRunContext } from "../../common/runtime";
export declare type CalcProp = ReturnType<ReturnType<typeof createCalcProp>>;
export declare type Subscription = {
    dispose(): any;
};
export declare function createCalcProp(getDescriptor: (propId: any) => CalcPropDescriptor): (propId: string, nodeId: number, runContext: IRunContext) => {
    propName: string;
    getValue: () => any;
    setValue: (value: any) => void;
    subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => Subscription;
};
//# sourceMappingURL=calc-prop.d.ts.map