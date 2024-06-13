export interface ResponseBody<T> {
	message: string
	data?: T
}

export enum PROFILES {
	ADMIN = 1,
	CLIENT = 2,
	STAFF = 3,
}
