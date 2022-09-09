import { HeaderOnly } from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Uploads from '../pages/Uploads';
import Login from '../pages/Login';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/products', component: Products },
    { path: '/uploads', component: Uploads, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null }
];

export { publicRoutes };