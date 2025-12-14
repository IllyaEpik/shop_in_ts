import dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

export const SECRET_KEY = cleanEnv(process.env, {
  SECRET_KEY: str({ devDefault: "dev_secret_key" }),
  DATABASE_URL: str()
}).SECRET_KEY;
console.log(SECRET_KEY) 

export default SECRET_KEY;