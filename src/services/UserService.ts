import {CrudService} from "./CrudService";
import {User} from "../models/User";
import {user as mockedUser}  from '../mocked_data';
import {allUsers as allmockedUsers} from "../mocked_data";

export class UserService  implements CrudService<User>{
    deleteOne(id: string): void {
    }

    getAll(): Array<User> {
        return allmockedUsers;
    }

    getOne(id: string): User {
        return mockedUser;
    }

    postOne(object: User): User {
        return mockedUser;
    }

    updateOne(id: string, object: User): User {
        return mockedUser;
    }

    login(username: string, password: string): User {
        return mockedUser;
    }

}
