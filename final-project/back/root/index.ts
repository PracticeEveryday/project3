import Server from "./src/app";

import dotenv from "dotenv";
dotenv.config();

const PORT: any = process.env.PORT;

const server = new Server();

server.init(PORT);
