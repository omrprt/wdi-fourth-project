import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import UsersProfile from './UsersProfile';
import UsersNetwork from './UsersNetwork';
import DiaryForm from '../diary/DiaryForm';
import DiaryShow from '../diary/DiaryShow';

const UsersRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/users/:id/mynetwork" component={UsersNetwork} />
      <ProtectedRoute path="/users/:id" component={UsersProfile} />
      <ProtectedRoute path="/diary/:id" component={DiaryShow} />
      <ProtectedRoute path="/diary" component={DiaryForm} />
    </Switch>
  );
};

export default UsersRoutes;
