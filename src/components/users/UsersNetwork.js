import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { PanelGroup, Panel } from 'react-bootstrap';


class UsersNetwork extends Component {
  state = {
    user: {
      myProfessionals: [
        {
          name: '',
          profession: '',
          phoneNumber: ''
        }
      ],
      myFamilyandFriends: [
        {
          name: '',
          relationship: '',
          phoneNumber: ''
        }
      ],
      newProfessional: {
        name: '',
        profession: '',
        phoneNumber: ''
      },
      errors: {}
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState(prevState => {
        const newState = prevState;
        newState.user.myProfessionals = res.data.myProfessionals;
        newState.user.myFamilyandFriends = res.data.myFamilyandFriends;
        return newState;
      }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const newProfessional = Object.assign({}, this.state.user.newProfessional, { [name]: value });
    this.setState(prevState => {
      const newState = prevState;
      newState.user.newProfessional = newProfessional;
      return newState;
    }, () => console.log(this.state));

  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .put(`/api/users/${this.props.match.params.id}`, this.state.user.newProfessional, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        this.setState(prevState => {
          console.log(prevState);
          const newState = prevState;

          newState.user = res.data;
          newState.user.newProfessional = {
            name: '',
            profession: '',
            phoneNumber: ''
          };
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));

  }

  render() {
    return(
      <div>
        <p>in network page</p>

        <PanelGroup accordion id="accordion-example">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle>Add a Family or Friend</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle>Add a Professional</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
      
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <strong>Professional&#39;s Name</strong>
                  <input
                    type="text"
                    name="name"
                    placeholder="Professional's Name"
                    onChange={this.handleChange}
                    value={this.state.user.newProfessional.name}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <strong>Professional&#39;s Title</strong>
                  <input
                    type="text"
                    name="profession"
                    placeholder="Professional&#39;s TitlePassword"
                    onChange={this.handleChange}
                    value={this.state.user.newProfessional.profession}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <strong>Phone Number</strong>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                    value={this.state.user.newProfessional.phoneNumber}
                    className="form-control"
                  />
                </div>
                <button className="btn">Add Professional</button>
              </form>
            </Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading>
              <Panel.Title toggle>Add an Organization</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              filler
            </Panel.Body>
          </Panel>
        </PanelGroup>













        <ul>
          {this.state.user.myProfessionals.map((myProfessional, index) =>
            <li key={index}>
              {myProfessional.name}
              {myProfessional.profession}
              {myProfessional.phoneNumber}
            </li>
          )}
        </ul>

      </div>
    );
  }
}

export default UsersNetwork;
