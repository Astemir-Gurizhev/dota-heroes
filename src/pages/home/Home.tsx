import { Filter } from '../../components/filter/Filter'
import { HeroesAtr } from '../../components/heroes-atr/HeroesAtr'
import heroes from '../../data/heroes.json'
import styles from './Home.module.css'

export const Home = () => {
	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	const heroesAgi = heroes.filter(item => item.attr === 'agi')
	const heroesInt = heroes.filter(item => item.attr === 'int')
	return (
		<>
			<Filter />
			<div className={styles.heroes}>
				<HeroesAtr
					icon='strength.png'
					title='СИЛА'
					className={styles.heroesAtr}
					array={heroesStrength}
				/>
				<HeroesAtr
					icon='agi.png'
					title='ЛОВКОСТЬ'
					className={styles.heroesAtr}
					array={heroesAgi}
				/>
				<HeroesAtr
					icon='int.png'
					title='ИНТЕЛЛЕКТ'
					className={styles.heroesAtr}
					array={heroesInt}
				/>
			</div>
		</>
	)
}
