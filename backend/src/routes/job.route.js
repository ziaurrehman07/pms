import {Router} from "express"
import {verifyJwtCompany} from  '../middlewares/auth.middleware.js'
import { newJobProfile, updateJobProfile } from "../controllers/job.controller.js"

const router = Router()

router.route("/new-job-profile").post(verifyJwtCompany,newJobProfile)
router.route("/update-job-profile").post(verifyJwtCompany,updateJobProfile)