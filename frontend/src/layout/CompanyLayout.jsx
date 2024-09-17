import { Outlet } from "react-router-dom";
import CompanyNavbar from "../components/company/NavbarCompany";
import SidebarCompany from "../components/company/SidebarCompany";
import { useEffect, useRef, useState } from "react";

const CompanyLayout = () => {
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
  return (
    <div className="app">
      <div className="h-screen flex p-4">
        <div
          ref={sidebarRef}
          className={`fixed h-full lg:static transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0 lg:block z-50 pr-4`}
        >
          <SidebarCompany toggleSidebar={toggleSidebar} />
        </div>
        <div className="w-full flex flex-col flex-grow">
          <CompanyNavbar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
