import {CrudService} from "./CrudService";
import {Post} from "../models/Post";
import * as mockedData from "../mocked_data";

export class PostService implements CrudService<Post>{
    deleteOne(id: string): void {
    }

    getAll(): Promise<Array<Post>> {
        return new Promise((resolve, reject) => resolve([]));
    }

    getOne(id: string): Promise<Post> {
        return new Promise((resolve, reject) => resolve({}));
    }

    postOne(object: Post): Promise<Post> {
        return new Promise((resolve, reject) => resolve({}));
    }

    updateOne(id: string, object: Post): Promise<Post> {
        return new Promise((resolve, reject) => resolve({}));
    }

    likePost(postId: string, userId: string): void{

    }

    unlikePost(postId: string, userId: string): void {

    }

    getAllFromUser(userId: string) : Promise<Post[]> {
        return new Promise((resolve, reject) => resolve([mockedData.post2]));
    }

    getAllFromCurrentUser(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            resolve([mockedData.post])
        });
    }
}
