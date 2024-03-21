const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  const handleCloseModal = (e) => {
    // Check if the click event happened on the background overlay
    if (e.target.classList.contains("bg-black")) {
      onClose(); // Close the modal
    }
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={handleCloseModal}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white p-4 rounded-md">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end">
              <button
                className="text-blue-500 mr-2 hover:underline cursor-pointer"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="text-red-500 hover:underline cursor-pointer"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
