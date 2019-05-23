import {User} from "./models/User";
import {Post} from "./models/Post";
import {UserComment} from "./models/Comment";

export const user: User = {
    id: "1",
    username: "pepesito",
    name: "Pepe Chulo",
    description: "El más malo del barrio",
    email: "kiedebarrio@gmail.com",
    location: "Vallekas",
    webpage: "www.google.com",
    picture: "",
};

export const user2: User = {
    id: "2",
    username: "manolito",
    name: "Er MaNoLiToHhhh!",
    description: "El puto amo",
    email: "putoamo@gmail.com",
    location: "Rivas",
    webpage: "www.masteroftheuniverse.com",
    picture: "",
};

export const allUsers: User[] = [user, user2];

export const comment: UserComment = {
    id: "1",
    postId: "1",
    content: "LOL",
    userId: "123"
};

export const comment2: UserComment = {
    id: "2",
    postId: "2",
    userId: "1",
    content: "esto es un comentario de prueba!!",
};

export const allComments: UserComment[] = [comment, comment2];

export const post: Post = {
    id: "1",
    userId: "1",
    content: "Me han amenazao, no saben con quien se meten...",
    comments: [comment],
    likes: [{id: "2"}]
};

export const post2: Post = {
    id: "2",
    userId: "2",
    content: "Hola! esto es mi primer tweet :)",
    comments: [comment2],
    likes: [{id: "123"}]
};

export const allPosts: Post[] = [post,post2];
