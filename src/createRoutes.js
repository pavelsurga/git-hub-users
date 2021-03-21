
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export const createRoutes = modules => {
  const routesFromModules = modules.map(route => route.getRoutes());
  return (<Switch>
    <Redirect exact to="/users/1" from="/" />
    {routesFromModules}
  </Switch>)
};