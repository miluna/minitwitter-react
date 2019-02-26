import {CrudService} from "./CrudService";
import {Post} from "../models/Post";

export class PostService implements CrudService<Post>{
    deleteOne(id: number): void {
    }

    getAll(): Array<Post> {
        return [];
    }

    getOne(id: number): Post {
        return {};
    }

    postOne(object: Post): Post {
        return {};
    }

    updateOne(id: number, object: Post): Post {
        return {};
    }

    likePost(postId: number, userId: number): void{

    }

    unlikePost(postId: number, userId: number): void {

    }
}
