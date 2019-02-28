import React, { Component } from 'react'
import { UserService } from '../services/UserService';
import Input from '../components/Input';
import { withRouter } from 'react-router';

class Login extends Component {
    constructor(props) {
      super(props);
        this.userService = new UserService();
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        const { username, password } = this.state;
        const user = this.userService.login(username, password);
    }

  render() {
    return (
      <div>
        ESTO ES EL LOGIN
      </div>
    )
  }
}

export default withRouter(Login);
