import React, { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setError("");

    try {
      const response = await fetch("API KEY", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login Successful!");
        // TODO: Redirect or update UI
      } else {
        setError("Invalid email or password!");
      }
    } catch (error) {
      setError("Server error, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-portal px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 space-y-6 transition-all duration-300 ease-in-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

        <h2 className="text-2xl font-bold text-primary text-center">Login as Student</h2>

        {error && (
          <div className="text-red-500 text-sm text-center font-medium -mt-2 mb-2">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <TextBox
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <TextBox
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <Button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-900 transition"
        >
          Login
        </Button>

        <div className="text-center text-sm text-gray-500">or login with</div>

        <a
          href="#"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition text-sm font-medium"
        >
          <i className="bx bxl-google text-lg"></i> Google
        </a>

        {/* Bottom Links */}
        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-blue-700">
          <a href="/register" className="hover:underline">
            Don’t have an account? Register as Student
          </a>
          <a href="/org-registration" className="hover:underline">
            Register as an Organization
          </a>
        </div>
      </div>
    </div>
  );
}
