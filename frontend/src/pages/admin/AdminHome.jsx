import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import GetAllStudents from "../../API/GetAllStudentsApi";

function AdminHome() {
  // const apiUrl = "/api/v1/users/get-user";
  // const { students } = GetAllStudents(apiUrl);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="ml-4 flex justify-center place-items-center  mr-10 h-[90%] ">
        <div className="place-items-center flex">Welcome</div>
      </div>
    </>
  );
}

export default AdminHome;
