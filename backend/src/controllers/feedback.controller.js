import { Feedback } from "../models/feedback.model.js";
import { asyncHandler } from "../utils/asnycHandler.util.js";
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

const newFeedback = asyncHandler(async(req,res)=>{
  const {content} = req.body
  let id;
  if(req.user){
   id = req.user._id
  }
  if(req.company){
    id = req.company._id
  }
  if(!content){
    throw new ApiError(400, 'Content field is required')
  }
  const feedback = await Feedback.create({
    content,
    owner:id
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

const getAllFeedbacks = asyncHandler(async(req,res)=>{
  const feedbacks = await Feedback.find({})
  .populate({
    path: 'owner',
    select:"fullName enrollment avatar"
  })

  if(!feedbacks.length){
    throw new ApiError(400,"No feedback found.")
  }

  return res
  .status(200)
  .json(
    new ApiResponse(200,feedbacks,"Feedbacks fetched successfully")
  )
})

export {
  newFeedback,
  getAllFeedbacks,
}