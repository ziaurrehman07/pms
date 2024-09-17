import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// Components
import Updates from "./pages/student/Updates";
import Feedback from "./pages/student/Feedback";
import Companies from "./pages/student/Companies";
import Login from "./pages/student/Login";
import CompanyLogin from "./pages/company/CompanyLogin";
import Home from "./pages/student/Home";
import AdminHome from "./pages/admin/AdminHome";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminCompanies from "./pages/admin/AdminCompanies";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRegisterStudent from "./pages/admin/AdminRegisterStudent";
import AdminRegisterCompanies from "./pages/admin/AdminRegisterCompanies";
import AdminFeedbacks from "./pages/admin/AdminFeedbacks";
import CompanyHome from "./pages/company/CompanyHome";
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
import Layout from "./layout/Layout";
import CompanyProtectedRoute from "./protectedRoute/CompanyProtectedRoute";
import CompanyLayout from "./layout/CompanyLayout";
import MasterAdminHome from "./pages/master/MasterAdminHome";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/student/register/self"
          element={<StudentRegistrationForm />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route element={<Layout />}>
          {/* student routes  */}
          <Route
            path="/student"
            element={<ProtectedRoute role="student" component={Home} />}
          />
          <Route
            path="/student/profile"
            element={<ProtectedRoute role="student" component={Profile} />}
          />
          <Route
            path="/student/update/resume"
            element={<ProtectedRoute role="student" component={UpdateResume} />}
          />
          <Route
            path="/student/preview/resume"
            element={
              <ProtectedRoute role="student" component={PreviewResume} />
            }
          />
          <Route
            path="/student/updates"
            element={<ProtectedRoute role="student" component={Updates} />}
          />
          <Route
            path="/student/companies"
            element={<ProtectedRoute role="student" component={Companies} />}
          />
          <Route
            path="/student/feedback"
            element={<ProtectedRoute role="student" component={Feedback} />}
          />
          {/* student routes end...  */}

          {/* ******************************************************************************************************************************* */}
          {/* admin routes start  */}
          <Route
            path="/admin"
            element={<ProtectedRoute role="admin" component={AdminHome} />}
          />
          <Route
            path="/studets-list"
            element={<ProtectedRoute role="admin" component={AdminStudents} />}
          />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute role="admin" component={AdminDashboard} />}
          />
          <Route
            path="/companies-list"
            element={<ProtectedRoute role="admin" component={AdminCompanies} />}
          />
          <Route
            path="/register/student"
            element={
              <ProtectedRoute role="admin" component={AdminRegisterStudent} />
            }
          />
          <Route
            path="/register/companies"
            element={
              <ProtectedRoute role="admin" component={AdminRegisterCompanies} />
            }
          />
          <Route
            path="/all-feedbacks"
            element={<ProtectedRoute role="admin" component={AdminFeedbacks} />}
          />
          <Route
            path="/manage/all-notices"
            element={
              <ProtectedRoute role="admin" component={AdminNoticeViewer} />
            }
          />
          {/* admin routes end  */}
        </Route>
        {/* ******************************************************************************************************************************* */}
        <Route element={<CompanyLayout />}>
          {/* company routes  */}
          <Route
            path="/company"
            element={
              <CompanyProtectedRoute role="company" component={CompanyHome} />
            }
          />
          <Route
            path="/company/dashboard"
            element={
              <CompanyProtectedRoute
                role="company"
                component={CompanyDashboard}
              />
            }
          />
          <Route
            path="/company/profile-details"
            element={
              <CompanyProtectedRoute
                role="company"
                component={CompanyProfileDetails}
              />
            }
          />
          <Route
            path="/company/job-profile"
            element={
              <CompanyProtectedRoute
                role="company"
                component={CompanyJobProfiles}
              />
            }
          />
          <Route
            path="/company/applied-students"
            element={
              <CompanyProtectedRoute
                role="company"
                component={CompanyAppliedStudents}
              />
            }
          />
          <Route
            path="/company/feedaback"
            element={
              <CompanyProtectedRoute
                role="company"
                component={CompanyFeedback}
              />
            }
          />
          {/* company routes end  */}
        </Route>
        {/* ******************************************************************************************************************************* */}
        {/* master admin routes start */}
        <Route
          path="/master"
          element={<ProtectedRoute role="master" component={MasterAdminHome} />}
        />
        {/* master admin routes end */}
        {/* ******************************************************************************************************************************* */}
      </Routes>
    </Router>
  );
}

export default App;
