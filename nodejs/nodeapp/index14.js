import express from "express";
import mongoose from "mongoose";
import userRouter from "./userRouter.js";
import { authenticate, authorize } from "./auth.js";

const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8000, () => {
    console.log("Server started");
  });
});
app.use("/api/users", userRouter);