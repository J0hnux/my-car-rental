import "../styles/Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-area">
        <p className="login_header">Login</p>
        <label htmlFor="email">Your email address</label>
        <input type="email" />
        <input type="password" placeholder="Password" />
        <div className="forgot_pass">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="check_button">
          <span>
            <input type="checkbox" /> Remember me
          </span>
          <button>Log in</button>
        </div>
      </div>
      <div className="signup-area">
        <p>Don{"'"}t have an account?&nbsp;</p>
        <span>
          <a href="#">Create one now</a>
        </span>
      </div>
    </div>
  );
}
