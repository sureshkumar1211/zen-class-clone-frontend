import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

export const ACTION_TYPES = {
  SET_USER_DETAILS: "SET_USER_DETAILS",
};

const initialState = {
  isAuthenticated: false,
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_DETAILS: {
      return {
        ...state,
        isAuthenticated: true,
        userDetails: action.payload.user,
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
