/**
 * @returns {Promise<import('./types/fetch').fetchfunc>}
 */
export function getFetch(): Promise<import('./types/fetch').fetchfunc>;
/**
 * @param {Promise<import('./types/fetch').fetchfunc>} fetch
 */
export function setFetch(fetch: Promise<import('./types/fetch').fetchfunc>): void;
/**
 * @returns {Promise<import('./types/querystring').QueryString>}
 */
export function getQueryString(): Promise<import('./types/querystring').QueryString>;
/**
 * @param {Promise<import('./types/querystring').QueryString>} qs
 */
export function setQueryString(qs: Promise<import('./types/querystring').QueryString>): void;
