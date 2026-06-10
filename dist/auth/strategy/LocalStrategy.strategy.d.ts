import { Strategy } from "passport-local";
import { AuthService } from "../Service/authService.service";
declare const LocalStrategy_base: new (...args: [] | [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    private _usernameField;
    private _passwordField;
    constructor(authService: AuthService);
    validate(usuario: string, senha: string): Promise<any>;
}
export {};
