import {CrudService} from "./CrudService";
import {UserComment} from "../models/Comment";

export class CommentService implements CrudService<UserComment>{
    deleteOne(id: string): void {
    }

    getAll(): Array<UserComment> {
        return [];
    }

    getOne(id: string): UserComment {
        return {};
    }

    postOne(object: UserComment): UserComment {
        return {};
    }

    updateOne(id: string, object: UserComment): UserComment {
        return {};
    }

}
