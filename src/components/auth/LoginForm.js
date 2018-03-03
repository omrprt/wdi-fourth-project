import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user}) => {


  return (
    <form onSubmit={handleSubmit}>
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
      <button className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
