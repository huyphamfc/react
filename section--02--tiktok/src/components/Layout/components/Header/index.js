import classes from './Header.module.scss';
import logoImg from '../../../../assets/images/logo.svg';


function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <div>
                    <img src={logoImg} alt='TikTok logo' />
                </div>
            </nav>
        </header>
    );
}

export default Header;