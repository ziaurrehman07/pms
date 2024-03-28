import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegisterStudent() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div>AdminRegisterStudent</div>;
}

export default AdminRegisterStudent;
