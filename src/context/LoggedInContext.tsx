import React, { Component } from "react";
import { User } from "../models/User";
import { RouteChildrenProps } from "react-router";
import { UserService } from "../services/UserService";

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
    error?: string,
    userService: UserService
}


export class LoggedInContextProvider extends Component<ContextProps, ContextState> {
    constructor(props: ContextProps) {
        super(props);
        this.state = {
            isAuthenticated: false,
            login: this.login,
            logout: this.logout,
            error: '',
            userService: this.props.userService
        };
    }

    login = (username: string, password: string) => {
        const { userService } = this.props;
        
        userService.login(username, password)
            .then(user => {
                this.setState({isAuthenticated: true, user});
                this.props.history.push("/");
            })
            .catch(user => this.setState({error: user.error}));
    }

    logout = () => {
        this.setState({isAuthenticated: false, user: undefined});
    }

    componentDidMount() {
        // check local storage?
        this.setState({isAuthenticated: false, user: undefined});
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
