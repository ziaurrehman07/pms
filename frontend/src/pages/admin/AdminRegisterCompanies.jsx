import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegisterCompanies() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div>AdminRegisterCompanies</div>;
}

export default AdminRegisterCompanies;
