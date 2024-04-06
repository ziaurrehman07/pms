import PropTypes from "prop-types";
const UnHirePlacedStudentModal = ({
  isOpen,
  onClose,
  onUnhirePlacedStudent,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to Unhire !
            </p>
            <div className="flex justify-end">
              <button
                className="text-white mr-2 py-1 px-2 rounded-lg border bg-red-400 hover:font-semibold  cursor-pointer"
                onClick={onUnhirePlacedStudent}
              >
                YES
              </button>
              <button
                className="text-white py-1 px-2 rounded-lg border bg-blue-400 hover:font-semibold cursor-pointer"
                onClick={onClose}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

UnHirePlacedStudentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUnhirePlacedStudent: PropTypes.func.isRequired,
};
export default UnHirePlacedStudentModal;
