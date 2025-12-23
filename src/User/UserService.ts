import { IServiceContract } from "./UserTypes";
import { repositoryMethods } from "./UserRepository";
import jwt from "jsonwebtoken";
import JWT_SECRET from "../config/env";
import { compare, hash } from "bcryptjs";

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
    }
};