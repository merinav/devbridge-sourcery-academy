import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './routeConfig';
import PageLayout from '../components/PageLayout';

export const RouteManager = React.memo(() => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([key, route]) => {
        const { component: Component, path, layout } = route;
        return (
          <Route
            key={key}
            path={path}
            element={
              <Suspense fallback={<>Loading...</>}>
                <PageLayout layoutName={layout}>
                  <Component />
                </PageLayout>
              </Suspense>
            }
          ></Route>
        );
      })}
    </Routes>
  );
});

RouteManager.displayName = 'RouteManager';
