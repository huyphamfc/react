import style from './CartItem.module.scss';

function CartItem() {
  return (
    <li className={style['cart-item']}>
      <div className={style['cart-item__top']}>
        <h2>Name</h2>
        <div>
          <button className={style['cart-item__btn']}>-</button>
          <button className={style['cart-item__btn']}>+</button>
        </div>
      </div>
      <div className={style['cart-item__bottom']}>
        <div>
          Price: <span>999</span>
        </div>
        <div>
          Amount: <span>9</span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
