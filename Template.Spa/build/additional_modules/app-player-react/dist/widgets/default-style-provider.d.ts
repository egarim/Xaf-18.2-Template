import * as React from "react";
import { ThemeScopes } from "./scope-provider";
import { Themes } from "./theme-provider";
import { ComponentWithStyleProps } from "./with-style";
import { ComponentBaseProps } from "../common/base-component";
export declare const registerDefaultStyle: <V extends {}>(styleDeclarations: { [P in keyof V]: React.CSSProperties; }, options: {
    widgets: string[];
    selectors: {
        pattern: Partial<{
            widget: string;
            theme: Themes;
            scope: ThemeScopes;
        }>;
        value: (keyof V)[];
    }[];
}) => void;
export declare const registerAlias: (alias: string, widget: string) => void;
export declare function withDefaultStyle<T extends ComponentBaseProps & ComponentWithStyleProps>(Component: React.ComponentType<T>, type?: string): (props: T) => JSX.Element;
//# sourceMappingURL=default-style-provider.d.ts.map