import dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

export const SECRET_KEY = cleanEnv(process.env, {
  SECRET_KEY: str({ devDefault: "dev_secret_key" }),
  DATABASE_URL: str()
}).SECRET_KEY;
export const PASSWORD = cleanEnv(process.env, {
  PASSWORD: str({ devDefault: "dev_secret_password" }),
  DATABASE_URL: str()
}).PASSWORD;
export const EMAIL = cleanEnv(process.env, {
  EMAIL: str({ devDefault: "dev_secret_email" }),
  DATABASE_URL: str()
}).EMAIL;
export const NAME = cleanEnv(process.env, {
  NAME: str({ devDefault: "dev_secret_email" }),
  DATABASE_URL: str()
}).NAME;

export default SECRET_KEY;