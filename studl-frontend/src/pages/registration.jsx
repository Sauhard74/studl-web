import React, { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { useNavigate } from "react-router-dom"; 

export default function Registration() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState("student"); // For animation control
  
  // Student registration state
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentConfirmPassword, setStudentConfirmPassword] = useState("");
  const [studentError, setStudentError] = useState("");
  const [studentShowPassword, setStudentShowPassword] = useState(false);
  
  // Staff registration state
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [staffPassword, setStaffPassword] = useState("");
  const [staffConfirmPassword, setStaffConfirmPassword] = useState("");
  const [staffError, setStaffError] = useState("");
  const [staffShowPassword, setStaffShowPassword] = useState(false);

  const handleStudentRegistration = async () => {
    if (!studentName || !studentEmail || !studentPassword || !studentConfirmPassword) {
      setStudentError("All fields are required!");
      return;
    }

    if (studentPassword !== studentConfirmPassword) {
      setStudentError("Passwords do not match!");
      return;
    }

    setStudentError(""); // remove all previous errors

    try {
      const response = await fetch("API KEY", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: studentName, 
          email: studentEmail, 
          password: studentPassword, 
          userType: "student" 
        }),
      });
      if (response.ok) {
        alert("Student Registration Successful!");
        navigate("/login");
      } else {
        setStudentError("Registration failed. Please try again.");
      }
    } catch (error) {
      setStudentError("Server error, please try again.");
    }
  };

  const handleStaffRegistration = async () => {
    if (!staffName || !staffEmail || !staffPassword || !staffConfirmPassword) {
      setStaffError("All fields are required!");
      return;
    }

    if (staffPassword !== staffConfirmPassword) {
      setStaffError("Passwords do not match!");
      return;
    }

    setStaffError(""); // remove all previous errors

    try {
      const response = await fetch("API KEY", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: staffName, 
          email: staffEmail, 
          password: staffPassword, 
          userType: "staff" 
        }),
      });
      if (response.ok) {
        alert("Staff Registration Successful!");
        navigate("/login");
      } else {
        setStaffError("Registration failed. Please try again.");
      }
    } catch (error) {
      setStaffError("Server error, please try again.");
    }
  };

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12">
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveCard("student")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCard === "student"
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-600 text-blue-600"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveCard("staff")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCard === "staff"
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-600 text-blue-600"
            }`}
          >
            Staff
          </button>
        </div>
    
        {/* Card container */}
        <div className="relative w-full max-w-md h-[500px] overflow-hidden bg-white rounded-2xl shadow-xl transition-all duration-300">
          {/* Student Registration Form */}
          <div
            className={`absolute top-0 left-0 w-full h-full p-8 space-y-5 transition-all duration-500 ease-in-out ${
              activeCard === "student" ? "translate-x-0" : "-translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-xl font-bold text-blue-800 text-center">Register as Student</h2>
    
            {studentError && <div className="text-red-500 text-sm text-center">{studentError}</div>}
    
            <TextBox
              type="text"
              placeholder="Enter your name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <TextBox
              type="email"
              placeholder="Enter your email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <TextBox
                type={studentShowPassword ? "text" : "password"}
                placeholder="Create password"
                value={studentPassword}
                onChange={(e) => setStudentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setStudentShowPassword(!studentShowPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
              >
                {studentShowPassword ? "Hide" : "Show"}
              </button>
            </div>
            <TextBox
              type={studentShowPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={studentConfirmPassword}
              onChange={(e) => setStudentConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <Button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleStudentRegistration}
            >
              Register
            </Button>
    
            <div className="text-center text-sm text-gray-500">or register with</div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition text-sm font-medium"
            >
              <i className="bx bxl-google text-lg"></i> Google
            </a>
          </div>
    
          {/* Staff Registration Form */}
          <div
            className={`absolute top-0 left-full w-full h-full p-8 space-y-5 transition-all duration-500 ease-in-out ${
              activeCard === "staff" ? "-translate-x-full opacity-100" : "translate-x-0 opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-xl font-bold text-blue-800 text-center">Register as Staff</h2>
    
            {staffError && <div className="text-red-500 text-sm text-center">{staffError}</div>}
    
            <TextBox
              type="text"
              placeholder="Enter your name"
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <TextBox
              type="email"
              placeholder="Enter your email"
              value={staffEmail}
              onChange={(e) => setStaffEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <TextBox
                type={staffShowPassword ? "text" : "password"}
                placeholder="Create password"
                value={staffPassword}
                onChange={(e) => setStaffPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <TextBox
              type={staffShowPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={staffConfirmPassword}
              onChange={(e) => setStaffConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <Button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleStaffRegistration}
            >
              Register
            </Button>
    
            <div className="text-center text-sm text-gray-500">or register with</div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition text-sm font-medium"
            >
              <i className="bx bxl-google text-lg"></i> Google
            </a>
          </div>
        </div>
    
        {/* Bottom Links */}
        <div className="mt-6 text-sm text-blue-700 flex flex-col items-center gap-1">
          <a href="/login" className="hover:underline">
            Already have an account? Login
          </a>
          <a href="/org-registration" className="hover:underline">
            Register as Organization
          </a>
        </div>
      </div>
    );    
}