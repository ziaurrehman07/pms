import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeedbackComponent from "../../components/feedback/FeedbackComponent";

function AdminFeedbacks() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-white flex-col m-4  h-[550px] rounded-lg shadow-md justify-center flex place-items-center">
      <h1 className="text-blue-600 font-bold text-lg">FEEDBACKS</h1>
      <div className="h-[450px] w-[880px]  p-4 rounded-lg grid grid-cols-4 overflow-y-scroll no-scrollbar">
        {/* feedback component */}
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
        <FeedbackComponent />
      </div>
    </div>
  );
}

export default AdminFeedbacks;
