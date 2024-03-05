// require('dotenv').config()
import {app} from "../src/app.js"
import connectDB from '../src/DB/index.js'

import * as dotenv from 'dotenv';
dotenv.config({
  path:'../.env'
});

const port = process.env.PORT || 3000

connectDB()
.then(app.listen(port,()=>{
  console.log(`Server  is running on ${port}`)
}))
.catch(error=>{
  console.log("MongoDB connection failed !!! ",error)
})