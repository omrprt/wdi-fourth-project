import React from 'react';
import Axios from 'axios';

import RegisterForm from './RegisterForm';
import Auth from '../../lib/Auth';

class Register extends React.Component {

  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        const id = Auth.getPayload().userId;
        this.props.history.push(`/users/${id}`);
      })

      .catch(err => this.setState({ errors: err.response.data.errors}, () => console.log(this.state)));

  }

  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

export default Register;
