import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const CompanyProtectedRoute = ({ component: Component, role, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.data.loggedInCompany.role !== role) {
    return <Navigate to="/company/login" />;
  }
  return <Component {...rest} />;
};
CompanyProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  role: PropTypes.string.isRequired,
};
export default CompanyProtectedRoute;
