import React, { ReactElement } from 'react';
import { User } from '../models/User';


interface UserProps extends User {}


const UserCard = (props: UserProps): ReactElement => {

    const { description } = props;

    return (
        <div>
            {description}
        </div>
    );
}

export default UserCard;