import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Updates() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <></>;
}

export default Updates;
