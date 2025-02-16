import { BsGearFill } from 'react-icons/bs'
import styles from './Header.module.css'
import { Link } from 'react-router'
export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<Link to='/'> <img className={`icon ${styles.logo}`} src='./logo.png' alt='dota-logo' /> </Link>
			</div>
			<div className={styles.headerRight}>
				<BsGearFill className={`icon ${styles.gearFill}`} />
			</div>
		</div>
	)
}
