import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
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

function MyRoutes() {
  return (
    <BrowserRouter>
      <main className="flex">
        <Routes>
          {/* Student routes */}
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Home />
              </>
            }
            role="admin"
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

          <Route path="/companylogin" element={<CompanyLogin />} />
          <Route path="/login" element={<Login />} />
          {/* Admin routes */}
          <Route
            path="/homeadmin"
            element={
              <>
                <SidebarAdmin />
                <HomeAdmin />
              </>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MyRoutes;
