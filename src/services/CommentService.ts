import {CrudService} from "./CrudService";
import {UserComment} from "../models/Comment";

export class CommentService implements CrudService<UserComment>{
    deleteOne(id: string): void {
    }

    getAll(): Promise<Array<UserComment>> {
        return new Promise((resolve, reject) => resolve([]));
    }

    getOne(id: string): Promise<UserComment> {
        return new Promise((resolve, reject) => resolve({}));
    }

    postOne(object: UserComment): Promise<UserComment> {
        return new Promise((resolve, reject) => resolve({}));
    }

    updateOne(id: string, object: UserComment): Promise<UserComment> {
        return new Promise((resolve, reject) => resolve({}));
    }

}
