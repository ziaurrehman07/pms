import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return <div></div>;
}

export default Feedback;
