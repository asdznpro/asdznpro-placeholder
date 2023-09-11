import { Link } from 'react-router-dom'

import styles from './AppLink.module.scss'

import AppLinkProps from './AppLink.interface'

const AppLink: React.FC<AppLinkProps> = props => {
	const { to, target, children, onClick, flex } = props

	const targetKeywords = {
		self: 'self',
		blank: 'blank',
		parent: 'parent',
		top: 'top',
	}

	const targetValue = targetKeywords[target || 'self']

	const isFlex = flex ? styles.flex : ''

	if (to) {
		return (
			<Link
				to={to}
				target={`_${targetValue}`}
				className={[styles.root, isFlex].join(' ')}
			>
				{children}
			</Link>
		)
	} else {
		return (
			<span onClick={onClick} className={[styles.root, isFlex].join(' ')}>
				{children}
			</span>
		)
	}
}

export { AppLink }
