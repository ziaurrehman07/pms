import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminHome() {
  const [loading, setLoading] = useState(false);

  const [studentData, setStudentData] = useState({
    message: "",
    title: "",
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
        "https://pmsservice.onrender.com/api/v1/users/publish-new-notice",
        studentData,
        { withCredentials: true }
      );
      response.data;
      toast.success("Notice send successfully!");
      setStudentData({
        message: "",
        title: "",
      });
    } catch (error) {
      console.error("Error submitting Notice:", error.response.data.message);
      toast.error("Error sending Notice. Please try again.");
    }
    setLoading(false);
  };
  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full flex-grow mt-4 justify-center">
      <div className="bg-white flex-col my-4 mr-10 h-[550px] rounded-lg w-full justify-center flex place-items-center">
        <h1 className="text-blue-600 font-bold text-lg">
          SEND NOTICE TO ALL STUDENTS
        </h1>
        <div className="h-[450px] w-full p-4 justify-items-center rounded-lg overflow-y-scroll no-scrollbar flex place-items-center justify-center">
          <div className="forming h-[380px] w-[460px]">
            <form
              onSubmit={handleSubmit}
              className="flex  flex-col justify-center place-items-center"
            >
              <input
                name="title"
                id="title"
                onChange={handleChange}
                value={studentData.title}
                required
                placeholder="Title of the notice..."
                type="text"
                className="mb-2 w-[640px] px-8 font-semibold bg-blue-100 p-4 rounded-lg outline-none  "
              />
              <textarea
                className="p-8 outline-none  w-[640px]  bg-gray-100 rounded-lg mb-8 font-medium"
                name="message"
                id="message"
                onChange={handleChange}
                rows="6"
                required
                value={studentData.message}
                placeholder="Write notice for all students..."
              ></textarea>
              {loading ? (
                <div className="loader  bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
                  SENDING...
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-600 px-6 rounded-lg text-sm  font-semibold text-white py-2"
                >
                  SEND
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
