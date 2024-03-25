import GetAllStudents from "../API/GetAllStudentsApi";

function StudentDetails(student) {
  const apiUrl = `/api/v1/users/get-student-details/:${student._id}`;
  const { students, loading, error } = GetAllStudents(apiUrl);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className=" ml-4 mt-4 h-[550px] bg-white mb-4 w-[380px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-400">Student Details</h2>
      </div>
      <div className="flex justify-center mt-3 mb-2  ">
        <img
          src=""
          alt="image"
          className="h-20 w-20 rounded-full border  border-gray-400"
        />
      </div>
      <div className=" h-[330px] custom-scrollbar overflow-y-scroll">
        <div className="flex justify-evenly mt-3 ml-6 ">
          <table className="w-full mt-3">
            <tbody>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Name :
                </td>
                <td className="font-semibold text-sm p-1">Ziaur Rehman</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap  ">
                  Name :
                </td>
                <td className="font-semibold text-sm p-1">Ziaur Rehman</td>
              </tr>{" "}
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Name :
                </td>
                <td className="font-semibold text-sm p-1">Ziaur Rehman</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Name :
                </td>
                <td className="font-semibold text-sm p-1">Ziaur Rehman</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Name :
                </td>
                <td className="font-semibold text-sm p-1">Ziaur Rehman</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Enrollment :
                </td>
                <td className="font-semibold text-sm p-1">0808ci201091</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Email :
                </td>
                <td className="font-semibold text-sm p-1">
                  ziaurrehman939@gmail.com
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Address :
                </td>
                <td className="font-semibold text-sm p-1">
                  water works raod near madina masjid snawat
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Branch :
                </td>
                <td className="font-semibold text-sm p-1">CSIT</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  College CGPA :
                </td>
                <td className="font-semibold text-sm p-1">8.4</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class XII :
                </td>
                <td className="font-semibold text-sm p-1">99</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Class X :
                </td>
                <td className="font-semibold text-sm p-1">99</td>
              </tr>
              <tr>
                <td className="font-semibold text-sm p-1 whitespace-nowrap">
                  Mobile :
                </td>
                <td className="font-semibold text-sm p-1">9933524434</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="btns flex  justify-evenly mt-4 mb-4">
        <button className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
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
