import React, { Component } from 'react';
import Axios from 'axios';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class UsersProfile extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)));
  }

  render() {
    return(
      <div>
        <h3>How are you feeling today { this.state.user.firstName}?</h3>

        <Panel >
          <Panel.Heading>
            <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
            <Panel.Title>Thought Diary</Panel.Title>
            <Link to={'/diaries'}>  <i className="fa fa-edit fa-2x"></i></Link>
          </Panel.Heading>

          <Panel.Collapse>
            <Panel.Body>
              <ul>
                {this.state.user.diaries && this.state.user.diaries.map((diary, index) =>
                  <li key={index}>
                    <Link to={`/diaries/${diary._id}`}>{diary.title}</Link>
                  </li>
                )}
              </ul>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel >
          <Panel.Heading>
            <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
            <Panel.Title>My Support Network</Panel.Title>
            <Link to={`/users/${this.state.user.id}/mynetwork`}><i className="fa fa-user-plus fa-2x"></i></Link>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>

              <Grid>
                <h3>My Friends and Family Support</h3>
                {this.state.user.myFamilyandFriends && this.state.user.myFamilyandFriends.map((myFamilyandFriend, index) =>
                  <div key={index}>
                    <Row className="show-grid">
                      <Col xs={4} md={4}>
                        {myFamilyandFriend.name}
                      </Col>
                      <Col xs={4} md={4}>
                        {myFamilyandFriend.relationship}
                      </Col>
                      <Col xs={4} md={4}>
                        <a href={`tel:${myFamilyandFriend.phoneNumber}`}>{myFamilyandFriend.phoneNumber}</a>

                      </Col>
                    </Row>
                  </div>
                )}
              </Grid>


              <Grid>
                <h3>My Professional Support</h3>
                {this.state.user.myProfessionals && this.state.user.myProfessionals.map((myProfessional, index) =>
                  <div key={index}>
                    <Row className="show-grid">
                      <Col xs={4} md={4}>
                        {myProfessional.name}
                      </Col>
                      <Col xs={4} md={4}>
                        {myProfessional.profession}
                      </Col>
                      <Col xs={4} md={4}>
                        <a href={`tel:${myProfessional.phoneNumber}`}>{myProfessional.phoneNumber}</a>
                      </Col>
                    </Row>
                  </div>
                )}
              </Grid>


              <Grid>
                <h3>Organizations</h3>
                {this.state.user.myOrganizations && this.state.user.myOrganizations.map((myOrganizations, index) =>
                  <div key={index}>
                    <Row className="show-grid">
                      <Col xs={6} md={6}>
                        <a href={ myOrganizations.url}>
                          {myOrganizations.name}
                        </a>
                      </Col>
                      <Col xs={6} md={6}>
                        <a href={`tel:${myOrganizations.phoneNumber}`}>{myOrganizations.phoneNumber}</a>
                      </Col>

                    </Row>
                  </div>
                )}
              </Grid>


            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel  >
          <Panel.Heading>
            <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
            <Panel.Title>My Plans</Panel.Title>
            <Link to={'/myplans'}>  <i className="fa fa-book fa-2x"></i></Link>
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
