import React, { Component } from 'react';
import Axios from 'axios';
import { Panel } from 'react-bootstrap';

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
        <h3>How are you feeling today { this.state.user.firstName}?</h3>

        <Panel >
          <Panel.Heading>
            <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
            <Panel.Title>Thought Diary</Panel.Title>
            <Panel.Toggle href="http://www.google.com"><i className="fa fa-edit fa-2x"></i></Panel.Toggle>
          </Panel.Heading>

          <Panel.Collapse>
            <Panel.Body>
              Jane 594-3985
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel >
          <Panel.Heading>
            <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
            <Panel.Title>My Network</Panel.Title>
            <Panel.Toggle componentClass="a"><i className="fa fa-user-plus fa-2x"></i></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Jane 594-3985
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel  >
          <Panel.Heading>
            <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
            <Panel.Title>My Plans</Panel.Title>

          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Jane 594-3985
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

      </div>
    );
  }
}

export default UsersProfile;
