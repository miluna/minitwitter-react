import React, { Component } from "react";
import { UserService } from "../services/UserService";
import { PostService } from "../services/PostService";
import { CommentService } from "../services/CommentService";

export interface ContextProps {
    userService: UserService,
    postService: PostService,
    commentService: CommentService,
}

export const ServicesContext = React.createContext({});

export class ServicesContextProvider extends Component<ContextProps, {}> {
    constructor(props: ContextProps) {
        super(props);
    }

    render() {
        return (
            <ServicesContext.Provider value={this.props}>
                {this.props.children}
            </ServicesContext.Provider>
        );
    }
}
