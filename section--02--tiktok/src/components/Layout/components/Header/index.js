import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classes from './Header.module.scss';
import logoImg from '../../../../assets/images/logo.svg';


function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <div>
                    <img src={logoImg} alt='TikTok logo' />
                </div>
                <form className={classes.header__form}>
                    <input
                        className={classes.header__input}
                        placeholder='Search accounts and videos'
                    />
                    <button
                        className={classes.header__clear}
                        type='button'
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button
                        className={classes.header__load}
                        type='button'
                    >
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={classes.header__search}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <div></div>
            </nav>
        </header>
    );
}

export default Header;