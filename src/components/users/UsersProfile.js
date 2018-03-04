import React, { Component }      from 'react';
import Axios                     from 'axios';
import { Panel, Grid, Row, Col, Tabs, Tab, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Link }                  from 'react-router-dom';
import Auth                      from '../../lib/Auth';

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
        <div className="xMobile">
          <h3 className="text-center">How are you feeling today { this.state.user.firstName}?</h3>

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

          <Panel>
            <Panel.Heading>
              <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
              <Panel.Title>My Support Network</Panel.Title>
              <Link to={`/users/${this.state.user.id}/mynetwork`}><i className="fa fa-user-plus fa-2x"></i></Link>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>

                <Grid>
                  <Panel className="contacts">
                    <Panel.Heading  ><h3>My Friends and Family Support</h3></Panel.Heading>
                    <ListGroup>
                      {this.state.user.myFamilyandFriends && this.state.user.myFamilyandFriends.map((myFamilyandFriend, index) =>
                        <div key={index}>
                          <ListGroupItem>
                            <Row className="show-grid">
                              <Col xs={4} md={4}>
                                {myFamilyandFriend.name}
                              </Col>
                              <Col xs={4} md={4}>
                                {myFamilyandFriend.relationship}
                              </Col>
                              <Col xs={4} md={4}>
                                <a href={`tel:${myFamilyandFriend.phoneNumber}`}><i className="fa fa-phone-square"></i> {myFamilyandFriend.phoneNumber}</a>
                              </Col>
                            </Row>
                          </ListGroupItem>
                        </div>
                      )}
                    </ListGroup>
                  </Panel>
                </Grid>

                <Grid>
                  <Panel className="contacts">
                    <Panel.Heading ><h3>My Professional Support</h3></Panel.Heading>
                    <ListGroup>
                      {this.state.user.myProfessionals && this.state.user.myProfessionals.map((myProfessional, index) =>
                        <div key={index}>
                          <ListGroupItem>
                            <Row className="show-grid">
                              <Col xs={4} md={4}>
                                {myProfessional.name}
                              </Col>
                              <Col xs={4} md={4}>
                                {myProfessional.profession}
                              </Col>
                              <Col xs={4} md={4}>
                                <a href={`tel:${myProfessional.phoneNumber}`}><i className="fa fa-phone-square"></i> {myProfessional.phoneNumber}</a>
                              </Col>
                            </Row>
                          </ListGroupItem>
                        </div>
                      )}
                    </ListGroup>
                  </Panel>
                </Grid>

                <Grid>
                  <Panel className="contacts">
                    <Panel.Heading ><h3>Organizations</h3></Panel.Heading>
                    <ListGroup>
                      {this.state.user.myOrganizations && this.state.user.myOrganizations.map((myOrganizations, index) =>
                        <div key={index}>
                          <ListGroupItem>
                            <Row className="show-grid">
                              <Col xs={8} md={8}>
                                <a href={ myOrganizations.url}><i className="fa fa-globe"></i> {myOrganizations.name}
                                </a>
                              </Col>
                              <Col xs={4} md={4}>
                                <a href={`tel:${myOrganizations.phoneNumber}`}><i className="fa fa-phone-square"></i> {myOrganizations.phoneNumber}</a>
                              </Col>

                            </Row>
                          </ListGroupItem>
                        </div>
                      )}
                    </ListGroup>
                  </Panel>
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

        <div className="xFull">
          <Tabs defaultActiveKey={1} id="fullTabs">
            <Tab eventKey={1} title="Thought Diary">
              <ul>
                {this.state.user.diaries && this.state.user.diaries.map((diary, index) =>
                  <li key={index}>
                    <Link to={`/diaries/${diary._id}`}>{diary.title}</Link>
                  </li>
                )}
              </ul>
            </Tab>
            <Tab eventKey={2} title="My Support Network">
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
                        <a href={`tel:${myFamilyandFriend.phoneNumber}`}><i className="fa fa-phone-square"></i> {myFamilyandFriend.phoneNumber}</a>

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
                        <a href={`tel:${myProfessional.phoneNumber}`}><i className="fa fa-phone-square"></i> {myProfessional.phoneNumber}</a>
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
                      <Col xs={8} md={8}>
                        <a href={ myOrganizations.url}><i className="fa fa-globe"></i> {myOrganizations.name}
                        </a>
                      </Col>
                      <Col xs={4} md={4}>
                        <a href={`tel:${myOrganizations.phoneNumber}`}><i className="fa fa-phone-square"></i> {myOrganizations.phoneNumber}</a>
                      </Col>

                    </Row>
                  </div>
                )}
              </Grid>
            </Tab>
            <Tab eventKey={3} title="My Plans">
              Tab 3 content
            </Tab>
          </Tabs>

        </div>


      </div>
    );
  }
}

export default UsersProfile;
