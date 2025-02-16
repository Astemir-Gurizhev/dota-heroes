import heroes from '../../data/heroes.json'
import styles from './Home.module.css'

export const Home = () => {
	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	const heroesAgi = heroes.filter(item => item.attr === 'agi')
	return (
		<div className={styles.heroes}>
			<div className={styles.heroesStrength}>
				{heroesStrength.map(item => (
					<img key={item.id} className='icon' src={item.image} alt='' />
				))}
			</div>
			<div className={styles.heroesAgi}>
				{heroesAgi.map(item => (
					<img key={item.id} className='icon' src={item.image} alt='' />
				))}
			</div>
			<div className={styles.heroesInt}>
				{heroesStrength.map(item => (
					<img key={item.id} className='icon' src={item.image} alt='' />
				))}
			</div>
		</div>
	)
}
