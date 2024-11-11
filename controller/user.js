import { userLoginService, userSignUpService, getAllUsersService } from "../service/user.service.js";

export const userLogin = async (req, res) => await userLoginService(req, res);
export const userSignUp = async (req, res) => await userSignUpService(req, res);
export const getAllUsers = async (req, res) => await getAllUsersService(req, res);