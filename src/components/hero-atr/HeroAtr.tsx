import { HeroAtrProps } from '../../types/types'
import styles from './HeroAtr.module.css'

export const HeroAtr = ({ classname, atr, src }: HeroAtrProps) => {
	return (
		<div className={styles.textAtr}>
			<p>
				Основной атрибут: <span className={classname}>{atr}</span> 
			</p>
			<img src={src} alt="" />
		</div>
	)
}
