import { Link, useNavigate } from "react-router-dom";
import {
  RiErrorWarningLine,
  RiEyeCloseFill,
  RiEyeFill,
  RiUserLine,
} from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Set loading to true when starting the login process
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Response:", response);
      localStorage.setItem("user", JSON.stringify(response.data));
      const { role } = response.data.data.loggedInUser;
      console.log(role);
      if (role === "student") navigate("/student");
      else if (role === "admin") navigate("/admin");
      else if (role === "company") navigate("/company");
      else if (role === "master") navigate("/master");
    } catch (error) {
      setError("Login failed. Please check your credentials."); // Set error message
      console.error("Login failed", error);
    } finally {
      setLoading(false); // Reset loading to false after request is complete
    }
  };

  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="bg-white h-[500px] w-[300px] shadow-md rounded-lg drop-shadow-sm mt-10 mb-10 ">
        <div className="flex flex-col items-center">
          <div className="flex place-items-center justify-center  mt-6 ">
            <RiUserLine className="text-xl text-[#33363F] font-semibold" />
            <h4 className="text-blue-500 font-bold ml-2">College Login</h4>
          </div>
          {/* dot icon with popup  */}
          <div className="relative flex items-center text-blue-600 pt-5">
            <RiErrorWarningLine
              onClick={togglePopup}
              size={24}
              cursor={"pointer"}
            />
            {showPopup && (
              <div className="absolute top-12 -right-24 bg-white md:bg-inherit md:left-60 w-max border border-black rounded-xl shadow-md p-4">
                <h4 className="font-semibold mb-2">Credentials Information</h4>
                <div className="text-sm">
                  <p className="font-semibold italic">Admin:</p>
                  <p>Email: admin@test.com</p>
                  <p>Password: admin@123</p>
                  <hr className="my-2" />

                  <p className="font-semibold italic">Student:</p>
                  <p>Email: student@test.com</p>
                  <p>Password: student@123</p>
                  <hr className="my-2" />

                  <p className="font-semibold italic">Company:</p>
                  <p>Email: company@test.com</p>
                  <p>Password: company@123</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col place-content-center">
          <form
            className=" flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-16"
              type="text"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} // Corrected: Use email state
            />
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-0.5 pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              autoComplete="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} // Corrected: Use password state
              style={{ paddingRight: "40px" }}
            />
            <span
              className="text-blue-500 text-xl absolute right-8 top-[50%] transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
            </span>
            <button
              className="bg-blue-500 text-white font-semibold mx-auto mt-3 pl-5 pr-5 p-0.5 rounded-md"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span>Submitting..</span>
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="mx-auto mt-8 text-gray-500">
            For Company!
            <Link to="/company/login">
              <span className="text-blue-500 font-bold hover:text-blue-600  ml-1">
                Login
              </span>
            </Link>
          </p>
          <p className="mx-auto text-blue-700 font-bold ">
            <Link to="/student/register/self">
              <span>Register!</span>
            </Link>
          </p>
          <div className="p-4 -mt-3">
            {error && (
              <p className="text-red-600 bg-gray-100 text-xs p-3 font-semibold italic rounded-lg">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
