import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";
import { Job } from "../models/job.model.js";
import { asyncHandler } from "../utils/asnycHandler.util.js";

const newJobProfile = asyncHandler(async (req, res) => {
  const {
    designation,
    description,
    experiance,
    salaryPackage,
    criteria_10,
    criteria_12,
    criteria_cllg_cgpa,
    lastDate,
  } = req.body;

  const job = await Job.create({
    designation,
    description,
    experiance,
    salaryPackage,
    criteria_10,
    criteria_12,
    criteria_cllg_cgpa,
    lastDate,
    companyId: req.company._id,
  });
  if (!job) {
    throw new ApiError(400, "Something went wrong while creating job profile");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, job, "New Job Profile Created Successfully"));
});

const deleteJobProfile = asyncHandler(async(req,res)=>{
  const jobId = req.params._id
  if(!jobId){
    throw new ApiError(400,"Job id is required")
  }
  const job = await Job.findByIdAndDelete(jobId);

  return res
  .status(200)
  .json(
    new ApiResponse(200,job,"Job Profile is deleted successfully")
  )
})

const getAllJobProfile = asyncHandler(async (req, res) => {
  const jobs = await Job.find({});
  if (!jobs) {
    throw new ApiError(400, "No Jobs found at this moment");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, jobs, "Job Profiles fetched successfully"));
});

const updateJobProfile = asyncHandler(async(req,res)=>{
  const {
    designation,
    description,
    experiance,
    salaryPackage,
    criteria_10,
    criteria_12,
    criteria_cllg_cgpa,
    lastDate} = req.body

    const job = await Job.findOne({
      $and:[{companyId:req.company._id},{designation:req.params.designation}]
    })

    const newJobProfile = await Job.findOneAndUpdate(
      job._id,
      {
        designation,
        description,
        experiance,
        salaryPackage,
        criteria_10,
        criteria_12,
        criteria_cllg_cgpa,
        lastDate 
      },
      {
        new:true
      }
    )

    if(!updateJobProfile){
      throw new ApiError(400,"Something went wrong while updating profile")
    }
    
    return res
    .status(200)
    .json(
      new ApiResponse(200,newJobProfile,"Profile updated successfully")
    )
})

const applyForJob = asyncHandler(async(req,res)=>{
  const student = req.user
  const jobId = req.params.jobId
  if(!jobId){
    throw new ApiError(400,"Job id is required")
  }
  const job = await Job.findByIdAndUpdate(
    jobId,{
      $push:{
        students:student
      }
    },
    {
      new:true
    }
  )
  if(!job){
    throw new ApiError(400,"Something went wrong while appling for job")
  }

  return res
  .status(200)
  .json(
    new ApiResponse(200,job,"Successfully applied for the job ")
  )
})


export { 
  newJobProfile,
  getAllJobProfile,
  updateJobProfile,
  applyForJob,
  deleteJobProfile,
  
};
