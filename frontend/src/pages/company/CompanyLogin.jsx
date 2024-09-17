import { Link, useNavigate } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill, RiUserLine } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

function CompanyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Corrected: Initialize loading to false
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Set loading to true when starting the login process
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/companies/login-company",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Response:", response);
      localStorage.setItem("user", JSON.stringify(response.data));
      const { role } = response.data.data.loggedInCompany;
      console.log("role", role);
      if (role === "company") navigate("/company");
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
        <div className="flex place-items-center justify-center  mt-12 ">
          <RiUserLine className="text-xl text-[#33363F] font-semibold" />
          <h4 className="text-rose-600  font-bold ml-2">Company Login</h4>
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
              className="text-rose-500 text-xl absolute right-8 top-[46.5%] transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
            </span>
            <button
              className="bg-rose-500 text-white font-semibold mx-auto mt-3 pl-5 pr-5 p-0.5 rounded-md"
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
            For College!
            <Link to="/login">
              <span className="text-blue-500 font-bold hover:text-blue-600  ml-1">
                Login
              </span>
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

export default CompanyLogin;
