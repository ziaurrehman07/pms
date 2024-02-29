import mongoose, { mongo } from "mongoose";

const jobSchema = new mongoose.Schema({
  company:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Company'
  },
  designation:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  experience:{
    type:String,
    required:true
  },
  salaryPackage:{
    type:Number,
    required:true,
    min:3,
  }
},{timestamps:true})

export const Job = mongoose.model( 'Job', jobSchema );