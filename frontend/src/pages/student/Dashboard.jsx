import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <></>;
}

export default Dashboard;
