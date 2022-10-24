import express from "express";
import db from "./controllers/db/db.js";
import dotenv from "dotenv";
import appRouter from "./routes/app.js";
import authRouter from "./routes/auth.js";
import { authenticate } from "./authenticate.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

//use middlewares for routing
// app.use("/", authenticate, router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/app", authenticate, appRouter);

//DB connection
db();

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("app listening on port 5000");
});
