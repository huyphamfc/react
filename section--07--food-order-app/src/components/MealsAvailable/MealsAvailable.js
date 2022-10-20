import { MealsItem } from '../MealsItem';
import style from './MealsAvailable.module.scss';

const DUMMY_DATA = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function MealsAvailable() {
  const meals = DUMMY_DATA.map(item => <MealsItem key={item.id} {...item} />);

  return <ul className={style.meals}>{meals}</ul>;
}

export default MealsAvailable;
