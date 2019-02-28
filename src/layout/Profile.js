import React, { Component } from 'react';
import { withRouter } from "react-router";
import { UserService } from '../services/UserService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      id: 0,
      name: "",
      email: "",
      description: "",
      location: "",
      webpage: "",
      picture: "",
    }
  }



  componentDidMount(){
    const { id } = this.props.match.params;
    const user = this.userService.getOne(id);
    this.setState({
      id: user.id,
      name: user.name,
      description: user.description,
      location: user.location,
      webpage: user.webpage,
      picture: user.picture,
    })
  }

  render() {
    return (
      <div>
        ESTE ES EL PERFIL
      </div>
    )
  }
}

export default withRouter(Profile);
