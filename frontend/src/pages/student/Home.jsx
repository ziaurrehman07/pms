import GetAllStudents from "../../API/GetAllStudentsApi";
import NoticeComponent from "../../components/notice/NoticeComponent";

function Home() {
  const apiUrl = "https://pmsservice.onrender.com/api/v1/users/get-all-notices";
  const { students } = GetAllStudents(apiUrl);
  return (
    <div className="flex h-full w-full">
      <div className="bg-white w-full flex-col mt-4 mb-4 mr-10 min-h-[calc(100vh-75px)] rounded-lg shadow-md justify-center flex place-items-center">
        <h1 className="text-blue-600 font-bold text-lg">NOTICE</h1>
        <div className="h-full p-4 justify-items-center rounded-lg  overflow-y-scroll no-scrollbar">
          {/* feedback component */}
          <NoticeComponent admin={students} />
        </div>
      </div>
    </div>
  );
}

export default Home;
