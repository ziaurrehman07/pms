// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "../pages/student/Dashboard";
// import Sidebar from "../components/Sidebar";
// import Resume from "../pages/student/Resume";
// import Updates from "../pages/student/Updates";
// import Feedback from "../pages/student/Feedback";
// import Companies from "../pages/student/Companies";
// import Login from "../pages/student/Login";
// import CompanyLogin from "../pages/company/CompanyLogin";
// import Home from "../pages/student/Home";
// import HomeAdmin from "../pages/admin/Home.admin";
// import SidebarAdmin from "../components/admin/Sidebar.admin";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function MyRoutes() {
//   const [userRole, setUserRole] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/v1/users/get-user");
//         setUserRole(response.data.data.role);
//       } catch (error) {
//         // console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <BrowserRouter>
//       <main className="flex bg-[#e9f1ef] min-h-screen">
//         <Routes>
//           {/* Student routes */}
//           {userRole === "student" && (
//             <>
//               <Route
//                 path="/studenthome"
//                 element={
//                   <>
//                     <Sidebar />
//                     <Home />
//                   </>
//                 }
//               />
//               <Route
//                 path="/dashboard"
//                 element={
//                   <>
//                     <Sidebar />
//                     <Dashboard />
//                   </>
//                 }
//               />

//               <Route
//                 path="/resume"
//                 element={
//                   <>
//                     <Sidebar />
//                     <Resume />
//                   </>
//                 }
//               />
//               <Route
//                 path="/updates"
//                 element={
//                   <>
//                     <Sidebar />
//                     <Updates />
//                   </>
//                 }
//               />
//               <Route
//                 path="/companies"
//                 element={
//                   <>
//                     <Sidebar />
//                     <Companies />
//                   </>
//                 }
//               />
//               <Route
//                 path="/feedback"
//                 element={
//                   <>
//                     <Sidebar />
//                     <Feedback />
//                   </>
//                 }
//               />
//               <Route path="*" element={<Navigate to="/studenthome" />} />
//             </>
//           )}

//           {/* Admin routes */}
//           {userRole === "admin" && (
//             <>
//               <Route
//                 path="/adminhome"
//                 element={
//                   <>
//                     <SidebarAdmin />
//                     <HomeAdmin />
//                   </>
//                 }
//               />
//               <Route path="*" element={<Navigate to="/adminhome" />} />
//             </>
//           )}
//           {/* Admin routes end */}

//           {/* other than role */}

//           <Route path="/companylogin" element={<CompanyLogin />} />
//           <Route path="/" element={<Login />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default MyRoutes;

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
import HomeAdmin from "../pages/admin/Home.admin";
import SidebarAdmin from "../components/admin/Sidebar.admin";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "../components/admin/StudentList";
import StudentDetails from "../components/StudentDetails";

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
    return <div>Loading...</div>;
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
                    <HomeAdmin />
                  </>
                }
              />
              <Route path="*" element={<Navigate to="/adminhome" />} />
            </>
          )}

          {/* Default routes */}
          <Route path="/companylogin" element={<CompanyLogin />} />
          <Route path="/" element={<Login />} />
          <Route
          
                path="/student/lists"
                element={
                    <StudentList />
                }
              />
              <Route
                path="/student/Details"
                element={
                    <StudentDetails />
                }
              />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MyRoutes;
