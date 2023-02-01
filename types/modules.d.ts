/**
 * @returns {Promise<import('./fetchit.js').fetchfunc>}
 */
export function getFetch(): Promise<import('./fetchit.js').fetchfunc>;
/**
 * @param {Promise<import('./fetchit.js').fetchfunc>} fetch
 */
export function setFetch(fetch: Promise<import('./fetchit.js').fetchfunc>): void;
/**
 * @returns {Promise<import('./fetchit.js').QueryString>}
 */
export function getQueryString(): Promise<import('./fetchit.js').QueryString>;
/**
 * @param {Promise<import('./fetchit.js').QueryString>} qs
 */
export function setQueryString(qs: Promise<import('./fetchit.js').QueryString>): void;
