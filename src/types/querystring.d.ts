export type QueryStringInput = Record<
	string,
	| string
	| number
	| boolean
	| ReadonlyArray<string>
	| ReadonlyArray<number>
	| ReadonlyArray<boolean>
	| null
>

export interface QueryString {
	stringify(obj?: QueryStringInput): string
}
