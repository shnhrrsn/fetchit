export class StatusCodeError extends Error {
    /**
     *
     * @param {number} status
     * @param {string | undefined} message
     */
    constructor(status: number, message?: string | undefined);
    /** @type {string | undefined} */ stack: string | undefined;
    /** @type {number} */ status: number;
    /** @type {number} */ statusCode: number;
    /** @type {number} */ code: number;
    /** @type {Response | undefined} */ response: Response | undefined;
}
