import React , { Component } from 'react';
import Axios                 from 'axios';
import Auth                  from '../../lib/Auth';
import { PanelGroup, Panel } from 'react-bootstrap';

import UsersNewFamilyandFriends from './UsersNewFamilyAndFriends';
import UsersNewProfessional     from './UsersNewProfessional';
import UsersNewOrganization     from './UsersNewOrganization';

class UsersNetwork extends Component {

  state = {
    user: {
      myProfessionals: [
        {
          name: '',
          profession: '',
          phoneNumber: ''
        }
      ],
      myFamilyandFriends: [
        {
          name: '',
          relationship: '',
          phoneNumber: ''
        }
      ],
      myOrganizations: [
        {
          name: '',
          url: '',
          phoneNumber: ''
        }
      ]
    },

    newProfessional: {
      name: '',
      profession: '',
      phoneNumber: ''
    },

    newFamilyAndFriends: {
      name: '',
      relationship: '',
      phoneNumber: ''
    },

    newOrganization: {
      name: '',
      url: '',
      phoneNumber: ''
    },

    errors: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState(prevState => {
        const newState = prevState;
        newState.user.myProfessionals = res.data.myProfessionals;
        newState.user.myFamilyandFriends = res.data.myFamilyandFriends;
        newState.user.myOrganizations = res.data.myOrganizations;
        return newState;
      }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  professionalChange = ({ target: { name, value } }) => {
    const newProfessional = Object.assign({}, this.state.newProfessional, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.newProfessional = newProfessional;
      return newState;
    }, () => console.log(this.state));
  }

  professionalSubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/users/${this.props.match.params.id}/professionals`, this.state.newProfessional, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          const newState = prevState;

          newState.user = res.data;
          newState.newProfessional = {
            name: '',
            profession: '',
            phoneNumber: ''
          };
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  familyAndFriendsChange = ({ target: { name, value } }) => {
    const newFamilyAndFriends = Object.assign({}, this.state.newFamilyAndFriends, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.newFamilyAndFriends = newFamilyAndFriends;
      return newState;
    }, () => console.log(this.state));
  }


  familyAndFriendsSubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/users/${this.props.match.params.id}/familyandfriends`, this.state.newFamilyAndFriends, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          const newState = prevState;
          newState.user = res.data;
          newState.newFamilyAndFriends = {
            name: '',
            relationship: '',
            phoneNumber: ''
          };
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  organizationChange = ({ target: { name, value } }) => {
    const newOrganization = Object.assign({}, this.state.newOrganization, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.newOrganization = newOrganization;
      return newState;
    }, () => console.log(this.state));
  }

  organizationSubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/users/${this.props.match.params.id}/organizations`, this.state.newOrganization, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          const newState = prevState;

          newState.user = res.data;
          newState.newOrganization = {
            name: '',
            url: '',
            phoneNumber: ''
          };
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="supportView">

        <h3>My Support Network</h3>
        <PanelGroup accordion id="accordion-example" defaultexpanded="true">
          <Panel eventKey="1" >
            <Panel.Heading className="family_friends">
              <Panel.Title toggle>Add a Family or Friend</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <UsersNewFamilyandFriends
                newFamilyAndFriends={this.state.newFamilyAndFriends}
                familyAndFriendsChange={this.familyAndFriendsChange}
                familyAndFriendsSubmit={this.familyAndFriendsSubmit}
                errors={this.state.errors}
              />

            </Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading className="professionals">
              <Panel.Title toggle>Add a Professional</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <UsersNewProfessional
                newProfessional={this.state.newProfessional}
                professionalChange={this.professionalChange}
                professionalSubmit={this.professionalSubmit}
                errors={this.state.errors}
              />

            </Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading className="organizations">
              <Panel.Title toggle>Add an Organization</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <UsersNewOrganization
                newOrganization={this.state.newOrganization}
                organizationChange={this.organizationChange}
                organizationSubmit={this.organizationSubmit}
                errors={this.state.errors}
              />
            </Panel.Body>
          </Panel>
        </PanelGroup>

      </div>
    );
  }
}

export default UsersNetwork;
