import bcrypt,{ hash } from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true,
    trim:true
  },
  username:{
    type:String,
    required:true,
    unique:true,
    lowerCase:true,
    trim:true,
    index:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  role:{
    type:String,
    enum:["admin","student","hod","company"],
    default:"student"
  },
  password:{
    type:String,
    required:true,
  },
  avatar:{
    type:String,
    required:true
  },
  refreshToken:{
    type:String
  }
},{timestamps:true})

userSchema.pre("save",async function (next){
  if(this.isModified("password")){
    this.password = await hash(this.password,11)
  }
  next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = async function (){
  return jwt.sign(
    {
      _id:this._id,
      username:this.username,
      fullName:this.fullName,
      email:this.email,
      role:this.role
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateRefreshToken = async function (){
  return jwt.sign(
    {
      _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model( 'User', userSchema )