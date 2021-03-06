import { IListOptions } from "devextreme-react/ui/list";
import * as React from "react";
import { IRunContext } from "../common/runtime";
import { ComponentWithStyleProps } from "./with-style";
import { ComponentBaseProps } from "../common/base-component";
export declare type ListComponent = ComponentBaseProps & ComponentWithStyleProps & Pick<IListOptions, Exclude<keyof IListOptions, "onItemClick">> & {
    dataSource: string;
    onItemClick?: any;
    itemComponents?: ComponentBaseProps[];
    groupComponents?: ComponentBaseProps[];
    editConfig?: {
        allowItemDeleting?: boolean;
        itemTemplate?: string;
    };
};
export declare type ListProps = ListComponent & {
    runContext?: IRunContext;
};
export declare class ReactList extends React.Component<ListProps, {}> {
    static defaultProps: {
        editConfig: {};
    };
    private listRef;
    render(): JSX.Element;
}
export declare type ItemComponentsProps = {
    name: string;
    runContext: IRunContext;
    itemHolder: any;
    components: any[];
};
export declare class ItemComponents extends React.PureComponent<ItemComponentsProps, never> {
    static render(props: ItemComponentsProps): JSX.Element;
    render(): JSX.Element;
}
export declare class ListGroupItem extends React.Component<ItemComponentsProps, never> {
    shouldComponentUpdate(nextProps: ItemComponentsProps): boolean;
    render(): JSX.Element;
}
//# sourceMappingURL=list-widget.d.ts.map