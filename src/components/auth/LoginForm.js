import React from 'react';

import { Grid, Row, Col} from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, user, error}) => {
  const formIsInvalid = !!error;

  return (

    <form onSubmit={handleSubmit}>
      <div className="xMobile loginMobile">
        <div className="form-group">
          <strong>Email</strong>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <strong>Password</strong>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>
        { error && <p>{error}</p> }
      </div>

      <div className="xFull loginFull">

        <Grid>

          <Row className="show-grid">
            <Col xs={4}>
              <strong>Email</strong>
            </Col>
            <Col xs={8}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                className="form-control"
              />
            </Col>

          </Row>

          <Row className="show-grid">
            <Col xs={4}>
              <strong>Password</strong>
            </Col>
            <Col xs={8}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                className="form-control"
              />
            </Col>

          </Row>
          { error && <p>{error}</p> }
        </Grid>

      </div>

      <button disable={formIsInvalid} className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
