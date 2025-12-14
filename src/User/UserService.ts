
import { IServiceContract } from "./UserTypes";
import { repositoryMethods } from "./UserRepository";
import jwt from "jsonwebtoken";
import JWT_SECRET from "../config/env";
import { compare, hash } from "bcryptjs";
export const ServiceMethods:IServiceContract = {
    registation: async (user) => {
        user.password = await hash(user.password,10)
        const createdUser = await repositoryMethods.createUser(user)
        if (!createdUser){
            return "error|400"
        }
        const token = await jwt.sign(
              { id: createdUser.id },
              JWT_SECRET,
              { expiresIn: "7d" }
        );
        return token + "|200"
    },
    login: async (userData)=>{
        const gottenUser = await repositoryMethods.getUserByEmail(userData.email)
        if (!gottenUser){
            return "error|400"
        }
        const checkPassword = await compare(userData.password,gottenUser.password)
        if (!checkPassword){
            return "passwords are different"
        }
        const token = await jwt.sign(
              { id: gottenUser.id },
              JWT_SECRET,
              { expiresIn: "7d" }
        );
        return token + "|200"
    },
    me: async (id) => {
        const gottenUser = await repositoryMethods.getUserById(id)
        if (gottenUser==null){
            return "error|400"
        }
        const token = await jwt.sign(
              { id: gottenUser.id },
              JWT_SECRET,
              { expiresIn: "7d" }
        );
        return token + "|200"
    },
}
