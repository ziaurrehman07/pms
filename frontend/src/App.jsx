import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Components
import Sidebar from "./components/Sidebar";
import Updates from "./pages/student/Updates";
import Feedback from "./pages/student/Feedback";
import Companies from "./pages/student/Companies";
import Login from "./pages/student/Login";
import CompanyLogin from "./pages/company/CompanyLogin";
import Home from "./pages/student/Home";
import SidebarAdmin from "./components/admin/Sidebar.admin";
import AdminHome from "./pages/admin/AdminHome";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminCompanies from "./pages/admin/AdminCompanies";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRegisterStudent from "./pages/admin/AdminRegisterStudent";
import AdminRegisterCompanies from "./pages/admin/AdminRegisterCompanies";
import AdminFeedbacks from "./pages/admin/AdminFeedbacks";
import Navbar from "./components/Navbar";
import CompanyHome from "./pages/company/CompanyHome";
import SidebarCompany from "./components/company/SidebarCompany";
import CompanyNavbar from "./components/company/NavbarCompany";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import CompanyJobProfiles from "./pages/company/CompanyJobProfiles";
import CompanyFeedback from "./pages/company/CompanyFeedback";
import UpdateResume from "./components/student/UpdateResume";
import PreviewResume from "./components/student/PreviewResume";
import Profile from "./pages/student/Profile";
import CollegeApi from "./API/CollegeApi";
import CompanyAppliedStudents from "./pages/company/CompanyAppliedStudents";
import CompanyProfileDetails from "./pages/company/CompanyProfileDetails";
function App() {
  const { userRole, companyRole, isLoading } = CollegeApi();

  if (isLoading) {
    return;
  }
  return (
    <BrowserRouter>
      <main className="flex bg-[#e9f1ef] w-screen min-h-screen">
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
                path="/studentprofile"
                element={
                  <>
                    <div className="flex w-full">
                      <Sidebar />
                      <div className="w-full">
                        <Navbar />
                        <Profile />
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
                path="/companyprofiledetail"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyProfileDetails />
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
                path="/appliedStudents"
                element={
                  <>
                    <div className="flex w-full">
                      <SidebarCompany />
                      <div className="w-full">
                        <CompanyNavbar />
                        <CompanyAppliedStudents />
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
          <Route exact path="/" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
