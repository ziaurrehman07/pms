import { LuBarChart2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { IoIosPaper } from "react-icons/io";
import { RiArrowDropDownLine, RiGalleryLine, RiUserLine } from "react-icons/ri";
// import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname.includes("/student/preview/resume") ||
      location.pathname.includes("/student/update/resume")
    ) {
      setShowResumeDropdown(true);
    }
  }, [location]);

  const activeLink = (path) => {
    return location.pathname === path;
  };

  const toggleResumeDropdown = () => {
    setShowResumeDropdown(!showResumeDropdown);
  };
  return (
    <div className="h-full">
      <div className="rounded-lg border h-full overflow-auto  no-scrollbar shadow-md border-[#d2d8d6] bg-white  flex  flex-col w-64 pt-8 p-8 lg:p-8 lg:w-64">
        <Link to="/student">
          <div
            className={`flex justify-center place-items-center  text-lg text-black font-extrabold cursor-pointer ${
              activeLink("/student") ? "" : "text-black"
            }`}
          >
            <h4 className="whitespace-nowrap  mr-2">Student panel</h4>
            {/* <AiOutlineHome className="text-xl font-bold" /> */}
          </div>
        </Link>

        <Link to="/student/profile">
          <div
            className={`flex place-items-center hover:text-blue-500 mt-14 cursor-pointer ${
              activeLink("/student/profile")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <RiUserLine className="mr-1 text-lg" />
            <h1 className=" text-sm  whitespace-nowrap">Profile</h1>
          </div>
        </Link>

        <Link to="/student/updates">
          <div
            className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
              activeLink("/student/updates")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm  whitespace-nowrap">Job updates</h1>
          </div>
        </Link>
        <Link to="/student/companies">
          <div
            className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
              activeLink("/student/companies")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
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
                transform: showResumeDropdown
                  ? "rotate(360deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
          {showResumeDropdown && (
            <div className="ml-16 text-xs font-semibold text-gray-500">
              <Link to="/student/preview/resume">
                <div
                  className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
                    activeLink("/student/preview/resume")
                      ? "text-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  Preview
                </div>
              </Link>
              <Link to="/student/update/resume">
                <div
                  className={`flex place-items-center hover:text-blue-500 mt-3 cursor-pointer ${
                    activeLink("/student/update/resume")
                      ? "text-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  Update
                </div>
              </Link>
            </div>
          )}
        </div>
        <div>
          <Link to="/student/feedback">
            <div
              className={`flex mb-4 place-items-center hover:text-blue-500 nter mt-12 cursor-pointer ${
                activeLink("/student/feedback")
                  ? "text-blue-500 font-bold"
                  : "text-gray-500"
              }`}
            >
              <VscFeedback className="mr-1 text-lg" />
              <h1 className=" text-sm whitespace-nowrap">Feedback</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
