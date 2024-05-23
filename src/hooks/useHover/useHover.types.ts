import { MutableRefObject } from "react"

export interface UseHoverProps<T extends HTMLElement> {
	ref: React.RefObject<T>
}
export interface UseHoversProps<T extends HTMLElement> {
	refs: React.RefObject<T[]>
}

export type HoverRef<T> = T | null
export type HoverRefs<T> = MutableRefObject<HoverRef<T>[]>
