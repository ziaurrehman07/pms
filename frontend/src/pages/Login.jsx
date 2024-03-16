import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [FormData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("/api/v1/users/login", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(FormData),
  //     });
  //     const data = await res.json();
  //   } catch (error) {}
  // };
  //via axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/users/login", FormData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = res.data;
    } catch (error) {
      // Handle errors
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
            className=" flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-16"
              type="text"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-0.5"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-gray-100 text-gray-500 mx-auto mt-3 pl-5 pr-5 p-0.5 rounded-md"
            >
              Login
            </button>
          </form>
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
