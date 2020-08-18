import { ParsedUrlQueryInput } from 'querystring'

export interface QueryString {
	stringify(obj?: ParsedUrlQueryInput): string
}
