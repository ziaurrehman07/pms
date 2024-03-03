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
    type:Number,
    default:0
  },
  salaryPackage:{
    type:Number,
    required:true,
    min:3,
  },
  criteria_10:{
    type:Number
  },
  criteria_12:{
    type:Number
  },
  criteria_cllg_cgpa:{
    type:Number
  },
  students:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
  ]
},{timestamps:true})

export const Job = mongoose.model( 'Job', jobSchema );