import React, { Component } from 'react';
import Axios from 'axios';

class UsersProfile extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <p>Hello</p>
        <h3>{ this.state.user.firstName}</h3>
      </div>
    );
  }
}

export default UsersProfile;
