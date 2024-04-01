import axios from "axios";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiEdit } from "react-icons/ci";
function StudentProfileUpdate({ onCancel, student }) {
  const [values, setValues] = useState({
    fullName: "",
    enrollment: "",
    email: "",
    branch: "",
    result_10: "",
    result_12: "",
    college_cgpa: "",
    mobile: "",
    address: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/users/get-user`);
        const studentData = res.data.data;
        setValues(studentData); // Set the retrieved student details in the state
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails(); // Fetch student details when component mounts
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      avatar: file,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const updatedData = {
        fullName: values.fullName,
        enrollment: values.enrollment,
        email: values.email,
        branch: values.branch,
        result_10: values.result_10,
        result_12: values.result_12,
        college_cgpa: values.college_cgpa,
        mobile: values.mobile,
        address: values.address,
        avatar: values.address,
      };

      await axios.patch(
        "/api/v1/users/update-student-account-details",
        updatedData
      );
      // Upload the avatar separately
      const formData = new FormData();
      formData.append("avatar", values.avatar);
      await axios.patch("/api/v1/users/update-user-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Student details updated successfully");
      onCancel();
      window.location.reload();
    } catch (error) {
      console.error("Error updating student details:", error);
      toast.error("Error updating student details. Please try again.");
    }
  };

  return (
    <form>
      <div className="mt-4 h-[550px] bg-white mb-4 w-[380px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
        <div className="sticky top-0 bg-transparent border-b mt-1 border-black  mx-3 flex place-items-center h-10">
          <h2 className="pl-3 font-bold text-blue-400">
            Update student details
          </h2>
        </div>
        <div className="flex flex-col place-items-center place-content-center hover:underline justify-center mt-3 mb-2 ">
          <div>
            {values.avatar ? (
              <img
                src={values.avatar}
                className="h-16 w-16 rounded-full "
                alt="image"
              />
            ) : (
              <CgProfile className="h-16 w-16 text-blue-500" />
            )}
          </div>
          <div className="flex place-items-center mt-1">
            <label htmlFor="avatar" className="flex place-items-center">
              <CiEdit />
              <p className="ml-1 text-xs cursor-pointer text-blue-500 font-bold">
                Edit
              </p>
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className=" h-[330px] custom-scrollbar overflow-y-scroll">
          <div className="flex justify-evenly mt-2 ml-6 ">
            <table className="w-full mt-3">
              <tbody>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Name :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      value={values.fullName}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Enrollment :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="enrollment"
                      onChange={handleChange}
                      value={values.enrollment}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Email :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Branch :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="branch"
                      onChange={handleChange}
                      value={values.branch}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Class X :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="result_10"
                      value={values.result_10}
                      onChange={handleChange}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Class XII :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="result_12"
                      value={values.result_12}
                      onChange={handleChange}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    College CGPA :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="college_cgpa"
                      value={values.college_cgpa}
                      onChange={handleChange}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Mobile :
                  </td>
                  <td>
                    <input
                      type="tel"
                      name="mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Address :
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="btns flex  justify-evenly mt-3 mb-4">
          <button
            type="submit"
            onClick={handleSave}
            className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
          >
            SAVE
          </button>
          <button
            onClick={onCancel}
            className="bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
          >
            CANCEL
          </button>
        </div>
      </div>
    </form>
  );
}

export default StudentProfileUpdate;
