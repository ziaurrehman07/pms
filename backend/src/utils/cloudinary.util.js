import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.util.js";
import { URL } from "url";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
          
cloudinary.config({ 
  cloud_name: 'di4334qw4', 
  api_key: '255264663687758', 
  api_secret: 'RQNxuGEtMoH94bkE6L9wytdnHaA' 
});

const uploadOnCloudinary = async (localPath,username,folder) => {
  try {
    if (!localPath){
      return null;
    }
    const currentDateTime = new Date().toISOString().replace(/[-:]/g, '').replace(/[TZ.]/g, '').slice(0, -3); 
    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
      folder:`${folder}`,
      public_id:`${username}_${folder}_${currentDateTime}`
    });
    fs.unlinkSync(localPath);
    return response;
  } catch (error) {
    fs.unlinkSync(localPath);
    throw new ApiError(400,error.message || `something went wrong while uploading ${folder}`)
  }
};

const deleteFromCloudinary = async(url,folder) => {
  try {
    const parsedUrl = new URL(url);
    const pathnameParts = parsedUrl.pathname.split('/');
    const publicId = pathnameParts[pathnameParts.length - 1].split('.')[0]; 
    const response =await cloudinary.uploader.destroy(`${folder}/${publicId}`)
    return response
  } catch (error) {
    throw new ApiError(400,error?.message || `Failed to delete file from cloudinary ${folder}`)
  }
}

export {uploadOnCloudinary,deleteFromCloudinary}