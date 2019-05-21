import React, {Component} from 'react';
import uuid from "uuid/v4";
import "../styles/UserInfo.css";
import {User} from "../models/User";
import {ContextProps} from "../context/ServicesContext";
import withServicesContext from "../context/withServicesContext";
import {Link} from "react-router-dom";
import UserImage from "./UserImage";

interface UserInfoProps extends ContextProps {
    key?: string;
    userId: string,
    picture?: string,
    username?: string,
    name?: string,
    pictureSize?: number,
}

interface UserInfoState {
    user: User
}


class UserInfo extends Component<UserInfoProps, UserInfoState> {
    constructor(props: UserInfoProps) {
        super(props);
        const { name, picture, userId, username } = props;
        this.state = {
            user: {
                id: userId,
                name,
                username,
                picture,
            }
        }
    }

    componentDidMount(): void {
        const { user } = this.state;
        if (!user.username || !user.name) {
            const { userService } = this.props;
            if (user.id) {
                console.log("recuperar info de usuario para id: " + user.id);
                userService.getOne(user.id)
                    .then(user => this.setState({user}))
                    .catch(err => console.log(err))
            }
        }
    }

    render() {
        const { key, pictureSize } = this.props;
        const { user } = this.state;

        return (
            <div className="user-info" id={`userinfo-${user.username}-${key}`} key={key || uuid()}>
                <UserImage picture={user.picture} size={pictureSize} />
                <div>
                    <Link to={`/profile/${user.id}`}>
                        <p className="subtitle">@{user.username}</p>
                    </Link>
                    <p className="subtitle">{user.name}</p>
                </div>
            </div>
        );
    }

}

export default withServicesContext(UserInfo);
