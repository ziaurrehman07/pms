import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CompanyFeedback() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-white flex-col m-4 mr-10 h-[550px] rounded-lg shadow-md justify-center flex place-items-center">
      <h1 className="text-blue-600 font-bold text-lg">FEEDBACK</h1>
      <div className="h-[450px] w-[880px] p-4 rounded-lg overflow-y-scroll no-scrollbar flex place-items-center justify-center">
        <div className="forming h-[380px] w-[460px]">
          <form className="flex  flex-col justify-center place-items-center">
            <textarea
              className="p-8 outline-none bg-gray-100 rounded-lg  font-medium"
              name=""
              id=""
              cols="50"
              rows="10"
              placeholder="Write your feedback here..."
            ></textarea>
            <button className="bg-blue-600 mt-8 px-8 rounded-lg text-xs font-semibold hover:scale-105 text-white py-2">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyFeedback;
