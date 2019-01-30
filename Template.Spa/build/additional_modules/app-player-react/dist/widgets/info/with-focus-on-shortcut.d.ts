import * as React from "react";
declare type WithFocusOnShortcut = {
    shortcut: string;
};
export declare function withFocusOnShortcut(Widget: React.ComponentClass): {
    new (props: Readonly<WithFocusOnShortcut>): {
        ref: React.RefObject<any>;
        render(): JSX.Element;
        componentDidMount(): void;
        componentWillUnmount(): void;
        setState<K extends never>(state: ((prevState: never, props: Readonly<WithFocusOnShortcut>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<WithFocusOnShortcut>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithFocusOnShortcut>, nextState: never, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithFocusOnShortcut>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<WithFocusOnShortcut>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithFocusOnShortcut>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithFocusOnShortcut>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithFocusOnShortcut>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithFocusOnShortcut>, nextState: never, nextContext: any): void;
    };
    new (props: WithFocusOnShortcut, context?: any): {
        ref: React.RefObject<any>;
        render(): JSX.Element;
        componentDidMount(): void;
        componentWillUnmount(): void;
        setState<K extends never>(state: ((prevState: never, props: Readonly<WithFocusOnShortcut>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<WithFocusOnShortcut>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithFocusOnShortcut>, nextState: never, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithFocusOnShortcut>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<WithFocusOnShortcut>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithFocusOnShortcut>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithFocusOnShortcut>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithFocusOnShortcut>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithFocusOnShortcut>, nextState: never, nextContext: any): void;
    };
    contextType: React.Context<string>;
};
export {};
//# sourceMappingURL=with-focus-on-shortcut.d.ts.map