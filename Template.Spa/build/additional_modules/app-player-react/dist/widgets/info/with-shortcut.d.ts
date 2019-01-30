import * as React from "react";
declare type WithShortcutProps = {
    shortcut: string;
    onExecute: Function;
};
export declare function withShortcut(Widget: React.ComponentClass): {
    new (props: Readonly<WithShortcutProps>): {
        ref: React.RefObject<any>;
        render(): JSX.Element;
        componentDidMount(): void;
        componentWillUnmount(): void;
        setState<K extends never>(state: ((prevState: never, props: Readonly<WithShortcutProps>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<WithShortcutProps>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithShortcutProps>, nextState: never, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithShortcutProps>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<WithShortcutProps>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithShortcutProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithShortcutProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithShortcutProps>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithShortcutProps>, nextState: never, nextContext: any): void;
    };
    new (props: WithShortcutProps, context?: any): {
        ref: React.RefObject<any>;
        render(): JSX.Element;
        componentDidMount(): void;
        componentWillUnmount(): void;
        setState<K extends never>(state: ((prevState: never, props: Readonly<WithShortcutProps>) => Pick<never, K>) | Pick<never, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<WithShortcutProps>;
        state: never;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithShortcutProps>, nextState: never, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithShortcutProps>, prevState: never): any;
        componentDidUpdate?(prevProps: Readonly<WithShortcutProps>, prevState: never, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithShortcutProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithShortcutProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithShortcutProps>, nextState: never, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithShortcutProps>, nextState: never, nextContext: any): void;
    };
    contextType: React.Context<string>;
};
export {};
//# sourceMappingURL=with-shortcut.d.ts.map