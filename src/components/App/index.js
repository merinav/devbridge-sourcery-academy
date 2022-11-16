import React from 'react';
import PropTypes from 'prop-types';
import { RouteManager } from '../../routes/routing';
import Header from '../Header';
import Footer from '../Footer';

export default function App() {
  return (
    <>
      <Header />
      <RouteManager />
      <Footer />
    </>
  );
}

App.propTypes = {};
