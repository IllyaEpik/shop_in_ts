
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import prisma from "../db/prismaDB";
import { IControllerContract } from "./UserTypes";
import { ServiceMethods } from "./UserService";

const JWT_SECRET = "your_secret_key";

export const controllerMethods:IControllerContract = {
	
	registation: async (req, res) => {
		 const userData = req.body
        if (!userData){
            res.status(422).json("server can't get body ")
        }
        const user = await ServiceMethods.registation(userData)
        // controllerData.checkAndSend(user,res)
        res.status(200).json(user)
	},
	login: async (req,res) => {
		const userData = req.body
        if (!userData){
            res.status(422).json("server can't get body ")
        }
        
        const user = await ServiceMethods.login(userData)
        // controllerData.checkAndSend(user,res)
        res.status(200).json(user)
	},
	me: async (req,res) => {
        const id = res.locals.userId
        
        const user = await ServiceMethods.me(id)
        // controllerData.checkAndSend(user,res)
		res.status(200).json(user)
    }
}


// register =
//   try {
//     const { email, password, name, lastName, phoneNumber } = req.body;

//     const userExists = await prisma.user.findUnique({ where: { email } });
//     if (userExists) return res.status(400).json({ message: "Email already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword,
//         name,
//         lastName,
//         phoneNumber
//       }
//     });

//     return res.status(201).json({ message: "User created", user });
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// };
// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user) return res.status(400).json({ message: "Incorrect email" });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword)
//       return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign(
//       { id: user.id, email: user.email },
//       JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     return res.json({ message: "Login successful", token });
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// };