import { useSelector } from 'react-redux'
import { Filter } from '../../components/filter/Filter'
import { HeroesAtr } from '../../components/heroes-atr/HeroesAtr'
import heroes from '../../data/heroes.json'
import {
	selectAttrFilter,
	selectNameFilter,
} from '../../redux/slices/filterSlice'
import styles from './Home.module.css'

export const Home = () => {
	const nameFilter = useSelector(selectNameFilter)
	const attrFilter = useSelector(selectAttrFilter)

	const filteredHeroes = heroes.filter(hero => {
		const matchesName = hero.name
			.toLowerCase()
			.includes(nameFilter.toLowerCase())
		const matchesAttr = hero.attr
			.toLowerCase()
			.includes(attrFilter.toLowerCase())
		return matchesName && matchesAttr
	})

	const heroesStrength = heroes.filter(item => item.attr === 'strength')
	const heroesAgi = heroes.filter(item => item.attr === 'agi')
	const heroesInt = heroes.filter(item => item.attr === 'int')

	return (
		<>
			<Filter />

			{nameFilter !== '' ? (
				<div className={styles.filteredHeroes}>
					{filteredHeroes.map(hero => (
						<HeroesAtr key={hero.id} array={[hero]} />
					))}
				</div>
			) : (
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
			)}
		</>
	)
}
