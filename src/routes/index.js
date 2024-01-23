import HomePage from '../components/HomePage/HomePage';
import LoginPage from '../components/HomePage/LoginPage';
import UserInfo from '../components/HomePage/UserInfo';
import Calculator from '../components/Calculator';
const privateRoutes = [];
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/userinfo', component: UserInfo },
    { path: '/calculator', component: Calculator},
];

export { privateRoutes, publicRoutes };
