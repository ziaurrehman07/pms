import axios from "axios";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

function StudentDetails({ studentId, onEditClick }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const res = await axios.get(
          `/api/v1/users/get-student-details/${studentId}`
        );
        setStudent(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (studentId) {
      fetchStudentDetails();
    }
  }, [studentId]);

  if (!student) {
    return;
  }

  if (!student) {
    return null;
  }

  return (
    <div className=" ml-4 mt-4 h-[550px] bg-white mb-4 w-[380px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-400">Student details</h2>
      </div>
      <div className="flex justify-center mt-3 mb-2  ">
        {student.avatar ? (
          <img
            src={student.avatar}
            className="h-20 w-20 rounded-full "
            alt="image"
          />
        ) : (
          <CgProfile className="h-20 w-20 text-blue-500" />
        )}
      </div>
      <div className=" h-[330px] custom-scrollbar overflow-y-scroll">
        <div className="flex justify-evenly mt-3 ml-6 ">
          <table className="w-full mt-3">
            <tbody>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Name :
                </td>
                <td className="font-semibold text-sm p-1">
                  {student.fullName}
                </td>
              </tr>

              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Enrollment :
                </td>
                <td className="font-semibold text-sm p-1">
                  {student.enrollment}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Email :
                </td>
                <td className="font-semibold text-sm p-1">{student.email}</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Branch :
                </td>
                <td className="font-semibold text-sm p-1"> {student.branch}</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class X :
                </td>
                <td className="font-semibold text-sm p-1">
                  {student.result_10}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class XII :
                </td>
                <td className="font-semibold text-sm p-1">
                  {student.result_12}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  College CGPA :
                </td>
                <td className="font-semibold text-sm p-1">
                  {student.college_cgpa}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Mobile :
                </td>
                <td className="font-semibold text-sm p-1"> {student.mobile}</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Address :
                </td>
                <td className="font-semibold text-sm p-1">{student.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="btns flex  justify-evenly mt-4 mb-4">
        <button
          onClick={onEditClick}
          className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
        >
          EDIT
        </button>
        <button className="bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
          DELETE
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;
