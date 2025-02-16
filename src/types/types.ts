export interface IHero {
  id: number; 
  image: string;
  name: string;
  attr: string;
}
export interface HeroesAtrProps {
  array: IHero[]; 
  className?: string; 
}
