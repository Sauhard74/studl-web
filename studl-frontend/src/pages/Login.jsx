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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT PANEL: FORM */}
      <div className="flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md space-y-6">
          {/* Tab Switcher */}
          <div className="flex gap-4">
            {["student", "staff"].map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === role
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-blue-600 text-blue-600"
                }`}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
  
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back 👋</h2>
            <p className="text-sm text-gray-500">
              Please enter your details to sign in to your account
            </p>
          </div>
  
          {/* Error */}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
  
          {/* Inputs */}
          <TextBox
            type="email"
            placeholder="Enter your email"
            value={activeTab === "student" ? studentEmail : staffEmail}
            onChange={(e) =>
              activeTab === "student"
                ? setStudentEmail(e.target.value)
                : setStaffEmail(e.target.value)
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
  
          <div className="relative">
            <TextBox
              type={
                activeTab === "student"
                  ? showStudentPassword
                    ? "text"
                    : "password"
                  : showStaffPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              value={activeTab === "student" ? studentPassword : staffPassword}
              onChange={(e) =>
                activeTab === "student"
                  ? setStudentPassword(e.target.value)
                  : setStaffPassword(e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={() =>
                activeTab === "student"
                  ? setShowStudentPassword((p) => !p)
                  : setShowStaffPassword((p) => !p)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
            >
              Show
            </button>
          </div>
  
          {/* CTA Button */}
          <Button
            onClick={() => handleLogin(activeTab)}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900"
          >
            Sign In
          </Button>
  
          {/* Divider */}
          <div className="text-center text-sm text-gray-500">OR</div>
  
          {/* Google Sign In */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium"
          >
            <i className="bx bxl-google text-lg"></i> Sign in with Google
          </a>
  
          {/* Bottom link */}
          <div className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
  
      {/* RIGHT PANEL: TESTIMONIAL */}
      <div className="hidden md:block relative w-full h-screen">
        {/* Full background image */}
        <img
          src="src/assets/quotes.png"
          alt="Testimonial"
          className="w-full h-full object-cover"
        />

        {/* Overlay for quote */}
        <div className="absolute inset-0 bg-black/30"></div> {/* Optional dark overlay */}

        {/* Text inside image */}
        <div className="absolute bottom-12 px-10 w-full text-white text-center">
          <p className="text-sm italic leading-relaxed drop-shadow-md max-w-lg mx-auto">
            “The Course of UX Research in Studl was an eye-opening experience that provided me with invaluable insights and practical skills. The instructors were knowledgeable and engaging, guiding us through real-world scenarios and making the learning process enjoyable.”
          </p>
          <div className="mt-4 font-semibold text-white">Laila Changgun</div>
          <div className="text-sm text-gray-200">UX Intern – YouTube</div>
        </div>
      </div>

    </div>
  );  
}
