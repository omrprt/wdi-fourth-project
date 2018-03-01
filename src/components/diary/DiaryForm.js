import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class Diary extends Component {
  state = {
    diary: {
      title: '',
      situation: '',
      emotion: [{
        feeling: '',
        rating: ''
      }],
      thought: '',
      evidenceFor: '',
      evidenceAgainst: ''
    },

    newDiary: {
      title: '',
      situation: '',
      emotion: [{
        feeling: '',
        rating: ''
      }],
      thought: '',
      evidenceFor: '',
      evidenceAgainst: ''
    },

    errors: {}
  }

  diaryChange = ({ target: { name, value } }) => {
    const newDiary = Object.assign({}, this.state.newDiary, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.newDiary = newDiary;
      return newState;
    }, () => console.log(this.state));
  }

  diarySubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/diary/', this.state.newDiary, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          console.log(prevState);
          const newState = prevState;

          newState.user = res.data;
          newState.newDiary = {
            title: '',
            situation: '',
            emotion: [{
              feeling: '',
              rating: ''
            }],
            thought: '',
            evidenceFor: '',
            evidenceAgainst: ''
          };
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
          IN DIARY!!!
        <form onSubmit={this.state.diarySubmit}>

          <div className="form-group">
            <strong>Diary&#39;s Name</strong>
            <input
              type="text"
              name="title"
              placeholder="Diary's Name"
              onChange={this.state.diaryChange}
              value={this.state.newDiary.title}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Diary&#39;s Name</strong>
            <input
              type="text"
              name="situation"
              placeholder="Diary's Name"
              onChange={this.state.diaryChange}
              value={this.state.newDiary.situation}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Feeling</strong>
            <input
              type="text"
              name="feeling"
              placeholder="Diary&#39;s Title"
              onChange={this.state.diaryChange}
              value={this.state.newDiary.url}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Phone Number</strong>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={this.state.diaryChange}
              value={this.state.newDiary.phoneNumber}
              className="form-control"
            />
          </div>
          <button className="btn">Add Diary</button>
        </form>
      </div>
    );
  }
}

export default Diary;
