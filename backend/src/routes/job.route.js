import {Router} from "express"
import {verifyJWT, verifyJwtForCompany} from "../middlewares/auth.middleware.js"
import { applyForJob, getAllJobProfile, newJobProfile, updateJobProfile } from "../controllers/job.controller.js"

const router = Router()

router.route("/new-job-profile").post(verifyJwtForCompany,newJobProfile)
router.route("/update-job-profile").post(verifyJwtForCompany,updateJobProfile)
router.route("/get-all-jobs").get(getAllJobProfile)
router.route("/update-job-profile").patch(verifyJwtForCompany,updateJobProfile)
router.route("/apply-for-job/:jobId").get(verifyJWT,applyForJob)

export  default router;