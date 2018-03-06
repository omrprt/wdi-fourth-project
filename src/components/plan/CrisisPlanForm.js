import React, { Component } from 'react';
import Axios                from 'axios';
import Auth                 from '../../lib/Auth';

import { Grid, Row, Col} from 'react-bootstrap';

class CrisisPlanForm extends Component {

  state = {
    crisisPlan: {
      title: 'My Crisis Plan',
      signs: [],
      strategies: []
    },

    newSign: {},

    newStrategy: {}

  }

  componentDidMount() {
    Axios
      .get(`/api/crisisPlan/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState(prevState => {
        const newState = prevState;
        newState.crisisPlan.signs = res.data.signs;
        newState.crisisPlan.strategies = res.data.strategies;
        return newState;
      }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }


  signChange = ({ target: { name, value } }) => {
    const newSign = Object.assign({}, this.state.newSign, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.newSign = newSign;
      return newState;
    }, () => console.log(this.state));
  }

  signSubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/crisisPlan/${this.props.match.params.id}/signs`, this.state.newSign, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          console.log(prevState);
          const newState = prevState;

          newState.user = res.data;
          newState.newSign = '';
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  strategyChange = ({ target: { name, value } }) => {
    const newStrategy = Object.assign({}, this.state.newstrategies, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.newStrategy = newStrategy;
      return newState;
    }, () => console.log(this.state));
  }

  strategySubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/crisisPlan/${this.props.match.params.id}/strategies`, this.state.newstrategy, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          console.log(prevState);
          const newState = prevState;

          newState.user = res.data;
          newState.newstrategy = '';
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }


  render() {

    return(
      <div className="planForm">
        <h3>My Crisis Plan</h3>
        <div className="xMobile">
          <form onSubmit={this.signSubmit}>
            <div className="form-group">
              <strong>MY WARNING SIGNS</strong>
              <Grid>
                <Row>
                  <Col xs={10} md={10}>
                    <input
                      type="text"
                      name="signs"
                      placeholder="Warning Signs"
                      onChange={this.signChange}
                      value={this.state.newSign}
                      className="form-control"
                    />
                  </Col>
                  <Col xs={2} md={2}>
                    <button className="btn">+</button>
                  </Col>
                </Row>
              </Grid>
            </div>
          </form>

          <form onSubmit={this.strategySubmit}>
            <div className="form-group">
              <strong>MY WARNING SIGNS</strong>
              <Grid>
                <Row>
                  <Col xs={10} md={10}>
                    <input
                      type="text"
                      name="strategies"
                      placeholder="Coping strategies"
                      onChange={this.strategyChange}
                      value={this.state.newStrategy}
                      className="form-control"
                    />
                  </Col>
                  <Col xs={2} md={2}>
                    <button className="btn">+</button>
                  </Col>
                </Row>
              </Grid>

            </div>
          </form>


        </div>
      </div>
    );
  }
}

export default CrisisPlanForm;
