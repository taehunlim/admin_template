import loadable from '@loadable/component';

export const Home = loadable(() => import( /* webpackChunkName: "Home" */ '../pages/Home'));
export const Login = loadable(() => import( /* webpackChunkName: "Login" */ '../pages/LoginPage'));

const allRoutes = [
    { path: "/login", component: Login}
]

const PrivateRoutes = [
    { path: "/", component: Home}
]

export {allRoutes, PrivateRoutes}