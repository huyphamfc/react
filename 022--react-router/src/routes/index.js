import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';


const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <About /> },
    { path: '/products', component: <Products /> }
];

export { publicRoutes };