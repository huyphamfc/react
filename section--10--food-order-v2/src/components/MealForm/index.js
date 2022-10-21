import Button from '../Button';
import style from './MealForm.module.scss';

function MealForm() {
  return (
    <form className={style.form}>
      <div>
        <label className={style.form__label}>Amount: </label>
        <input
          className={style.form__input}
          type="number"
          min="1"
          max="5"
          step="1"
          default="1"
        />
      </div>
      <Button size="small" type="solid">
        + Add
      </Button>
    </form>
  );
}

export default MealForm;
