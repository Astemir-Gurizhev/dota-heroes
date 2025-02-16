import { useSelector } from 'react-redux'
import { Filter } from '../../components/filter/Filter'
import { HeroesAtr } from '../../components/heroes-atr/HeroesAtr'
import heroes from '../../data/heroes.json'
import { selectAttrFilter } from '../../redux/slices/filterSlice'
import styles from './Home.module.css'

export const Home = () => {
	const attrFilter = useSelector(selectAttrFilter)

	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	const heroesAgi = heroes.filter(item => item.attr === 'agi')
	const heroesInt = heroes.filter(item => item.attr === 'int')
	return (
		<>
			<Filter />
			<div className={styles.heroes}>
				{attrFilter === 'strength' && (
					<HeroesAtr
						icon='strength.png'
						title='СИЛА'
						className={styles.heroesAtr}
						array={heroesStrength}
					/>
				)}

				{attrFilter === 'agi' && (
					<HeroesAtr
						icon='agi.png'
						title='ЛОВКОСТЬ'
						className={styles.heroesAtr}
						array={heroesAgi}
					/>
				)}

				{attrFilter === 'int' && (
					<HeroesAtr
						icon='int.png'
						title='ИНТЕЛЛЕКТ'
						className={styles.heroesAtr}
						array={heroesInt}
					/>
				)}

				{attrFilter === '' && (
					<>
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
					</>
				)}
			</div>
		</>
	)
}
