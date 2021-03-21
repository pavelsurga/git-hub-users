import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UsersLayout } from './layouts/UsersLayout';


export const UsersModule =  {
  getRoutes: () => {
    return (
      <Route key="/users" path="/users" component={UsersLayout} />
    );
  }
}