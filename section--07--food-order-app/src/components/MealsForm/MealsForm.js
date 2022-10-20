import style from './MealsForm.module.scss';

function MealsForm() {
  return (
    <form className={style.form}>
      <div className={style.form__group}>
        <label>Amount</label>
        <input
          className={style.form__input}
          type="number"
          min="1"
          max="5"
          step="1"
          default="1"
        />
      </div>
      <button className={style.form__submit}>+ Add </button>
    </form>
  );
}

export default MealsForm;
