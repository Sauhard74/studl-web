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
    <div className="flex min-h-screen">
      {/* LEFT PANEL: Sliding Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12 relative">
        <div className="absolute top-6 left-6 text-xl font-semibold text-blue-700">Studl</div>
  
        <div className="w-full max-w-md space-y-6 relative overflow-hidden h-[480px]">
          {/* Tabs */}
          <div className="flex gap-4 mb-2">
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
  
          {/* Slide-In Forms */}
          <div
            className="relative w-[200%] flex transition-transform duration-500 ease-in-out"
            style={{
              transform: activeTab === "student" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            {/* STUDENT FORM */}
            <div className="w-full px-1 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Login as Student</h2>
              <p className="text-sm text-gray-500">Enter your details to access your student account</p>
              {error && activeTab === "student" && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
  
              <TextBox
                type="email"
                placeholder="Email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
              />
              <div className="relative">
                <TextBox
                  type={showStudentPassword ? "text" : "password"}
                  placeholder="Password"
                  value={studentPassword}
                  onChange={(e) => setStudentPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowStudentPassword(!showStudentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
                >
                  {showStudentPassword ? "Hide" : "Show"}
                </button>
              </div>
  
              <Button
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => handleLogin("student")}
              >
                Sign In
              </Button>
  
              <div className="text-center text-sm text-gray-500">or sign in with</div>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium"
              >
                <i className="bx bxl-google text-lg"></i> Google
              </a>
            </div>
  
            {/* STAFF FORM */}
            <div className="w-full px-1 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Login as Staff</h2>
              <p className="text-sm text-gray-500">Enter your details to access staff dashboard</p>
              {error && activeTab === "staff" && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
  
              <TextBox
                type="email"
                placeholder="Email"
                value={staffEmail}
                onChange={(e) => setStaffEmail(e.target.value)}
              />
              <div className="relative">
                <TextBox
                  type={showStaffPassword ? "text" : "password"}
                  placeholder="Password"
                  value={staffPassword}
                  onChange={(e) => setStaffPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowStaffPassword(!showStaffPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
                >
                  {showStaffPassword ? "Hide" : "Show"}
                </button>
              </div>
  
              <Button
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => handleLogin("staff")}
              >
                Sign In
              </Button>
  
              <div className="text-center text-sm text-gray-500">or sign in with</div>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium"
              >
                <i className="bx bxl-google text-lg"></i> Google
              </a>
            </div>
          </div>
  
          <div className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
  
      {/* RIGHT PANEL: Testimonial */}
      <div className="hidden md:block relative w-1/2 h-screen">
        <img
          src="src/assets/quotes.png"
          alt="Testimonial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 px-10 w-full text-white text-center">
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl max-w-lg mx-auto">
            <p className="text-sm italic leading-relaxed">
              “The Course of UX Research in Studl was an eye-opening experience that provided me with invaluable insights and practical skills. The instructors were knowledgeable and engaging, guiding us through real-world scenarios and making the learning process enjoyable.”
            </p>
            <div className="mt-4 font-semibold text-white">Laila Changgun</div>
            <div className="text-sm text-gray-300">UX Intern – YouTube</div>
          </div>
        </div>
      </div>
    </div>
  );    
}
