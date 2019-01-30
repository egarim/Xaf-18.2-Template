import * as React from "react";
import { ComponentWithStyleProps } from "./with-style";
export declare const withNormalizedCssProperties: (Widget: any) => {
    new (props: Readonly<ComponentWithStyleProps>): {
        styleSelector: import("reselect").OutputSelector<ComponentWithStyleProps, any, (res: string) => any>;
        render(): JSX.Element;
        setState<K extends never>(state: ((prevState: never, props: Readonly<ComponentWithStyleProps>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<ComponentWithStyleProps>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ComponentWithStyleProps>, nextState: never, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ComponentWithStyleProps>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<ComponentWithStyleProps>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ComponentWithStyleProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ComponentWithStyleProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ComponentWithStyleProps>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ComponentWithStyleProps>, nextState: never, nextContext: any): void;
    };
    new (props: ComponentWithStyleProps, context?: any): {
        styleSelector: import("reselect").OutputSelector<ComponentWithStyleProps, any, (res: string) => any>;
        render(): JSX.Element;
        setState<K extends never>(state: ((prevState: never, props: Readonly<ComponentWithStyleProps>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<ComponentWithStyleProps>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ComponentWithStyleProps>, nextState: never, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ComponentWithStyleProps>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<ComponentWithStyleProps>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ComponentWithStyleProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ComponentWithStyleProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ComponentWithStyleProps>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ComponentWithStyleProps>, nextState: never, nextContext: any): void;
    };
};
export declare function normalizeStyle(style?: {}): any;
//# sourceMappingURL=with-normalized-css-properties.d.ts.map