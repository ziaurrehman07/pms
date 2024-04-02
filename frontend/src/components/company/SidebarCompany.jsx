import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { RiGalleryLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function SidebarCompany() {
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
      <div className="ml-3 mr-4 rounded-lg border shadow-md border-[#d2d8d6] mb-4 mt-4  bg-white   flex-col w-60 pt-8 p-8 lg:p-8 lg:w-64">
        <Link to="/companyhome">
          <div
            className={`text-md text-black font-extrabold cursor-pointer ${
              activeLink === "" ? "" : ""
            }`}
            onClick={() => handleLinkClick("")}
          >
            <h4 className="whitespace-nowrap">Company panel</h4>
          </div>
        </Link>
        <Link to="/companydashboard">
          <div
            className={`flex place-items-center mt-12 cursor-pointer ${
              activeLink === "companydashboard"
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("companydashboard")}
          >
            <MdOutlineKeyboardCommandKey className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Dashboard</h1>
          </div>
        </Link>

        <Link to="/companyjobprofiles">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "companyjobprofiles"
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("companyjobprofiles")}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Job Profiles</h1>
          </div>
        </Link>

        <Link to="/companyStudents">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink === "companyStudents"
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("companyStudents")}
          >
            <RiGalleryLine className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Applied Students</h1>
          </div>
        </Link>
        <Link to="/companyfeedback">
          <div
            className={`flex place-items-center mt-10 cursor-pointer ${
              activeLink === "companyfeedback"
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("companyfeedback")}
          >
            <VscFeedback className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Give Feedback</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SidebarCompany;
