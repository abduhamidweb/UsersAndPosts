import { Request, Response } from 'express';
import { IUser } from '../interface/interface.js';
import User from '../schemas/User.schema.js';
class UserController {
    // Yeni foydalanuvchi qo'shish
    async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const user: IUser = new User({ name, email });
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Foydalanuvchi qo\'shishda xatolik yuz berdi' });
        }
    }
    // Foydalanuvchilarni olish
    async getUsers(_: Request, res: Response) {
        try {
            const users: IUser[] = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Foydalanuvchilarni olishda xatolik yuz berdi' });
        }
    }
    async getUserById(req: Request, res: Response) {
        try {
            const user: IUser | null = await User.findById(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'Foydalanuvchi topilmadi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Foydalanuvchini olishda xatolik yuz berdi' });
        }
    }
    // Foydalanuvchini yangilash
    async updateUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const user: IUser | null = await User.findByIdAndUpdate(req.params.id, { name, email }, { new: true });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'Foydalanuvchi topilmadi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Foydalanuvchini yangilashda xatolik yuz berdi' });
        }
    }
    // Foydalanuvchini o'chirish
    async deleteUser(req: Request, res: Response) {
        try {
            const user: IUser | null = await User.findByIdAndDelete(req.params.id);
            if (user) {
                res.json({ message: 'Foydalanuvchi o\'chirildi' });
            } else {
                res.status(404).json({ error: 'Foydalanuvchi topilmadi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Foydalanuvchini o\'chirishda xatolik yuz berdi' });
        }
    }
}
export default new UserController();
