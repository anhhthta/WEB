import About from '~/pages/About';
import Book from '~/pages/Book';
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Menu from '~/pages/Menu';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/menu', component: Menu },
    { path: '/book', component: Book },
    { path: '/cart', component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
