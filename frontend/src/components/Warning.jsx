import PropTypes from "prop-types";
const Warning = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white  p-4 rounded-md">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to Delete?
            </p>
            <div className="flex justify-end">
              <button
                className="text-red-500 mr-2 py-1 px-2 rounded-full border border-red-300 hover:font-semibold hover:underline cursor-pointer"
                onClick={onDelete}
              >
                Delete
              </button>
              <button
                className="text-blue-500 py-1 px-2 rounded-full border border-blue-300  hover:underline hover:font-semibold cursor-pointer"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Warning.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Warning;
