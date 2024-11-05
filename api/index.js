import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./route/user.route.js";

dotenv.config();
mongoose
  .connect(
    "mongodb+srv://setgram:Set%40%23%24080@cluster0.yibil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRouter);
