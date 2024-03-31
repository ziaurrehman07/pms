import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import GetAllStudents from "../../API/GetAllStudentsApi";

function Home() {
  const apiUrl = "/api/v1/users/get-user";
  const { students } = GetAllStudents(apiUrl);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studenToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="ml-4 flex justify-center place-items-center mt-32">
        <div>
          Welcome, <strong>{students.fullName}</strong>
        </div>
      </div>
    </>
  );
}

export default Home;
