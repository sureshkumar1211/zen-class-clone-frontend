import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

export const ACTION_TYPES = {
  SET_USER_DETAILS: "SET_USER_DETAILS",
  LOGOUT: "LOGOUT",
};

const initialState = {
  isAuthenticated: false,
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_DETAILS: {
      localStorage.setItem("authenticated", true);
      return {
        ...state,
        isAuthenticated: true,
        userDetails: action.payload.user,
      };
    }
    case ACTION_TYPES.LOGOUT: {
      localStorage.removeItem("authenticated");
      return {
        ...state,
        isAuthenticated: false,
        userDetails: null,
      };
    }
    default: {
      return state;
    }
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
