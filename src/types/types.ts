export interface Hero {
  id: number; 
  image: string;
  name: string;
}
export interface HeroesAtrProps {
  array: Hero[]; 
  className?: string; 
}