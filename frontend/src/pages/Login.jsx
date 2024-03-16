import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import axios from "axios";
function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("your-backend-login-endpoint", {
        email,
        password,
      });
      // Assuming your backend returns a token upon successful login
      const token = response.data.token;

      // Store the token in local storage or session storage for future requests
      localStorage.setItem("token", token);

      // Redirect the user to the dashboard or homepage
      // You can use React Router for navigation
      history.push("/dashboard");
    } catch (error) {
      // Handle error (e.g., display error message to the user)
      console.error("Login failed:", error.message);
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
          <form className=" flex flex-col justify-center">
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-16"
              type="text"
              placeholder="Email"
            />
            <input
              className="m-5 p-3 shadow-sm bg-gray-100 outline-none rounded-lg mt-0.5"
              type="password"
              placeholder="Password"
            />
            <button className="bg-gray-100 text-gray-500 mx-auto mt-3 pl-5 pr-5 p-0.5 rounded-md">
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
