import { useEffect } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Link, useNavigate, useParams } from 'react-router'
import { HeroAtr } from '../../components/hero-atr/HeroAtr'
import heroes from '../../data/heroes.json'
import { IHero } from '../../types/types'
import styles from './Hero.module.css'

export const Hero = () => {
	const params = useParams()
	const hero: IHero | undefined = heroes.find(hero => hero.name === params.name)
	const navigate = useNavigate()

	useEffect(() => {
		if (!hero) {
			navigate('..', { relative: 'path' })
		}
	}, [hero, navigate])

	if (!hero) {
		return null
	}

	return (
		<div className={styles.hero}>
			<Link to='/'>
				<RiArrowGoBackFill className={styles.back} />
			</Link>

			<h2>{hero.name}</h2>

			<img
				draggable='false'
				className={`icon ${styles.img}`}
				src={hero.image}
				alt={hero.name}
			/>

			{hero.attr === 'strength' && (
				<HeroAtr atr='Сила' classname={styles.red} />
			)}
			{hero.attr === 'agi' && (
				<HeroAtr atr='Ловкость' classname={styles.green} />
			)}
			{hero.attr === 'int' && (
				<HeroAtr atr='Интеллект' classname={styles.blue} />
			)}

			<p className={styles.description}>{hero.info}</p>
		</div>
	)
}
