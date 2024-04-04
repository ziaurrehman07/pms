import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfileEdit from "../../components/company/CompanyProfileEdit";
import CompanyProfileUpdate from "./CompanyProfileUpdate";

function CompanyProfileDetails() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("companyToken");
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
        {!isEditClicked && <CompanyProfileEdit onEditClick={handleEditClick} />}
      </div>
      <div>
        {isEditClicked && (
          <CompanyProfileUpdate onCancel={() => setIsEditClicked(false)} />
        )}
      </div>
    </>
  );
}

export default CompanyProfileDetails;
