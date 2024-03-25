import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Updates() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return <></>;
}

export default Updates;
