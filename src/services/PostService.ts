import axios from "axios";
import {CrudService} from "./CrudService";
import {Post} from "../models/Post";
import config from "../config";
import {getAuthHeaders} from "./storage";

export class PostService implements CrudService<Post>{
    deleteOne(id: string): void {
        const url = `${config.WS_URL}/posts/${id}`;
        const headers = getAuthHeaders();
        axios.delete(url, { headers });
    }

    getAll(): Promise<Array<Post>> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts`;
            axios.get(url)
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    getOne(id: string): Promise<Post> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts/${id}`;
            axios.get(url)
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    postOne(object: Post): Promise<Post> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts`;
            const headers = getAuthHeaders();
            axios.post(url, object, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    updateOne(id: string, object: Post): Promise<Post> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts/${id}`;
            const headers = getAuthHeaders();
            axios.put(url, object, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    likePost(id: string): Promise<Post> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts/${id}/like`;
            const headers = getAuthHeaders();
            axios.get(url, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    unlikePost(id: string): Promise<Post> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts/${id}/like`;
            const headers = getAuthHeaders();
            axios.delete(url, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    getAllFromUser(id: string) : Promise<Post[]> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/users/${id}/posts`;
            axios.get(url)
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }

    getAllFromCurrentUser(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            const url = `${config.WS_URL}/posts/currentuser`;
            const headers = getAuthHeaders();
            axios.get(url, { headers })
                .then( res => resolve(res.data))
                .catch((err: any) => reject(err));
        });
    }
}
