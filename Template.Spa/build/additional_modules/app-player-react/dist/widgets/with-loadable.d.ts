import * as React from "react";
export declare function Loadable<P>(options: {
    loader: () => Promise<React.ComponentType<P>>;
    render?: (args: React.ComponentType<P>) => React.ComponentType<P>;
}): (props: P & import("../common/base-component").VisibleProps & import("../common/base-component").DisableProps & {
    id?: string;
    type?: string;
}) => JSX.Element;
//# sourceMappingURL=with-loadable.d.ts.map