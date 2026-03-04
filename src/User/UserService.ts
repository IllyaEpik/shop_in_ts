import { IServiceContract } from "./UserTypes";
import { repositoryMethods } from "./UserRepository";
import jwt from "jsonwebtoken";
import JWT_SECRET from "../config/env";
import { compare, hash } from "bcryptjs";
import { randomInt } from "node:crypto";
import { transporter } from "../config/sendEmail";

export const ServiceMethods: IServiceContract = {
    registation: async (user) => {
        const existing = await repositoryMethods.getUserByEmail(user.email);
        if (existing) return "Користувач з таким email вже існує|409";
        
        user.password = await hash(user.password, 10);
        const createdUser = await repositoryMethods.createUser(user);
        const token = jwt.sign({ id: createdUser.id }, JWT_SECRET, { expiresIn: "7d" });
        return token + "|201";
    },
    login: async (userData) => {
        const user = await repositoryMethods.getUserByEmail(userData.email);
        if (!user || !(await compare(userData.password, user.password))) {
            return "Невірний email або пароль|401";
        }

        
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
        return token + "|200";
    },
    me: async (id) => {
        const user = await repositoryMethods.getUserById(id);
        return user;
    },
    addAddress: async (userId, city, street) => {
        const addr = await repositoryMethods.createAddress(userId, city, street);
        return JSON.stringify(addr) + "|201";
    },
    getAllAddresses: async (userId) => {
        const addr = await repositoryMethods.getAddresses(userId);
        return JSON.stringify(addr) + "|200";
    },
    updateAddress: async (userId, addressId, city, street) => {
        const address = await repositoryMethods.getAddressById(addressId);
        if (!address) return "Адресу не знайдено|404";
        if (address.userId !== userId) return "Відсутні права дляоновлення адреси|403";
        const updated = await repositoryMethods.updateAddress(addressId, city, street);
        return JSON.stringify(updated) + "|200";
    },
    removeAddress: async (userId, addressId) => {
        const address = await repositoryMethods.getAddressById(addressId);
        if (!address) return "Адресу не знайдено|404";
        if (address.userId !== userId) return "відсутні права для видалення адреси|403";
        await repositoryMethods.deleteAddress(addressId);
        return "deleted|204";
    },
    updateMe: async (userId, data) => {
        const updated = await repositoryMethods.updateUser(userId, data);
        return JSON.stringify(updated) + "|200";
    },
    deleteMe: async (userId) => {
        await repositoryMethods.deleteUser(userId);
        return "deleted|204";
    },
    resetPassword: async (email) => {
        
        const confirmationToken = randomInt(999999);
        const confirmUrl = `http://127.0.0.1:3000/confirm-password-change/${confirmationToken}`;
        const user = await repositoryMethods.getUserByEmail(email)
        if (!user) return "wrong email|404"
        console.log(user.id, 1111233232)
        try {
            await repositoryMethods.deleteTokenByUserId(user.id)
        } catch (error) {
            console.log()
        }   
        await repositoryMethods.createToken(user.id,confirmationToken)
        await transporter.sendMail({
            from: '"dronesShop" <illyaepik@gmail.com>',
            to: email,
            subject: "confirm reset password",
            html: `
                <div style="font-family: Arial, sans-serif; text-align: center;">
                    <h1>hello!</h1>
                    <p>Click on this link to confirm:</p>
                    <a href="${confirmUrl}"
                        style="background-color: #4CAF50; 
                                color: white; 
                                padding: 14px 25px; 
                                text-decoration: none; 
                                display: inline-block; 
                                border-radius: 4px;
                                font-weight: bold;">
                        confirm reset password
                    </a>
                </div>
            `})
        return "succses |200"
    },
    confirmResetPassword: async (token,password) => {
        const tokenWithUser = await repositoryMethods.getUserByToken(token)
        if (!tokenWithUser) return "error|404"
        console.log(password, "satana")
        repositoryMethods.updateUser(tokenWithUser.userId,{
            password:await hash(password, 10)
        })
        return "ok |200"
    }
};