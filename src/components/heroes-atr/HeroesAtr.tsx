import { Link } from 'react-router'
import { HeroesAtrProps } from '../../types/types'
import styles from './HeroesAtr.module.css'
export const HeroesAtr = ({ array, className }: HeroesAtrProps) => {
	return (
		<div className={className}>
			{array.map(item => (
				<Link to={item.name}>
					<img
						draggable='false'
						key={item.id}
						className={`icon ${styles.heroIcon}`}
						src={item.image}
						alt={item.name}
					/>
				</Link>
			))}
		</div>
	)
}
