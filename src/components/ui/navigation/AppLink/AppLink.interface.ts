export default interface AppLinkProps {
	to?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined
	children: React.ReactNode
	flex?: boolean | undefined
	onClick?: React.MouseEventHandler<HTMLSpanElement>
}
