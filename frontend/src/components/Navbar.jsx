import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import LogoutModal from "./LogoutModal";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("api/v1/users/log-out-user");
      window.localStorage.clear();
      // window.location.href = "/login";
      navigate("/");
      console.log("Logout clicked");
      setLogoutModalOpen(false);
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };

  useEffect(() => {
    axios
      .get("/api/v1/users/get-user")
      .then((response) => {
        setData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  return (
    <>
      <div className=" sticky top-0   flex justify-between h-12 w-[93%]  bg-white mt-4 ml-8 rounded-sm place-items-center p-6 shadow-sm  shadow-white ">
        <div className="cursor-pointer">
          <h2 className="font-medium text-sm">Hello, {data.fullName}</h2>
          <p className="text-xs text-gray-500">Have a nice Day</p>
        </div>
        <div className="flex place-items-center">
          <div>
            {data.avatar ? (
              <img
                src={data.avatar}
                className="h-10 mr-3 rounded-full cursor-pointer"
                alt="logo"
              />
            ) : (
              <CgProfile className="text-[34px] cursor-pointer text-gray-300 mr-3" />
            )}
          </div>
          <div className="flex place-items-center">
            <div className=" cursor-pointer">
              <h2 className="font-medium text-sm">{data.enrollment}</h2>
              <p className="text-xs text-gray-500">{data.role}</p>
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
                <div className="absolute right-0 mt-5 bg-white border border-gray-200 rounded-md p-2 space-y-2">
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
      <div></div>
    </>
  );
}

export default Navbar;
