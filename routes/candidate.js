import express from 'express'
import { addCandidate, getCandidates, updateCandidate } from '../controller/candidate.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getCandidates);
router.post('/', auth, addCandidate);
router.patch('/:id', auth, updateCandidate);

export default router;