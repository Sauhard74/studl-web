import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UnifiedLogin() {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState("login");

  // Login States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Registration States
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regError, setRegError] = useState("");

  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      setLoginError("Email and password are required!");
      return;
    }

    setLoginError("");
    try {
      const res = await fetch("https://your-backend.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: loginEmail, 
          password: loginPassword
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate("/dashboard");
      } else {
        setLoginError(data.message || "Invalid credentials.");
      }
    } catch {
      setLoginError("Server error");
    }
  };

  const handleRegistration = async () => {
    if (!regName || !regEmail || !regPassword || !regConfirmPassword) {
      setRegError("All fields are required!");
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setRegError("Passwords do not match!");
      return;
    }

    setRegError("");
    try {
      const response = await fetch("https://your-backend.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: regName,
          email: regEmail, 
          password: regPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setActiveMode("login");
        setLoginEmail(regEmail);
      } else {
        setRegError(data.message || "Registration failed. Please try again.");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setRegError("Server error, please try again.");
    }
  };

  const renderLoginForm = () => (
    <div>
      {loginError && <div>{loginError}</div>}
      <input
        type="email"
        placeholder="Email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );

  const renderRegistrationForm = () => (
    <div>
      {regError && <div>{regError}</div>}
      <input
        type="text"
        placeholder="Full Name"
        value={regName}
        onChange={(e) => setRegName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={regEmail}
        onChange={(e) => setRegEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={regPassword}
        onChange={(e) => setRegPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={regConfirmPassword}
        onChange={(e) => setRegConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );

  return (
    <div>
      <div>
        <button onClick={() => setActiveMode("login")}>Login</button>
        <button onClick={() => setActiveMode("register")}>Register</button>

        {activeMode === "login" ? renderLoginForm() : renderRegistrationForm()}
      </div>
    </div>
  );
}