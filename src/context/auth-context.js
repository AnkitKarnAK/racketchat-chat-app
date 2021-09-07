import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import authReducer from "./auth-reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        "https://racketapi.ankitkarn.repl.co/auth/login",
        {
          email: email.toLowerCase(),
          password: password,
        }
      );
      if (response.status === 200) {
        localStorage?.setItem(
          "user",
          JSON.stringify({
            user: response.data,
          })
        );
        return response.data;
      }
    } catch (err) {
      return err.response;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        loginUser,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
