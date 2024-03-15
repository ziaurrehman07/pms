import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import Resume from "../pages/Resume";
import Updates from "../pages/Updates";
import Feedback from "../pages/Feedback";
import Companies from "../pages/Companies";
import Login from "../pages/Login";
import CompanyLogin from "../pages/CompanyLogin";

function MyRoutes() {
  return (
    <BrowserRouter>
      <main className="flex">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar /> <Home />
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
          <Route path="/login" element={<Login />} />
          <Route path="/companylogin" element={<CompanyLogin />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MyRoutes;
