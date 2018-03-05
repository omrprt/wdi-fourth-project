import React, { Component } from 'react';
import Axios                from 'axios';

import Auth              from '../../lib/Auth';
import { Grid, Row, Col} from 'react-bootstrap';

class Diary extends Component {
  state = {
    newDiary: {
      title: '',
      situation: '',
      emotions: [],
      thought: '',
      evidenceFor: '',
      evidenceAgainst: ''
    },
    newEmotion: {
      feeling: '',
      rating: ''
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

  diarySubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/diaries/', this.state.newDiary, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
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

  handleEmotionChange = ({ target: { name, value }}) => {
    const emotion = Object.assign({}, this.state.newEmotion, { [name]: value });
    this.setState({ newEmotion: emotion }, () => console.log('this.state',this.state));

  }

  handleEmotionSubmit = () => {
    const newEmotionsArray = [...this.state.newDiary.emotions, this.state.newEmotion];
    console.log(newEmotionsArray);
    const updatedDiary = Object.assign({}, this.state.newDiary, {emotions: newEmotionsArray});

    this.setState({ newDiary: updatedDiary, newEmotion: { feeling: '', rating: ''}}, () => console.log('this.state',this.state));
  }

  render() {
    return(
      <div>
        <form onSubmit={this.diarySubmit} id="diaryForm">

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



          <Grid>
            <Row>
              <Col xs={6} md={6}>
                <strong>Feeling</strong>
              </Col>
              <Col xs={6} md={6}>
                <strong>0(mild)-10(intense)</strong>
              </Col>

            </Row>
            <Row className="show-grid">
              <Col xs={5} md={5}>
                <div className="form-group ">

                  <input
                    type="text"
                    name="feeling"
                    placeholder="Feeling"
                    onChange={this.handleEmotionChange}
                    value={this.state.newEmotion.feeling}
                    className="form-control"
                  />
                </div>
              </Col>
              <Col xs={5} md={5}>
                <div className="form-group">
                  <select
                    type="number"
                    name="rating"
                    onChange={this.handleEmotionChange}
                    value={this.state.newEmotion.rating}>

                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </Col>
              <Col xs={2} md={2}>
                <div >
                  <button type="button" className="btn" onClick={ this.handleEmotionSubmit }>+</button>
                </div>
              </Col>
            </Row>

            <Row>
              { this.state.newDiary.emotions && this.state.newDiary.emotions.map((emotion, i) =>
                <div key={ i }>
                  <div className="formFeelings">
                    <Col xs={6} md={6}>
                      <p>{emotion.feeling}</p>
                    </Col>
                    <Col xs={6} md={6}>
                      <p>{emotion.rating}</p>
                    </Col>
                  </div>
                </div>
              )}
            </Row>
          </Grid>

          <div className="form-group">
            <strong>What was your thought?</strong>
            <input
              type="text"
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
              type="text"
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
              type="text"
              name="evidenceAgainst"
              placeholder="Evidence against that thought"
              onChange={this.diaryChange}
              value={this.state.newDiary.evidenceAgainst}
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
