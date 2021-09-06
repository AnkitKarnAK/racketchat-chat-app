import { useRef } from "react";
import { loginCall } from "../../api-calls";
import { useAuthContext } from "../../context/auth-context";
import "./login.css";
import Loader from "react-loader-spinner";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, dispatch } = useAuthContext();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RacketChat</h3>
          <span className="loginDesc">Connect with your friends</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              maxLength="50"
              required
              className="loginInput"
              ref={email}
            ></input>
            <input
              placeholder="Password"
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              maxLength="20"
              required
              className="loginInput"
              ref={password}
            ></input>
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <Loader type="ThreeDots" color="#fff" height={40} width={50} />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forget Password?</span>
            <button className="loginSignupButton">Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
