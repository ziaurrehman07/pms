import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { asyncHandler } from "../utils/asnycHandler.util.js";
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.util.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const company = await Company.findById(userId);
    const accessToken = company.generateAccessToken();
    const refreshToken = company.generateRefreshToken();
    company.refreshToken = refreshToken;
    company.accessToken = accessToken;
    company.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

const registerCompany = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const isCompanyAvailable = await Company.findOne({ email });
  if (isCompanyAvailable) {
    throw new ApiError(400, "Company already exists");
  }
  const company = await Company.create({
    name,
    email,
    password,
  });

  const createdCompany = await Company.findById(company._id).select(
    "-password"
  );

  return res
    .status(200)
    .json(
      new ApiResponse(200, createdCompany, "Company registered successfully!")
    );
});

const loginCompany = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    throw new ApiError(400, "Email is required");
  }
  const company = await Company.findOne({
    email: email,
  });
  if (!company) {
    throw new ApiError(401, "Invalid email");
  }
  const isPasswordValid = await company.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Password");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    company._id
  );
  company.accessToken = accessToken;
  company.refreshToken = refreshToken;
  const loggedInCompany = await Company.findById(company._id).select(
    "-password -refreshToken "
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { loggedInCompany, accessToken },
        "Logged in Successfully"
      )
    );
});

const logOutCompany = asyncHandler(async (req, res) => {
  await Company.findByIdAndUpdate(
    req.company?._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .json(new ApiResponse(200, {}, "Company Logged Out"));
});

const updateCompanyDetails = asyncHandler(async (req, res) => {
  const { name, email, description, address, website } = req.body;

  if (
    (name && name !== req.company.name) ||
    (email && email !== req.company.email)
  ) {
    const isCompanyAvailable = await Company.findOne({
      $or: [{ name }, { email }],
    });
    if (isCompanyAvailable) {
      throw new ApiError(400, "Name and email already exist fill another one");
    }
  }
  const company = await Company.findByIdAndUpdate(
    req.company?._id,
    {
      $set: {
        name,
        email,
        description,
        address,
        website,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(
      new ApiResponse(200, company, "Company Details Updated Successfully!")
    );
});

const updateCompanyDetailsByAmin = asyncHandler(async (req, res) => {
  const { companyId } = req.params;
  const { name, email, description, address, website } = req.body;
  const comp = await Company.findById(companyId);
  if ((name && name !== comp.name) || (email && email !== comp.email)) {
    const isCompanyAvailable = await Company.findOne({
      $or: [{ name }, { email }],
    });
    if (isCompanyAvailable) {
      throw new ApiError(400, "Name and email already exist fill another one");
    }
  }
  const company = await Company.findByIdAndUpdate(
    companyId,
    {
      $set: {
        name,
        email,
        description,
        address,
        website,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(
      new ApiResponse(200, company, "Company Details Updated Successfully!")
    );
});

const getCurrentCompanyDetails = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(200, req.company, "Company details fetched successfully")
    );
});

const getCompanyDetails = asyncHandler(async (req, res) => {
  const { companyId } = req.params;
  if (!companyId) {
    throw new ApiError(400, "Company id is required!");
  }

  const company = await Company.findById(companyId).select(
    "-password -refreshToken"
  );
  if (!company) {
    throw new ApiError(404, "Company not found!");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, company, "Student Details Fetched Successfully")
    );
});

const updateCompanyAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;
  const folder = "companyAvatar";
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }
  const oldAvatar = req.company?.avatar;
  const avatar = await uploadOnCloudinary(
    avatarLocalPath,
    req.company._id,
    folder
  );
  if (!avatar.url) {
    throw new ApiError(401, "Error while uploading on cloudinary");
  }
  const company = await Company.findByIdAndUpdate(
    req.company._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  );
  if (oldAvatar) {
    await deleteFromCloudinary(oldAvatar, folder);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, company, "Company avatar updated successfully"));
});

const getApplyStudentList = asyncHandler(async (req, res) => {
  const { jobId } = req.params;
  const studentList = await Job.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(jobId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "students",
        foreignField: "_id",
        as: "studentsList",
      },
    },
    {
      $unwind: "$studentsList",
    },
    {
      $project: {
        _id: "$studentsList._id",
        fullName: "$studentsList.fullName",
        avatar:"$studentsList.avatar" ,
        enrollment:"$studentsList.enrollment" ,
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        studentList,
        "Applied students details fetched successfully"
      )
    );
});

const getAllCompanyDetails = asyncHandler(async (req, res) => {
  const companies = await Company.find({},{name:1,avatar:1});
  if (!companies) {
    throw new ApiError(400, "Company details is not available");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, companies, "Companies details fetched successfully")
    );
});

const hireStudent = asyncHandler(async (req, res) => {
  const { studentId, jobId } = req.params;
  const existedStudentInCompany = await Company.findOne({
    $and:[{selectedStudents:{$in:studentId}},{_id:req.company._id}]
  })
  if(existedStudentInCompany){
    throw new ApiError(400,"Student already hired!")
  }
  const company = await Company.findByIdAndUpdate(
    req.company?._id,
    {
      $push: {
        selectedStudents: studentId,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  const student = await User.findByIdAndUpdate(
    studentId,
    {
      isPlaced: true,
      $set: {
        designation: jobId,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  const job = await Job.findByIdAndUpdate(
    jobId,
    {
      $pull:{
        students:studentId
      }
    },
    {
      new:true
    }
  )

  return res
    .status(200)
    .json(
      new ApiResponse(200, { student, company,job }, "Student Hired Successfully")
    );
});

const unHiredAllStudent = asyncHandler(async(req,res)=>{
  const {jobId} = req.params
  if(!jobId){
    throw new ApiError(404,"Job id is required!")
  }
  const job=await Job.findByIdAndUpdate(
    jobId,
    {
      $unset:{
        students:1
      }
    },
    {
      new:true
    }
  )

  return res
  .status(200)
  .json(
    new ApiResponse(200,job,"Successfully removed students from job .")
  )
})

const changeCompanyCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const company = await Company.findById(req.company._id);
  const verifyPassword = await company.isPasswordCorrect(oldPassword);
  if (!verifyPassword) {
    throw new ApiError(400, "Invalid Password");
  }

  company.password = newPassword;
  company.save({
    validateBeforeSave: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

export {
  registerCompany,
  loginCompany,
  logOutCompany,
  updateCompanyDetails,
  getCurrentCompanyDetails,
  getCompanyDetails,
  updateCompanyAvatar,
  getApplyStudentList,
  getAllCompanyDetails,
  hireStudent,
  unHiredAllStudent,
  changeCompanyCurrentPassword,
  updateCompanyDetailsByAmin,
};
