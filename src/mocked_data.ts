import {User} from "./models/User";
import {Post} from "./models/Post";
import {UserComment} from "./models/Comment";

export const user: User = {
    id: "123",
    username: "Pepesito",
    name: "Pepe Chulo",
    description: "El más malo del barrio",
    email: "kiedebarrio@gmail.com",
    location: "Vallekas",
    webpage: "www.reshulon.com",
    picture: "",
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
