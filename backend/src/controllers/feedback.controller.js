import { Feedback } from "../models/feedback.model.js";
import { asyncHandler } from "../utils/asnycHandler.util.js";
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

const newFeedback = asyncHandler(async(req,res)=>{
  const {content} = req.body
  if(!content){
    throw new ApiError(400, 'Content field is required')
  }
  const feedback = await Feedback.create({
    content,
    owner:req.user._id
  })
  if(!feedback){
    throw new ApiError(400,"Something went wrong while submitting feedback")
  }

  return res
  .status(200)
  .json(
    new ApiResponse(200,{},"Feedback sent successfully")
  )
})

export {
  newFeedback,
  
}