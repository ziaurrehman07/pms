import { CgProfile } from "react-icons/cg";
import GetAllStudents from "../../API/GetAllStudentsApi";

function StudentProfileEdit({ onEditClick }) {
  const apiUrl = "/api/v1/users/get-user";
  const { students } = GetAllStudents(apiUrl);
  return (
    <div className="mt-4 h-[550px] bg-white mb-4 w-[380px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-400">Student details</h2>
      </div>
      <div className="flex justify-center mt-3 mb-2  ">
        {students.avatar ? (
          <img
            src={students.avatar}
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
                  {students.fullName}
                </td>
              </tr>

              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Enrollment :
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.enrollment}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Email :
                </td>
                <td className="font-semibold text-sm p-1">{students.email}</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Branch :
                </td>
                <td className="font-semibold text-sm p-1">
                  {" "}
                  {students.branch}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class X :
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.result_10}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class XII :
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.result_12}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  College CGPA :
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.college_cgpa}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Mobile :
                </td>
                <td className="font-semibold text-sm p-1">{students.mobile}</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Address :
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.address}
                </td>
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
      </div>
    </div>
  );
}

export default StudentProfileEdit;
