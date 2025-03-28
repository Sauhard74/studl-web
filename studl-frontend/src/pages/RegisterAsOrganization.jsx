import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterAsOrganization() {
  const navigate = useNavigate();
  
  const [domainName, setDomainName] = useState("");
  const [subDomainName, setSubDomainName] = useState("");
  const [tld, setTld] = useState("");
  const [orgPassword, setOrgPassword] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgError, setOrgError] = useState("");

  const tldOptions = [
    ".com", ".org", ".net", ".edu", ".gov", 
    ".co", ".io", ".ai", ".tech", ".cloud"
  ];

  const generateDummyEmail = () => {
    const dummyEmails = [
      `admin@${domainName}${tld}`,
      `support@${domainName}${tld}`,
      `info@${domainName}${tld}`,
      `hello@${domainName}${tld}`,
      `contact@${domainName}${tld}`
    ];

    if (domainName && tld) {
      const randomEmail = dummyEmails[Math.floor(Math.random() * dummyEmails.length)];
      setOrgEmail(randomEmail);
    } else {
      setOrgError("Please enter domain name and select TLD first");
    }
  };

  const handleOrganizationRegistration = async () => {
    if (!domainName || !subDomainName || !tld || !orgPassword) {
      setOrgError("All fields are required!");
      return;
    }

    if (orgPassword.length < 8) {
      setOrgError("Password must be at least 8 characters long!");
      return;
    }

    setOrgError("");
    try {
      const response = await fetch("https://your-backend.com/api/org-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          domainName,
          subDomainName,
          tld,
          password: orgPassword,
          orgEmail
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('orgRegistrationToken', data.token);
        navigate("/org-onboarding");
      } else {
        setOrgError(data.message || "Organization registration failed");
      }
    } catch (error) {
      setOrgError("Server error, please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12 relative">
        <div className="absolute top-6 left-6 text-xl font-semibold text-blue-700">Studl</div>

        <div className="w-full max-w-md space-y-6 relative overflow-hidden h-[540px]">
          {/* Form Fields */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Register Your Organization</h2>
            {orgError && <div className="text-red-500 text-sm">{orgError}</div>}

            <input
              type="text"
              placeholder="Domain Name (e.g., example)"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subdomain Name (e.g., admin)"
              value={subDomainName}
              onChange={(e) => setSubDomainName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={tld}
              onChange={(e) => setTld(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select TLD</option>
              {tldOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <input
              type="password"
              placeholder="Organization Password"
              value={orgPassword}
              onChange={(e) => setOrgPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Organization Email"
                value={orgEmail}
                onChange={(e) => setOrgEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={generateDummyEmail}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Generate Email
              </button>
            </div>

            <button
              onClick={handleOrganizationRegistration}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Register Organization
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
