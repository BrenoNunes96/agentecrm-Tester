import { Strategy } from "passport-jwt";
declare const jwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class jwtStrategy extends jwtStrategy_base {
    constructor();
    validate(payload: any): Promise<any>;
}
export {};
