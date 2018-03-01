import React from 'react';

const UsersNewOrganization = ({ organizationChange, organizationSubmit, newOrganization }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={organizationSubmit}>
      <div className="form-group">
        <strong>Organization&#39;s Name</strong>
        <input
          type="text"
          name="name"
          placeholder="Organization's Name"
          onChange={organizationChange}
          value={newOrganization.name}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <strong>Webpage</strong>
        <input
          type="text"
          name="url"
          placeholder="Organization&#39;s Title"
          onChange={organizationChange}
          value={newOrganization.url}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <strong>Phone Number</strong>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={organizationChange}
          value={newOrganization.phoneNumber}
          className="form-control"
        />
      </div>
      <button className="btn">Add Organization</button>
    </form>
  );
};

export default UsersNewOrganization;
