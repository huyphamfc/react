import MealInfo from '../MealInfo';
import MealForm from '../MealForm';
import style from './MealItem.module.scss';

function MealItem({ name, description, price }) {
  return (
    <li className={style.item}>
      <MealInfo {...{ name, description, price }} />
      <MealForm />
    </li>
  );
}

export default MealItem;
