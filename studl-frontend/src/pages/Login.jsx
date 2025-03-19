import React from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

export default function Login() {
  return (
    <div className="login-page">
      {/* Student Login Section */}
      <div className="login-container">
        <h2>Student Login</h2>
        <TextBox type="email" placeholder="Enter your email" />
        <TextBox type="password" placeholder="Enter your password" />
        <a href="#" className="forgot-link">Forgot password?</a>
        <Button className="btn" onClick={() => alert("Student Login")}>
          Login
        </Button>
        <p>or login with google</p>
        <div className="social-icons">
          <a href="#"><i className="bx bxl-google"></i></a>
          
        </div>
      </div>

      {/* Admin Login Section */}
      <div className="login-container">
        <h2>Admin Login</h2>
        <TextBox type="email" placeholder="Admin Email" />
        <TextBox type="password" placeholder="Admin Password" />
        <a href="#" className="forgot-link">Forgot password?</a>
        <Button className="btn" onClick={() => alert("Admin Login")}>
          Login
        </Button>
        <p>or login with social platforms</p>
        <div className="social-icons">
          <a href="#"><i className="bx bxl-google"></i></a>
          
        </div>
      </div>
    </div>
  );
}