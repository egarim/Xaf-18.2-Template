import * as React from "react";
import { CalcPropsProviderType, CalcPropSubscription } from "./calc-props-context";
import { IRunContext } from "../common/runtime";
export declare type WithCalcPropsProps = {
    calcProps: any;
    children: (widgetProps: any) => React.ReactNode;
    calcPropsProvider?: CalcPropsProviderType;
    runContext?: IRunContext;
};
export declare type WithCalcPropsState = {
    prevCalcProps: any;
    componentProps: any;
    subscriptions: {
        [key: string]: CalcPropSubscription;
    };
};
export declare function withCalcProps<T extends {}>(Widget: React.ComponentType<T>): {
    new (props: Readonly<WithCalcPropsProps & T>): {
        render(): JSX.Element;
        renderCalcProps({ provider, runContext }: {
            provider: Pick<{
                patchedConfig: {};
                getDescriptor: (propId: string) => import("./calc-props/calc-props-provider").CalcPropDescriptor;
                getCalcPropIds: (node: any) => string[];
                findCalcProp: (node: any, propName: string, runContext: IRunContext) => {
                    propName: string;
                    getValue: () => any;
                    setValue: (value: any) => void;
                    subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-props/calc-prop").Subscription;
                };
                getSubtreeCalcProps: (node: any, runContext: IRunContext) => {
                    [propId: string]: {
                        propName: string;
                        getValue: () => any;
                        setValue: (value: any) => void;
                        subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-props/calc-prop").Subscription;
                    };
                };
                hasSubtreeCalcProps: (node: any) => boolean;
            }, "getDescriptor" | "getCalcPropIds" | "findCalcProp" | "getSubtreeCalcProps" | "hasSubtreeCalcProps">;
            runContext: IRunContext;
        }): JSX.Element;
        setState<K extends "prevCalcProps" | "componentProps" | "subscriptions">(state: WithCalcPropsState | ((prevState: Readonly<WithCalcPropsState>, props: Readonly<WithCalcPropsProps & T>) => WithCalcPropsState | Pick<WithCalcPropsState, K>) | Pick<WithCalcPropsState, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<WithCalcPropsProps & T>;
        state: Readonly<WithCalcPropsState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<WithCalcPropsProps & T>, nextState: Readonly<WithCalcPropsState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithCalcPropsProps & T>, prevState: Readonly<WithCalcPropsState>): any;
        componentDidUpdate?(prevProps: Readonly<WithCalcPropsProps & T>, prevState: Readonly<WithCalcPropsState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithCalcPropsProps & T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithCalcPropsProps & T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithCalcPropsProps & T>, nextState: Readonly<WithCalcPropsState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithCalcPropsProps & T>, nextState: Readonly<WithCalcPropsState>, nextContext: any): void;
    };
    new (props: WithCalcPropsProps & T, context?: any): {
        render(): JSX.Element;
        renderCalcProps({ provider, runContext }: {
            provider: Pick<{
                patchedConfig: {};
                getDescriptor: (propId: string) => import("./calc-props/calc-props-provider").CalcPropDescriptor;
                getCalcPropIds: (node: any) => string[];
                findCalcProp: (node: any, propName: string, runContext: IRunContext) => {
                    propName: string;
                    getValue: () => any;
                    setValue: (value: any) => void;
                    subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-props/calc-prop").Subscription;
                };
                getSubtreeCalcProps: (node: any, runContext: IRunContext) => {
                    [propId: string]: {
                        propName: string;
                        getValue: () => any;
                        setValue: (value: any) => void;
                        subscribe: (callback: (newValue: any) => void, onDisposedCallback?: () => void) => import("./calc-props/calc-prop").Subscription;
                    };
                };
                hasSubtreeCalcProps: (node: any) => boolean;
            }, "getDescriptor" | "getCalcPropIds" | "findCalcProp" | "getSubtreeCalcProps" | "hasSubtreeCalcProps">;
            runContext: IRunContext;
        }): JSX.Element;
        setState<K extends "prevCalcProps" | "componentProps" | "subscriptions">(state: WithCalcPropsState | ((prevState: Readonly<WithCalcPropsState>, props: Readonly<WithCalcPropsProps & T>) => WithCalcPropsState | Pick<WithCalcPropsState, K>) | Pick<WithCalcPropsState, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<WithCalcPropsProps & T>;
        state: Readonly<WithCalcPropsState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<WithCalcPropsProps & T>, nextState: Readonly<WithCalcPropsState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithCalcPropsProps & T>, prevState: Readonly<WithCalcPropsState>): any;
        componentDidUpdate?(prevProps: Readonly<WithCalcPropsProps & T>, prevState: Readonly<WithCalcPropsState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithCalcPropsProps & T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithCalcPropsProps & T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithCalcPropsProps & T>, nextState: Readonly<WithCalcPropsState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithCalcPropsProps & T>, nextState: Readonly<WithCalcPropsState>, nextContext: any): void;
    };
};
export declare class WithCalcPropsNoContext<T extends {}> extends React.Component<WithCalcPropsProps, WithCalcPropsState> {
    constructor(props: WithCalcPropsProps & T);
    private createComponentProps;
    static getDerivedStateFromProps(nextProps: WithCalcPropsProps, prevState: WithCalcPropsState): Partial<WithCalcPropsState>;
    private static update;
    render(): React.ReactNode;
    componentWillUnmount(): void;
}
//# sourceMappingURL=with-calc-props.d.ts.map