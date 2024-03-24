import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { IoIosPaper } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function SidebarAdmin() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentRoute = location.pathname.split("/")[1];
    setActiveLink(currentRoute || "");
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink((prevActiveLink) =>
      link === prevActiveLink ? prevActiveLink : link
    );
  };

  return (
    <>
      <div className="  left-0  ml-3 rounded-lg border shadow-md border-[#d2d8d6] mb-4 mt-4  bg-white   flex-col w-60 pt-8 p-8 lg:p-8 lg:w-64">
        <Link to="/adminhome">
          <div
            className={`text-md text-black font-extrabold cursor-pointer ${
              activeLink === "" ? "" : ""
            }`}
            onClick={() => handleLinkClick("")}
          >
            <h4 className="whitespace-nowrap">Admin panel</h4>
          </div>
        </Link>
        <Link to="/admindashboard">
          <div
            className={`flex place-items-center mt-12 cursor-pointer ${
              activeLink === "admindashboard"
                ? "text-blue-400"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("admindashboard")}
          >
            <MdOutlineKeyboardCommandKey className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Dashboard</h1>
          </div>
        </Link>

        <Link to="/adminstudents">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "adminstudents" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("adminstudents")}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Students</h1>
          </div>
        </Link>

        <Link to="/admincompanies">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "admincompanies"
                ? "text-blue-400"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("admincompanies")}
          >
            <RiGalleryLine className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Companies</h1>
          </div>
        </Link>

        <Link to="/adminregisterstudent">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "adminregisterstudent"
                ? "text-blue-400"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("adminregisterstudent")}
          >
            <IoIosPaper className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Register student</h1>
          </div>
        </Link>

        <Link to="/adminregistercompanies">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "adminregistercompanies"
                ? "text-blue-400"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("adminregistercompanies")}
          >
            <IoIosPaper className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Register companies</h1>
          </div>
        </Link>

        <Link to="/adminfeedbacks">
          <div
            className={`flex place-items-center mt-10 cursor-pointer ${
              activeLink === "adminfeedbacks"
                ? "text-blue-400"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("adminfeedbacks")}
          >
            <VscFeedback className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Feedbacks</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SidebarAdmin;
