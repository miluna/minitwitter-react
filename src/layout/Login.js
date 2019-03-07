import React, { Component } from 'react'
import { UserService } from '../services/UserService';
import Input from '../components/Input';
import { withRouter, Redirect } from 'react-router';
import {LoggedInContext} from '../context/LoggedInContext';
import Button from '../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      username: '',
      password: '',
    }
  }

  updateUsername = (text) => this.setState({ username: text })
  updatePassword = (text) => this.setState({ password: text })

  render() {
    const { username, password } = this.state;

    return (
      <LoggedInContext.Consumer>
        {({ login }) => (
          <div className="container">
          <div className="login-container">
            <Input
              placeholder="Introduce nombre de usuario"
              type="text"
              onChange={(e) => this.updateUsername(e.target.value)}
              value={this.state.username}
            />
            <Input
              placeholder="Introduce contraseña"
              type="password"
              onChange={(e) => this.updatePassword(e.target.value)}
            />
            <Button text="Log In" color="primary" onClick={() => login(username, password)} />
          </div>
        </div>
        )}
      </LoggedInContext.Consumer>
        
    )
  }
}

export default withRouter(Login);
