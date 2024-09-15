import { useState } from "react";
import StudentProfileEdit from "../../components/student/StudentProfileEdit";
import StudentProfileUpdate from "../../components/student/StudentProfileUpdate";

function Profile() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const handleEditClick = () => {
    setIsEditClicked(true);
  };
  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full flex-grow mt-4 justify-center">
      <div>
        {!isEditClicked && <StudentProfileEdit onEditClick={handleEditClick} />}
      </div>
      <div>
        {isEditClicked && (
          <StudentProfileUpdate onCancel={() => setIsEditClicked(false)} />
        )}
      </div>
    </div>
  );
}

export default Profile;
