import {CrudService} from "./CrudService";
import {User} from "../models/User";
import {user as mockedUser}  from '../mocked_data';
import {allUsers as allmockedUsers} from "../mocked_data";
import { Authentication } from "../models/Authentication";
import { validateEmail, validatePasswordComplexity, validateLength } from "../utils/validation";

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
        return new Promise((resolve, reject) => {
            if (!object.email || !object.password || !object.password2) {
                reject({error: "Not all fields provided"})
            } else if (!validateEmail(object.email)) {
                reject({error: "Email format incorrect"});
            } else if (object.password !== object.password2) {
                reject({error: "New password and password confirmation do not match"});
            } else if (!validateLength(object.password, 6)) {
                reject({error: "New password is too short"});
            } else if (!validatePasswordComplexity(object.password)) {
                reject({error: "Password should contain uppercase, lowercase, number and a special character"});
            } else {
                // API CALL
            }
        });
    }

    updateOne(id: string, object: User): Promise<User> {
        return new Promise((resolve, reject) => resolve(mockedUser));
    }

    login(email: string, password: string): Promise<Authentication> {
        return new Promise((resolve, reject) => {
            if (!validateEmail(email)) {
                reject({error: "Email format incorrect"});
            } else if (!validatePasswordComplexity(password)) {
                reject({error: "Password should contain uppercase, lowercase, number and a special character"});
            } else {
                // API CALL
            }
        });

        // return new Promise((resolve, reject) => reject({error: "Pakete"}));
    }

    changePassword(email: string, password: string, password2: string, passwordConfirm: string): Promise<User> {
        return new Promise((resolve, reject) => {
            if (!validateEmail(email)) {
                reject({error: "Email format incorrect"});
            }else if (password2 !== passwordConfirm) {
                reject({error: "New password and password confirmation do not match"});
            } else if (!validateLength(password2, 6)) {
                reject({error: "New password is too short"});
            } else if (!validatePasswordComplexity(password2)) {
                reject({error: "Password should contain uppercase, lowercase, number and a special character"});
            } else {
                // API CALL
            }
        });
    }

    resetPassword(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            if (!validateEmail(email)) {
                reject({error: "Email format incorrect"});
            } else {
                // API CALL
            }
        });
    }

}
