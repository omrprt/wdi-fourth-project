import React, { Component } from 'react';
import Axios from 'axios';
import { Panel } from 'react-bootstrap';

class UsersProfile extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h3>How are you feeling today { this.state.user.firstName}?</h3>

        <Panel id="collapsible-panel-example-3" defaultExpanded>
          <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>
            <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

export default UsersProfile;
