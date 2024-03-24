import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT, verifyAdmin } from "../middlewares/auth.middleware.js";
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
  previewResume,
  previewAvatar,
  placedStudentsDetails,
  getPlacedCurrentStudentDetails,
  deleteStudent,
  deleteCompany,
  getAllStudents,
} from "../controllers/user.controller.js";
import {sendMail} from "../utils/emailSender.util.js"

const router = Router();

router.route("/register-student").post(verifyAdmin, registerStudent);
router.route("/login").post(loginUser);
router.route("/log-out-user").get(verifyJWT, logOutUser);
router.route("/refresh-token").get(verifyJWT, refreshAccessToken);
router.route("/change-password").patch(verifyJWT, changeCurrentPassword);
router.route("/get-user").get(verifyJWT, getCurrentUser);
router.route("/get-students-detail").get(verifyAdmin, getAllStudents);
router
  .route("/update-student-account-details")
  .patch(verifyJWT, updateStudentAccountDetails);
router
  .route("/update-user-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/update-student-resume")
  .patch(verifyJWT, upload.single("resume"), updateStudentResume);
router.route("/preview-resume").get(verifyJWT, previewResume);
router.route("/preview-avatar").get(verifyJWT, previewAvatar);

router
  .route("/placed-current-student-details")
  .get(verifyJWT, getPlacedCurrentStudentDetails);
router
  .route("/placed-students-details")
  .get(verifyAdmin, placedStudentsDetails);
router.route("/delete-student/:studentId").get(verifyAdmin, deleteStudent);
router.route("/delete-company/:companyId").get(verifyAdmin, deleteCompany);


export default router;
