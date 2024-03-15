import { ApiError } from "./ApiError.util.js";
import { User } from "../models/user.model.js"

const getAllStudentEmails = async () => {
  try {
    const studentEmails = await User.find({ role: 'student',isPalced:false }, { email: 1 })
      .select("-password -refreshToken"); 

    if (!studentEmails.length) {
      throw new ApiError(400, 'No students found');
    }

    const emails = studentEmails.map(student => student.email);

    return emails
  } catch (error) {
    throw new ApiError(500,error?.message || "Internal server error")
  }
};

export {
  getAllStudentEmails,
}