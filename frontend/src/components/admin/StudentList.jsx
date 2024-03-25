import GetAllStudents from "../../API/GetAllStudentsApi";
import { CgProfile } from "react-icons/cg";

function StudentList() {
  const apiUrl = "/api/v1/users/get-students-detail";
  const { students, loading, error } = GetAllStudents(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div className="sticky top-0 bg-white border-b border-black  mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-400">
          Student : <strong>{students.length}</strong>
        </h2>
      </div>
      <div>
        {students.map((student) => (
          <div
            key={student._id}
            className="bg-[#e9f1ef] mt-2 ml-2 mr-2 rounded-lg p-1 flex place-items-center"
          >
            {student.avatar ? (
              <img
                src={student.avatar}
                className="h-8 w-8  rounded-full "
                alt="image"
              />
            ) : (
              <CgProfile className="h-8 w-8 text-blue-500" />
            )}
            <div className="pl-3">
              <h1 className="text-sm font-semibold cursor-pointer">
                {student.fullName}
              </h1>
              <p className="text-blue-500 text-xs font-bold ">
                {student.branch}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
