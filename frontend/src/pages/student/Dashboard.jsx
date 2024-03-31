import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ResumeShow from "../../components/admin/student/ResumeShow";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studenToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <ResumeShow />
    </>
  );
}

export default Dashboard;
