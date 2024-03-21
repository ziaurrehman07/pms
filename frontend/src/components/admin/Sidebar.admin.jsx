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
      <div className="sticky top-0 ml-3 rounded-lg border shadow-md border-[#d2d8d6] h-[95%] mt-4  bg-white   flex-col w-60 pt-8 p-8">
        <Link to="">
          <div
            className={`text-md text-black font-extrabold cursor-pointer ${
              activeLink === "dashboard" ? "" : ""
            }`}
            onClick={() => handleLinkClick("")}
          >
            <h4 className="whitespace-nowrap">Admin pannel</h4>
          </div>
        </Link>
        <Link to="">
          <div
            className={`flex place-items-center mt-12 cursor-pointer ${
              activeLink === "dashboard" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("dashboard")}
          >
            <MdOutlineKeyboardCommandKey className="mr-1 text-lg" />
            <h1 className=" text-sm ">Dashboard</h1>
          </div>
        </Link>

        <Link to="">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "updates" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("updates")}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm ">Students</h1>
          </div>
        </Link>

        <Link to="">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "companies" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("companies")}
          >
            <RiGalleryLine className="mr-1 text-lg" />
            <h1 className=" text-sm ">Companies</h1>
          </div>
        </Link>

        <Link to="">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "resume" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("resume")}
          >
            <IoIosPaper className="mr-1 text-lg" />
            <h1 className=" text-sm ">Register student</h1>
          </div>
        </Link>

        <Link to="">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "companies" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("companies")}
          >
            <RiGalleryLine className="mr-1 text-lg" />
            <h1 className=" text-sm ">Register company</h1>
          </div>
        </Link>

        <Link to="">
          <div
            className={`flex place-items-center mt-10 cursor-pointer ${
              activeLink === "feedback" ? "text-blue-400" : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("feedback")}
          >
            <VscFeedback className="mr-1 text-lg" />
            <h1 className=" text-sm ">Feedbacks</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SidebarAdmin;
