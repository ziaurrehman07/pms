import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { IoIosPaper } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function SidebarAdmin() {
  const location = useLocation();

  const activeLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-full">
      <div className="rounded-lg border h-full overflow-auto  no-scrollbar shadow-md border-[#d2d8d6] bg-white  flex  flex-col w-64 pt-8 p-8 lg:p-8 lg:w-64">
        <Link to="/admin">
          <div
            className={`text-md text-black font-extrabold cursor-pointer ${
              activeLink("/admin") ? "" : ""
            }`}
          >
            <h4 className="whitespace-nowrap">Admin panel</h4>
          </div>
        </Link>
        <Link to="/admin/dashboard">
          <div
            className={`flex place-items-center mt-12 cursor-pointer ${
              activeLink("/admin/dashboard")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <MdOutlineKeyboardCommandKey className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Dashboard</h1>
          </div>
        </Link>

        <Link to="/studets-list">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/studets-list")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Students</h1>
          </div>
        </Link>
        <Link to="/companies-list">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/companies-list")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <RiGalleryLine className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Companies</h1>
          </div>
        </Link>

        <Link to="/register/student">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/register/student")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <IoIosPaper className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Register student</h1>
          </div>
        </Link>

        <Link to="/register/companies">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/register/companies")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <IoIosPaper className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Register companies</h1>
          </div>
        </Link>

        <Link to="/all-feedbacks">
          <div
            className={`flex place-items-center mt-10 cursor-pointer ${
              activeLink("/all-feedbacks")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <VscFeedback className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Feedbacks</h1>
          </div>
        </Link>
        <Link to="/manage/all-notices">
          <div
            className={`flex place-items-center mt-3 cursor-pointer ${
              activeLink("/manage/all-notices")
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <LuBarChart2 className="mr-1 text-lg" />
            <h1 className=" text-sm whitespace-nowrap">Manage Notices</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SidebarAdmin;
