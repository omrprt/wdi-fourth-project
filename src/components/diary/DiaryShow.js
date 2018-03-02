import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class DiaryShow extends Component {
  state = {
    diary: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/diaries/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({ diary: res.data }));
  }

  render() {
    return(
      <div>
        { this.state.diary.title &&
          <div>
            { Auth.getPayload().userId === this.state.diary.createdBy.id ?
              (
                <div>
                  <p>This is the diary</p>,
                  <p>{this.state.diary.title}</p>
                </div>

              )
              :
              (<p>Please go back</p>)
            }
          </div>
        }
      </div>
    );
  }
}

export default DiaryShow;
