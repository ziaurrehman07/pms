import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminFeedbacks() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div>AdminFeedbacks</div>;
}

export default AdminFeedbacks;
