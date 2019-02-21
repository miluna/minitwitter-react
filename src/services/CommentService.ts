import {CrudService} from "./CrudService";
import {UserComment} from "../models/Comment";

export class CommentService implements CrudService<UserComment>{
    deleteOne(id: number): void {
    }

    getAll(): Array<UserComment> {
        return undefined;
    }

    getOne(id: number): UserComment {
        return undefined;
    }

    postOne(object: UserComment): UserComment {
        return undefined;
    }

    updateOne(id: number, object: UserComment): UserComment {
        return undefined;
    }

}
