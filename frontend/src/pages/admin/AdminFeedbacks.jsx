import { useState } from "react";
import FeedbackComponent from "../../components/feedback/FeedbackComponent";
import GetAllStudents from "../../API/GetAllStudentsApi";
import axios from "axios";
import Warning from "../../components/Warning";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AdminFeedbacks() {
  const [isWarningModalOpen, setWarningModalOpen] = useState(false);
  const apiUrl = "http://localhost:8000/api/v4/feedback/get-all-feedbacks";
  const { students, loading, setStudents } = GetAllStudents(apiUrl);

  const handleDelete = async () => {
    try {
      await axios.delete(
        "http://localhost:8000/api/v4/feedback/delete-all-feedbacks",
        { withCredentials: true }
      );
      console.log("Feedbacks deleted successfully");
      toast.success("All feedbacks are deleted!");

      setStudents([]);
      setWarningModalOpen(false);
    } catch (error) {
      console.log("Error deleting student:", error);
    }
  };
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          aria-hidden="true"
          role="status"
          className="w-8 h-8 text-blue-500 animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full flex-grow mt-4 justify-center">
      <div className="bg-white flex-col mt-4 mb-4  rounded-lg  justify-center flex place-items-center">
        <h1 className="text-blue-600 font-bold text-lg">FEEDBACKS</h1>
        <div className="h-[450px] p-4 justify-items-center rounded-lg  overflow-y-scroll no-scrollbar">
          {/* feedback component */}
          <FeedbackComponent students={students} />
        </div>
        <button
          onClick={() => setWarningModalOpen(true)}
          className="bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
        >
          DELETE ALL FEEDBACKS
        </button>
        <Warning
          isOpen={isWarningModalOpen}
          onClose={() => setWarningModalOpen(false)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminFeedbacks;
