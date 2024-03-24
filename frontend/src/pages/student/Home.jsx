import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import GetAllStudents from "../../API/GetAllStudentsApi";

function Home() {
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
      <div className="flex w-full flex-col h-screen  ">
        <Navbar />
        <div className="ml-4 flex justify-center place-items-center h-screen">
          <div>
            Welcome, <strong>{students.fullName}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
