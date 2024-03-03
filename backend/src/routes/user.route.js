import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  registerStudent,
  loginUser,
  logOutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateStudentAccountDetails,
  updateUserAvatar,
  updateStudentResume,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register-student").post(registerStudent);
router.route("/login").post(loginUser);
router.route("/log-out-user").get(verifyJWT, logOutUser);
router.route("/refresh-token").patch(verifyJWT, refreshAccessToken);
router.route("/change-password").patch(verifyJWT, changeCurrentPassword);
router.route("/get-user").get(verifyJWT, getCurrentUser);
router
  .route("/update-student-account-details")
  .patch(verifyJWT, updateStudentAccountDetails);
router
  .route("/update-user-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/update-student-resume")
  .patch(verifyJWT, upload.single("resume"), updateStudentResume);

export default router;
