import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import {
  isRefreshSelector,
  isAuthSelector,
} from "../../redux/Auth/authSelectors";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);
  const isRefreshing = useSelector(isRefreshSelector);

  if (isRefreshing) {
    return <Loader />;
  }

  if (!children) {
    console.error("PrivateRoute--> No children provided.");
    return null;
  }

  return isAuth ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
