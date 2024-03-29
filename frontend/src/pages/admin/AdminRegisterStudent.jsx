import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegisterStudent() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  const [studentData, setStudentData] = useState({
    fullName: "",
    username: "",
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
    try {
      const response = await axios.post(
        "/api/v1/users/register-student",
        studentData
      );

      console.log("Student created:", response.data.data);
      // Reset form fields or do any other necessary actions
      setStudentData({
        fullName: "",
        username: "",
        enrollment: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating student:", error.response.data.message);
      // Handle error feedback to the user if needed
    }
  };
  return (
    <div className=" m-auto mt-4 h-[550px] bg-white mb-4 w-[480px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black justify-center mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-500">Register student</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="  h-[300px] ml-8 mt-12 mr-8 flex flex-col mb-12 ">
          <label className="text-xs text-blue-500 font-bold font-sans">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            onChange={handleChange}
            value={studentData.fullName}
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
            type="text"
            placeholder="Full Name"
            required
          />
          <label className="text-xs text-blue-500 font-bold font-sans">
            Username
          </label>
          <input
            id="username"
            name="username"
            onChange={handleChange}
            value={studentData.username}
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
            type="text"
            placeholder="Username"
            required
          />
          <label className="text-xs text-blue-500 font-bold font-sans">
            Enrollment
          </label>
          <input
            id="enrollment"
            name="enrollment"
            onChange={handleChange}
            value={studentData.enrollment}
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
            type="text"
            placeholder="Erollment"
            required
          />
          <label className="text-xs text-blue-500 font-bold font-sans">
            Email
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            value={studentData.email}
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
            type="text"
            placeholder="Email"
            required
          />
          <label className="text-xs text-blue-500 font-bold font-sans">
            Password
          </label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            value={studentData.password}
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md "
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className=" flex  justify-evenly mt-4 mb-4">
          <button
            type="submit"
            className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
          >
            CREATE STUDENT ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminRegisterStudent;
