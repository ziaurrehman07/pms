import { Outlet } from "react-router-dom";
import CompanyNavbar from "../components/company/NavbarCompany";
import SidebarCompany from "../components/company/SidebarCompany";

const CompanyLayout = () => {
  //   const [role, setRole] = useState("");

  //   useEffect(() => {
  //     const userData = JSON.parse(localStorage.getItem("user"));

  //     if (userData && userData.data && userData.data.loggedInUser) {
  //       setRole(userData.data.loggedInUser.role);
  //     } else {
  //       setRole("");
  //     }
  //   }, []);

  return (
    <div className="app">
      <div className="layout-container flex">
        <SidebarCompany />
        <div className="content w-full">
          <CompanyNavbar />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
