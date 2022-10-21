import { Button } from '../../components';

import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <h1 className={style.header__brand}>Food Order</h1>
        <Button type="solid">
          Your Cart <span className={style['header__btn-badge']}>2</span>
        </Button>
      </div>
    </header>
  );
}

export default Header;
