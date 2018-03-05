import React, { Component } from 'react';
import Axios                from 'axios';
import Auth                      from '../../lib/Auth';

class CrisisPlanForm extends Component {

  state = {
    crisisPlan: {
      signs: [],
      strategies: []
    },

    newSigns: {},

    newStrategies: {}

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


  render() {

    return(
      <div>
        in crisis plan
        <form onSubmit={this.signSubmit}>
          <div className="xMobile loginMobile">
            <div className="form-group">

              <strong>MY WARNING SIGNS</strong>
              <input
                type="text"
                name="signs"
                placeholder="Warning Signs"
                onChange={this.signChange}
                value={this.state.newSign}
                className="form-control"
              />
            </div>

            <button className="btn">Add a Warning Sign</button>
          </div>
        </form>

      </div>
    );
  }
}

export default CrisisPlanForm;
