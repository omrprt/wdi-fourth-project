import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <strong>First Name</strong>
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
        <strong>Last Name</strong>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={user.lastName}
          className="form-control"
        />
        { errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <strong>Username</strong>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="form-control"
        />
        { errors.username && <p>{errors.username}</p>}
      </div>
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
        { errors.email && <p>{errors.email}</p>}
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
        { errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-group">
        <strong>Password Confirmation</strong>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
        { errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
      </div>

      <button  disabled={formIsInvalid} className="btn">Register</button>
    </form>
  );
};

export default RegisterForm;
