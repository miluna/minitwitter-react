import React, { Component } from 'react'
import { UserService } from '../../services/UserService';
import { withRouter } from 'react-router';
import {LoggedInContext} from '../../context/LoggedInContext';
import LoginContainer from './LoginContainer';

const modes = ['login', 'change-pass', 'reset-pass', 'register'];

class Login extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      email: '',
      password: '',
      password2: '',
      passwordConfirm: '',
      mode: modes[0],
    }
  }

  updateEmail = (text) => this.setState({ email: text })
  updatePassword = (text) => this.setState({ password: text })
  updatePassword2 = (text) => this.setState({ password2: text })
  updatePasswordConfirm = (text) => this.setState({ passwordConfirm: text })
  updateMode = (mode) => this.setState({ mode })

  render() {
    const { email, password, password2, passwordConfirm, mode } = this.state;

    return (
      <LoggedInContext.Consumer>
        {({ login, changePassword, resetPassword, register, error }) => (
          <div className="container">
          <LoginContainer 
            emailValue={email}
            passValue={password}
            pass2Value={password2}
            passConfirmValue={passwordConfirm}
            mode={mode}
            error={error}
            login={login}
            changePassword={changePassword}
            resetPassword={resetPassword}
            register={register}
            updateMode={this.updateMode}
            updateEmail={this.updateEmail}
            updatePassword={this.updatePassword}
            updatePassword2={this.updatePassword2}
            updatePasswordConfirm={this.updatePasswordConfirm}
          />
        </div>
        )}
      </LoggedInContext.Consumer>
    )
  }
}

export default withRouter(Login);
