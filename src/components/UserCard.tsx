import React, { ReactElement } from 'react';
import { User } from '../models/User';


interface UserProps extends ReactElement, User {}


const UserCard = (props: UserProps): ReactElement => {
    return (
        <div>
            
        </div>
    );
}

export default UserCard;