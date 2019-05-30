import React from "react";
import avatar from "../media/avatar.jpg";
import Loading from "./Loading";

interface UserImageProps {
    picture?: string,
    size?: number,
    loading: boolean,
}

const UserImage = (props: UserImageProps) => {
    const { picture, size, loading } = props;

    const pic = (!picture || picture === "")
        ? avatar
        : picture;

    const sizeStyle = {
        height: `${size}rem`,
        width: `${size}rem`,
    };

    return (
        <div style={sizeStyle} className="user-picture">
            {loading
                ? <Loading />
                : <img src={pic} alt="user-picture"/>
            }
        </div>
    );
};

UserImage.defaultProps = {
    picture: avatar,
    size: 5,
    loading: false,
};

export default UserImage;
