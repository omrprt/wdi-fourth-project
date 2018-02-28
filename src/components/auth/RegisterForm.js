import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={user.firstName}
          className="form-control"
        />
        { errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={user.lastName}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="form-control"
        />
        { errors.firstname && <p>{errors.firstname}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
      </div>

      <button  disabled={formIsInvalid} className="btn">Register</button>
    </form>
  );
};

export default RegisterForm;
