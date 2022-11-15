import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../../../utils/constants';

export function RouteManager() {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([key, route]) => {
        const { component: Component, path } = route;
        return (
          <Route
            key={key}
            path={path}
            element={
              <Suspense>
                <Component />
              </Suspense>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}
