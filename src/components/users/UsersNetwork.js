import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';


class UsersNetwork extends Component {
  state = {
    user: {
      myProfessionals: [{
        name: {type: String},
        profession: {type: String},
        phoneNumber: {type: String}
      }],
      myFamilyandFriends: [{
        name: {type: String},
        relationship: {type: String},
        phoneNumber: {type: String}
      }],
      errors: {}}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/users/${this.props.match.params.id}`, this.state.user, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then(res => this.props.history.push(`/users/${res.data.id}/mynetwork`))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <p>in network page</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <strong>Professional&#39;s Name</strong>
            <input
              type="text"
              name="name"
              placeholder="Professional's Name"
              onChange={this.handleChange}
              value={this.state.user.myProfessionals.name}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Password</strong>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.user.myProfessionals.profession}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Password</strong>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.user.myProfessionals.phoneNumber}
              className="form-control"
            />
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    );
  }
}

export default UsersNetwork;
