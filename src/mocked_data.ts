import {User} from "./models/User";
import {Post} from "./models/Post";
import {UserComment} from "./models/Comment";

export const user: User = {
    id: "123",
    name: "Pepe Chulo",
    description: "El más malo del barrio",
    email: "kiedebarrio@gmail.com",
    location: "Vallekas",
    webpage: "www.reshulon.com",
    picture: "https://pbs.twimg.com/media/BqxQ4GnIYAA4D4N.jpg"
};

export const allUsers: User[] = [user];

export const comment: UserComment = {id: "321", content: "LOL", userId: "123"};

export const allComments: UserComment[] = [comment];

export const post: Post = {
    id: "54345",
    timestamp: new Date(),
    userId: "123",
    content: "Me han amenazao, no saben con quien se meten...",
    comments: [comment],
    likes: [user]
};

export const allPosts: Post[] = [post];
