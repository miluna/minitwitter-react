import {CrudService} from "./CrudService";
import {Post} from "../models/Post";

export class PostService implements CrudService<Post>{
    deleteOne(id: string): void {
    }

    getAll(): Array<Post> {
        return [];
    }

    getOne(id: string): Post {
        return {};
    }

    postOne(object: Post): Post {
        return {};
    }

    updateOne(id: string, object: Post): Post {
        return {};
    }

    likePost(postId: string, userId: string): void{

    }

    unlikePost(postId: string, userId: string): void {

    }
}
