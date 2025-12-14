

import { IControllerContract } from "./UserTypes";
import { ServiceMethods } from "./UserService";
import { checkAndSend } from "../config/sender";

export const controllerMethods:IControllerContract = {
	
	registation: async (req, res) => {
		const userData = req.body
        console.log(userData)
        if (!userData){
            res.status(422).json("server can't get body ")
        }
        const user = await ServiceMethods.registation(userData)
        checkAndSend(user,res)
        // res.status(200).json(user)
	},
	login: async (req,res) => {
		const userData = req.body
        if (!userData){
            res.status(422).json("server can't get body")
        }
        
        const user = await ServiceMethods.login(userData)
        checkAndSend(user,res)
        // res.status(200).json(user)
	},
	me: async (req,res) => {
        const id = res.locals.userId
        
        const user = await ServiceMethods.me(id)

        checkAndSend(user,res)
		// res.status(200).json(user)

        
    }
}