import axios from "axios";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";
import HireModal from "./Modal/HireModal";
function DesignationCumAppliedStudentList({ jobId, onStudentClick }) {
  const [job, setJob] = useState(null);
  const [hiredStudents, setHiredStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCompanyJobDetails = async () => {
      try {
        const res = await axios.get(
          `/api/v2/companies/get-applied-students-list/${jobId}`
        );
        setJob(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (jobId) {
      fetchCompanyJobDetails();
    }
  }, [jobId]);

  if (!job) {
    return;
  }

  if (!job) {
    return null;
  }

  const unHireStudents = async (jobId) => {
    try {
      await axios.get(`/api/v2/companies/unhire-all-student/${jobId}`);
      console.log("unhirhired clicked");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const hireStudent = async (studentId, jobId) => {
    try {
      await axios.get(`/api/v2/companies/hire-student/${studentId}/${jobId}`);
      setHiredStudents([...hiredStudents, studentId]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 h-[550px]  bg-white mb-4 w-[500px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-4 flex justify-between place-items-center h-12">
        <h1 className="pl-3 font-bold text-blue-500 text-lg">
          Applied Student List :
          <span className="ml-2 text-black text-nowrap font-bold">
            {job.length}
          </span>
        </h1>
        <div className="mr-8 text-sm font-bold text-red-600 border border-red-500 px-2 py-1 rounded-lg">
          <button onClick={() => setIsModalOpen(true)}>UNHIRE ALL</button>
        </div>
      </div>
      {job.map((student) => (
        <div key={student._id}>
          <div className="bg-[#e9f1ef] mt-2 mx-4 justify-between hover:bg-blue-200 rounded-lg p-1 flex place-items-center ">
            <div
              onClick={() => onStudentClick(student._id)}
              className="flex place-items-center cursor-pointer"
            >
              {student.avatar ? (
                <img
                  src={student.avatar}
                  className="h-12 w-12 mr-1 ml-4 rounded-full "
                  alt="image"
                />
              ) : (
                <CgProfile className="h-12 w-12 mr-1 ml-4 text-blue-500" />
              )}
              <div>
                <h1 className="text-md font-semibold cursor-pointer">
                  {student.fullName}
                </h1>
                <p className="text-blue-500 text-xs font-bold ">
                  {student.enrollment}
                </p>
              </div>
            </div>
            <button
              onClick={() => hireStudent(student._id, jobId)}
              className={`mr-10 text-white px-3 py-1 text-sm font-bold rounded-lg ${
                hiredStudents.includes(student._id)
                  ? "bg-green-500"
                  : "bg-blue-500"
              }`}
              disabled={hiredStudents.includes(student._id)}
            >
              {hiredStudents.includes(student._id) ? "HIRED" : "HIRE"}
            </button>
          </div>
        </div>
      ))}
      <HireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        unHireAll={() => {
          unHireStudents(jobId);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
DesignationCumAppliedStudentList.propTypes = {
  jobId: PropTypes.string.isRequired,
  onStudentClick: PropTypes.func.isRequired,
};

export default DesignationCumAppliedStudentList;
