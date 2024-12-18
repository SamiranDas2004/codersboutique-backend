import express from 'express'
import { userSignUp, userLogin, getAllUsers } from '../controller/user.js';

const router = express.Router();

router.get('/test', (_, res) => res.status(200).send({message : "Api working"}))
router.post('/login', userLogin);
router.post('/signup', userSignUp);
router.get('/users', getAllUsers)

export default router;