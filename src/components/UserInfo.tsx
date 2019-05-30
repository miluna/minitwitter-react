import React, {Component} from 'react';
import "../styles/UserInfo.css";
import {User} from "../models/User";
import withServicesContext from "../context/withServicesContext";
import {Link} from "react-router-dom";
import UserImage from "./UserImage";
import {ContextProps} from "../context/ServicesContext";
import Loading from "./Loading";

interface UserInfoProps extends User, ContextProps {
    key?: string;
    pictureSize?: number,
}

interface UserInfoState {
    loading: boolean,
    user?: User,
}


class UserInfo extends Component<UserInfoProps, UserInfoState> {
    constructor(props: UserInfoProps) {
        super(props);
        this.state = {
            loading: true,
            user: {},
        }
    }

    componentDidMount(): void {
        const { id, userService } = this.props;
        console.log("lol")
        if (id) {
            userService.getOne(id)
                .then(loadUser => {
                    console.log("loadUser", loadUser);
                    this.setState({ loading: false, user: loadUser })
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ loading: false });
                })
        } this.setState({ loading: false })
    }

    render() {
        const { key, pictureSize } = this.props;
        const { user, loading } = this.state;

        return (
            <div className="user-info" id={`userinfo-${user ? user.username : ""}-${key}`} key={key}>
                <UserImage picture={user ? user.picture : ""} loading={loading} size={pictureSize}/>
                <div>
                    {loading
                        ? <Loading />
                        :
                        <React.Fragment>
                            <Link to={`/profile/${user ? user.id : ""}`}>
                                <p className="subtitle">@{user ? user.username : ""}</p>
                            </Link>
                            <p className="subtitle">{user ? user.name : ""}</p>
                        </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

export default withServicesContext(UserInfo);
