import styles from './Layout.module.scss'

import { Footer } from './Footer'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<main className={styles.main}>
					{children}
				</main>
			</div>

			<Footer />
		</div>
	)
}

export { Layout }
