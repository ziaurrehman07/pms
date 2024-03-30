import { Router } from "express";
import { verifyJWT, verifyAdmin } from "../middlewares/auth.middleware.js";
import { newFeedback } from "../controllers/feedback.controller.js";

const router = Router();

router.route("/write-new-feedback").post(verifyJWT, newFeedback);

export default router;
