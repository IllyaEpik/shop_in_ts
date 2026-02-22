import {createTransport} from "nodemailer";
import { EMAIL, PASSWORD } from "./env";

export const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,              
    secure: true,         
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
});