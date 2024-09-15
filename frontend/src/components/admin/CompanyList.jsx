import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function CompanyList({ companies, onCompanyClick }) {
  return (
    <div className="mt-4 h-[550px]  bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 justify-between  bg-white border-b border-black  mx-2 flex place-items-center h-10">
        <h2 className="pl-3 font-bold text-blue-400">
          Company :
          <span className="ml-2 text-black  whitespace-nowrap font-semibold text-xs">
            {companies.length}
          </span>
        </h2>
        <Link to="/register/companies">
          <div className="bg-[#e9f1ef] p-2 rounded-lg mr-4 text-blue-600 font-bold hover:bg-blue-200 text-xs text-center">
            CREATE
          </div>
        </Link>
      </div>
      <div>
        {companies.map((company) => (
          <div
            key={company._id}
            className="bg-[#e9f1ef] hover:bg-blue-200 mt-2 ml-2 mr-2 rounded-lg p-1 flex place-items-center cursor-pointer"
            onClick={() => onCompanyClick(company._id)}
          >
            {company.avatar ? (
              <img
                src={company.avatar}
                className="h-8 w-8  rounded-full "
                alt="image"
              />
            ) : (
              <CgProfile className="h-8 w-8 text-blue-500" />
            )}
            <div className="pl-3">
              <h1 className="text-sm font-semibold cursor-pointer">
                {company.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
CompanyList.propTypes = {
  companies: PropTypes.string.isRequired,
  onCompanyClick: PropTypes.func.isRequired,
};
export default CompanyList;
