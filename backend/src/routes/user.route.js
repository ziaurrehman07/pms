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
  deleteStudent,
  deleteCompany,
  getAllStudents,
  getStudentDetails,
  updateStudentDetailsByAdmin,
  publishNewNotice,
  getAllNotice,
} from "../controllers/user.controller.js";

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
  .route("/update-student-details/:studentId")
  .patch(verifyAdmin, updateStudentDetailsByAdmin);
router
  .route("/update-user-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/update-student-resume")
  .patch(verifyJWT, upload.single("resume"), updateStudentResume);
router.route("/preview-resume").get(verifyJWT, previewResume);
router.route("/preview-avatar").get(verifyJWT, previewAvatar);
router
  .route("/placed-students-details")
  .get(verifyAdmin, placedStudentsDetails);
router.route("/delete-student/:studentId").delete(verifyAdmin, deleteStudent);
router.route("/delete-company/:companyId").delete(verifyAdmin, deleteCompany);
router.route("/get-student-details/:studentId").get(getStudentDetails);
router.route("/get-all-notices").get(verifyJWT, getAllNotice);
router.route("/publish-new-notice").post(verifyAdmin,publishNewNotice);

export default router;
