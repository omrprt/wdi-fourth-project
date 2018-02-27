import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import UsersProfile from  './UsersProfile';

const UsersRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/users/:id" component={UsersProfile} />
    </Switch>
  );
};

export default UsersRoutes;
