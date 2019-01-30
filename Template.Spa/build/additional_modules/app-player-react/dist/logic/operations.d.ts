import { ICallerInfo } from "./function-compiler";
export declare class AppPlayerError extends Error {
    message: any;
    handled: boolean;
    details?: string;
    constructor(message: any, prototype?: AppPlayerError);
}
export declare class LogicError extends AppPlayerError {
    callerInfo?: ICallerInfo;
    constructor(message: string, callerInfo?: ICallerInfo);
}
//# sourceMappingURL=operations.d.ts.map