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
        rating: '0'
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
        rating: '0'
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
    }, () => console.log('here', this.state));
  }

  handleEmotionChange = ({ target: { name, value }}) => {
    const emotion = Object.assign({}, this.state.newDiary.emotion[0], { [name]: value });

    const newDiary = Object.assign({}, this.state.newDiary, { emotion: [emotion]});
    this.setState({ newDiary });
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
          IN THOUGHT DIARY!!!
        <form onSubmit={this.diarySubmit}>

          <div className="form-group">
            <strong>Diary&#39;s Name</strong>
            <input
              type="text"
              name="title"
              placeholder="Diary's Name"
              onChange={this.diaryChange}
              value={this.state.newDiary.title}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Situation</strong>
            <input
              type="text"
              name="situation"
              placeholder="Situation Description"
              onChange={this.diaryChange}
              value={this.state.newDiary.situation}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>Feeling</strong>
            <input
              type="text"
              name="feeling"
              placeholder="Name the Feeling"
              onChange={this.handleEmotionChange}
              value={this.state.newDiary.emotion.feeling}
              className="form-control"
            />
          </div>

          <div className="form-group">
    
            <strong>Rating 0-10</strong>
            <input
              type="range"
              min="0"
              max="10"
              name="rating"
              placeholder="Rating"
              onChange={this.handleEmotionChange}
              value={this.state.newDiary.emotion[0].rating}
              className="form-control"
            />
            <p>{ this.state.newDiary.emotion[0].rating }</p>
          </div>

          <div className="form-group">
            <strong>What was your thought?</strong>
            <input
              type="tel"
              name="thought"
              placeholder="What was your thought?"
              onChange={this.diaryChange}
              value={this.state.newDiary.thought}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>What is the evidence to support that thought?</strong>
            <input
              type="tel"
              name="evidenceFor"
              placeholder="Evidence Supporting supporting your thought"
              onChange={this.diaryChange}
              value={this.state.newDiary.evidenceFor}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <strong>What is the evidence against that thought? </strong>
            <input
              type="tel"
              name="evidenceAgainst"
              placeholder="Evidence against that thought"
              onChange={this.diaryChange}
              value={this.state.newDiary.evidenceAgainst}
              className="form-control"
            />
          </div>

          <button className="btn">Add Diary</button>
        </form>

        {/* <ul>
          {this.diaryChange.map((diary, index) =>
            <li key={index}>
              {diary.title}
            </li>
          )}
        </ul> */}
      </div>
    );
  }
}

export default Diary;
