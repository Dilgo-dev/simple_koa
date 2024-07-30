import { config } from "dotenv";

config();

export const PORT = parseInt(process.env.PORT || "3000");
