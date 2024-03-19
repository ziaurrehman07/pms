import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Updates() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="bg-[#e9f1ef]  h-screen w-full grid place-items-center ">
        <h3 className="text-blue-400 text-2xl">Job Updates👋</h3>
      </div>
    </>
  );
}

export default Updates;
