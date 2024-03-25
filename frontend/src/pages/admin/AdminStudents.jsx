import { useState } from "react";
import StudentDetails from "../../components/StudentDetails";
import StudentList from "../../components/admin/StudentList";

function AdminStudents() {

  const [selectedStudent,setSelectedStudent] = useState(null)
  const handleStudentClick = (student)=>{
    setSelectedStudent(student)
  }
  return (
    <div className="flex place-items-center">
      <div>
        <StudentList  handleStudentClick={handleStudentClick}/>
      </div>
      <div className="ml-20">
        <StudentDetails student={selectedStudent}/>
      </div>
    </div>
  );
}

export default AdminStudents;
