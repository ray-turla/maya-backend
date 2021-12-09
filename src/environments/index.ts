import dotenv from "dotenv";
dotenv.config();

export default {
  production: false,
  mongo_conn: process.env.MONGO_CONN || "mongodb://127.0.0.1:27017/main",
};
