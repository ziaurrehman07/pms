import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SidebarAdmin from "../components/admin/Sidebar.admin";

const Layout = () => {
  const [role, setRole] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && userData.data && userData.data.loggedInUser) {
      setRole(userData.data.loggedInUser.role);
    } else {
      setRole("");
    }
  }, []);

  return (
    <div className="">
      <div className="h-screen flex p-4">
        <div
          ref={sidebarRef}
          className={`fixed h-full lg:static transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0 lg:block z-50 pr-4`}
        >
          {role === "admin" ? (
            <SidebarAdmin toggleSidebar={toggleSidebar} />
          ) : (
            <Sidebar toggleSidebar={toggleSidebar} />
          )}
        </div>
        <div className="w-full flex flex-col flex-grow">
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
