import * as React from "react";
import "./info/components-registration";
import "./info/commands-registration";
import "../widgets/info/default-styles/widget-default-style-registration";
export declare const ComponentRenderer: (props: any) => JSX.Element;
export declare const FlexComponentRenderer: (options: {
    widgetProps: any;
    orientation?: import("./flex-helper").Orientation;
}) => JSX.Element;
export declare const FlexCalcPropsWidgetRenderer: (options: {
    widgetProps: any;
    orientation?: import("./flex-helper").Orientation;
}) => JSX.Element;
export declare const CalcPropsWidgetRenderer: {
    new (props: Readonly<any>): {
        render(): JSX.Element;
        renderCalcProps({ provider, runContext }: {
            provider: Pick<{
                patchedConfig: {};
                getDescriptor: (propId: string) => import("../model/calc-props/calc-props-provider").CalcPropDescriptor;
                getCalcPropIds: (node: any) => string[];
                findCalcProp: (node: any, propName: string, runContext: import("../common/runtime").IRunContext) => {
                    propName: string;
                    getValue: () => any;
                    setValue: (value: any) => void;
                    subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("../model/calc-props/calc-prop").Subscription;
                };
                getSubtreeCalcProps: (node: any, runContext: import("../common/runtime").IRunContext) => {
                    [propId: string]: {
                        propName: string;
                        getValue: () => any;
                        setValue: (value: any) => void;
                        subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("../model/calc-props/calc-prop").Subscription;
                    };
                };
                hasSubtreeCalcProps: (node: any) => boolean;
            }, "getDescriptor" | "getCalcPropIds" | "findCalcProp" | "getSubtreeCalcProps" | "hasSubtreeCalcProps">;
            runContext: import("../common/runtime").IRunContext;
        }): JSX.Element;
        setState<K extends "prevCalcProps" | "componentProps" | "subscriptions">(state: import("../model/with-calc-props").WithCalcPropsState | ((prevState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, props: Readonly<any>) => import("../model/with-calc-props").WithCalcPropsState | Pick<import("../model/with-calc-props").WithCalcPropsState, K>) | Pick<import("../model/with-calc-props").WithCalcPropsState, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<import("../model/with-calc-props").WithCalcPropsState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<import("../model/with-calc-props").WithCalcPropsState>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, nextContext: any): void;
    };
    new (props: any, context?: any): {
        render(): JSX.Element;
        renderCalcProps({ provider, runContext }: {
            provider: Pick<{
                patchedConfig: {};
                getDescriptor: (propId: string) => import("../model/calc-props/calc-props-provider").CalcPropDescriptor;
                getCalcPropIds: (node: any) => string[];
                findCalcProp: (node: any, propName: string, runContext: import("../common/runtime").IRunContext) => {
                    propName: string;
                    getValue: () => any;
                    setValue: (value: any) => void;
                    subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("../model/calc-props/calc-prop").Subscription;
                };
                getSubtreeCalcProps: (node: any, runContext: import("../common/runtime").IRunContext) => {
                    [propId: string]: {
                        propName: string;
                        getValue: () => any;
                        setValue: (value: any) => void;
                        subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("../model/calc-props/calc-prop").Subscription;
                    };
                };
                hasSubtreeCalcProps: (node: any) => boolean;
            }, "getDescriptor" | "getCalcPropIds" | "findCalcProp" | "getSubtreeCalcProps" | "hasSubtreeCalcProps">;
            runContext: import("../common/runtime").IRunContext;
        }): JSX.Element;
        setState<K extends "prevCalcProps" | "componentProps" | "subscriptions">(state: import("../model/with-calc-props").WithCalcPropsState | ((prevState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, props: Readonly<any>) => import("../model/with-calc-props").WithCalcPropsState | Pick<import("../model/with-calc-props").WithCalcPropsState, K>) | Pick<import("../model/with-calc-props").WithCalcPropsState, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<import("../model/with-calc-props").WithCalcPropsState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<import("../model/with-calc-props").WithCalcPropsState>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<import("../model/with-calc-props").WithCalcPropsState>, nextContext: any): void;
    };
};
//# sourceMappingURL=component-renderer.d.ts.map