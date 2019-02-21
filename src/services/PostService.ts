import {CrudService} from "./CrudService";
import {Post} from "../models/Post";

export class PostService implements CrudService<Post>{
    deleteOne(id: number): void {
    }

    getAll(): Array<Post> {
        return undefined;
    }

    getOne(id: number): Post {
        return undefined;
    }

    postOne(object: Post): Post {
        return undefined;
    }

    updateOne(id: number, object: Post): Post {
        return undefined;
    }

    likePost(postId: number, userId: number): void{

    }

    unlikePost(postId: number, userId: number): void {

    }
}
