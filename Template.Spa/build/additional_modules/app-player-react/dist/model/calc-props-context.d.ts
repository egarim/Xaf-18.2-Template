import * as React from "react";
import { createCalcPropsProvider } from "./calc-props/calc-props-provider";
import { CalcProp } from "./calc-props/calc-prop";
declare type CalcPropsFullType = ReturnType<typeof createCalcPropsProvider>;
export declare type CalcPropsProviderType = Pick<CalcPropsFullType, Exclude<keyof CalcPropsFullType, "patchedConfig">>;
export declare type CalcPropSubscription = ReturnType<CalcProp["subscribe"]>;
export declare const CalcPropsContext: React.Context<Pick<{
    patchedConfig: {};
    getDescriptor: (propId: string) => import("./calc-props/calc-props-provider").CalcPropDescriptor;
    getCalcPropIds: (node: any) => string[];
    findCalcProp: (node: any, propName: string, runContext: import("../common/runtime").IRunContext) => {
        propName: string;
        getValue: () => any;
        setValue: (value: any) => void;
        subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-props/calc-prop").Subscription;
    };
    getSubtreeCalcProps: (node: any, runContext: import("../common/runtime").IRunContext) => {
        [propId: string]: {
            propName: string;
            getValue: () => any;
            setValue: (value: any) => void;
            subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-props/calc-prop").Subscription;
        };
    };
    hasSubtreeCalcProps: (node: any) => boolean;
}, "getDescriptor" | "getCalcPropIds" | "findCalcProp" | "getSubtreeCalcProps" | "hasSubtreeCalcProps">>;
export declare const CalcPropsProvider: (props: {
    config: any;
    children: any;
}) => JSX.Element;
export {};
//# sourceMappingURL=calc-props-context.d.ts.map