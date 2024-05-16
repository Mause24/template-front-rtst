export interface IconProps {
	/**
	 * The src of the icon
	 */
	src: string
	/**
	 * The classname of the icon
	 */
	className?: string
	/**
	 * The pointer of the icon
	 */
	pointer?: boolean
	/**
	 * fills the icon path with the color
	 */
	fillPath?: boolean
	/**
	 * fills the icon line with the color
	 */
	fillLine?: boolean
	/**
	 * fills the icon circle with the color
	 */
	fillCircle?: boolean
	/**
	 * fills the icon rect with the color
	 */
	fillRect?: boolean
}
