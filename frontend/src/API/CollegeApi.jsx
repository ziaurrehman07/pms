import { useEffect, useState } from "react";
import axios from "axios";

const CollegeApi = () => {
  const [userRole, setUserRole] = useState("");
  const [companyRole, setCompanyRole] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pmsservice.onrender.com/api/v1/users/get-user",
          {
            withCredentials: true,
          }
        );
        setUserRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          "/api/v2/companies/get-current-company-details",
          { withCredentials: true }
        );
        setCompanyRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);

  return { userRole, companyRole };
};

export default CollegeApi;
