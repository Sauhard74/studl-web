import React, { useState } from "react";
import Button from "../components/Button"; // Assuming you have a Button component
import TextBox from "../components/TextBox"; // Assuming you have a TextBox component
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
    <div className="flex min-h-screen bg-blue-50">
      {/* Left Panel */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-12 shadow-lg rounded-lg">
        <div className="absolute top-6 left-6 text-xl font-semibold text-blue-700">Studl</div>
        
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-8">
          {["student", "staff"].map((role) => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === role
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-blue-600 text-blue-600"
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>

        {/* Login Forms */}
        <div className="w-full max-w-md space-y-6">
          {/* Student Form */}
          {activeTab === "student" && (
            <div className="w-full px-4 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Login as Student</h2>
              <p className="text-sm text-gray-500">Enter your details to access your student account</p>
              {error && <div className="text-red-500 text-sm">{error}</div>}

              <TextBox
                type="email"
                placeholder="Email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <div className="relative">
                <TextBox
                  type={showStudentPassword ? "text" : "password"}
                  placeholder="Password"
                  value={studentPassword}
                  onChange={(e) => setStudentPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
          )}

          {/* Staff Form */}
          {activeTab === "staff" && (
            <div className="w-full px-4 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Login as Staff</h2>
              <p className="text-sm text-gray-500">Enter your details to access staff dashboard</p>
              {error && <div className="text-red-500 text-sm">{error}</div>}

              <TextBox
                type="email"
                placeholder="Email"
                value={staffEmail}
                onChange={(e) => setStaffEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <div className="relative">
                <TextBox
                  type={showStaffPassword ? "text" : "password"}
                  placeholder="Password"
                  value={staffPassword}
                  onChange={(e) => setStaffPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
          )}
        </div>

        {/* Register and Register as Organization Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/registration">
            <Button className="w-auto bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
              Register
            </Button>
          </Link>
          <Link to="/register-as-organization">
            <Button className="w-auto bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800">
              Register as Organization
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Panel with Image */}
      <div className="hidden md:block relative w-1/2 h-screen">
        <img
          src="src/assets/quotes.png"  // Replace with your image path
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
