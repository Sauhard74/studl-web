import React from "react";
import React, { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // pata nhi vscode wale ais ne likh diya apne aap

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setError(""); // remove all previous errors

    try {
      const response = await fetch("API KEY ", {
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

  }
  return (
    <div className="login-page">
      <div className="login-container"></div>
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
      </div>
  );

  
}