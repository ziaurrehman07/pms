import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentProfileEdit from "../../components/student/StudentProfileEdit";
import StudentProfileUpdate from "../../components/student/StudentProfileUpdate";

function Profile() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studenToken");
    if (!token) {
      navigate("/");
    }
  }, []);
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
