import PropTypes from "prop-types";
function AppliedDesigationList({ jobs, onJobClick }) {
  return (
    <div className="mt-4 h-[670px]  bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-2 flex justify-between place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-500">
          JOBS :
          <span className="ml-2 text-black  whitespace-nowrap font-semibold text-xs">
            {jobs.length}
          </span>
        </h2>
      </div>
      <div>
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-[#e9f1ef] mt-2 ml-2 mr-2 hover:bg-blue-200 rounded-lg p-1 flex place-items-center cursor-pointer"
            onClick={() => onJobClick(job._id)}
          >
            <div className="pl-3">
              <h1 className="text-sm p-1 font-semibold cursor-pointer">
                {job.designation}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
AppliedDesigationList.propTypes = {
  jobs: PropTypes.array.isRequired,
  onJobClick: PropTypes.func.isRequired,
};

export default AppliedDesigationList;
