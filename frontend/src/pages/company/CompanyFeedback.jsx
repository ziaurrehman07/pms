import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function CompanyFeedback() {
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v4/feedback/write-new-company-feedback",
        studentData,
        { withCredentials: true }
      );
      response.data;
      toast.success("Feedback send successfully!");
      setStudentData({
        content: "",
      });
    } catch (error) {
      console.error("Error sending feedback:", error.response.data.message);
      toast.error("Error sending feedback. Please try again.");
    }
    setLoading(false);
  };
  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full flex-grow mt-4 justify-center">
      <div className="flex-col md:w-[570px] h-[550px] w-full rounded-lg justify-center flex place-items-center">
        <h1 className="text-blue-600 font-bold text-lg">FEEDBACK</h1>
        <div className="justify-items-center rounded-lg  flex place-items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center place-items-center mt-6"
          >
            <textarea
              className="p-8 outline-none w-full bg-gray-100 rounded-lg mb-8 font-medium"
              name="content"
              id="content"
              onChange={handleChange}
              cols="50"
              rows="10"
              required
              value={studentData.content}
              placeholder="Write your feedback here..."
            ></textarea>
            {loading ? (
              <div className="loader  bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
                SUBMITTING...
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
              >
                SUBMIT
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyFeedback;
