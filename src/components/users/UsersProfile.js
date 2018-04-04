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
      <div className="homeView">
        <h3>How are you { this.state.user.firstName}?</h3>
        <div className="xMobile">

          <Panel >
            <Panel.Heading>
              <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
              <Panel.Title>Thought Diary</Panel.Title>
              <Link to={'/diaries'}>  <i className="fa fa-edit fa-2x"></i></Link>
            </Panel.Heading>

            <Panel.Collapse>
              <Panel.Body>


                <Grid>
                  {this.state.user.diaries && this.state.user.diaries.map((diary, index) =>
                    <div key={index}>

                      <Link to={`/diaries/${diary._id}`}>
                        <ListGroup>
                          <ListGroupItem className="dates">
                            <Row >
                              <Col xs={6} md={6}>
                                { (new Date(diary.createdAt)).toLocaleDateString('en-UK', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                              </Col>
                              <Col xs={6} md={6}>
                                {diary.title}
                              </Col>
                            </Row>

                          </ListGroupItem>
                        </ListGroup>

                      </Link>
                    </div>
                  )}
                </Grid>

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
                                <a href={ myOrganizations.url}><i className="fa fa-globe"></i> {myOrganizations.name}</a>
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

          <Panel>
            <Panel.Heading>
              <Panel.Toggle componentClass="a"><i className="fa fa-caret-down fa-3x"></i></Panel.Toggle>
              <Panel.Title>My Plans</Panel.Title>
              <Link to={'/myplans'}>  <i className="fa fa-book fa-2x"></i></Link>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>

                <Grid>
                  {this.state.user.plans && this.state.user.plans.map((plan, index) =>
                    <div key={index}>
                      <Link to={`/myplans/crisisplan/${plan._id}`}>
                        <ListGroup>
                          <ListGroupItem className="planNames">
                            <Row >
                              { plan.title }
                            </Row>

                          </ListGroupItem>
                        </ListGroup>
                      </Link>
                    </div>

                  )}

                </Grid>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>

        <div className="xFull">
          <Tabs defaultActiveKey={1} animation={false} id="fullTabs">
            <Tab eventKey={1} title="Thought Diary">

              <Grid>
                {this.state.user.diaries && this.state.user.diaries.map((diary, index) =>
                  <div key={index}>

                    <Link to={`/diaries/${diary._id}`}>
                      <ListGroup>
                        <ListGroupItem className="dates">
                          <Row >
                            <Col lg={6}>
                              { (new Date(diary.createdAt)).toLocaleDateString('en-UK', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                            </Col>
                            <Col lg={6}>
                              {diary.title}
                            </Col>
                          </Row>

                        </ListGroupItem>
                      </ListGroup>

                    </Link>
                  </div>
                )}
              </Grid>
            </Tab>
            <Tab eventKey={2} title="My Support Network">

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
            </Tab>
            <Tab eventKey={3} title="My Plans">
              <Grid>
                {this.state.user.plans && this.state.user.plans.map((plan, index) =>
                  <div key={index}>
                    <Link to={`/myplans/crisisplan/${plan._id}`}>
                      <ListGroup>
                        <ListGroupItem className="planNames">
                          <Row >
                            { plan.title }
                          </Row>

                        </ListGroupItem>
                      </ListGroup>
                    </Link>
                  </div>

                )}

              </Grid>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default UsersProfile;
