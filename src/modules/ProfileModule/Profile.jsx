import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileLayout } from './layouts/ProfileLayout';


export const ProfileModule =  {
  getRoutes: () => {
    return (
      <Route key="/user" path="/user/:username" component={ProfileLayout} />
    );
  }
}