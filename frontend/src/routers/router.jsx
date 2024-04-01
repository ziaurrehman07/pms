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
import UpdateResume from "../components/student/UpdateResume";
import PreviewResume from "../components/student/PreviewResume";

function MyRoutes() {
  const [userRole, setUserRole] = useState("");
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

 

  if (isLoading) {
    return;
  }

  return (
    <BrowserRouter>
      <main className="flex bg-[#e9f1ef]  min-h-screen">
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
          <Route path="/companylogin" element={<CompanyLogin />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MyRoutes;
