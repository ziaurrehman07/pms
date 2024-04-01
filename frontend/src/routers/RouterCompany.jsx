import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SidebarCompany from "../components/company/SidebarCompany";
import CompanyNavbar from "../components/company/NavbarCompany";
import CompanyHome from "../pages/company/CompanyHome";
import CompanyDashboard from "../pages/company/CompanyDashboard";
import CompanyJobProfiles from "../pages/company/CompanyJobProfiles";
import CompanyStudents from "../pages/company/CompanyStudents";
import CompanyHireStudent from "../pages/company/CompanyHireStudent";
import CompanyFeedback from "../pages/company/CompanyFeedback";
import CompanyLogin from "../pages/company/CompanyLogin";
import Login from "../pages/student/Login";

function RouterCompany() {
  const [companyRole, setCompanyRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const companyFetchData = async () => {
      try {
        const response = await axios.get(
          "/api/v2/companies/get-current-company-details"
        );
        setCompanyRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    companyFetchData();
  }, []);

  if (isLoading) {
    return;
  }

  return (
    <BrowserRouter>
      <main className="flex bg-[#e9f1ef] w-full min-h-screen">
        <Routes>
          {/* company Routes */}
          {companyRole === "company" && (
            <>
              <Route
                path="/companyhome"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyHome />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/companydashboard"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyDashboard />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/companyjobprofiles"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyJobProfiles />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/companyStudents"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyStudents />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/companyhirestudent"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyHireStudent />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/companyfeedback"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyFeedback />
                      </div>
                    </div>
                  </>
                }
              />
              <Route path="*" element={<Navigate to="/companyhome" />} />
            </>
          )}
          {/* Default routes */}

          <Route path="/companylogin" element={<CompanyLogin />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default RouterCompany;
