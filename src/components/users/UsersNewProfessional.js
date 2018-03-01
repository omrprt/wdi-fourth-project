import React from 'react';

const UsersNewProfessional = ({ handleChange, professionalSubmit, user, errors }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={professionalSubmit}>
      <div className="form-group">
        <strong>Professional&#39;s Name</strong>
        <input
          type="text"
          name="name"
          placeholder="Professional's Name"
          onChange={handleChange}
          value={user.newProfessional.name}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <strong>Professional&#39;s Title</strong>
        <input
          type="text"
          name="profession"
          placeholder="Professional&#39;s TitlePassword"
          onChange={handleChange}
          value={user.newProfessional.profession}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <strong>Phone Number</strong>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          value={user.newProfessional.phoneNumber}
          className="form-control"
        />
      </div>
      <button className="btn">Add Professional</button>
    </form>
  );
};

export default UsersNewProfessional;
