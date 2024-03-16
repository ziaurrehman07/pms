import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { ApiError } from "../../../backend/src/utils/ApiError.util";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "/api/v1/users/login",
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    const apiResponse = res.data;

    if (apiResponse.success) {
      // Store access and refresh tokens (implement logic here)
      console.log("Login successful!", apiResponse.data.loggedInUser);
      // Redirect or handle successful login
    } else {
      throw new ApiError(apiResponse.statusCode, apiResponse.message);
    }
  };
  return (
    <div className="bg-[#e9f1ef] w-full h-screen grid place-items-center">
      <div className="bg-white h-[70%] w-[330px] -mb-20 shadow-md rounded-lg drop-shadow-sm ">
        <div className="flex place-items-center justify-center  mt-12 ">
          <RiUserLine className="text-xl text-[#33363F] font-semibold" />
          <h4 className="text-blue-500 ml-2">College Login</h4>
        </div>
        <div className="flex flex-col place-content-center">
          <form
            onSubmit={handleLogin}
            className=" flex flex-col justify-center"
          >
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-16"
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-0.5"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-100 text-gray-500 mx-auto mt-3 pl-5 pr-5 p-0.5 rounded-md"
            >
              Login
            </button>
          </form>
          {/* <p>error && {error}</p> */}
          <p className="mx-auto mt-8 text-gray-500">
            For Company!
            <Link to="/companyLogin">
              <span className="text-blue-500 ml-1 font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
