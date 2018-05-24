import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';


class Index extends Component {

  render() {
    return (

      <div>

        <h2>
          Welcome to My Mental Health Planner, this web application is a tool to use in addition to your support network, to manage your mental health.

          <div className="emergency">
            In case of an emergency call 999 or go to your nearest hospital.
          </div>
        </h2>
        <Grid>
          <Row className="description" >
            <Col l={12} className="description_diary">
              <h5>Log a cognitive behaviour therapy thought diary</h5>
              <img src="./assets/images/thought_diary.png"/>
            </Col>
            <Col  l={12} className="description_network">
              <h5>Keep track of your support network</h5>
              <img src="./assets/images/contacts.png"/>

            </Col>
            <Col  l={12} className="description_plans">
              <h5>Create your treatment plans</h5>
              <img src="./assets/images/plan.png"/>
            </Col>
          </Row>
        </Grid>
        <div>
          <p>This started as a final project for a web development immersive course with General Assembly, and it is only meant for testing, with the hope of developing into a comprehensive web application.</p>
        </div>
      </div>
    );
  }
}

export default Index;
