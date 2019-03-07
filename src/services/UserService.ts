import {CrudService} from "./CrudService";
import {User} from "../models/User";
import {user as mockedUser}  from '../mocked_data';
import {allUsers as allmockedUsers} from "../mocked_data";

export class UserService  implements CrudService<User>{
    deleteOne(id: string): void {
    }

    getAll(): Promise<Array<User>> {
        return new Promise((resolve, reject) => resolve(allmockedUsers));
    }

    getOne(id: string): Promise<User> {
        return new Promise((resolve, reject) => resolve(mockedUser));
    }

    postOne(object: User): Promise<User> {
        return new Promise((resolve, reject) => resolve(mockedUser));
    }

    updateOne(id: string, object: User): Promise<User> {
        return new Promise((resolve, reject) => resolve(mockedUser));
    }

    login(username: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => resolve(mockedUser));
    }

}
