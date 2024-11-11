import express from 'express'
import { addCandidate, getCandidates, updateCandidate } from '../controller/candidate.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCandidates);
router.post('/', addCandidate);
router.patch('/:id', updateCandidate);

export default router;