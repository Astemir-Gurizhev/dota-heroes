import styles from './Header.module.css'
export const Header = () => {
	return <div className={styles.header}>
		<div className={styles.headerLeft}>
			<img src="./logo.png" alt="dota-logo" />
		</div>
		<div className={styles.headerRight}>
			<img src="./gear-fill.png" alt="gear-fill" />
		</div>
	</div>
}
