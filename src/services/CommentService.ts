import {CrudService} from "./CrudService";
import {UserComment} from "../models/Comment";

export class CommentService implements CrudService<UserComment>{
    deleteOne(id: number): void {
    }

    getAll(): Array<UserComment> {
        return [];
    }

    getOne(id: number): UserComment {
        return {};
    }

    postOne(object: UserComment): UserComment {
        return {};
    }

    updateOne(id: number, object: UserComment): UserComment {
        return {};
    }

}
