import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/student/Dashboard";
import Sidebar from "../components/Sidebar";
import Resume from "../pages/student/Resume";
import Updates from "../pages/student/Updates";
import Feedback from "../pages/student/Feedback";
import Companies from "../pages/student/Companies";
import Login from "../pages/student/Login";
import CompanyLogin from "../pages/company/CompanyLogin";
import Home from "../pages/student/Home";
import HomeAdmin from "../pages/admin/Home.admin";
import SidebarAdmin from "../components/admin/Sidebar.admin";
import { useEffect, useState } from "react";
import axios from "axios";

function MyRoutes() {
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/users/get-user");
        setUserRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-3xl">Loading...</div>;
  }
  return (
    <BrowserRouter>
      <main className="flex">
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
                    <HomeAdmin />
                  </>
                }
              />
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
