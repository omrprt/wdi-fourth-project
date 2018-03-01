import React from 'react';

const UsersNewFamilyandFriends = ({ familyAndFriendsChange, familyAndFriendsSubmit, newFamilyAndFriends }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={familyAndFriendsSubmit}>
      <div className="form-group">
        <strong>Family or Friend&#39;s Name</strong>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={familyAndFriendsChange}
          value={newFamilyAndFriends.name}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <strong>Relationship to You</strong>
        <input
          type="text"
          name="relationship"
          placeholder="Relationship to you"
          onChange={familyAndFriendsChange}
          value={newFamilyAndFriends.relationship}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <strong>Phone Number</strong>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={familyAndFriendsChange}
          value={newFamilyAndFriends.phoneNumber}
          className="form-control"
        />
      </div>
      <button className="btn">Add Professional</button>
    </form>
  );
};

export default UsersNewFamilyandFriends;
