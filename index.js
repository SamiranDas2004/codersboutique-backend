import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import './db/database.js';
import userRouter from './routes/user.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', userRouter);

const port = process.env.PORT
app.listen(port || 8000, () => console.log('Server connteced at port => ', port))