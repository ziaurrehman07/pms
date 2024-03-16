import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.role === role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  role: PropTypes.string.isRequired,
};

export default ProtectedRoute;
