import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import UsersProfile from './UsersProfile';
import UsersNetwork from './UsersNetwork';

const UsersRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/users/:id/mynetwork" component={UsersNetwork} />
      <ProtectedRoute path="/users/:id" component={UsersProfile} />
    </Switch>
  );
};

export default UsersRoutes;
