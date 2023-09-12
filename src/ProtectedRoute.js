import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ACTION_TYPES, AuthContext } from "./AuthContext";
import { axiosInstance } from "./apiUtils";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const fetchUser = async () => {
    const authenticated = await localStorage.getItem("authenticated");
    console.log(authenticated);
    if (authenticated) {
      dispatch({
        type: ACTION_TYPES.SET_USER_DETAILS,
        payload: {
          user: "success",
        },
      });
      return navigate("/");
    }
    try {
      const response = await axiosInstance.get("/test/user");
      dispatch({
        type: ACTION_TYPES.SET_USER_DETAILS,
        payload: {
          user: response.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (!state.isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
