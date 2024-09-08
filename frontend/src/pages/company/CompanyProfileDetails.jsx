import { useState } from "react";
import CompanyProfileEdit from "../../components/company/CompanyProfileEdit";
import CompanyProfileUpdate from "./CompanyProfileUpdate";

function CompanyProfileDetails() {
  const [isEditClicked, setIsEditClicked] = useState(false);
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
