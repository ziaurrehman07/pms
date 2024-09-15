import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminRegisterCompanies() {
  const [loading, setLoading] = useState(false);

  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/companies/register-company",
        companyData,
        { withCredentials: true }
      );
      response.data;
      toast.success("Company created successfully!");
      // console.log("Student created:", response.data.data);
      setCompanyData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(
        "Error while creating company:",
        error.response.data.message
      );
      toast.error("Error creating company. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex overflow-auto no-scrollbar bg-white rounded-lg w-full flex-grow mt-4 justify-center">
      <div className="mt-4 h-[550px] bg-white mb-4 w-[480px] rounded-lg shadow-2xl overflow-y-scroll no-scrollbar">
        <div className="sticky top-0 bg-white border-b border-black justify-center mx-3 flex place-items-center h-10">
          <h2 className="pl-3 font-bold text-blue-500">Register Company</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="  h-[300px] ml-8 mt-12 mr-8 flex flex-col mb-12 ">
            <label className="text-xs text-blue-500 font-bold font-sans">
              Name
            </label>
            <input
              id="name"
              name="name"
              onChange={handleChange}
              value={companyData.fullName}
              className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
              type="text"
              placeholder="Name"
              required
            />
            <label className="text-xs text-blue-500 font-bold font-sans">
              Email
            </label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              value={companyData.email}
              className="p-2 my-0.5  bg-gray-100 outline-none rounded-md mb-2"
              type="text"
              placeholder="Email"
              required
            />
            <label className="text-xs text-blue-500 font-bold font-sans">
              Password
            </label>
            <input
              id="password"
              name="password"
              onChange={handleChange}
              value={companyData.password}
              className="p-2 my-0.5  bg-gray-100 outline-none rounded-md "
              type="text"
              placeholder="Password"
              required
            />
          </div>
          <div className=" flex  justify-evenly mt-4 mb-4">
            {loading ? (
              <div className="loader bg-red-600 px-8 rounded-lg text-xs font-semibold text-white py-2">
                CREATING...
              </div> // Add your loading spinner here
            ) : (
              <button
                type="submit"
                className="bg-blue-600 px-8 rounded-lg text-xs font-semibold text-white py-2"
              >
                CREATE COMPANY ACCOUNT
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminRegisterCompanies;
