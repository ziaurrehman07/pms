import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarAdmin from "../components/admin/Sidebar.admin";

const Layout = () => {
  const [role, setRole] = useState("");

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
        <div className="pr-4">
          {role === "admin" ? <SidebarAdmin /> : <Sidebar />}
        </div>
        <div className="w-full flex flex-col flex-grow">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
