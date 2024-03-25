import {Router} from "express"
import { changeCompanyCurrentPassword, getAllCompanyDetails, getApplyStudentList, getCurrentCompanyDetails, hireStudent, loginCompany, logOutCompany,registerCompany, updateCompanyAvatar, updateCompanyDetails } from "../controllers/company.controller.js"
import { verifyJwtForCompany,verifyAdmin } from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/register-company").post(verifyAdmin,registerCompany)
router.route("/login-company").post(loginCompany)
router.route("/log-out-company").get(verifyJwtForCompany,logOutCompany)
router.route("/update-company-details").patch(verifyJwtForCompany,updateCompanyDetails)
router.route("/get-company-details").get(verifyJwtForCompany,getCurrentCompanyDetails)
router.route("/update-company-avatar").patch(verifyJwtForCompany,upload.single("avatar"),updateCompanyAvatar)
router.route("/get-applied-students-list/:jobId").get(verifyJwtForCompany,getApplyStudentList)
router.route("/get-all-companies-list").get(verifyAdmin,getAllCompanyDetails)
router.route("/hire-student/:studentId/:jobId").get(verifyJwtForCompany,hireStudent)
router.route("/change-company-password").post(verifyJwtForCompany,changeCompanyCurrentPassword)

export default router;
