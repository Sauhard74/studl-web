/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../components/Button"; 
import TextBox from "../components/TextBox"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

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
          userType: "student",
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
          userType: "staff",
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
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT PANEL: Sliding Registration Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12 relative">
        <div className="absolute top-6 left-6 text-xl font-semibold text-blue-700">Studl</div>

        <div className="w-full max-w-md space-y-6 relative overflow-hidden h-[540px]">
          {/* Tabs */}
          <div className="flex gap-4 mb-4">
            {["student", "staff"].map((role) => (
              <button
                key={role}
                onClick={() => setActiveCard(role)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeCard === role
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-blue-600 text-blue-600"
                }`}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>

          {/* Sliding Form Container */}
          <div
            className="relative w-[200%] flex transition-transform duration-500 ease-in-out"
            style={{
              transform: activeCard === "student" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            {/* STUDENT FORM */}
            <div className="w-full px-4 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Register as Student</h2>
              {studentError && <div className="text-red-500 text-sm">{studentError}</div>}

              <TextBox type="text" placeholder="Full Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
              <TextBox type="email" placeholder="Email" value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} />

              <div className="relative">
                <TextBox type={studentShowPassword ? "text" : "password"} placeholder="Password" value={studentPassword} onChange={(e) => setStudentPassword(e.target.value)} />
                <button onClick={() => setStudentShowPassword(!studentShowPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600">Show</button>
              </div>

              <TextBox type={studentShowPassword ? "text" : "password"} placeholder="Confirm Password" value={studentConfirmPassword} onChange={(e) => setStudentConfirmPassword(e.target.value)} />

              <Button onClick={handleStudentRegistration} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Register</Button>

              <div className="text-center text-sm text-gray-500">or register with</div>
              <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium">
                <i className="bx bxl-google text-lg"></i> Google
              </a>
            </div>

            {/* STAFF FORM */}
            <div className="w-full px-4 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Register as Staff</h2>
              {staffError && <div className="text-red-500 text-sm">{staffError}</div>}

              <TextBox type="text" placeholder="Full Name" value={staffName} onChange={(e) => setStaffName(e.target.value)} />
              <TextBox type="email" placeholder="Email" value={staffEmail} onChange={(e) => setStaffEmail(e.target.value)} />
              <TextBox type="password" placeholder="Password" value={staffPassword} onChange={(e) => setStaffPassword(e.target.value)} />
              <TextBox type="password" placeholder="Confirm Password" value={staffConfirmPassword} onChange={(e) => setStaffConfirmPassword(e.target.value)} />

              <Button onClick={handleStaffRegistration} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Register</Button>

              <div className="text-center text-sm text-gray-500">or register with</div>
              <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium">
                <i className="bx bxl-google text-lg"></i> Google
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
