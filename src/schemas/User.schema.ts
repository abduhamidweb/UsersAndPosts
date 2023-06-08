import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../interface/interface';
const User: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }]
});

export default mongoose.model<IUser>('User', User);
