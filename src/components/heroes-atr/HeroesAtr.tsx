import { HeroesAtrProps } from '../../types/types'

export const HeroesAtr = ({ array, className }: HeroesAtrProps) => {
  return (
    <div className={className}>
      {array.map(item => (
        <img key={item.id} className='icon' src={item.image} alt={item.name} />
      ))}
    </div>
  );
};
