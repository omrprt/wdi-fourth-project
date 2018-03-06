import React, { Component } from 'react';
import Axios                from 'axios';
import Auth                 from '../../lib/Auth';

class IndexPlan extends Component {

  GetCrisisPlan = () => {
    Axios
      .get('/api/crisisPlan', {headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.props.history.push(`/myplans/crisisplan/${res.data._id}`);
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="planIndex">
        <h3>Choose a plan</h3>
        <button onClick={this.GetCrisisPlan}> Crisis Plan </button>
        <h4>
          <p>Upcoming plans:</p>
          <p>Recovery Plan</p>
          <p>Anxiety Management</p>
          <p>Self-Harm Reduction</p>
          <p>Alcohol Misuse</p>

        </h4>
      </div>
    );
  }
}

export default IndexPlan;
