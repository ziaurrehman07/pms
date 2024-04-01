import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// Components
import Dashboard from "../pages/student/Dashboard";
import Sidebar from "../components/Sidebar";
import Updates from "../pages/student/Updates";
import Feedback from "../pages/student/Feedback";
import Companies from "../pages/student/Companies";
import Login from "../pages/student/Login";
import CompanyLogin from "../pages/company/CompanyLogin";
import Home from "../pages/student/Home";
import SidebarAdmin from "../components/admin/Sidebar.admin";
import AdminHome from "../pages/admin/AdminHome";
import AdminStudents from "../pages/admin/AdminStudents";
import AdminCompanies from "../pages/admin/AdminCompanies";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminRegisterStudent from "../pages/admin/AdminRegisterStudent";
import AdminRegisterCompanies from "../pages/admin/AdminRegisterCompanies";
import AdminFeedbacks from "../pages/admin/AdminFeedbacks";
import Navbar from "../components/Navbar";
import CompanyHome from "../pages/company/CompanyHome";
import SidebarCompany from "../components/company/SidebarCompany";
import CompanyNavbar from "../components/company/NavbarCompany";
import CompanyDashboard from "../pages/company/CompanyDashboard";
import CompanyJobProfiles from "../pages/company/CompanyJobProfiles";
import CompanyStudents from "../pages/company/CompanyStudents";
import CompanyFeedback from "../pages/company/CompanyFeedback";
import UpdateResume from "../components/student/UpdateResume";
import PreviewResume from "../components/student/PreviewResume";
import CompanyHireStudent from "../pages/company/CompanyHireStudent";

function MyRoutes() {
  const [userRole, setUserRole] = useState("");
  const [companyRole, setCompanyRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/users/get-user");
        setUserRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
          {/* Student routes */}
          {userRole === "student" && (
            <>
              <Route
                path="/studenthome"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <Home />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <Dashboard />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/updateresume"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <UpdateResume />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/previewresume"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <PreviewResume />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/updates"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <Updates />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/companies"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <Companies />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/feedback"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <Feedback />
                      </div>
                    </div>
                  </>
                }
              />
              <Route path="*" element={<Navigate to="/studenthome" />} />
            </>
          )}

          {/* Admin routes */}
          {userRole === "admin" && (
            <>
              <Route
                path="/adminhome"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminHome />
                      </div>
                    </div>
                  </>
                }
              />

              <Route
                path="/adminstudents"
                element={
                  <>
                    <div className="flex w-full ">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminStudents />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/admincompanies"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminCompanies />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/admindashboard"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminDashboard />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                exact
                path="/adminregisterstudent"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminRegisterStudent />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                exact
                path="/adminregistercompanies"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminRegisterCompanies />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/adminfeedbacks"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarAdmin />
                      <div className="w-full">
                        <Navbar />
                        <AdminFeedbacks />
                      </div>
                    </div>
                  </>
                }
              />

              <Route path="*" element={<Navigate to="/adminhome" />} />
            </>
          )}
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

export default MyRoutes;
