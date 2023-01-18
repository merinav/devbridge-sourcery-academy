import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouteManager } from './routes/';
import { MediaFetchProvider } from './context/MediaFetchContext.js';
import { TestimonialsFetchProvider } from './context/TestimonialsFetchContext.js';
import ScrollToTop from '/src/utils/ScrollToTop';
import Layout from './components/Layout';
import './sass/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Layout>
        <MediaFetchProvider>
          <TestimonialsFetchProvider>
            <RouteManager />
          </TestimonialsFetchProvider>
        </MediaFetchProvider>
      </Layout>
    </Router>
  </React.StrictMode>
);
