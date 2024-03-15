import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
function CompanyLogin() {
  return (
    <div className="bg-[#e9f1ef] w-full h-screen grid place-items-center">
      <div className=" bg-white h-[70%] w-[330px] -mb-20 shadow-md rounded-lg drop-shadow-sm ">
        <div className="flex place-items-center justify-center  mt-12 ">
          <RiUserLine className="text-xl text-[#33363F] font-semibold" />
          <h4 className="text-blue-500 ml-2">Company login</h4>
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
            For College!
            <Link to="/login">
              <span className="text-blue-500 ml-1 font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
