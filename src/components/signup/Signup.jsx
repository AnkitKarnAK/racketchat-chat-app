import { useRef, useState } from "react";
import "./signup.css";
import { useAuthContext } from "../../context/auth-context";
import { Link, Navigate } from "react-router-dom";
import Loader from "react-loader-spinner";

const Signup = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAgainError, setPasswordAgainError] = useState("");

  const { user, isFetching, signupUser, dispatch } = useAuthContext();

  const signupHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH_START" });
    try {
      const res = await signupUser(
        username.current.value,
        email.current.value,
        password.current.value
      );
      dispatch({ type: "FETCH_SUCCESS", payload: res });
    } catch (err) {
      dispatch({ type: "FETCH_FAILURE", payload: err });
    }
  };

  const usernameValidator = () => {
    if (/[a-zA-Z0-9]{2,}$/.test(username)) {
      setUsernameError("");
    } else {
      setUsernameError("• Username can only contain alphabets & numbers");
    }
  };

  const emailValidator = () => {
    if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("");
    } else {
      setEmailError("• Not a valid email");
    }
  };

  const passwordValidator = () => {
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "• Your password must be have at least\n8 characters long\n 1 uppercase & 1 lowercase character\n 1 number"
      );
    }
  };

  const passwordAgainValidator = () => {
    if (password === passwordAgain) {
      setPasswordAgainError("");
    } else {
      setPasswordAgainError("• Passwords do not match");
    }
  };

  return (
    <>
      {user ? (
        <Navigate to="/messenger" replace />
      ) : (
        <div className="signup">
          <div className="signupWrapper">
            <div className="signupLeft">
              <h3 className="signupLogo">RacketChat</h3>
              <span className="signupDesc">Connect with your friends</span>
            </div>
            <div className="signupRight">
              <form className="signupBox" onSubmit={signupHandler}>
                <input
                  placeholder="Username"
                  type="text"
                  pattern="[a-zA-Z0-9]{2,}$"
                  maxLength="15"
                  required
                  className="signupInput"
                  ref={username}
                  onBlur={usernameValidator}
                ></input>
                <div className="signupInputError">{usernameError}</div>
                <input
                  placeholder="Email"
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  maxLength="50"
                  required
                  ref={email}
                  className="signupInput"
                  onBlur={emailValidator}
                ></input>
                <div className="signupInputError">{emailError}</div>
                <input
                  placeholder="Password"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  maxLength="20"
                  required
                  className="signupInput"
                  ref={password}
                  onBlur={passwordValidator}
                ></input>
                <div className="signupInputError">{passwordError}</div>
                <input
                  placeholder="Password Again"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  maxLength="20"
                  required
                  className="signupInput"
                  ref={passwordAgain}
                  onBlur={passwordAgainValidator}
                ></input>
                <div className="signupInputError">{passwordAgainError}</div>
                <button
                  className="signupButton"
                  type="submit"
                  disabled={isFetching}
                >
                  {isFetching ? (
                    <Loader
                      type="ThreeDots"
                      color="#fff"
                      height={40}
                      width={50}
                    />
                  ) : (
                    "Signup"
                  )}
                </button>
                <span className="signupForgot">Forget Password?</span>
                <button className="signupLoginButton">
                  <Link to="/login"> Login into Account</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
