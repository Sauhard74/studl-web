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
    <div className="registration-page">
      <div className="registration-cards-container">
        {/* Student Registration Card */}
        <div className={`registration-card student-card ${activeCard === "student" ? "active" : ""}`}>
          <h2>Register as Student</h2>
          
          {studentError && <div className="error-message">{studentError}</div>}
          
          {/* Name Input */}
          <TextBox
            type="text"
            placeholder="Enter your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          
          {/* Email Input */}
          <TextBox
            type="email"
            placeholder="Enter your email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
          
          {/* Password Input */}
          <div style={{ position: "relative" }}>
            <TextBox
              type={studentShowPassword ? "text" : "password"}
              placeholder="Create password"
              value={studentPassword}
              onChange={(e) => setStudentPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setStudentShowPassword(!studentShowPassword)}
              style={{ position: "absolute", right: "10px", top: "50%" }}
            >
              {studentShowPassword ? "Hide" : "Show"}
            </button>
          </div>
          
          {/* Confirm Password Input */}
          <div style={{ position: "relative" }}>
            <TextBox
              type={studentShowPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={studentConfirmPassword}
              onChange={(e) => setStudentConfirmPassword(e.target.value)}
            />
          </div>
          
          <Button className="btn" onClick={handleStudentRegistration}>
            Register
          </Button>
          
          <div className="social-login">
            <p>or register with Google</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-google"></i></a>
            </div>
          </div>
        </div>
        
        {/* Staff Registration Card */}
        <div className={`registration-card staff-card ${activeCard === "staff" ? "active" : ""}`}>
          <h2>Register as Staff</h2>
          
          {staffError && <div className="error-message">{staffError}</div>}
          
          {/* Name Input */}
          <TextBox
            type="text"
            placeholder="Enter your name"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
          />
          
          {/* Email Input */}
          <TextBox
            type="email"
            placeholder="Enter your email"
            value={staffEmail}
            onChange={(e) => setStaffEmail(e.target.value)}
          />
          
          {/* Password Input */}
          <div style={{ position: "relative" }}>
            <TextBox
              type={staffShowPassword ? "text" : "password"}
              placeholder="Create password"
              value={staffPassword}
              onChange={(e) => setStaffPassword(e.target.value)}
            />
            
          </div>
          
          {/* Confirm Password Input */}
          <div style={{ position: "relative" }}>
            <TextBox
              type={staffShowPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={staffConfirmPassword}
              onChange={(e) => setStaffConfirmPassword(e.target.value)}
            />
          </div>
          
          <Button className="btn" onClick={handleStaffRegistration}>
            Register
          </Button>
          
          <div className="social-login">
            <p>or register with Google</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-google"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom links */}
      <div className="bottom-options">
        <a href="/login" className="already-account">
          Already have an account? Login
        </a>
        <a href="/org-registration" className="register-org">
          Register as Organization
        </a>
      </div>
    </div>
  );
}