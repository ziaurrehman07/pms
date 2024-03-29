import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegisterCompanies() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className=" ml-64 mt-4 h-[550px] bg-white mb-4 w-[480px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black justify-center mx-3 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-500">Register Company</h2>
      </div>
      <form>
        <div className="  h-[300px] ml-8 mt-12 mr-8 flex flex-col mb-12 ">
          <label className="text-xs text-blue-500 font-bold font-sans">
            Name
          </label>
          <input
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
            type="text"
            placeholder="Name"
          />
          <label className="text-xs text-blue-500 font-bold font-sans">
            Email
          </label>
          <input
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
            type="text"
            placeholder="Email"
          />
          <label className="text-xs text-blue-500 font-bold font-sans">
            Password
          </label>
          <input
            className="p-2 my-0.5  bg-gray-100 outline-none rounded-md "
            type="password"
            placeholder="Password"
          />
        </div>
        <div className=" flex  justify-evenly mt-4 mb-4">
          <button
            type="submit"
            className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminRegisterCompanies;
