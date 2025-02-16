import { HeroAtrProps } from '../../types/types'

export const HeroAtr = ({ classname, atr }: HeroAtrProps) => {
	return (
		<p>
			Основной атрибут: <span className={classname}>{atr}</span>
		</p>
	)
}
