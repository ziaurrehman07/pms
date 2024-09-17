import { CgProfile } from "react-icons/cg";
import GetAllStudents from "../../API/GetAllStudentsApi";
import PropTypes from "prop-types";

function StudentProfileEdit({ onEditClick }) {
  const apiUrl = "http://localhost:8000/api/v1/users/get-user";
  const { students, loading } = GetAllStudents(apiUrl);
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
    <div className="mt-4 bg-gray-100 mb-4 w-[380px] rounded-lg shadow-md shadow-gray-400 overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-gray-100 border-b border-black  mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-500">Student details</h2>
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
      <div className=" h-[330px] custom-scrollbar  overflow-y-scroll">
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
                  Class X %:
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.result_10}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class XII % :
                </td>
                <td className="font-semibold text-sm p-1">
                  {students.result_12}
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  UG Result % :
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
              {students.isPlaced && (
                <>
                  <tr>
                    <td className="font-semibold text-sm p-1 whitespace-nowrap">
                      Company Name :
                    </td>
                    <td className="font-semibold text-green-500 text-sm p-1">
                      {students.designation.company.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold  text-sm p-1 whitespace-nowrap">
                      Designation :
                    </td>
                    <td className="font-semibold text-green-500 text-sm p-1">
                      {students.designation.designation}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-sm p-1 whitespace-nowrap">
                      Package :
                    </td>
                    <td className="font-semibold text-green-500 text-sm p-1">
                      {students.designation.salaryPackage} <span>LPA</span>
                    </td>
                  </tr>
                </>
              )}

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

      <div className="btns flex  justify-evenly mt-1 mb-2">
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
StudentProfileEdit.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};
export default StudentProfileEdit;
