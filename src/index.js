import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouteManager } from './routes/';
import MainLayout from './components/MainLayout';

import './sass/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MainLayout>
        <RouteManager />
      </MainLayout>
    </Router>
  </React.StrictMode>
);
