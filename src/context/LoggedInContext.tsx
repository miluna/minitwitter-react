import React, { Component } from "react";
import { User } from "../models/User";
import { RouteChildrenProps } from "react-router";
import { UserService } from "../services/UserService";
import { validateLength, validatePasswordComplexity, validateEmail } from "../utils/validation";
import { Authentication } from "../models/Authentication";

// register context
export const LoggedInContext = React.createContext({});

interface ContextProps extends RouteChildrenProps {
    userService: UserService
}

interface ContextState {
    user?: User,
    isAuthenticated?: boolean,
    login?: Function,
    logout?: Function,
    changePassword?: Function,
    resetPassword?: Function,
    register?: Function,
    error?: string
}


export class LoggedInContextProvider extends Component<ContextProps, ContextState> {
    constructor(props: ContextProps) {
        super(props);
        this.state = {
            isAuthenticated: false,
            login: this.login,
            logout: this.logout,
            changePassword: this.changePassword,
            resetPassword: this.resetPassword,
            register: this.register,
            error: ''
        };
    }

    login = (email: string, password: string) => {
        const { userService } = this.props;

        if (!validateEmail(email)) {
            this.setState({error: "Email format incorrect"})
        } else if (!validatePasswordComplexity(password)) {
            this.setState({error: "Password should contain uppercase, lowercase, number and a special character"})
        } else {
            userService.login(email, password)
            .then(auth => {
                this.setState({isAuthenticated: true});
                if (auth.Authorization) localStorage.setItem("token", auth.Authorization);
                this.props.history.push("/");
            })
            .catch((auth: Authentication) => this.setState({error: auth.error}));
        }
    }

    changePassword = (email: string, password: string, password2: string, passwordConfirm: string) => {
        const { userService } = this.props;

        if (password2 !== passwordConfirm) {
            this.setState({error: "New password and password confirmation do not match"})
        } else if (!validateLength(password2, 6)) {
            this.setState({error: "New password is too short"})
        } else if (!validatePasswordComplexity(password2)) {
            this.setState({error: "Password should contain uppercase, lowercase, number and a special character"})
        } else {
            userService.changePassword(email, password, password2)
                .then(user => console.log(user))
                .catch(user => this.setState({error: user.error}))
        }
    }

    resetPassword = (email: string) => {
        const { userService } = this.props;

        if (!validateEmail(email)) {
            this.setState({error: "Email format incorrect"})
        } else {
            userService.resetPassword(email)
                .then(user => console.log(user))
                .catch(user => this.setState({error: user.error}))
        }
    }

    register = (email: string, password: string, passwordConfirm: string) => {
        const { userService } = this.props;

        if (!validateEmail(email)) {
            this.setState({error: "Email format incorrect"})
        } else if (password !== passwordConfirm) {
            this.setState({error: "New password and password confirmation do not match"})
        } else if (!validateLength(password, 6)) {
            this.setState({error: "New password is too short"})
        } else if (!validatePasswordComplexity(password)) {
            this.setState({error: "Password should contain uppercase, lowercase, number and a special character"})
        } else {
            const newUser: User = { email, password };
            userService.postOne(newUser)
                .then(user => console.log(user))
                .catch(user => this.setState({error: user.error}))
        }
    }

    logout = () => {
        localStorage.removeItem("token");
        this.setState({isAuthenticated: false, user: undefined});
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        if (token !== null) this.setState({isAuthenticated: true});
        else this.setState({isAuthenticated: false});
    }

    render() {
        const { children } = this.props;

        return (
            <LoggedInContext.Provider value={this.state}>
                {children}
            </LoggedInContext.Provider>
        );
    }
}
