import { CgProfile } from "react-icons/cg";

function DesignationCumAppliedStudentList() {
  return (
    <div className="mt-4 h-[550px]  bg-white mb-4 w-[500px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-4 flex justify-between place-items-center h-12">
        <h1 className="pl-3 font-bold text-blue-500 text-lg">
          Applied Student List :
          <span className="ml-2 text-black text-nowrap font-bold">0</span>
        </h1>
        <div className="mr-8 text-sm font-bold text-red-600 border border-red-500 px-2 py-1 rounded-lg">
          <h1>UNHIRE ALL</h1>
        </div>
      </div>
      <div>
        <div className="bg-[#e9f1ef] mt-2 mx-4 justify-between hover:bg-blue-200 rounded-lg p-1 flex place-items-center cursor-pointer">
          <div className="flex place-items-center">
            <CgProfile className="h-12 w-12 mr-1 text-blue-500" />
            <div>
              <h1 className="text-md font-semibold cursor-pointer">
                Md Ziaur Rehman
              </h1>
              <p className="text-blue-500 text-xs font-bold ">0808ci201091</p>
            </div>
          </div>
          <h1 className="mr-12 text-white bg-blue-500 px-3 py-1 text-sm font-bold rounded-lg">
            HIRE
          </h1>
        </div>

        <div className="bg-[#e9f1ef] mt-2 mx-4 justify-between hover:bg-blue-200 rounded-lg p-1 flex place-items-center cursor-pointer">
          <div className="flex place-items-center">
            <CgProfile className="h-12 w-12 mr-1 text-blue-500" />
            <div>
              <h1 className="text-md font-semibold cursor-pointer">
                Faizan Baig
              </h1>
              <p className="text-blue-500 text-xs font-bold ">0808ci201062</p>
            </div>
          </div>
          <h1 className="mr-12 text-white bg-blue-500 px-3 py-1 text-sm font-bold rounded-lg">
            HIRE
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DesignationCumAppliedStudentList;
