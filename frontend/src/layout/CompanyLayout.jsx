import { Outlet } from "react-router-dom";
import CompanyNavbar from "../components/company/NavbarCompany";
import SidebarCompany from "../components/company/SidebarCompany";

const CompanyLayout = () => {
  return (
    <div className="app">
      <div className="h-screen flex p-4">
        <div className="pr-4">
          <SidebarCompany />
        </div>
        <div className="w-full flex flex-col flex-grow">
          <CompanyNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
