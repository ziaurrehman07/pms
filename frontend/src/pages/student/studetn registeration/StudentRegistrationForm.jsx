import { useState } from "react";
import axios from "axios";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const StudentRegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    enrollment: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    isVerified: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerificationCode = async () => {
    try {
      // Check if the email contains ".ies@ipsacademy.org"
      if (!formData.email.includes(".ies@ipsacademy.org")) {
        toast.error("Please use a valid college email.");
        return;
      }

      // to generate and send  verification OTP
      const response = await axios.post(
        "/api/v1/users/generate-otp-email-for-student",
        {
          email: formData.email,
        }
      );
      console.log(response.data); // Assuming your backend returns the generated code
      toast.success("Verification code sent to your email.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send verification code. Please try again later.");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const { email, otp } = formData;
      console.log("email check", email);
      console.log("email verification code", otp);

      // Send the verification code and email to backend for verification
      const response = await axios.post(
        "/api/v1/users/verify-email-for-student",
        {
          email,
          otp,
        }
      );

      console.log(response.data); // Assuming your backend returns verification status
      setFormData({ ...formData, isVerified: true });
      toast.success("Email verified successfully.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to verify OTP. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!formData.isVerified) {
      toast.error("Please verify your email first!");
      return;
    }
    // Submit your form data here, e.g., send it to a backend API
    console.log("Form Data:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      enrollment: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
      isVerified: false,
    });
  };

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[330px] h-[570px] mt-12 p-4 flex flex-col bg-white mb-12 rounded-md shadow-md relative"
      >
        <h1 className="grid place-items-center  text-blue-600 font-semibold mb-6">
          Registeration
        </h1>
        <p className="text-blue-800 font-bold grid place-items-center -mt-4 text-xs">
          Only for student
        </p>
        <label className="block mb-4  text-blue-500 font-bold text-xs">
          Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input mt-1 outline-none p-2 rounded-md  bg-blue-100 block w-full text-black font-semibold"
            required
          />
        </label>
        <label className="block mb-4 text-blue-500 font-bold text-xs">
          Enrollment:
          <input
            type="text"
            name="enrollment"
            value={formData.enrollment}
            onChange={handleChange}
            className="form-input mt-1 outline-none p-2 rounded-md  bg-blue-100 block w-full text-black font-semibold"
            required
          />
        </label>
        <label className="block mb-4 text-blue-500 font-bold text-xs">
          College email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input bg-blue-100 mt-1 outline-none p-2 rounded-md  block w-full text-black font-semibold"
            required
          />
        </label>
        <button
          type="button"
          onClick={handleVerificationCode}
          className=" text-blue-700 hover:underline mx-auto -mt-3 text-xs font-bold  rounded"
        >
          Generate OTP
        </button>
        <label className="block mb-4 text-blue-500 font-bold text-xs ">
          Verify OTP:
          <input
            type="number"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            className="form-input mt-1 outline-none p-2 rounded-md  bg-blue-100 block w-full text-black font-semibold"
            required
          />
          <button
            onClick={handleVerifyOTP}
            className="text-blue-700 hover:underline hover:text-blue-800 absolute right-7 top-[54%] transform -translate-y-1/2  "
          >
            Verify
          </button>
        </label>
        <label className="block mb-4 text-blue-500 font-bold text-xs">
          Password:
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input mt-1 outline-none p-2 rounded-md  bg-blue-100 block w-full text-black font-semibold"
            required
          />
          <span
            className="text-blue-500 text-xl absolute right-7 top-[66%] transform -translate-y-1/2 cursor-pointer" // Position the icon vertically centered within the input
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
          </span>
        </label>
        <label className="block mb-4 text-blue-500 font-bold text-xs">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input mt-1 outline-none p-2 rounded-md  bg-blue-100 block w-full text-black font-semibold"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 mx-auto font-semibold text-xs mt-4 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          REGISTER
        </button>

        <p className="flex justify-center mb-4 text-xs mt-3 font-bold">
          Go to login page!
          <Link to="/">
            <span className="ml-2 text-blue-700 cursor-pointer hover:underline">
              click here
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
