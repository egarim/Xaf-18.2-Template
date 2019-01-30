/// <reference path="../../../../react16.6.d.ts" />
declare type SelectorPattern<T, S> = {
    widget: string;
    theme: T;
    scope: S;
};
declare type Selector<V, T, S> = {
    pattern: Partial<SelectorPattern<T, S>>;
    value: (keyof V)[];
};
declare type Options<V, T, S> = {
    widgets: string[];
    selectors: Selector<V, T, S>[];
};
export declare const createDefaultStyleRegistration: <T extends string, S extends string>(storage?: {
    [key: string]: Selector<any, T, S>[];
}, cache?: {}, aliases?: {}) => {
    registerDefaultStyle: <V extends {}>(styleDeclarations: { [P in keyof V]: import("react").CSSProperties; }, options: Options<V, T, S>) => void;
    registerAlias: (alias: string, widget: string) => void;
    getDefaultStyle: (selectorPattern: SelectorPattern<T, S>) => any;
};
export declare const findMatchingSelectors: (selectors: Selector<any, any, any>[], selectorPattern: SelectorPattern<any, any>) => any[];
export {};
//# sourceMappingURL=widget-default-style.d.ts.map