import { NavigationItem } from "../../app-config";
import { ComponentWithStyleProps } from "../../widgets/with-style";
import { ComponentBaseProps } from "../../common/base-component";
declare type NavbarProps = {
    items: NavigationItem[];
    selectedItem: NavigationItem;
} & ComponentBaseProps & ComponentWithStyleProps;
export declare const Navbar: (props: NavbarProps) => JSX.Element;
export {};
//# sourceMappingURL=navbar.d.ts.map