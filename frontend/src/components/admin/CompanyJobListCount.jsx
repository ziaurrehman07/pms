import GetAllJobs from "../../API/GetAllJobsApi";

function CompanyJobListCount() {
  const url = "/api/v1/users/active-jobs";
  const { jobs } = GetAllJobs(url);
  return (
    <div className="bg-blue-100 shadow-md h-44 w-72 m-4 p-4 rounded-lg flex flex-col justify-center place-items-center">
      <h1 className="text-blue-500 font-semibold text-lg">TOTAL ACTIVE JOBS</h1>
      <div className="text-3xl font-bold">{jobs}</div>
    </div>
  );
}

export default CompanyJobListCount;
