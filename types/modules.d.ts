/**
 * @returns {import('./types/fetch').fetchfunc}
 */
export function getFetch(): import('./types/fetch').fetchfunc;
/**
 * @param {import('./types/fetch').fetchfunc} fetch
 */
export function setFetch(fetch: import('./types/fetch').fetchfunc): void;
/**
 * @returns {import('./types/querystring').QueryString}
 */
export function getQueryString(): import('./types/querystring').QueryString;
/**
 * @param {import('./types/querystring').QueryString} qs
 */
export function setQueryString(qs: import('./types/querystring').QueryString): void;
