import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";
function FeedbackComponent({ students }) {
  // Function to format date
  const formatDate = (dateString) => {
    return dateString.slice(0, 10);
  };

  return (
    <div className="grid sm:grid-cols-2 gap-3 lg:grid-cols-3">
      {students.map((student) =>
        student?.owner ? (
          <div
            key={student?._id}
            className="bg-gray-100 h-[36px] w-[280px] md:w-auto  px-2 hover:border-b hover:border mb-4 hover:border-blue-500 rounded-md hover:h-[150px] overflow-y-scroll no-scrollbar"
          >
            <div className="flex place-content-center place-items-center bg-inherit sticky top-0 mb-2">
              {student?.owner?.avatar ? (
                <img
                  src={student?.owner?.avatar}
                  className="h-8 w-8 rounded-full border border-gray-400"
                  alt="logo"
                />
              ) : (
                <CgProfile className="h-8 w-8 cursor-pointer text-blue-500 mr-3" />
              )}
              <div className="ml-2">
                <h1 className="text-sm font-semibold whitespace-nowrap">
                  {student?.owner?.fullName}
                </h1>
                <p className="flex text-xs -mt-1 gap-1 font-semibold text-blue-500">
                  {student?.owner?.enrollment}
                  <p className="text-[10px]">
                    {formatDate(student?.createdAt)}
                  </p>
                </p>
              </div>
            </div>
            <p className="text-sm p-4">{student?.content}</p>
          </div>
        ) : (
          <div
            key={student?._id}
            className="bg-gray-100 h-[36px]  w-auto  px-2 hover:border-b hover:border mb-4 hover:border-blue-500 rounded-md hover:h-[150px] overflow-y-scroll no-scrollbar"
          >
            <div className="flex place-content-center place-items-center bg-inherit sticky top-0 mb-2">
              {student?.companyOwner?.avatar ? (
                <img
                  src={student?.companyOwner?.avatar}
                  className="h-8 w-8 rounded-full border border-gray-400"
                  alt="logo"
                />
              ) : (
                <CgProfile className="h-8 w-8  text-blue-500 mr-3" />
              )}
              <div className="ml-2">
                <h1 className="text-sm font-semibold whitespace-nowrap">
                  {student?.companyOwner?.name}
                </h1>
                <p className="flex text-xs -mt-1 gap-1 font-semibold text-blue-500">
                  <p className="text-[10px]">
                    {formatDate(student?.createdAt)}
                  </p>
                </p>
              </div>
            </div>
            <p className="text-sm p-4">{student?.content}</p>
          </div>
        )
      )}
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
