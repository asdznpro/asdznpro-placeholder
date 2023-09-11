import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

import { Icon28LogoVkColor } from '@vkontakte/icons'
import { useUserDateTime } from 'hooks/index'

const Footer = () => {
	const userDateTime = useUserDateTime()

	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<Link to='/'>
					<div className={styles.logo}>
						<h4>
							<span> {`</>`} </span> {` @s_design©️`}
						</h4>
					</div>
				</Link>

				<h6>asdzn.pro/@v1.0.1-dev, {userDateTime}</h6>

				<Link to='https://vk.com/asdzn' target='_blank'>
					<Icon28LogoVkColor width={44} height={44} />
				</Link>
			</div>
		</footer>
	)
}

export { Footer }
