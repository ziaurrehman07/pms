import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import Resume from "../pages/Resume";
import Updates from "../pages/Updates";
import Feedback from "../pages/Feedback";
import Companies from "../pages/Companies";

function MyRoutes() {
  return (
    <BrowserRouter>
      <main className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/companies" element={<Companies />} />

          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MyRoutes;
