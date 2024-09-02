import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import CompanyAppliedStudents from "./pages/company/CompanyAppliedStudents";
import CompanyProfileDetails from "./pages/company/CompanyProfileDetails";
import AdminNoticeViewer from "./pages/admin/AdminNoticeViewer";
import StudentRegistrationForm from "./pages/student/studetn registeration/StudentRegistrationForm";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />

        {/* student routes  */}
        <Route
          path="/student"
          element={<ProtectedRoute role="student" component={Home} />}
        />
        {/* student routes end...  */}
      </Routes>
    </Router>
  );
}

export default App;
