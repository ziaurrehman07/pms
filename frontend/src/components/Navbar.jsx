import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import LogoutModal from "./LogoutModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import GetAllStudents from "../API/GetAllStudentsApi";
function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const apiUrl = "/api/v1/users/get-user";
  const { students } = GetAllStudents(apiUrl);

  const handleLogout = async () => {
    try {
      await axios.get("api/v1/users/log-out-user");
      window.localStorage.clear();
      navigate("/");
      console.log("Logout clicked");
      setLogoutModalOpen(false);
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };

  return (
    <>
      <div className=" sticky top-0 z-10 flex  justify-between  h-12  mr-10 mt-4 bg-white  ml-4 rounded-md place-items-center p-6 shadow-sm ">
        <div className="cursor-pointer">
          <h2 className="font-medium whitespace-nowrap text-sm">
            Hello, {students.fullName}
          </h2>
          <p className="text-xs text-gray-500">Have a nice Day</p>
        </div>
        <div className="flex place-items-center">
          <div>
            {students.avatar ? (
              <img
                src={students.avatar}
                className="h-10 mr-3 rounded-full cursor-pointer"
                alt="logo"
              />
            ) : (
              <CgProfile className="h-10 w-10 cursor-pointer text-blue-500 mr-3" />
            )}
          </div>
          <div className="flex place-items-center">
            {students.role === "admin" && (
              <div className=" cursor-pointer">
                <h2 className="font-medium text-sm">{students.username}</h2>
                <p className="text-xs text-gray-500">{students.role}</p>
              </div>
            )}
            {students.role === "student" && (
              <div className=" cursor-pointer">
                <h2 className="font-medium text-sm">{students.enrollment}</h2>
                <p className="text-xs text-gray-500">{students.role}</p>
              </div>
            )}
            <div>
              <RiArrowDropDownLine
                className={`cursor-pointer ml-4 text-xl ${
                  isDropdownOpen ? "open" : ""
                }`}
                style={{
                  transition: "transform 0.3s ease-in-out",
                  transform: isDropdownOpen ? "rotate(360deg)" : "rotate(0deg)",
                }}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              />

              {students.role === "student" && (
                <>
                  {isDropdownOpen && (
                    <div className="pr-16 pl-8 absolute right-0 mt-5  bg-white  border border-gray-200 rounded-2xl shadow-lg p-2 space-y-2">
                      <div className="mt-10 mb-32 ">
                        <div className="flex place-items-center mb-5 ">
                          <RiUserLine />
                          <h1 className="text-sm  ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">
                            Profile
                          </h1>
                        </div>
                        <div className="flex place-items-center  mb-5">
                          <MdEdit />
                          <h1 className="text-sm ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">
                            Edit primary info
                          </h1>
                        </div>
                        <div className="flex place-items-center mb-5 ">
                          <RiLockPasswordLine />
                          <h1 className="text-sm ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">
                            Change password
                          </h1>
                        </div>
                        <div className="flex place-items-center mb-10">
                          <IoExitOutline />
                          <button
                            className="text-xs ml-2 text-gray-700 hover:text-red-500 cursor-pointer"
                            onClick={() => setLogoutModalOpen(true)}
                          >
                            LOGOUT
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {students.role === "admin" && (
                <>
                  {isDropdownOpen && (
                    <div className="pr-16 pl-8 absolute right-0 mt-5  bg-white  border border-gray-200 rounded-2xl shadow-lg p-2 space-y-2">
                      <div className="mt-10 mb-32 ">
                        <div className="flex place-items-center mb-5 ">
                          <MdEdit />
                          <h1 className="text-sm ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">
                            Change avatar
                          </h1>
                        </div>
                        <div className="flex place-items-center mb-5 ">
                          <RiLockPasswordLine />
                          <h1 className="text-sm ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">
                            Change password
                          </h1>
                        </div>
                        <div className="flex place-items-center mb-10">
                          <IoExitOutline />
                          <button
                            className="text-xs ml-2 text-gray-700 hover:text-red-500 cursor-pointer"
                            onClick={() => setLogoutModalOpen(true)}
                          >
                            LOGOUT
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <LogoutModal
                isOpen={isLogoutModalOpen}
                onClose={() => setLogoutModalOpen(false)}
                onLogout={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
