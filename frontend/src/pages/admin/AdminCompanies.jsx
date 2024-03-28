import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminCompanies() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div>AdminCompanies</div>;
}

export default AdminCompanies;
