import { Router } from "express";
import { verifyJWT, verifyAdmin } from "../middlewares/auth.middleware.js";
import { getAllFeedbacks, newFeedback } from "../controllers/feedback.controller.js";

const router = Router();

router.route("/write-new-feedback").post(verifyJWT, newFeedback);
router.route("/get-all-feedbacks").get(verifyAdmin, getAllFeedbacks);

export default router;
