import React from 'react'
import uuid from "uuid/v4";
import Input from "./Input";

interface SearchUserProps {
    key: string,
}

const SearchUser = (props: SearchUserProps) => {
    const { key } = props;

    return (
        <div key={key} id="user-search" className="user-search">
            <Input
                placeholder="Search username..."
                type="text"
                value={""}
                onChange={() => {}}
            />
        </div>
    )
};

SearchUser.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
};

export default SearchUser;
