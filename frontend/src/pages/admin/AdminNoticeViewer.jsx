import GetAllStudents from "../../API/GetAllStudentsApi";
import NoticeManageComponent from "../../components/notice/NoticeManageComponent";

function AdminNoticeViewer() {
  const apiUrl = "http://localhost:8000/api/v1/users/get-all-notices";
  const { students, setStudents } = GetAllStudents(apiUrl);
  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full shadow-md flex-grow mt-4 justify-center">
      <div className="bg-white flex-col mt-4 mb-4 h-[550px] rounded-lg  justify-center flex place-items-center">
        <h1 className="text-blue-600 font-bold text-lg">NOTICE</h1>
        <div className="h-[450px] w-full p-4 justify-items-center rounded-lg  overflow-y-scroll no-scrollbar">
          {/* feedback component */}
          <NoticeManageComponent admin={students} setAdmin={setStudents} />
        </div>
      </div>
    </div>
  );
}

export default AdminNoticeViewer;
