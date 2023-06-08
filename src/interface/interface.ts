import mongoose, { Document } from 'mongoose';

export interface IPost extends Document {
    title: string;
    content: string;
    user: mongoose.Types.ObjectId;
}
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    posts: mongoose.Types.ObjectId[];
} 