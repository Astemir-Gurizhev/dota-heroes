import { BsGearFill } from 'react-icons/bs'
import styles from './Header.module.css'
export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<img className={`icon ${styles.logo}`} src='./logo.png' alt='dota-logo' />
			</div>
			<div className={styles.headerRight}>
				<BsGearFill className={`icon ${styles.gearFill}`} />
			</div>
		</div>
	)
}
