import style from './MealsImg.module.scss';
import mealsImg from '../../assets/meals.jpg';

function MealsImg() {
  return (
    <div className={style.meals__img}>
      <img src={mealsImg} alt="A table full of food." />
    </div>
  );
}

export default MealsImg;
