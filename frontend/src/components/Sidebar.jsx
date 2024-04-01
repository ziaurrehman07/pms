import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { IoIosPaper } from "react-icons/io";
import { RiArrowDropDownLine, RiGalleryLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
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
  const toggleResumeDropdown = () => {
    setShowResumeDropdown(!showResumeDropdown);
  };
  return (
    <div className=" ml-3 rounded-lg border shadow-md border-[#d2d8d6] mb-4 mt-4 bg-white  flex  flex-col w-[200px] pt-8 p-8 lg:p-8 lg:w-64">
      <Link to="/studenthome">
        <div
          className={` text-md text-black font-extrabold cursor-pointer ${
            activeLink === "dashboard" ? "" : ""
          }`}
          onClick={() => handleLinkClick("")}
        >
          <h4 className="whitespace-nowrap ">IPS Academy</h4>
        </div>
      </Link>
      <Link to="/dashboard">
        <div
          className={`flex place-items-center hover:text-blue-500 mt-12 cursor-pointer ${
            activeLink === "dashboard"
              ? "text-blue-500 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => handleLinkClick("dashboard")}
        >
          <MdOutlineKeyboardCommandKey className="mr-1 text-lg" />
          <h1 className=" text-sm whitespace-nowrap">Dashboard</h1>
        </div>
      </Link>

      <Link to="/updates">
        <div
          className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
            activeLink === "updates"
              ? "text-blue-500 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => handleLinkClick("updates")}
        >
          <LuBarChart2 className="mr-1 text-lg" />
          <h1 className=" text-sm  whitespace-nowrap">Job updates</h1>
        </div>
      </Link>
      <Link to="/companies">
        <div
          className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
            activeLink === "companies"
              ? "text-blue-500 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => handleLinkClick("companies")}
        >
          <RiGalleryLine className="mr-1 text-lg" />
          <h1 className=" text-sm  whitespace-nowrap">Companies</h1>
        </div>
      </Link>
      {/* resume section */}
      <div>
        <div
          className={`flex items-center cursor-pointer mt-3 ${
            showResumeDropdown ? "text-gray-500" : "text-gray-500"
          }`}
          onClick={toggleResumeDropdown}
        >
          <IoIosPaper className="mr-1 text-lg " />
          <h1 className="text-sm whitespace-nowra">Resume</h1>
          <RiArrowDropDownLine
            className="ml-1 text-md text-black hover:blue-500"
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: showResumeDropdown ? "rotate(360deg)" : "rotate(0deg)",
            }}
          />
        </div>
        {showResumeDropdown && (
          <div className="ml-16 text-xs font-semibold text-gray-500">
            <Link to="/previewresume">
              <div
                className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
                  activeLink === "previewresume"
                    ? "text-blue-500 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => handleLinkClick("previewresume")}
              >
                Preview
              </div>
            </Link>
            <Link to="/updateresume">
              <div
                className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
                  activeLink === "updateresume"
                    ? "text-blue-500 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => handleLinkClick("updateresume")}
              >
                Update
              </div>
            </Link>
          </div>
        )}
      </div>
      <div>
        <Link to="/feedback">
          <div
            className={`flex mb-4 place-items-center hover:text-blue-500 nter mt-12 cursor-pointer ${
              activeLink === "feedback"
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => handleLinkClick("feedback")}
          >
            <VscFeedback className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Feedback</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
