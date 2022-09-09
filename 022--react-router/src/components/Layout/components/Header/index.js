import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <h1><Link to='/'>React Router</Link></h1>
                <ul className='header__navbar'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/uploads'>Uploads</Link></li>
                    <li><Link to='/login'>Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;