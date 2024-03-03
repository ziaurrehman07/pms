import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.util";
import { URL } from "url";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localPath) => {
  try {
    if (!localPath) return null;

    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localPath);

    return response;
  } catch (error) {
    fs.unlinkSync(localPath);
    return null;
  }
};

const deleteFromCloudinary = async(url) => {
  try {
    const parsedUrl = new URL(url);
    const pathnameParts = parsedUrl.pathname.split('/');
    const publicId = pathnameParts[pathnameParts.length - 1].split('.')[0]; 
    cloudinary.uploader.destroy(publicId)
    return null
  } catch (error) {
    throw new ApiError(400,"Failed to delete file from cloudinary")
  }
}

export {uploadOnCloudinary,deleteFromCloudinary}