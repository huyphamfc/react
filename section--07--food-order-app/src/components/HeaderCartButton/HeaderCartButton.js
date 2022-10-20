import { CartIcon } from '../../UI';
import style from './HeaderCartButton.module.scss';

function HeaderCartButton() {
  return (
    <button className={style.button}>
      <CartIcon className={style.button__icon} />
      <span>Your Cart</span>
      <span className={style.button__badge}>2</span>
    </button>
  );
}

export default HeaderCartButton;
