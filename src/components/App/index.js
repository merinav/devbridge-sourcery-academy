import React from 'react';
import PropTypes from 'prop-types';
import { RouteManager } from '../../routes/routing';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../Button';
import { routes } from '../../routes/routeConfig';

export default function App() {
  return (
    <>
      <Header />
      <Button color="violet">Button</Button>
      <RouteManager />
      <Footer />
    </>
  );
}

App.propTypes = {};
