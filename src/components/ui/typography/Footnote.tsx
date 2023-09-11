import styles from './Footnote.module.scss'

import TypographyProps from './Typography.interface'

const Footnote: React.FC<TypographyProps> = props => {
	const { children, level, weight, style, caps } = props

	const levelStyles = {
		1: styles['level-1'],
		2: styles['level-2'],
		3: styles['level-3'],
	}

	const levelClassName = levelStyles[level || '1']

	const isTextUppercase = caps ? styles.caps : ''

	return (
		<h6
			className={[styles.root, levelClassName, isTextUppercase]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</h6>
	)
}

export { Footnote }
