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

    newSign: '',

    newStrategy: ''

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


  signChange = ({ target: { value } }) => {
    this.setState({ newSign: value }, () => console.log(this.state));
  }

  signSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newSign);
    Axios
      .post(`/api/crisisPlan/${this.props.match.params.id}/signs`, this.state, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        console.log(res.data);
        this.setState({crisisPlan: res.data, newSign: '', newStrategy: ''}, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  strategyChange = ({ target: { value } }) => {
    this.setState({ newStrategy: value }, () => console.log(this.state));
  }

  strategySubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newStrategy);
    Axios
      .post(`/api/crisisPlan/${this.props.match.params.id}/strategies`, this.state, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        console.log(res.data);
        this.setState({crisisPlan: res.data, newSign: '', newStrategy: ''}, () => console.log(this.state));
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
                <Row>


                  {this.state.crisisPlan.signs && this.state.crisisPlan.signs.map((sign, index) => {
                    return (<div key={index}>
                      <Row >
                        <p>{ sign }</p>
                      </Row>
                    </div>);
                  })}
                </Row>
              </Grid>
            </div>
          </form>

          <form onSubmit={this.strategySubmit}>
            <div className="form-group">
              <strong>MY Coping Strategies</strong>
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
                <Row>


                  {this.state.crisisPlan.strategies && this.state.crisisPlan.strategies.map((strategy, index) => {
                    return (<div key={index}>
                      <Row >
                        <p>{ strategy }</p>
                      </Row>
                    </div>);
                  })}


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
