import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import './db/database.js';

const app = express();
app.use(express.json())

const port = process.env.PORT
app.listen(port || 8000, () => console.log('Server connteced at port => ', port))