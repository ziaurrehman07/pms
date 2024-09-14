import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { RiGalleryLine, RiUserLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function SidebarCompany() {
  const location = useLocation();
  const activeLink = (key) => {
    return location.pathname === key;
  };
  return (
    <div className="h-full">
      <div className="rounded-lg border h-full overflow-auto  no-scrollbar shadow-md border-[#d2d8d6] bg-white  flex  flex-col w-64 pt-8 p-8 lg:p-8 lg:w-64">
        <Link to="/company">
          <div
            className={`text-md text-black font-extrabold cursor-pointer ${
              activeLink("/company") ? "" : ""
            }`}
          >
            <h4 className="whitespace-nowrap">Company panel</h4>
          </div>
        </Link>
        <Link to="/company/dashboard">
          <div
            className={`flex place-items-center mt-12 cursor-pointer ${
              activeLink("/company/dashboard")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <MdOutlineKeyboardCommandKey className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Dashboard</h1>
          </div>
        </Link>
        <Link to="/company/profile-details">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/company/profile-details")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <RiUserLine className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Profile Details</h1>
          </div>
        </Link>

        <Link to="/company/job-profile">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/company/job-profile")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Job Profiles</h1>
          </div>
        </Link>

        <Link to="/company/applied-students">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/company/applied-students")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <RiGalleryLine className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Applied Students</h1>
          </div>
        </Link>
        <Link to="/company/feedaback">
          <div
            className={`flex place-items-center mt-10 cursor-pointer ${
              activeLink("/company/feedaback")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <VscFeedback className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Give Feedback</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SidebarCompany;
