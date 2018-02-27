import React, { Component }    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/utility/Nav';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register"   component={ Register } />


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
