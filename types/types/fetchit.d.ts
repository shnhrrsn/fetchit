import { QueryStringInput } from './querystring'

export interface FetchitRequestInit extends RequestInit {
	query?: QueryStringInput | null
	form?: QueryStringInput | null
	body?: any
}

export interface FetchIt {
	(uri: string, options?: FetchitRequestInit): Promise<Response>
	json(uri: string, options?: FetchitRequestInit): Promise<any>
	text(uri: string, options?: FetchitRequestInit): Promise<string>
}
