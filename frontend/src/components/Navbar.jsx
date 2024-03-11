import { useState } from "react";
import { CgProfile } from "react-icons/cg";

import { RiArrowDropDownLine } from "react-icons/ri";
import LogoutModal from "./LogoutModal";
function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, redirect to the login page or clear user session
    console.log("Logout clicked");
    setLogoutModalOpen(false); // Close the modal after logout
  };

  return (
    <>
      <div className=" sticky top-0   flex justify-between h-12 w-[90%]  bg-inherit m-4 rounded-sm place-items-center p-5 ">
        <div className="cursor-pointer">
          <h2 className="font-medium text-sm">Hello, Faizan Baig</h2>
          <p className="text-xs text-gray-500 ">Have a nice Day</p>
        </div>
        <div className="flex place-items-center">
          <div>
            <CgProfile className="text-[34px] cursor-pointer text-gray-300 mr-3" />
          </div>
          <div className="flex place-items-center">
            <div className=" cursor-pointer">
              <h2 className="font-medium text-sm">Faizan Baig</h2>
              <p className="text-xs text-gray-500">Student</p>
            </div>
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

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md p-2 space-y-2">
                  <button
                    className="text-sm text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => setLogoutModalOpen(true)}
                  >
                    Logout
                  </button>
                </div>
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
