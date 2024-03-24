import GetAllStudents from "../API/GetAllStudentsApi";

function Student() {
  const apiUrl = "/api/v1/users/get-user";
  const { students, loading, error } = GetAllStudents(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {students.map((student) => {
        <div
          key={student._id}
          className="bg-[#e9f1ef] m-4 rounded-lg p-1 flex place-items-center"
        >
          <img
            src="https://cdn.wallpapersafari.com/12/71/tsJpOe.jpg"
            alt=""
            className="border  border-gray-500 w-8 rounded-full h-8"
          />
          <div className="pl-3">
            <h1 className="text-sm font-semibold">{student.fullName}</h1>
            <p className="text-gray-500 text-xs ">{student.role}</p>
          </div>
        </div>;
      })}
    </div>
  );
}

export default Student;
