import {CrudService} from "./CrudService";
import axios from "axios";
import {User} from "../models/User";
import { Authentication } from "../models/Authentication";
import { validateEmail, validatePasswordComplexity, validateLength } from "../utils/validation";
import config from "../config";
import {getAuthHeaders} from "./storage";

export class UserService  implements CrudService<User>{
    deleteOne(id: string): void {
        const url = `${config.WS_URL}/users/${id}`;
        const headers = getAuthHeaders();
        axios.delete(url, { headers });
    }

    getAll(): Promise<Array<User>> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/users`;
            axios.get(url)
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    getOne(id: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/users/${id}`;
            axios.get(url)
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
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
                const url = `${config.WS_URL}/users`;
                const headers = getAuthHeaders();
                axios.post(url, object, { headers })
                    .then( res => resolve(res.data))
                    .catch((err: any) => reject(err));
            }
        });
    }

    updateOne(id: string, object: User): Promise<User> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/users/${id}`;
            const headers = getAuthHeaders();
            axios.put(url, object, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    login(email: string, password: string): Promise<Authentication> {
        return new Promise((resolve, reject) => {
            if (!validateEmail(email)) {
                reject({error: "Email format incorrect"});
            } else if (!validatePasswordComplexity(password)) {
                reject({error: "Password should contain uppercase, lowercase, number and a special character"});
            } else {
                const url = `${config.WS_URL}/users/login`;
                axios.post(url, { email, password })
                    .then( res => resolve(res.data))
                    .catch((err: any) => reject(err));
            }
        });
    }

    changePassword(id: string, email: string, password: string, password2: string, passwordConfirm: string): Promise<User> {
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
                const url = `${config.WS_URL}/users/${id}/change-password`;
                const headers = getAuthHeaders();
                axios.post(url, { email, password, password2 }, { headers })
                    .then( res => resolve(res.data))
                    .catch((err: any) => reject(err));
            }
        });
    }

    resetPassword(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            if (!validateEmail(email)) {
                reject({error: "Email format incorrect"});
            } else {
                const url = `${config.WS_URL}/users/reset-password`;
                axios.post(url, { email })
                    .then( res => resolve(res.data))
                    .catch((err: any) => reject(err));
            }
        });
    }

    getCurrentUser(): Promise<User> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/currentuser`;
            const headers = getAuthHeaders();
            axios.get(url, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }
}
