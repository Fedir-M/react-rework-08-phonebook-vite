import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthSelector, isRefreshSelector } from "../../redux/Auth/authSelectors";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";

const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(isAuthSelector);
  const isRefreshing = useSelector(isRefreshSelector);

  if (isRefreshing){
    return <Loader />;
} 

  return isAuth && restricted ? <Navigate to="/" replace /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
};
export default PublicRoute;
