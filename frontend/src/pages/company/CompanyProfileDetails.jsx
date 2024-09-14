import { useState } from "react";
import CompanyProfileEdit from "../../components/company/CompanyProfileEdit";
import CompanyProfileUpdate from "./CompanyProfileUpdate";

function CompanyProfileDetails() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const handleEditClick = () => {
    setIsEditClicked(true);
  };
  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full flex-grow mt-4 justify-center">
      <div>
        {!isEditClicked && <CompanyProfileEdit onEditClick={handleEditClick} />}
      </div>
      <div>
        {isEditClicked && (
          <CompanyProfileUpdate onCancel={() => setIsEditClicked(false)} />
        )}
      </div>
    </div>
  );
}

export default CompanyProfileDetails;
