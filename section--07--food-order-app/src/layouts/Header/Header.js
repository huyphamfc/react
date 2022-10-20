import { Container } from '../../UI/';
import { HeaderCartButton } from '../../components';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <Container className={style.header__content}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </Container>
    </header>
  );
}

export default Header;
