function ResumeShow() {
  return (
    <div className="bg-white flex-col m-4 mr-10 h-[550px] rounded-lg shadow-md justify-center flex place-items-center">
      <h1 className="text-blue-600 font-bold text-lg">YOUR RESUME</h1>
      <div className=" flex-col  h-[450px] w-[880px] p-4 justify-items-center rounded-lg overflow-y-scroll no-scrollbar flex place-items-center justify-center">
        <div className="resume h-[380px] ">
          <div className="pdf shows here p-8 outline-none w-[350px] rounded-lg bg-gray-100 h-[350px] mb-8 font-medium">
            hello
          </div>
        </div>
        <button className="bg-blue-600 px-8 rounded-lg text-xs font-semibold mt-4 text-white py-2">
          UPDATE
        </button>
      </div>
    </div>
  );
}

export default ResumeShow;
