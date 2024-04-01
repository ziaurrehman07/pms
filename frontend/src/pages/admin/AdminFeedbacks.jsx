import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeedbackComponent from "../../components/feedback/FeedbackComponent";
import GetAllStudents from "../../API/GetAllStudentsApi";

function AdminFeedbacks() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  const apiUrl = "/api/v4/feedback/get-all-feedbacks";
  const { students } = GetAllStudents(apiUrl);
  return (
    <div className="bg-white flex-col m-4 mr-10 h-[550px] rounded-lg shadow-md justify-center flex place-items-center">
      <h1 className="text-blue-600 font-bold text-lg">FEEDBACKS</h1>
      <div className="h-[450px]   p-4 justify-items-center rounded-lg  overflow-y-scroll no-scrollbar">
        {/* feedback component */}
        <FeedbackComponent students={students} />
      </div>
    </div>
  );
}

export default AdminFeedbacks;
