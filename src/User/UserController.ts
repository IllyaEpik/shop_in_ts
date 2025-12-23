import { Request, Response } from "express";
import { ServiceMethods } from "./UserService";
import { checkAndSend } from "../config/sender";
import { IControllerContract } from "./UserTypes";

export const controllerMethods: IControllerContract = {
    registation: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json("Некоректні дані при реєстрації");
            return;
        }
        const result = await ServiceMethods.registation(req.body);
        checkAndSend(result, res, 201);
    },
    login: async (req, res) => {
        const result = await ServiceMethods.login(req.body);
        checkAndSend(result, res, 201);
    },
    me: async (req, res) => {
        const result = await ServiceMethods.me(res.locals.userId);
        checkAndSend(result, res);
    },
    addAddress: async (req, res) => {
        const { city, street } = req.body;
        if (!city || !street) {
            res.status(422).json("Некореекні дані при додаванні адреси");
            return;
        }
        const result = await ServiceMethods.addAddress(res.locals.userId, city, street);
        checkAndSend(result, res, 201);
    },
    getAddresses: async (req, res) => {
        const result = await ServiceMethods.getAllAddresses(res.locals.userId);
        checkAndSend(result, res);
    },


    updateAddress: async (req, res) => {
        const { city, street } = req.body;
        if (!city || !street) {
            res.status(422).json("Некоректні дані при оновленні адреси");
            return;
        }
        const result = await ServiceMethods.updateAddress(
            res.locals.userId, 
            Number(req.params.id), 
            city, 
            street
        );
        checkAndSend(result, res);
    },
    removeAddress: async (req, res) => {
        const result = await ServiceMethods.removeAddress(res.locals.userId, Number(req.params.id));
        checkAndSend(result, res, 204);
    },

    updateMe: async (req, res) => {
        const result = await ServiceMethods.updateMe(res.locals.userId, req.body);
        checkAndSend(result, res);
    },
    deleteAccount: async (req, res) => {
        const result = await ServiceMethods.deleteMe(res.locals.userId);
        checkAndSend(result, res, 204);
    }
};