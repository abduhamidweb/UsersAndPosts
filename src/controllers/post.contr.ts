import { Request, Response } from 'express';
import Post from "../schemas/Post.schema.js";
import { IPost } from '../interface/interface.js';

class PostController {
    // Yeni post yaratish
    async createPost(req: Request, res: Response) {
        try {
            const { title, content, userId } = req.body;
            const post: IPost = new Post({ title, content, user: userId });
            await post.save();
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: 'Post yaratishda xatolik yuz berdi' });
        }
    }
    // Postlarni olish
    async getPosts(_: Request, res: Response) {
        try {
            const posts: IPost[] = await Post.find();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Postlarni olishda xatolik yuz berdi' });
        }
    }
    // Postni olish
    async getPostById(req: Request, res: Response) {
        try {
            const post: IPost | null = await Post.findById(req.params.id);
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ error: 'Post topilmadi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Postni olishda xatolik yuz berdi' });
        }
    }

    // Postni yangilash
    async updatePost(req: Request, res: Response) {
        try {
            const { title, content } = req.body;
            const post: IPost | null = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ error: 'Post topilmadi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Postni yangilashda xatolik yuz berdi' });
        }
    }

    // Postni o'chirish
    async deletePost(req: Request, res: Response) {
        try {
            const post: IPost | null = await Post.findByIdAndDelete(req.params.id);
            if (post) {
                res.json({ message: 'Post o\'chirildi' });
            } else {
                res.status(404).json({ error: 'Post topilmadi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Postni o\'chirishda xatolik yuz berdi' });
        }
    }
}

export default new PostController();
