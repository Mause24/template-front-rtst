export type TextTypes = {
	h1: React.HTMLAttributes<HTMLHeadingElement>
	h2: React.HTMLAttributes<HTMLHeadingElement>
	h3: React.HTMLAttributes<HTMLHeadingElement>
	h4: React.HTMLAttributes<HTMLHeadingElement>
	h5: React.HTMLAttributes<HTMLHeadingElement>
	h6: React.HTMLAttributes<HTMLHeadingElement>
	span: React.HTMLAttributes<HTMLSpanElement>
	b: React.HTMLAttributes<HTMLElement>
	strong: React.HTMLAttributes<HTMLElement>
	p: React.HTMLAttributes<HTMLParagraphElement>
	label: React.LabelHTMLAttributes<HTMLLabelElement>
	legend: React.HTMLAttributes<HTMLLegendElement>
}

export enum TextSizes {
	"xs" = "!text-xs",
	"sm" = "!text-sm",
	"base" = "!text-base",
	"lg" = "!text-lg",
	"xl" = "!text-xl",
	"2xl" = "!text-2xl",
	"3xl" = "!text-3xl",
	"4xl" = "!text-4xl",
	"5xl" = "!text-5xl",
	"6xl" = "!text-6xl",
	"7xl" = "!text-7xl",
	"8xl" = "!text-8xl",
	"9xl" = "!text-9xl",
}

export enum TextColors {
	inherit = "!text-inherit",
	current = "!text-current",
	transparent = "!text-transparent",
	primary = "!text-primary-normal",
	secondary = "!text-secondary-normal",
	black = "!text-black",
	white = "!text-white",
	blue = "!text-blue-600",
	red = "!text-red-400",
}

export interface TextProps<T extends keyof TextTypes> {
	type: T
	children: string
	props?: Partial<TextTypes[T]>
	size?: keyof typeof TextSizes
	color?: keyof typeof TextColors
}
