
import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class IndexPlan extends Component {

  GetCrisisPlan = () => {
    Axios
      .get('/api/crisisPlan', {headers: {Authorization: `Bearer ${Auth.getPayload()}`}})
      .then(res => {
        
      })
  }

  render() {
    return(
      <div>
        <p>choose a plan that you would like to work on.</p>
        <button onClick={this.GetCrisisPlan}> My Crisis Plan </button>
      </div>
    );
  }
}

export default IndexPlan;
