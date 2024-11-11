import { userLoginService, userSignUpService } from "../service/user.service.js";

export const userLogin = async (req, res) => await userLoginService(req, res);
export const userSignUp = async (req, res) => await userSignUpService(req, res);