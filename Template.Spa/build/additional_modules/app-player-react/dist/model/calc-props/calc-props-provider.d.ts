import { IRunContext } from "../../common/runtime";
export declare type CalcPropDescriptor = {
    propId: string;
    propName: string;
    modelGetter: (runContext: any) => any;
    modelSetter: (runContext: any, value: any) => void;
    nodeIds: number[];
};
export declare function createCalcPropsProvider<T>(config: T): {
    patchedConfig: T;
    getDescriptor: (propId: string) => CalcPropDescriptor;
    getCalcPropIds: (node: any) => string[];
    findCalcProp: (node: any, propName: string, runContext: IRunContext) => {
        propName: string;
        getValue: () => any;
        setValue: (value: any) => void;
        subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-prop").Subscription;
    };
    getSubtreeCalcProps: (node: any, runContext: IRunContext) => {
        [propId: string]: {
            propName: string;
            getValue: () => any;
            setValue: (value: any) => void;
            subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-prop").Subscription;
        };
    };
    hasSubtreeCalcProps: (node: any) => boolean;
};
//# sourceMappingURL=calc-props-provider.d.ts.map