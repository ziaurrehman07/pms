import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import GetAllStudents from "../../API/GetAllStudentsApi";

function AdminHome() {
  const apiUrl = "/api/v1/users/get-user";
  const { students } = GetAllStudents(apiUrl);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="flex w-full flex-col h-screen ">
        <Navbar />
        <div className="ml-4 flex justify-center place-items-center h-screen">
          <div className="place-items-center flex">
            Welcome,
            <strong className="text-blue-500 text-3xl">
              {students.fullName}
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
