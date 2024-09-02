import GetAllStudents from "../../API/GetAllStudentsApi";
import Navbar from "../../components/Navbar";
import NoticeComponent from "../../components/notice/NoticeComponent";
import Sidebar from "../../components/Sidebar";

function Home() {
  const apiUrl = "https://pmsservice.onrender.com/api/v1/users/get-all-notices";
  const { students } = GetAllStudents(apiUrl, { withCredentials: true });
  return (
    <div className="flex h-full">
      <Sidebar />
      <div>
        <Navbar />
        <div className="bg-white flex-col mt-4 mb-4 mr-10 h-[550px] rounded-lg shadow-md justify-center flex place-items-center">
          <h1 className="text-blue-600 font-bold text-lg">NOTICE</h1>
          <div className="h-[450px] w-full p-4 justify-items-center rounded-lg  overflow-y-scroll no-scrollbar">
            {/* feedback component */}
            <NoticeComponent admin={students} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
