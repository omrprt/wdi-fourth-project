import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import UsersProfile from './UsersProfile';
import UsersNetwork from './UsersNetwork';
import DiaryForm from '../diary/DiaryForm';
import DiaryShow from '../diary/DiaryShow';
import IndexPlan from '../plan/IndexPlan';
import CrisisPlanForm from '../plan/CrisisPlanForm'

const UsersRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/users/:id/mynetwork" component={UsersNetwork} />
      <ProtectedRoute path="/users/:id" component={UsersProfile} />
      <ProtectedRoute path="/diaries/:id" component={DiaryShow} />
      <ProtectedRoute path="/diaries" component={DiaryForm} />
      <ProtectedRoute path="/myplans/crisisplan" component={CrisisPlanForm} />
      <ProtectedRoute path="/myplans" component={IndexPlan} />

    </Switch>
  );
};

export default UsersRoutes;
