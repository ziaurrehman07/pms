import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/student/Dashboard";
import Sidebar from "../components/Sidebar";
import Resume from "../pages/student/Resume";
import Updates from "../pages/student/Updates";
import Feedback from "../pages/student/Feedback";
import Companies from "../pages/student/Companies";
import Login from "../pages/student/Login";
import CompanyLogin from "../pages/company/CompanyLogin";
import Home from "../pages/student/Home";
import SidebarAdmin from "../components/admin/Sidebar.admin";
import { useEffect, useState } from "react";
import axios from "axios";

import AdminHome from "../pages/admin/AdminHome";
import AdminStudents from "../pages/admin/AdminStudents";
import AdminCompanies from "../pages/admin/AdminCompanies";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminRegisterStudent from "../pages/admin/AdminRegisterStudent";
import AdminRegisterCompanies from "../pages/admin/AdminRegisterCompanies";
import AdminFeedbacks from "../pages/admin/AdminFeedbacks";

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
    return (
      <div className="text-blue-500  flex place-items-center justify-center h-screen">
        <div className=" text-3xl">Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <main className="flex bg-[#e9f1ef] min-h-screen">
        <Routes>
          {/* Student routes */}
          {userRole === "student" && (
            <>
              <Route
                path="/studenthome"
                element={
                  <>
                    <Sidebar />
                    <Home />
                  </>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <>
                    <Sidebar />
                    <Dashboard />
                  </>
                }
              />
              <Route
                path="/resume"
                element={
                  <>
                    <Sidebar />
                    <Resume />
                  </>
                }
              />
              <Route
                path="/updates"
                element={
                  <>
                    <Sidebar />
                    <Updates />
                  </>
                }
              />
              <Route
                path="/companies"
                element={
                  <>
                    <Sidebar />
                    <Companies />
                  </>
                }
              />
              <Route
                path="/feedback"
                element={
                  <>
                    <Sidebar />
                    <Feedback />
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
                    <SidebarAdmin />
                    <AdminHome />
                  </>
                }
              />

              <Route
                path="/adminstudents"
                element={
                  <>
                    <SidebarAdmin />
                    <AdminStudents />
                  </>
                }
              />
              <Route
                path="/admincompanies"
                element={
                  <>
                    <SidebarAdmin />
                    <AdminCompanies />
                  </>
                }
              />
              <Route
                path="/admindashboard"
                element={
                  <>
                    <SidebarAdmin />
                    <AdminDashboard />
                  </>
                }
              />
              <Route
                exact
                path="/adminregisterstudent"
                element={
                  <>
                    <SidebarAdmin />
                    <AdminRegisterStudent />
                  </>
                }
              />
              <Route
                exact
                path="/adminregistercompanies"
                element={
                  <>
                    <SidebarAdmin />
                    <AdminRegisterCompanies />
                  </>
                }
              />
              <Route
                path="/adminfeedbacks"
                element={
                  <>
                    <SidebarAdmin />
                    <AdminFeedbacks />
                  </>
                }
              />

              <Route path="*" element={<Navigate to="/adminhome" />} />
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
