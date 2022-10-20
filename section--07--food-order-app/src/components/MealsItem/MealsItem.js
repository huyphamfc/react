import { MealsForm } from '../MealsForm';
import style from './MealsItem.module.scss';

function MealsItem({ id, name, description, price }) {
  return (
    <li key={id} className={style['meal-item']}>
      <div className={style['meal-item__info']}>
        <h3>{name}</h3>
        <p className={style['meal-item__desc']}>{description}</p>
        <span className={style['meal-item__price']}>{price}</span>
      </div>
      <MealsForm />
    </li>
  );
}

export default MealsItem;
