import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <h1 className="ml-8 mt-8 text-blue-500 font-semibold text-xl ">
        User Dashboard
      </h1>
      <div className=" ml-4 mt-4 h-[600px] bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
        <div></div>
      </div>
    </>
  );
}

export default Dashboard;
