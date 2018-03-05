import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { Grid, Row, Col} from 'react-bootstrap';

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
                <div className="diaryShow">
                  <Grid>
                    <Row className="diaryTitle">
                      <p><strong>{this.state.diary.title}</strong></p>
                    </Row>
                    <Row>
                      <em>  { (new Date(this.state.diary.createdAt)).toLocaleDateString('en-UK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} </em>
                    </Row>
                    <div className="diaryDetails container">
                      <Row>
                        <p>Situation: {this.state.diary.situation}</p>
                      </Row>
                      <Row>
                        <p>Emotions:</p>
                      </Row>
                      <Row>
                        <ul>
                          {this.state.diary.emotions.map((emotion, index) =>
                            <li key={index}>
                              <Col xs={6} md={6}>
                                <p>{emotion.feeling}</p>
                              </Col>
                              <Col xs={6} md={6}>
                                <p>{emotion.rating}</p>
                              </Col>
                            </li>
                          )}
                        </ul>
                      </Row>
                      <Row>
                        <p>Thought: {this.state.diary.thought}</p>
                      </Row>
                      <Row>
                        <p>Evidence For: {this.state.diary.evidenceFor}</p>
                      </Row>
                      <Row>
                        <p>Evidence Against:{this.state.diary.evidenceAgainst}</p>
                      </Row>
                    </div>
                  </Grid>

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
