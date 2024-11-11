import express from 'express'

const router = express.Router();

router.get('/', (_, res) => res.status(200).send({ message: 'server is working' }));
// router.post('/login', userLogin);

export default router;