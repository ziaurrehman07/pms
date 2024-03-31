import PropTypes from "prop-types";
function FeedbackComponent({ students }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {students.map((student) => (
        <div
          key={student._id}
          className="bg-gray-100 h-[36px]  w-auto  px-2 hover:border-b hover:border mb-4 hover:border-blue-500 rounded-md hover:h-[150px] overflow-y-scroll no-scrollbar"
        >
          <div className="flex place-content-center place-items-center bg-inherit sticky top-0 mb-2">
            <img
              src={student.owner.avatar}
              alt=""
              className="h-8 w-8 rounded-full border border-gray-400"
            />
            <div className="ml-2">
              <h1 className="text-sm font-semibold whitespace-nowrap">
                {student.owner.fullName}
              </h1>
              <p className="text-xs -mt-1 font-semibold text-blue-500">
                {student.owner.enrollment}
              </p>
            </div>
          </div>
          <p className="text-sm p-4">{student.content}</p>
        </div>
      ))}
    </div>
  );
}

FeedbackComponent.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        enrollment: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackComponent;
