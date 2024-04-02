import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function StudentList({ students, onStudentClick }) {
  return (
    <div className="mt-4 h-[550px]  bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 bg-white border-b border-black  mx-2 flex justify-between place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-500">
          Student :
          <span className="ml-2 text-black text-nowrap font-normal">
            {students.length}
          </span>
        </h2>
        <Link to="/adminregisterstudent">
          <div className="bg-[#e9f1ef] p-2 rounded-lg mr-4 text-blue-600 font-bold hover:bg-blue-200 text-xs text-center">
            CREATE
          </div>
        </Link>
      </div>
      <div>
        {students.map((student) => (
          <div
            key={student._id}
            className="bg-[#e9f1ef] mt-2 ml-2 mr-2 hover:bg-blue-200 rounded-lg p-1 flex place-items-center cursor-pointer"
            onClick={() => onStudentClick(student._id)}
          >
            {student.avatar ? (
              <img
                src={student.avatar}
                className="h-8 w-8  rounded-full "
                alt="image"
              />
            ) : (
              <CgProfile className="h-8 w-8 text-blue-500" />
            )}
            <div className="pl-3">
              <h1 className="text-sm font-semibold cursor-pointer">
                {student.fullName}
              </h1>
              <p className="text-blue-500 text-xs font-bold ">
                {student.branch}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
StudentList.propTypes = {
  students: PropTypes.string.isRequired,
  onStudentClick: PropTypes.func.isRequired,
};
export default StudentList;
