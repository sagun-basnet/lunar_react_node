// const express = require("express");
import express from "express";
import postRoute from "./routers/postRoute.js";

const app = express();

app.use(express.json());

app.use("/", postRoute);

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
