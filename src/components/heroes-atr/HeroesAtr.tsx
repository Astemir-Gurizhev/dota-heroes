import { Link } from 'react-router'
import { HeroesAtrProps } from '../../types/types'
import styles from './HeroesAtr.module.css'
export const HeroesAtr = ({
	array,
	className,
	title,
	icon,
}: HeroesAtrProps) => {
	return (
		<div className={styles.table}>
			<div className={icon ? styles.atr : ''}>
				{icon ? <img src={icon} alt='icon' /> : null}
				<p className={styles.title}>{title}</p>
			</div>
			<div className={className}>
				{array.map(item => (
					<Link key={item.id} to={item.name}>
						<img
							draggable='false'
							className={`icon ${styles.heroIcon}`}
							src={item.image}
							alt={item.name}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}
