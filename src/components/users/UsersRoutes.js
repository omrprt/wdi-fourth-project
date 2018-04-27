import React from 'react';
import { Switch, Route }     from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import Index from '../utility/Index';
import UsersProfile   from './UsersProfile';
import UsersNetwork   from './UsersNetwork';
import DiaryForm      from '../diary/DiaryForm';
import DiaryShow      from '../diary/DiaryShow';
import IndexPlan      from '../plan/IndexPlan';
import CrisisPlanForm from '../plan/CrisisPlanForm';


const UsersRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <ProtectedRoute path="/users/:id/mynetwork" component={UsersNetwork} />
      <ProtectedRoute path="/users/:id" component={UsersProfile} />
      <ProtectedRoute path="/diaries/:id" component={DiaryShow} />
      <ProtectedRoute path="/diaries" component={DiaryForm} />
      <ProtectedRoute path="/myplans/crisisplan/:id" component={CrisisPlanForm} />
      <ProtectedRoute path="/myplans" component={IndexPlan} />
    </Switch>
  );
};

export default UsersRoutes;
