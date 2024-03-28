function UpdateStudentDetails() {
  return (
    <div className=" ml-4 mt-4 h-[550px] bg-white mb-4 w-[380px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-400">Student Details</h2>
      </div>
      <div className="flex justify-center mt-3 mb-2  ">
        <img src="" className="h-20 w-20 rounded-full border " alt="image" />
      </div>
      <div className=" h-[330px] custom-scrollbar overflow-y-scroll">
        <div className="flex justify-evenly mt-3 ml-6 ">
          <form>
            <table className="w-full mt-3">
              <tbody>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Name :
                  </td>
                  <td>
                    <input
                      type="text"
                      id="fullName"
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-sm p-1 whitespace-nowrap">
                    Username :
                  </td>
                  <td>
                    <input
                      type="text"
                      id="fullName"
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
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
                      id="fullName"
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
                      id="fullName"
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
                      id="fullName"
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
                      id="fullName"
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
                      id="fullName"
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
                      id="fullName"
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
                      type="text"
                      id="fullName"
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
                      id="fullName"
                      className=" shadow-sm bg-gray-100 outline-none rounded-md px-2 font-semibold text-sm mt-1 "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>

      <div className="btns flex  justify-evenly mt-4 mb-4">
        <button className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
          SAVE
        </button>
        <button className="bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default UpdateStudentDetails;
