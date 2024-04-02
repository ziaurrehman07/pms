import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdExitToApp } from "react-icons/md";
const RegisterJobProfileModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [studentData, setStudentData] = useState({
    fullName: "",
    enrollment: "",
    email: "",
    password: "",
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
        "/api/v3/companies/job/new-job-profile",
        studentData
      );
      response.data;
      toast.success("Job Profile created successfully!");
      // console.log("Student created:", response.data.data);
      setStudentData({
        fullName: "",
        enrollment: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating student:", error.response.data.message);
      toast.error("Error creating Job Profile. Please try again.");
    }
    setLoading(false);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full z-10 h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white flex flex-col place-items-center p-12 h-[600px] w-[950px] rounded-md">
            <div
              className="text-xl cursor-pointer hover:text-red-700 duration-700"
              style={{ tooltip: "EXIT" }}
            >
              <span>
                <MdExitToApp onClick={onClose} />
              </span>
            </div>
            <div className="bg-white  justify-center mx-3 flex place-items-center">
              <h2 className="pl-3 font-bold text-blue-500">
                REGISTER JOB PROFLE
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col place-items-center h-[800px] bg-gray-100 rounded-lg mt-3 w-[450px] p-4   mb-2 "
            >
              <div className="h-[380px] w-[400px] flex flex-col">
                <label className="text-xs mt-8  flex text-blue-500 font-bold font-sans">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  value={studentData.fullName}
                  className="p-2 my-0.5  bg-blue-100 outline-none rounded-md mb-2"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <label className="text-xs flex text-blue-500 font-bold font-sans">
                  Enrollment
                </label>
                <input
                  id="enrollment"
                  name="enrollment"
                  onChange={handleChange}
                  value={studentData.enrollment}
                  className="p-2 my-0.5  bg-blue-100 outline-none rounded-md mb-2"
                  type="text"
                  placeholder="Erollment"
                  required
                />
                <label className="text-xs flex text-blue-500 font-bold font-sans">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={studentData.email}
                  className="p-2 my-0.5  bg-blue-100 outline-none rounded-md mb-2"
                  type="text"
                  placeholder="Email"
                  required
                />
                <label className="text-xs flex text-blue-500 font-bold font-sans">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={studentData.password}
                  className="p-2 my-0.5 mb-12  bg-blue-100 outline-none rounded-md "
                  type="text"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-8">
                {loading ? (
                  <div className="loader bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
                    CREATING...
                  </div> // Add your loading spinner here
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
                  >
                    CREATE JOB PROFILE
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
RegisterJobProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default RegisterJobProfileModal;
