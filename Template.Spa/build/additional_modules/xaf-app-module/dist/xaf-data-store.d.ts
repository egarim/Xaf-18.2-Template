import CustomStore from "devextreme/data/custom_store";
declare type ViewState = {
    objectsState?: {};
};
declare type RequestParams = {
    viewId: string;
    viewState: ViewState;
    getViewState: () => ViewState;
};
declare type ListViewParams = RequestParams & {
    viewState: {
        criteria?: string;
        selectedObjects?: string[];
    };
};
declare type DetailViewParams = RequestParams & {
    viewState: {
        currentObject: {};
    };
};
declare type DetailedListViewParams = DetailViewParams & ListViewParams & {
    propertyName: string;
};
export declare type ActionParams = {
    actionId: string;
    actionParameter?: any;
};
export declare class XafDataStore extends CustomStore {
    _customLoadOptions(): string[];
    constructor(options: any);
    private getAspNetOption;
}
export declare type ActionResponse = {
    currentObject?: {};
    viewState: Partial<{
        isClosed: boolean;
        criteria: string;
        currentObject: {};
        objectsState: {};
        configDiffs: {};
    }>;
    newViewState?: {
        viewId: string;
        currentObject: any;
    };
};
export declare type XafModelActionStoreResponse = ReturnType<XafModelActionStore["processResponse"]>;
export declare type XafModelActionStoreLoadOptions = DetailedListViewParams & ActionParams & {
    keyPropertyName?: string;
};
export declare class XafModelActionStore extends CustomStore {
    _customLoadOptions(): string[];
    constructor(options: any);
    keyOf(object: any): void;
    xafKeyOf(object: any, keyPropertyName?: string): any;
    private processResponse;
    protected _execRequest(url: string, postData: any): any;
    private processAjaxError;
}
export declare function createDataStore(options: any): XafDataStore;
export declare function createModelActionStore(options: any): XafModelActionStore;
export {};
//# sourceMappingURL=xaf-data-store.d.ts.map