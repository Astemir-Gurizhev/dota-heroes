import heroes from '../../data/heroes.json'
import styles from './Home.module.css'

export const Home = () => {
	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	return (
		<div className={styles.heroes}>
			{heroesStrength.map(item => (
				<img className='icon' src={item.image} alt="" />
				
			))}
		</div>
	)
}
