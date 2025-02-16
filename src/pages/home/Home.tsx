import { HeroesAtr } from '../../components/heroes-atr/HeroesAtr'
import heroes from '../../data/heroes.json'
import styles from './Home.module.css'

export const Home = () => {
	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	const heroesAgi = heroes.filter(item => item.attr === 'agi')
	const heroesInt = heroes.filter(item => item.attr === 'int')
	return (
		<div className={styles.heroes}>
			<HeroesAtr className={styles.heroesAtr} array={heroesStrength}/>
			<HeroesAtr className={styles.heroesAtr} array={heroesAgi}/>
			<HeroesAtr className={styles.heroesAtr} array={heroesInt}/>
		</div>
	)
}
