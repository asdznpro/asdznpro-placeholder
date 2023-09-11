export default interface TypographyProps {
	children: React.ReactNode
	level?: '1' | '2' | '3' | undefined
	weight?: '1' | '2' | '3' | undefined
	style?: React.CSSProperties
	caps?: boolean | undefined
}
