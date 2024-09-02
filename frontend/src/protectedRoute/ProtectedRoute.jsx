import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.data.loggedInUser.role !== role) {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  role: PropTypes.string.isRequired,
};
export default ProtectedRoute;
