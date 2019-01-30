import { AnyIndexer } from "../app-config";
import { IStoreApi } from "../data/create-stores";
import { RouterApi } from "../navigation/router-api";
import { AppConfigUpdaterApi } from "../app-config-updater";
export interface IRunContext extends AnyIndexer {
    /**
     * NOTE:
     *      $item was removed because we got rid _originalConfig,
     *      so we can't re-compile event handlers to patch runContext with $item.
     *      In future, we should save original event handlers configs in special provider
     * $item?: any;          // Current record in a list or datasource
     */
    $local?: any;
    $global?: any;
    $value?: any;
    $functions?: IGlobalFunctions;
}
export interface IGlobalFunctions extends IStoreApi, RouterApi, IAuthApi, AppConfigUpdaterApi {
    busy(): number;
    available(): number;
    getBusyCounter(): number;
    removeCurrentViewCache(): void;
    log(level: string, message: string): void;
    getCookie(params: {
        cookieName: string;
    }): Promise<string>;
}
export interface IAuthApi {
    login(): any;
    logout(): any;
}
export interface IDataError extends Error {
    statusText?: string;
    httpStatus?: number;
    initiatorId?: string;
    response?: any;
}
//# sourceMappingURL=runtime.d.ts.map