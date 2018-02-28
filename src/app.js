import React, { Component }    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import UsersRoutes from './components/users/UsersRoutes';
import Nav from './components/utility/Nav';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <main className="container">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={ Register } />
              <UsersRoutes />

            </Switch>

          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
