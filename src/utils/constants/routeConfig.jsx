import React, { lazy } from 'react';

const Home = lazy(() => import('../../components/App/pages/Home/Home'));
const Developers = lazy(() =>
  import('../../components/App/pages/academy/Developers/Developers')
);
const Testers = lazy(() =>
  import('../../components/App/pages/academy/Testers/Testers')
);
const FrontEnd = lazy(() =>
  import('../../components/App/pages/academy/FrontEnd/FrontEnd')
);
const Register = lazy(() =>
  import('../../components/App/pages/Register/Register')
);
const NotFound = lazy(() =>
  import('../../components/App/pages/NotFound/NotFound')
);

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
  },
  developers: {
    path: routes.developers,
    component: Developers,
  },
  testers: {
    path: routes.testers,
    component: Testers,
  },
  frontEnd: {
    path: routes.frontEnd,
    component: FrontEnd,
  },
  register: {
    path: routes.register,
    component: Register,
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
  },
};
