import * as React from "react";
declare type Props = {
    selectedItems: {}[];
    selectionIndependent: any[];
    selectionDependent: any[];
};
declare type ComponentProps = {
    items: {}[];
    visible: boolean;
    themeScope?: string;
};
export declare function withSelectionDependentToolbar<P extends ComponentProps>(Component: React.ComponentType<P>): (props: Props & P & ComponentProps) => JSX.Element;
export {};
//# sourceMappingURL=with-selection-dependent-toolbar.d.ts.map