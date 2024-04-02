// useUserData.js
import { useEffect, useState } from "react";
import axios from "axios";

const CollegeApi = () => {
  const [userRole, setUserRole] = useState("");
  const [companyRole, setCompanyRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/users/get-user");
        setUserRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          "/api/v2/companies/get-current-company-details"
        );
        setCompanyRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching company data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return { userRole, companyRole, isLoading };
};

export default CollegeApi;
