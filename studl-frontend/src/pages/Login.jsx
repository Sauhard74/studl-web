import React, { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

export default function Login() {
  // student login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // pata nhi vscode ke copilot ne suggest kara diya apne aap

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setError(""); // remove all previous errors

    try {
      const response = await fetch("https://your-backend-url.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        alert("Login Successful!");
      } else {
        setError("Invalid email or password!");
      }
    } catch (error) {
      setError("Server error, please try again.");
    }
  };

  const handleStaffLogin = async () => {
    if (!staffEmail || !staffPassword) {
      setError("Email and password are required!");
      return;
    }

    setError(""); // remove all previous errors
    try {
      const response = await fetch("https://your-backend-url.com/api/staff/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: staffEmail, password: staffPassword }),
      });

      if (response.ok) {
        alert("Staff Login Successful!");
        // Redirect to staff dashboard
      } else {
        setError("Invalid email or password!");
      }
    } catch (error) {
      setError("Server error, please try again.");
    }
  };

  }
  return (
    <div className="login-page">
      <div className="login-container"></div>
      <div className="login-container student-login"></div>
      <h2>Login as Student</h2>

      {/* Email Input */}
      <TextBox 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      {/* Password Input with Toggle */}
      <div style={{ position: "relative" }}>
        <TextBox 
          type={showPassword ? "text" : "password"} 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button 
          type="button" 
          onClick={() => setShowPassword(!showPassword)}
          style={{ position: "absolute", right: "10px", top: "50%" }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <a href="#" className="forgot-link">Forgot password?</a>

      <Button className="btn" onClick={handleLogin}>
        Login
      </Button>

        <p>or login with Google</p>
        <div className="social-icons">
          <a href="#"><i className="bx bxl-google"></i></a>
          </div>
          {/* Bottom links */}
      <div className="bottom-options">
        <a href="registration page ka link " className="Don’t have an Account">
          Don’t have an Account
        </a>
        <a href="org walo ka link" className="Register as an Organization">
          Register as an Organization
        </a>
      </div>
    </div>
  );
}