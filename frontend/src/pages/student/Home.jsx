import GetAllStudents from "../../API/GetAllStudentsApi";
import NoticeComponent from "../../components/notice/NoticeComponent";

function Home() {
  const apiUrl = "https://pmsservice.onrender.com/api/v1/users/get-all-notices";
  const { students } = GetAllStudents(apiUrl);
  return (
    <div className="flex overflow-auto no-scrollbar w-full flex-grow pt-4">
      <div className="bg-white w-full flex-col rounded-lg shadow-md py-8 flex place-items-center">
        <h1 className="text-blue-600 font-bold text-lg">NOTICE</h1>
        <div className="py-84justify-items-center rounded-lg overflow-y-scroll w-full px-52 no-scrollbar">
          {/* feedback component */}
          <NoticeComponent admin={students} />
        </div>
      </div>
    </div>
  );
}

export default Home;
