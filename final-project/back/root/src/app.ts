import express from "express";
import { indexRouter } from "./routes/indexRouter";
import { handRouter } from "./routes/handRouter";

import morgan from "morgan";

import { errorMiddleware } from "./middlewares/errorMiddleware";

export default class Server {
  app;
  constructor() {
    this.app = express();
  }

  setRouter() {
    this.app.use(indexRouter);
    this.app.use(handRouter);
  }

  setMiddleware() {
    this.app.use(morgan("dev"));

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.setRouter();

    this.app.use(errorMiddleware);
  }

  init(PORT) {
    this.app.listen(PORT, () => {
      console.log(`${PORT}번 포트 온`);
    });

    this.setMiddleware();
  }
}
