import { useState } from "react";
import GetAllJobs from "../../API/GetAllJobsApi";
import JobDetails from "../../components/student/JobDetails";
import JobUpdatesList from "../../components/student/JobUpdatesList";

function Updates() {
  const [selectedJob, setSelectedJob] = useState(null);

  const apiUrl = "/api/v3/companies/job/get-all-jobs";
  const { jobs } = GetAllJobs(apiUrl);

  const handleJobClick = (jobId) => {
    setSelectedJob((prevJob) => (prevJob === jobId ? null : jobId));
  };
  return (
    <div className="flex">
      <div>
        <JobUpdatesList jobs={jobs} onJobClick={handleJobClick} />
      </div>
      <div className="ml-20">
        {selectedJob && <JobDetails jobId={selectedJob} />}
      </div>
    </div>
  );
}

export default Updates;
