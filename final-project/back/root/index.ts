import { app } from "./src/app";
import dotenv from "dotenv";
dotenv.config();

const PORT: any = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`${PORT}번 포트 온`);
});
