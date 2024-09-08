import { useState } from "react";
import StudentProfileEdit from "../../components/student/StudentProfileEdit";
import StudentProfileUpdate from "../../components/student/StudentProfileUpdate";

function Profile() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const handleEditClick = () => {
    setIsEditClicked(true);
  };
  return (
    <>
      <div>
        {!isEditClicked && <StudentProfileEdit onEditClick={handleEditClick} />}
      </div>
      <div>
        {isEditClicked && (
          <StudentProfileUpdate onCancel={() => setIsEditClicked(false)} />
        )}
      </div>
    </>
  );
}

export default Profile;
