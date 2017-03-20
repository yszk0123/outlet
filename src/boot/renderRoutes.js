// @flow
import React from 'react';
import { Route } from 'react-router-dom';

export default function renderRoutes(routes: Route[]) {
  return routes.map(route => (
    <Route key={route.path} path={route.path} component={route.component} />
  ));
}
