import { Strategy } from "passport-local";
import { AuthService } from "../service/AuthService.service";
declare const localStrategy_base: new (...args: [] | [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class localStrategy extends localStrategy_base {
    private readonly authservice;
    private _usernameField;
    private _passwordField;
    constructor(authservice: AuthService);
    validate(usuario: string, senha: string): Promise<AuthService>;
}
export {};
