import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { publicRoutes } from './routes';
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
                {publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />)
                }
            </Routes>
        </BrowserRouter>
    );
}

export default App;