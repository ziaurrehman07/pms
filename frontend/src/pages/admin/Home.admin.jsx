import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

function HomeAdmin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="flex w-full flex-col">
        <Navbar />
      </div>
    </>
  );
}

export default HomeAdmin;
