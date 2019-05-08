import React from 'react'
import PropTypes from 'prop-types'
import Input from '../components/Input';
import AppLogo from '../components/AppLogo';
import Button from '../components/Button';

const LoginContainer = ({ 
    mode, emailValue, passValue, pass2Value, passConfirmValue, 
    updateEmail, updatePassword, updatePassword2, updatePasswordConfirm, 
    updateMode, login, changePassword, resetPassword, register, error }) => {

    const userInput = (
        <Input
          label="User Email"
          placeholder="Insert your email"
          type="text"
          onChange={(e) => updateEmail(e.target.value)}
          value={emailValue}
        />
    );
    
    const passwordInput = (
        <Input
            label="Password"
            placeholder="Insert your password"
            type="password"
            onChange={(e) => updatePassword(e.target.value)}
            value={passValue}
        />
    );

    const passwordInput2 = (
        <Input
            label="New Password"
            placeholder="Insert your new password"
            type="password"
            onChange={(e) => updatePassword2(e.target.value)}
            value={pass2Value}
        />
    );

    const passwordConfirmation = (
        <Input
            label="Confirm your password"
            placeholder="Confirm your new password"
            type="password"
            onChange={(e) => updatePasswordConfirm(e.target.value)}
            value={passConfirmValue}
        />
    );

    let content = <React.Fragment />;
    let btns = <React.Fragment />;
    switch (mode) {
        case "login":
            content = (
                <React.Fragment>
                    {userInput}
                    {passwordInput}
                    <Button text="Log In" color="primary" onClick={() => login(emailValue, passValue)} />
                </React.Fragment>
            );
            btns = (
                <React.Fragment>
                    <p className="input-margin" onClick={() => updateMode("register")}>Register</p>
                    <p className="input-margin" onClick={() => updateMode("change-pass")}>Change password</p>
                    <p className="input-margin" onClick={() => updateMode("reset-pass")}>Reset your password</p>
                </React.Fragment>
            );
            break;
        case "reset-pass":
            content = (
                <React.Fragment>
                    {userInput}
                    <Button text="Reset Password" color="primary" onClick={() => resetPassword(emailValue)} />
                </React.Fragment>
            );
            btns = (
                <React.Fragment>
                    <p className="input-margin" onClick={() => updateMode("change-pass")}>Change password</p>
                    <p className="input-margin" onClick={() => updateMode("login")}>Log In</p>
                    <p className="input-margin" onClick={() => updateMode("register")}>Register</p>
                </React.Fragment>
            );
            break;
        case "change-pass":
            content = (
                <React.Fragment>
                    {userInput}
                    {passwordInput}
                    {passwordInput2}
                    {passwordConfirmation}
                    <Button text="Change Password" color="primary" onClick={() => changePassword(emailValue, passValue, pass2Value, passConfirmValue)} />
                </React.Fragment>
            );
            btns = (
                <React.Fragment>
                    <p className="input-margin" onClick={() => updateMode("reset-pass")}>Reset your password</p>
                    <p className="input-margin" onClick={() => updateMode("login")}>Log In</p>
                    <p className="input-margin" onClick={() => updateMode("register")}>Register</p>
                </React.Fragment>
            );
            break;
        case "register":
            content = (
                <React.Fragment>
                    {userInput}
                    {passwordInput}
                    {passwordConfirmation}
                    <Button text="Register" color="primary" onClick={() => register(emailValue, passValue, passConfirmValue)} />
                </React.Fragment>
            );
            btns = (
                <React.Fragment>
                    <p className="input-margin" onClick={() => updateMode("login")}>Log In</p>
                    <p className="input-margin" onClick={() => updateMode("change-pass")}>Change password</p>
                    <p className="input-margin" onClick={() => updateMode("reset-pass")}>Reset your password</p>
                </React.Fragment>
            );
            break;
        default:
            break;
    }

  return (
    <div className="login-container">
        <AppLogo />
        {content}
        <div className="login-left-btns">
            {btns}
        </div>
        { error !== "" && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

LoginContainer.propTypes = {
    mode: PropTypes.string,
    updateEmail: PropTypes.func,
    updatePassword: PropTypes.func,
    updatePassword2: PropTypes.func,
    updatePasswordConfirm: PropTypes.func,
    updateMode: PropTypes.func,
    login: PropTypes.func,
    changePassword: PropTypes.func,
    resetPassword: PropTypes.func,
    register: PropTypes.func,
    emailValue: PropTypes.string,
    passValue: PropTypes.string,
    pass2Value: PropTypes.string,
    passConfirmValue: PropTypes.string,
    error: PropTypes.string,
}

export default LoginContainer
