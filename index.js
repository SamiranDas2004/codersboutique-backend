import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import cors from 'cors'
import './db/database.js';
import userRouter from './routes/user.js'
import candidateRoute from './routes/candidate.js'
import './db/tables.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    origin: 'https://codersboutiqueassignment.netlify.app',  // Allow your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed HTTP methods
  
   
};

app.use(cors(corsOptions));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/candidate', candidateRoute);

const port = process.env.PORT
app.listen(port || 8000, () => console.log('Server connteced at port => ', port))