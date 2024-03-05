import {Router} from "express"
import { getCompanyDetails, loginCompany, registerCompany, updateCompanyDetails } from "../controllers/company.controller.js"
import { verifyJwtForCompany } from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/register-company").post(registerCompany)
router.route("/login-company").post(loginCompany)
router.route("/log-out-company").get(verifyJwtForCompany,loginCompany)
router.route("/update-company-details").patch(verifyJwtForCompany,updateCompanyDetails)
router.route("/get-company-details").get(verifyJwtForCompany,getCompanyDetails)
router.route("/update-company-avatar").patch(verifyJwtForCompany,upload.single("avatar"),getCompanyDetails)