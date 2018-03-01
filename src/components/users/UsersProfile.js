import React, { Component } from 'react';
import Axios from 'axios';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Link to={'/diary'}>  <i className="fa fa-edit fa-2x"></i></Link>
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
            <Link to={`/users/${this.state.user.id}/mynetwork`}><i className="fa fa-user-plus fa-2x"></i></Link>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ul>
                {this.state.user.myFamilyandFriends && this.state.user.myFamilyandFriends.map((myFamilyandFriend, index) =>
                  <li key={index}>
                    {myFamilyandFriend.name}
                    {myFamilyandFriend.relationship}
                    {myFamilyandFriend.phoneNumber}
                  </li>
                )}
              </ul>

              <ul>
                {this.state.user.myProfessionals && this.state.user.myProfessionals.map((myProfessional, index) =>
                  <li key={index}>
                    {myProfessional.name}
                    {myProfessional.profession}
                    {myProfessional.phoneNumber}
                  </li>
                )}
              </ul>

              <ul>
                {this.state.user.myOrganizations && this.state.user.myOrganizations.map((myOrganizations, index) =>
                  <li key={index}>
                    {myOrganizations.name}
                    {myOrganizations.url}
                    {myOrganizations.phoneNumber}
                  </li>
                )}
              </ul>
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
