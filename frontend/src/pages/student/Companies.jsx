import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Companies() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studenToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div></div>;
}

export default Companies;
