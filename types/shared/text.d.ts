/**
 * @param {Promise<Response>} response
 * @returns {Promise<string>}
 */
export function text(response: Promise<Response>): Promise<string>;
