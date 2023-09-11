import styles from './Heading.module.scss'

import TypographyProps from './Typography.interface'

// Убрать caps и weight из интерфейса
// Убрать caps и weight из интерфейса
// Убрать caps и weight из интерфейса

const Heading: React.FC<TypographyProps> = props => {
	const { children, level, style } = props

	const levelStyles = {
		1: styles['level-1'],
		2: styles['level-2'],
		3: styles['level-3'],
	}

	const levelClassName = levelStyles[level || '1']

	return (
		<h1
			className={[styles.root, levelClassName].join(' ').trim()}
			style={style}
		>
			{children}
		</h1>
	)
}

export { Heading }
