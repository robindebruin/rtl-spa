import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Episodes from './components/Episodes';

/**
 * A component which maps routing paths to the provided
 * componets set in the routes constant
 */

const routes = [
  {
    component: Episodes,
    path: '/episodes/:id',
    title: 'Episodes',
    exact: true,
  },
  { component: Home, path: '/', title: 'Home', exact: false },
];

function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.title} {...route}></Route>
      ))}
    </Switch>
  );
}

export default Routes;
