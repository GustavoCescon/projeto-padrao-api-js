import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
//require("./database/config/association");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err, _req, res, next) => {
  return res.status(500).json({ message: err.message });
  next();
});
export default app;
