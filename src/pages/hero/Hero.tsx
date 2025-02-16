import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import heroes from '../../data/heroes.json'
import styles from './Hero.module.css'

export const Hero = () => {
	const params = useParams()
	const hero = heroes.find(hero => hero.name === params.name)
	const navigate = useNavigate()

	useEffect(() => {
		if (!hero) {
			navigate('..', { relative: 'path' })
		}
	}, [hero, navigate])

	return (
		<div className={styles.hero}>
			<h1>{hero.name}</h1>
			<img src={hero.image} alt='' />
		</div>
	)
}
