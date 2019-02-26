import React, { Component } from 'react'
import { UserService } from '../services/UserService';
import Input from '../components/Input';

export default class Login extends Component {
    constructor(props) {
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
      </div>
    )
  }
}
