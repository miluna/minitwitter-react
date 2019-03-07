import React, { Component } from 'react'
import { UserService } from '../services/UserService';
import Input from '../components/Input';
import { withRouter } from 'react-router';
import Tweet from '../components/Tweet';

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
      <div className="container">
        <div className="login-container">
          <Input placeholder="Introduce tu nombre de usuario"/>
          <Tweet 
            id="1"
            userPhoto="" 
            username="Pepesito" 
            name="Pepe" 
            tweet="Hola" 
            date="1m" 
            onLike={(id) => console.log(id)} 
            liked
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
