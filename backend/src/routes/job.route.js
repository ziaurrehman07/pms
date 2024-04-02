import {Router} from "express"
import {verifyJWT, verifyJwtForCompany} from "../middlewares/auth.middleware.js"
import { applyForJob, deleteJobProfile, getAllJobProfile, getCompanyAllJobs, getCompanyJobDetailsById, getJobDetailsById, newJobProfile, updateJobProfile } from "../controllers/job.controller.js"

const router = Router()

router.route("/new-job-profile").post(verifyJwtForCompany,newJobProfile)
router.route("/update-job-profile/:jobId").patch(verifyJwtForCompany,updateJobProfile)
router.route("/delete-job-profile/:jobId").delete(verifyJwtForCompany,deleteJobProfile)
router.route("/apply-for-job/:jobId").get(verifyJWT,applyForJob)
router.route("/get-all-jobs").get(verifyJWT,getAllJobProfile)
router.route("/get-job-details/:jobId").get(verifyJWT,getJobDetailsById)
router.route("/get-current-company-all-jobs").get(verifyJwtForCompany,getCompanyAllJobs)
router.route("/get-current-company-job-details/:jobId").get(verifyJwtForCompany,getCompanyJobDetailsById)


export  default router;