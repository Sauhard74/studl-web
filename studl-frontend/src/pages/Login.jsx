import React, { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { Link } from "react-router-dom";

export default function Login() {
  const [activeTab, setActiveTab] = useState("student");

  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [showStudentPassword, setShowStudentPassword] = useState(false);

  const [staffEmail, setStaffEmail] = useState("");
  const [staffPassword, setStaffPassword] = useState("");
  const [showStaffPassword, setShowStaffPassword] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (type) => {
    const email = type === "student" ? studentEmail : staffEmail;
    const password = type === "student" ? studentPassword : staffPassword;
    const endpoint = type === "student" ? "/api/student/login" : "/api/staff/login";

    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setError("");
    try {
      const res = await fetch(`https://your-backend.com${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      res.ok
        ? alert(`${type === "student" ? "Student" : "Staff"} Login Success`)
        : setError("Invalid credentials.");
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("student")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            activeTab === "student"
              ? "bg-blue-600 text-white"
              : "bg-white border border-blue-600 text-blue-600"
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveTab("staff")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            activeTab === "staff"
              ? "bg-blue-600 text-white"
              : "bg-white border border-blue-600 text-blue-600"
          }`}
        >
          Staff
        </button>
      </div>

      {/* Card Wrapper with Slide Animation */}
      <div className="relative w-full max-w-md h-[460px] overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Form Container */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
            ${activeTab === "student" ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Student Login Form */}
          <div className="p-8 space-y-5">
            <h2 className="text-xl font-bold text-blue-800 text-center">Login as Student</h2>
            {error && activeTab === "student" && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <TextBox
              type="email"
              placeholder="Enter your email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <TextBox
                type={showStudentPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={studentPassword}
                onChange={(e) => setStudentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setShowStudentPassword(!showStudentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
              >
                {showStudentPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <Button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => handleLogin("student")}
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
          </div>
        </div>

        {/* Staff Login Form */}
        <div
          className={`absolute top-0 left-full w-full h-full transition-all duration-500 ease-in-out
            ${activeTab === "staff" ? "-translate-x-full" : "translate-x-0"}`}
        >
          <div className="p-8 space-y-5">
            <h2 className="text-xl font-bold text-blue-800 text-center">Login as Staff</h2>
            {error && activeTab === "staff" && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <TextBox
              type="email"
              placeholder="Enter your email"
              value={staffEmail}
              onChange={(e) => setStaffEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <TextBox
                type={showStaffPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={staffPassword}
                onChange={(e) => setStaffPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setShowStaffPassword(!showStaffPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
              >
                {showStaffPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <Button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => handleLogin("staff")}
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
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-6 text-sm text-blue-700 flex flex-col items-center gap-1">
        <Link to="/register" className="hover:underline">
          Don’t have an account? Register as Student
        </Link>
        <Link to="/org-registration" className="hover:underline">
          Register as Organization
        </Link>
      </div>
    </div>
  );
}
