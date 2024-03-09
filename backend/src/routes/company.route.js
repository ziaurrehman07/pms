import {Router} from "express"
import { getApplyStudentList, getCompanyDetails, loginCompany, logOutCompany,registerCompany, updateCompanyAvatar, updateCompanyDetails } from "../controllers/company.controller.js"
import { verifyJwtForCompany,verifyAdmin } from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/register-company").post(verifyAdmin,registerCompany)
router.route("/login-company").post(loginCompany)
router.route("/log-out-company").get(verifyJwtForCompany,logOutCompany)
router.route("/update-company-details").patch(verifyJwtForCompany,updateCompanyDetails)
router.route("/get-company-details").get(verifyJwtForCompany,getCompanyDetails)
router.route("/update-company-avatar").patch(verifyJwtForCompany,upload.single("avatar"),updateCompanyAvatar)
router.route("/get-applied-students-list/:jobProfile").get(verifyJwtForCompany,getApplyStudentList)

export default router;
