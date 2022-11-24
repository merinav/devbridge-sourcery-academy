import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Developers = lazy(() => import('../pages/academy/Developers'));
const Testers = lazy(() => import('../pages/academy/Testers'));
const FrontEnd = lazy(() => import('../pages/academy/FrontEnd'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = {
  home: '/',
  developers: '/academy/developers',
  testers: '/academy/testers',
  frontEnd: '/academy/front-end',
  register: '/register',
  notFound: '*',
};

export const routeConfig = {
  home: {
    path: routes.home,
    component: Home,
    layout: 'home',
  },
  developers: {
    path: routes.developers,
    component: Developers,
    layout: 'developers',
  },
  testers: {
    path: routes.testers,
    component: Testers,
    layout: 'testers',
  },
  frontEnd: {
    path: routes.frontEnd,
    component: FrontEnd,
    layout: 'front-end',
  },
  register: {
    path: routes.register,
    component: Register,
    layout: 'register',
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
    layout: 'not-found',
  },
};
