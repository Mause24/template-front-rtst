export interface UsePaginationProps<E = []> {
	data: E[]
	pageSize: number
	options?: unknown
}
