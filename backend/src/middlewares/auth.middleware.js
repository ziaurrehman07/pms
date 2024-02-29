import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asnycHandler.util"
import { User } from "../models/user.model"
import { ApiError } from "../utils/ApiError.util"

export const verifyJWT = asyncHandler(async(req,res,next)=>{
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
  
    if(!token){
      throw new ApiError(400,"Unauthorized request")
    }
    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY)
  
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
  
    if(!user){
      throw new ApiError(400, 'Invalid access token')
    }
  
    req.user=user
    next()
  } catch (error) {
    throw new ApiError(400,error?.message || "Invalid access token")
  }
})