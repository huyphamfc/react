import Home from '../pages/Home';
import Follow from '../pages/Follow';
import Profile from '../pages/Profile';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    { path: '/profile', component: Profile }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };