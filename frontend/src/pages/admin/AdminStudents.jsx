import { useState } from "react";
import GetAllStudents from "../../API/GetAllStudentsApi";
import StudentDetails from "../../components/StudentDetails";
import StudentList from "../../components/admin/StudentList";

function AdminStudents() {
  const apiUrl = "/api/v1/users/get-students-detail";
  const { students, loading, error } = GetAllStudents(apiUrl);

  const [selectedStudent, setSelectedStudent] = useState(null);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleStudentClick = (studentId) => {
    setSelectedStudent((prevStudent) =>
      prevStudent === studentId ? null : studentId
    );
  };
  return (
    <div className=" flex place-items-center">
      <div>
        <StudentList students={students} onStudentClick={handleStudentClick} />
      </div>
      <div className="ml-20">
        {selectedStudent && <StudentDetails studentId={selectedStudent} />}
      </div>
    </div>
  );
}

export default AdminStudents;
