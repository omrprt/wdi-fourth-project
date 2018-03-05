import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Nav = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }


  return (
    <header>
      <div className="container">
        <h1>My Mental Health Planner</h1>
      </div>
      { !Auth.isAuthenticated() && <Link to="/"
        className="standard-button">Home </Link>}

      { !Auth.isAuthenticated() && <span className="navDivider"> | </span>}
      { !Auth.isAuthenticated() && <Link to="/login" className="standard-button">  Login</Link>}
      { !Auth.isAuthenticated() && <span className="navDivider"> | </span>}
      { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">  Register</Link> }
      { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`} className="standard-button">  My Profile</Link> }
      { Auth.isAuthenticated() && <span className="navDivider"> | </span>}
      { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>  Logout</a> }
    </header>
  );
};

export default withRouter(Nav);
