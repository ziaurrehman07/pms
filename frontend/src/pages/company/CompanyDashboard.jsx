import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CompanyDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("companyToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div></div>;
}

export default CompanyDashboard;
