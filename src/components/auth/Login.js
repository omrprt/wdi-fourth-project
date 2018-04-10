import React     from 'react';
import Axios     from 'axios';

import LoginForm from './LoginForm';

import Auth      from '../../lib/Auth';

class Login extends React.Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    error: ''
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    const error = '';
    this.setState({ user, error });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/login', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        const id = Auth.getPayload().userId;
        this.props.history.push(`/users/${id}`);
      })
      .catch(err => {
        console.log(err);
        this.setState({error: err.response.data.message});
      });
  }

  render() {
    return (
      <LoginForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default Login;
