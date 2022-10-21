import style from './MealInfo.module.scss';

function MealInfo({ name, description, price }) {
  return (
    <div className={style.info}>
      <h2 className={style.info__title}>{name}</h2>
      <p className={style.info__description}>{description}</p>
      <span className={style.info__price}>{`$${price}`}</span>
    </div>
  );
}

export default MealInfo;
