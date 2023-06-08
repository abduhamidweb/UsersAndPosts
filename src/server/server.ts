import express, { Application, Request, Response, NextFunction } from "express";
import { connectToDatabase } from "../db/db.js";
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;
import userRoutes from "../routes/user.routes.js"
app.use(express.json());
app.use('/users', userRoutes);
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log("Server listening on port" + PORT));
});  