export type TextTypes = {
	abbr: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	address: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	blockquote: React.DetailedHTMLProps<
		React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
		HTMLQuoteElement
	>
	cite: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	code: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	del: React.DetailedHTMLProps<
		React.DelHTMLAttributes<HTMLModElement>,
		HTMLModElement
	>
	dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	h1: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>
	h2: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>
	h3: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>
	h4: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>
	h5: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>
	h6: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	>
	i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	ins: React.DetailedHTMLProps<
		React.InsHTMLAttributes<HTMLModElement>,
		HTMLModElement
	>
	kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	label: React.DetailedHTMLProps<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>
	legend: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLLegendElement>,
		HTMLLegendElement
	>
	mark: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	p: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	>
	pre: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLPreElement>,
		HTMLPreElement
	>
	q: React.DetailedHTMLProps<
		React.QuoteHTMLAttributes<HTMLQuoteElement>,
		HTMLQuoteElement
	>
	rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	ruby: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	samp: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	small: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	span: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	>
	strong: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>
	sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	time: React.DetailedHTMLProps<
		React.TimeHTMLAttributes<HTMLTimeElement>,
		HTMLTimeElement
	>
	u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
	var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
}

export enum TextSizes {
	"xs" = "text-xs",
	"sm" = "text-sm",
	"base" = "text-base",
	"lg" = "text-lg",
	"xl" = "text-xl",
	"2xl" = "text-2xl",
	"3xl" = "text-3xl",
	"4xl" = "text-4xl",
	"5xl" = "text-5xl",
	"6xl" = "text-6xl",
	"7xl" = "text-7xl",
	"8xl" = "text-8xl",
	"9xl" = "text-9xl",
}

export enum TextColors {
	inherit = "text-inherit",
	current = "text-current",
	transparent = "text-transparent",
	primary = "text-primary-normal",
	secondary = "text-secondary-normal",
	black = "text-black",
	white = "text-white",
	blue = "text-blue-600",
	red = "text-red-400",
}

export enum TextWeights {
	thin = "font-thin",
	extralight = "font-extralight",
	light = "font-light",
	normal = "font-normal",
	medium = "font-medium",
	semibold = "font-semibold",
	bold = "font-bold",
	extrabold = "font-extrabold",
	black = "font-black",
}

export interface TextProps<T extends keyof TextTypes> {
	type: T
	children: string
	props?: Partial<TextTypes[T]>
	weight?: keyof typeof TextWeights
	size?: keyof typeof TextSizes
	color?: keyof typeof TextColors
}
