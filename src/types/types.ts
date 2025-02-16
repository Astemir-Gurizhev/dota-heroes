export interface IHero {
  id: number; 
  image: string;
  name: string;
  attr: string;
  info: string;
}
export interface HeroesAtrProps {
  array: IHero[]; 
  className?: string; 
  title?: string;
  icon?: string;
}
export interface HeroAtrProps {
  classname: string; 
  atr: string; 
  src: string;
}