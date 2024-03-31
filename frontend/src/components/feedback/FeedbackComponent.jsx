import GetAllStudents from "../../API/GetAllStudentsApi";

function FeedbackComponent({ students }) {
  return (
    <div>
      {students.map((student) => (
        <div
          key={student._id}
          className="bg-gray-100 h-[36px]  w-44 px-2 hover:border-b hover:border mb-4 hover:border-blue-500 rounded-md hover:h-[150px] overflow-y-scroll no-scrollbar"
        >
          <div className="bg-inherit sticky top-0 mb-2">
            <h1 className="text-sm font-semibold">{student.fullName}</h1>
            <p className="text-xs -mt-1 font-semibold text-blue-500">
              {student.enrollment}
            </p>
          </div>
          <p className="text-sm">{student.content}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackComponent;
