export interface IHero {
  id: number | string; 
  image?: string;
  name: string;
  attr: string;
  info?: string;
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
export interface IFilterState {
  attr: string;
}