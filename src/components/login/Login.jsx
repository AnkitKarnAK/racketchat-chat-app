import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RacketChat</h3>
          <span className="loginDesc">Connect with your friends</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput"></input>
            <input placeholder="Password" className="loginInput"></input>
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forget Password?</span>
            <button className="loginSignupButton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
