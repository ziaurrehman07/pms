import { User } from "../models/user.model.js";
import { Company } from "../models/company.model.js";
import { asyncHandler } from "../utils/asnycHandler.util.js";
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.util.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

const registerStudent = asyncHandler(async (req, res) => {
  const { fullName, username, email, password, enrollment } = req.body;

  if (
    [fullName, username, email, password, enrollment].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ enrollment }, { email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(400, "User with email or username is already exist");
  }

  const user = await User.create({
    fullName: fullName,
    username: username,
    password: password,
    email: email,
    enrollment: enrollment,
    isPalced: false,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User register successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username || email)) {
    throw new ApiError(400, "Username or Email field must be filled");
  }
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(401, "Invalid username or email");
  }
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid Password");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  user.accessToken = accessToken;
  user.refreshToken = refreshToken;
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -accessToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, { loggedInUser }, "Logged in Successfully"));
});

const logOutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(400, "Unauthorized Access");
  }
  const decodedRefreshToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET_KEY
  );
  const user = await User.findById(decodedRefreshToken?._id);
  if (!user) {
    throw new ApiError(401, "Invalid Refresh Token");
  }

  if (incomingRefreshToken !== user.refreshToken) {
    throw new ApiError(401, "Refresh Token is expired");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, {}, "New  access token generated successfully"));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);
  const verifyPassword = await user.isPasswordCorrect(oldPassword);
  if (!verifyPassword) {
    throw new ApiError(400, "Invalid Password");
  }

  user.password = newPassword;
  user.save({
    validateBeforeSave: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User fetched Successfully"));
});

const updateStudentAccountDetails = asyncHandler(async (req, res) => {
  const {
    fullName,
    mobile,
    email,
    branch,
    result_10,
    result_12,
    address,
    college_cgpa,
  } = req.body;
  const isUserAvailable = await User.findOne({ email: email });
  if (isUserAvailable) {
    throw new ApiError(400, "Email already exist enter another one");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        fullName,
        email,
        branch,
        mobile,
        college_cgpa,
        result_10,
        result_12,
        address,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated Successfully"));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;
  const folder = "avatar";
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }
  const avatar = await uploadOnCloudinary(
    avatarLocalPath,
    req.user._id,
    folder
  );
  if (!avatar?.url) {
    throw new ApiError(400, "Error while uploading avatar on cloudinary");
  }

  const oldAvatarUrl = req.user.avatar;
  if (oldAvatarUrl) {
    await deleteFromCloudinary(oldAvatarUrl, folder);
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated successfully"));
});

const updateStudentResume = asyncHandler(async (req, res) => {
  const resumeLocalPath = req.file?.path;
  const folder = "resume";
  if (!resumeLocalPath) {
    throw new ApiError(400, "Resume file is missing");
  }

  const resume = await uploadOnCloudinary(
    resumeLocalPath,
    req.user._id,
    folder
  );
  if (!resume.url) {
    throw new ApiError(400, "Error while uploading resume on cloudinary");
  }

  const oldResumeUrl = req.user.resume;
  if (oldResumeUrl) {
    await deleteFromCloudinary(oldResumeUrl, folder);
  }
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        resume: resume.url,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Resume updated successfully"));
});

const previewAvatar = asyncHandler(async (req, res) => {
  const avatarUrl = req.user.avatar;
  if (!avatarUrl) {
    throw new ApiError(400, "Avatar not found");
  }

  return res
    .status(200)
    .redirect(avatarUrl)
    .json(200, avatarUrl, "Resume fetched Successfully");
});

const previewResume = asyncHandler(async (req, res) => {
  const resumeUrl = req.user.resume;
  if (!resumeUrl) {
    throw new ApiError(400, "Resume not found");
  }

  return res
    .status(200)
    .redirect(resumeUrl)
    .json(200, resumeUrl, "Resume fetched Successfully");
});

const downloadResume = asyncHandler(async (req, res) => {
  const resumeUrl = req.user.resume;
  if (!resumeUrl) {
    throw new ApiError(401, "No Resume Found");
  }
  return res.redirect(resumeUrl);
});

const placedStudentDetails = asyncHandler(async(req,res)=>{
  const students = await User.find(
    {
      isPalced:true
    }
  ).select("-password -refreshToken")

  return res
  .status(200)
  .json(
    new ApiResponse(200,{students},"Placed students details fetched successfully")
  )
})

const deleteStudent = asyncHandler(async(req,res)=>{
  try {
    const {studentId} =  req.params;
    const student = await User.findByIdAndDelete(studentId)
    if(student.isPalced){
      
    }
  } catch (error) {
    throw new ApiError(500,error?.message || "Error while deleting student")
  }

  return  res
  .status(200)
  .json(
    new ApiResponse(200,student,"Student deleted successfully")
  )
})

const deleteCompany = asyncHandler(async(req,res)=>{
  try {
    const {companyId} =  req.params;
    const company = await Company.findByIdAndDelete(companyId)
  } catch (error) {
    throw new ApiError(500,error?.message || "Error while deleting company")
  }

  return  res
  .status(200)
  .json(
    new ApiResponse(200,company,"Student deleted successfully")
  )
})

export {
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
  downloadResume,
  placedStudentDetails,
  deleteStudent,
  deleteCompany
};
