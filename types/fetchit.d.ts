/**
 * @typedef {{ (url: RequestInfo, init?: RequestInit): Promise<Response> }} fetchfunc
 *
 * @typedef {{
 * 	(uri: string, options?: FetchitRequestInit): Promise<Response>
 * 	json(uri: string, options?: FetchitRequestInit): Promise<any>
 * 	text(uri: string, options?: FetchitRequestInit): Promise<string>
 * }} FetchIt
 *
 * @typedef {RequestInit & {
 * 	query?: QueryStringInput
 * 	form?: QueryStringInput
 * 	body?: any
 * }} FetchitRequestInit
 *
 * @typedef {URLSearchParams | Record<string, string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null>} QueryStringInput
 * @typedef {{ stringify(obj?: QueryStringInput): string }} QueryString
 */
/** @type {FetchIt} */
export const fetchit: FetchIt;
export default fetchit;
export type fetchfunc = (url: RequestInfo, init?: RequestInit) => Promise<Response>;
export type FetchIt = {
    (uri: string, options?: FetchitRequestInit): Promise<Response>;
    json(uri: string, options?: FetchitRequestInit): Promise<any>;
    text(uri: string, options?: FetchitRequestInit): Promise<string>;
};
export type FetchitRequestInit = RequestInit & {
    query?: QueryStringInput;
    form?: QueryStringInput;
    body?: any;
};
export type QueryStringInput = URLSearchParams | Record<string, string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null>;
export type QueryString = {
    stringify(obj?: QueryStringInput): string;
};
import { json } from "./utils/json.cjs";
import { text } from "./utils/text.cjs";
export { json, text };
