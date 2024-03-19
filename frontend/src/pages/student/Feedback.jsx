import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, );
  return <div className="bg-[#e9f1ef] w-full h-screen">Feedback</div>;
}

export default Feedback;
