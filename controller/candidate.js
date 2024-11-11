import { addCandidateService, getCandidatesService, updateCandidateService } from "../service/candidate.service.js";

export const addCandidate = async (req, res) => await addCandidateService(req, res);

export const getCandidates = async (req, res) => await getCandidatesService(req, res);

export const updateCandidate = async (req, res) => await updateCandidateService(req, res);