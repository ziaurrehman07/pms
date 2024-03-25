import Navbar from "../../components/Navbar";
import StudentDetails from "../../components/StudentDetails";
import StudentList from "../../components/admin/StudentList";

function AdminStudents() {
  return (
    <div className="flex w-full flex-col min-h-screen  ">
      <Navbar />
      <div className="flex place-items-center">
        <div className=" ml-4 mt-4 h-[550px]  bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
          <StudentList />
        </div>
        <div className="ml-20">
          <StudentDetails />
        </div>
      </div>
    </div>
  );
}

export default AdminStudents;
