import StudentDetails from "../../components/StudentDetails";
import StudentList from "../../components/admin/StudentList";

function AdminStudents() {
  return (
    <div className="flex place-items-center">
      <div>
        <StudentList />
      </div>
      <div className="ml-20">
        <StudentDetails />
      </div>
    </div>
  );
}

export default AdminStudents;
