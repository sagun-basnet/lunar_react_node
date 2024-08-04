import { post } from "../controllers/post.js";
import express from "express";

const router = express.Router();

router.post("/post", post);

export default router;
