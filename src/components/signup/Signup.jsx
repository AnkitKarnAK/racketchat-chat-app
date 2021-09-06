import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupLeft">
          <h3 className="signupLogo">RacketChat</h3>
          <span className="signupDesc">Connect with your friends</span>
        </div>
        <div className="signupRight">
          <div className="signupBox">
            <input placeholder="Username" className="signupInput"></input>
            <input placeholder="Email" className="signupInput"></input>
            <input placeholder="Password" className="signupInput"></input>
            <input placeholder="Password Again" className="signupInput"></input>
            <button className="signupButton">Sign Up</button>
            <span className="signupForgot">Forget Password?</span>
            <button className="signupLoginButton">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
