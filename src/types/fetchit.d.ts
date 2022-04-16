import { ParsedUrlQueryInput } from 'querystring'

export interface FetchitRequestInit extends RequestInit {
	query?: ParsedUrlQueryInput | null
	form?: ParsedUrlQueryInput | null
	body?: any
}

export interface FetchIt {
	(uri: string, options?: FetchitRequestInit): Promise<Response>
	json(uri: string, options?: FetchitRequestInit): Promise<any>
	text(uri: string, options?: FetchitRequestInit): Promise<string>
}
