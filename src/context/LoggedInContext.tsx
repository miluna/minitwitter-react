import React, { Component } from "react";
import { User } from "../models/User";
import { RouteChildrenProps } from "react-router";
import { UserService } from "../services/UserService";
import { Authentication } from "../models/Authentication";
import * as mockedData from "../mocked_data";
import {deleteToken, getToken, saveToken} from "../services/storage";

// register context
export const LoggedInContext = React.createContext({});

interface ContextProps extends RouteChildrenProps {
    userService: UserService
}

interface ContextState {
    user: User,
    isAuthenticated: boolean,
    login: Function,
    logout: Function,
    changePassword: Function,
    resetPassword: Function,
    register: Function,
    error: string
}


export class LoggedInContextProvider extends Component<ContextProps, ContextState> {
    constructor(props: ContextProps) {
        super(props);
        this.state = {
            user: mockedData.user,
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
        userService.login(email, password)
            .then(auth => {
                this.setState({isAuthenticated: true});
                if (auth.Authorization) saveToken(auth.Authorization);
                userService.getCurrentUser()
                    .then(user => {
                        this.setState({ user });
                        this.props.history.push("/");
                    })
            })
            .catch((auth: Authentication) => {
                if (auth.error) this.setState({error: auth.error})
            });
    };

    changePassword = (email: string, password: string, password2: string, passwordConfirm: string) => {
        // const { userService } = this.props;
        // userService.changePassword(email, password, password2, passwordConfirm)
        //     .then(user => console.log(user))
        //     .catch(user => this.setState({error: user.error}))
    };

    resetPassword = (email: string) => {
        const { userService } = this.props;
        userService.resetPassword(email)
            .then(user => console.log(user))
            .catch(user => this.setState({error: user.error}))
    };

    register = (email: string, password: string, passwordConfirm: string) => {
        const { userService } = this.props;
        const newUser: User = { email, password, password2: passwordConfirm };
        userService.postOne(newUser)
            .then(user => console.log(user))
            .catch(user => this.setState({error: user.error}))
    };

    logout = () => {
        deleteToken();
        this.setState({isAuthenticated: false, user: {}});
    };

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        const { userService } = this.props;
        const token = getToken();
        if (token) {
            this.setState({isAuthenticated: true});
            userService.getCurrentUser()
                .then(user => {
                    this.setState({user});
                })
                .catch(err => console.log(err));
        }
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
