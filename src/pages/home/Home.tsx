import heroes from '../../data/heroes.json'
import styles from './Home.module.css'

export const Home = () => {
	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	const heroesAgi = heroes.filter(item => item.attr === 'agi')
	const heroesInt = heroes.filter(item => item.attr === 'int')
	return (
		<div className={styles.heroes}>
			<div className={styles.heroesAtr}>
				{heroesStrength.map(item => (
					<img key={item.id} className='icon' src={item.image} alt='' />
				))}
			</div>
			<div className={styles.heroesAtr}>
				{heroesAgi.map(item => (
					<img key={item.id} className='icon' src={item.image} alt='' />
				))}
			</div>
			<div className={styles.heroesAtr}>
				{heroesInt.map(item => (
					<img key={item.id} className='icon' src={item.image} alt='' />
				))}
			</div>
		</div>
	)
}
