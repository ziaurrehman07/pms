import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Resume() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return <></>;
}

export default Resume;
