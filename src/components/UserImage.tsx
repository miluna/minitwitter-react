import React from "react";
import avatar from "../media/avatar.jpg";

interface UserImageProps {
    picture?: string,
    size?: number,
}

const UserImage = (props: UserImageProps) => {
    const { picture, size } = props;

    const pic = (!picture || picture === "")
        ? avatar
        : picture;

    const sizeStyle = {
        height: `${size}rem`,
        width: `${size}rem`,
    };

    return (
        <div style={sizeStyle} className="user-picture">
            <img src={pic} alt="user-picture"/>
        </div>
    );
};

UserImage.defaultProps = {
    picture: avatar,
    size: 5,
};

export default UserImage;
