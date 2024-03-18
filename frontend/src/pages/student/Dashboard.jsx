import Navbar from "../../components/Navbar";

function Dashboard() {
  return (
    <>
      <div className="flex w-full flex-col h-screen bg-[#e9f1ef]">
        <Navbar />
        <h1 className="ml-8 mt-8 text-blue-500 font-semibold text-xl ">
          User Dashboard
        </h1>
        <div className=" ml-8 mt-4 bg-white h-[75%] w-[93%] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
          <div className="p-8"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
