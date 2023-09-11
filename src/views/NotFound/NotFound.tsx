import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

import { Layout } from 'components/layout'

const NotFound = () => {
	return (
		<Layout>
			<section className={styles.root}>
				<section className={styles.wrapper}>
					<h1>NotFound</h1>

					<Link to='/'>
						<h3>/</h3>
					</Link>
				</section>
			</section>
		</Layout>
	)
}

export { NotFound }
