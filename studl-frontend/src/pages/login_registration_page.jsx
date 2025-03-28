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
          password: loginPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
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
          password: regPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setActiveMode("login");
        setLoginEmail(regEmail);
      } else {
        setRegError(data.message || "Registration failed.");
      }
    } catch {
      setRegError("Server error, please try again.");
    }
  };

  const renderLoginForm = () => (
    <div className="space-y-5">
      {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign In
      </button>
      <div className="text-center text-sm text-gray-500">or sign in with</div>
      <a
        href="#"
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium"
      >
        <i className="bx bxl-google text-lg"></i> Google
      </a>
    </div>
  );

  const renderRegistrationForm = () => (
    <div className="space-y-5">
      {regError && <div className="text-red-500 text-sm">{regError}</div>}
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={regName}
        onChange={(e) => setRegName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={regEmail}
        onChange={(e) => setRegEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={regPassword}
        onChange={(e) => setRegPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={regConfirmPassword}
        onChange={(e) => setRegConfirmPassword(e.target.value)}
      />
      <button
        onClick={handleRegistration}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Register
      </button>
      <div className="text-center text-sm text-gray-500">or register with</div>
      <a
        href="#"
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium"
      >
        <i className="bx bxl-google text-lg"></i> Google
      </a>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* LEFT PANEL: Sliding Login Form */}
      <div className="flex-1 flex items-center justify-center bg-blue-50 px-6 py-12 relative">
        <div className="absolute top-6 left-6 text-xl font-semibold text-blue-700">Studl</div>

        <div className="w-full max-w-md space-y-6 relative overflow-hidden h-[480px]">
          {/* Tabs */}
          <div className="flex gap-4 mb-2">
            {["login", "register"].map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeMode === mode
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-blue-600 text-blue-600"
                }`}
              >
                {mode === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          {/* Slide-In Forms */}
          <div
            className="relative w-[200%] flex transition-transform duration-700 ease-in-out"
            style={{
              transform: activeMode === "login" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            {/* LOGIN FORM */}
            <div className="w-full px-1 space-y-4">{renderLoginForm()}</div>

            {/* REGISTRATION FORM */}
            <div className="w-full px-1 space-y-4">{renderRegistrationForm()}</div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Image */}
      <div className="hidden md:block relative w-1/2 h-screen">
        <img
          src="src\assets\quotes.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
