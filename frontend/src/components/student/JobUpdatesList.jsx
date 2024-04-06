import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";
function JobUpdatesList({ jobs, onJobClick }) {
  // Function to format date
  const formatDate = (dateString) => {
    return dateString.slice(0, 10);
  };
  return (
    <div className="mt-4 h-[670px]  bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-2 flex justify-between place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-500">
          JOB LIST :
          <span className="ml-2 text-black whitespace-nowrap font-semibold text-xs">
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
            {job.company.avatar ? (
              <img
                src={job.company.avatar}
                className="h-12 w-12  rounded-full "
                alt="image"
              />
            ) : (
              <CgProfile className="h-12 w-12 text-blue-500" />
            )}
            <div className="pl-3">
              <h1 className="text-sm font-semibold cursor-pointer">
                {job.designation}
              </h1>
              <p className="text-blue-500 text-xs font-bold ">
                {job.company.name}
              </p>
              <p className="text-xs font-semibold">
                <span className="mr-1">Package :</span>
                {job.salaryPackage} <span>LPA</span>{" "}
                <p className="text-[10px] font-semibold">
                  <span> Created Date :</span>{" "}
                  <span className="text-blue-500">
                    {formatDate(job.createdAt)}
                  </span>
                </p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
JobUpdatesList.propTypes = {
  jobs: PropTypes.array.isRequired,
  onJobClick: PropTypes.func.isRequired,
};
export default JobUpdatesList;
