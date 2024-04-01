import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-white h-[550px] shadow-md rounded-lg  w-[1080px] mt-4 mr-4 mb-4">
      <div></div>
    </div>
  );
}

export default AdminDashboard;
