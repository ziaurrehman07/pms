import GetAllCompanies from "../../API/GetAllCompaniesApi";

function CompanyHome() {
  const apiUrl =
    "https://pmsservice.onrender.com/api/v2/companies/get-current-company-details";
  const { companies } = GetAllCompanies(apiUrl);

  return (
    <div>
      <div className="flex justify-center my-4 p-8 text-xl font-bold">
        <h1>Welcome to our platform </h1>
        <span className="ml-2 text-blue-500">{companies.name}</span>!
      </div>
    </div>
  );
}

export default CompanyHome;
