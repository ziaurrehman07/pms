import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import StudentList from "../../components/admin/StudentList";

function AdminHome() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="flex w-full flex-col h-screen ">
        <Navbar />
        <h1 className="ml-8 mt-8 text-blue-500 font-semibold text-xl ">
          User Dashboard
        </h1>
        <div className=" ml-4 mt-4 h-[600px] bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
          <div>
            <StudentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
