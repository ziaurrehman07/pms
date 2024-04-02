import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HireStudent() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("companyToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div>CompanyHome</div>;
}

export default HireStudent;
