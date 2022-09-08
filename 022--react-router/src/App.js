import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <header>
                <nav className='nav'>
                    <h1><Link to='/'>React Router</Link></h1>
                    <ul className='nav__navbar'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;