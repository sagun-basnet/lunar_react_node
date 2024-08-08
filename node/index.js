// const express = require("express");
import express from "express";
import postRoute from "./routers/postRoute.js";
import loginRoute from "./routers/loginRoute.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", postRoute);
app.use("/", loginRoute);

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
