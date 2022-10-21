import ReactDOM from 'react-dom';

import { Button, CartItem } from '../../components';
import style from './CartModal.module.scss';

const ModalContainer = () => {
  return <div className={style.cart__container}></div>;
};

const ModalContent = () => {
  return (
    <div className={style.cart__content}>
      <ul className={style.cart__items}>
        <CartItem />
        <CartItem />
      </ul>
      <div className={style.cart__total}>
        <span>Total</span>
        <span>Price</span>
      </div>
      <div>
        <Button type="outline">Close</Button>
        <Button type="solid">Order</Button>
      </div>
    </div>
  );
};

function Cart() {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <ModalContainer />
          <ModalContent />
        </>,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default Cart;
