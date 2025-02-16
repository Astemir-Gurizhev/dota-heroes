import { useEffect } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Link, useNavigate, useParams } from 'react-router'
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
			<img className={`icon ${styles.img}`} src={hero.image} alt={hero.name} />
			{hero.attr === 'strength' && (
				<p>
					Основной атрибут: <span className={styles.red}>Сила</span>
				</p>
			)}
			{hero.attr === 'agi' && (
				<p>
					Основной атрибут: <span className={styles.green}>Ловкость</span>
				</p>
			)}
			{hero.attr === 'int' && (
				<p>
					Основной атрибут: <span className={styles.blue}>Интеллект</span>
				</p>
			)}

			<p className={styles.description}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum repellat
				ut tenetur deleniti fugit dicta magnam, laudantium delectus nobis, eaque
				aliquam, eius eligendi assumenda. Dignissimos enim veniam ipsam
				voluptatem voluptates.
			</p>
		</div>
	)
}
