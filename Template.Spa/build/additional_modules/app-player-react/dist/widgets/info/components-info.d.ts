import * as React from 'react';
import { ComponentBaseProps } from "../../common/base-component";
export declare type ComponentInfo = ReturnType<typeof registerWidget>;
export declare let componentsInfo: {
    [key: string]: ComponentInfo;
};
declare type CustomizeWidgetFn = (widget: any) => any;
declare type CustomizeWidgetHolder = CustomizeWidgetFn | {
    customizer: CustomizeWidgetFn;
    toFirst: boolean;
};
export declare function getComponentInfo(type: ComponentBaseProps["type"]): {
    componentType: React.ComponentType<any>;
    widget: any;
    customizeWidget?: CustomizeWidgetFn | {
        customizer: CustomizeWidgetFn;
        toFirst: boolean;
    } | CustomizeWidgetHolder[];
    displayingContext?: string;
    loader?: () => Promise<any>;
};
export declare function findComponentInfo(type: ComponentBaseProps["type"]): {
    componentType: React.ComponentType<any>;
    widget: any;
    customizeWidget?: CustomizeWidgetFn | {
        customizer: CustomizeWidgetFn;
        toFirst: boolean;
    } | CustomizeWidgetHolder[];
    displayingContext?: string;
    loader?: () => Promise<any>;
};
export declare type WidgetRegistration = {
    name: string;
    customizeWidget?: CustomizeWidgetHolder | CustomizeWidgetHolder[];
    displayingContext?: string;
    loader?: () => Promise<any>;
    componentType?: React.ComponentType<any>;
};
declare type InheritWidgetRegistration = Pick<WidgetRegistration, Exclude<keyof WidgetRegistration, "loader">> & {
    inherit: string;
};
export declare function registerInheritWidget(widgetOptions: InheritWidgetRegistration): {
    componentType: React.ComponentType<any>;
    widget: any;
    customizeWidget?: CustomizeWidgetFn | {
        customizer: CustomizeWidgetFn;
        toFirst: boolean;
    } | CustomizeWidgetHolder[];
    displayingContext?: string;
    loader?: () => Promise<any>;
};
export declare function registerWidget(widgetOptions: WidgetRegistration): {
    componentType: React.ComponentType<any>;
    widget: any;
    customizeWidget?: CustomizeWidgetFn | {
        customizer: CustomizeWidgetFn;
        toFirst: boolean;
    } | CustomizeWidgetHolder[];
    displayingContext?: string;
    loader?: () => Promise<any>;
};
export declare function customizeProps(customizer: Function): (Widget: any) => (props: any) => JSX.Element;
export declare const defaultWidgetsCustomizersArray: ((Widget: any) => {
    new (props: Readonly<import("../with-style").ComponentWithStyleProps>): {
        styleSelector: import("reselect").OutputSelector<import("../with-style").ComponentWithStyleProps, any, (res: string) => any>;
        render(): JSX.Element;
        setState<K extends never>(state: ((prevState: never, props: Readonly<import("../with-style").ComponentWithStyleProps>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<import("../with-style").ComponentWithStyleProps>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextState: never, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../with-style").ComponentWithStyleProps>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<import("../with-style").ComponentWithStyleProps>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextState: never, nextContext: any): void;
    };
    new (props: import("../with-style").ComponentWithStyleProps, context?: any): {
        styleSelector: import("reselect").OutputSelector<import("../with-style").ComponentWithStyleProps, any, (res: string) => any>;
        render(): JSX.Element;
        setState<K extends never>(state: ((prevState: never, props: Readonly<import("../with-style").ComponentWithStyleProps>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<import("../with-style").ComponentWithStyleProps>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextState: never, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../with-style").ComponentWithStyleProps>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<import("../with-style").ComponentWithStyleProps>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../with-style").ComponentWithStyleProps>, nextState: never, nextContext: any): void;
    };
})[];
export {};
//# sourceMappingURL=components-info.d.ts.map