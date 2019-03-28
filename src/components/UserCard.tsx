import React, { ReactElement } from 'react';
import { User } from '../models/User';


interface UserProps extends User {
    key?: string;
}


const UserCard = (props: UserProps): ReactElement => {
    console.log("PROPS DE LA USERCARD");
    console.log(props);
    const { description } = props;

    return (
        <div>
            {description}
        </div>
    );
}

export default UserCard;