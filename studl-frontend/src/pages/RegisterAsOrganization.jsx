import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrganizationRegistration() {
  const navigate = useNavigate();
  
  // Organization Registration States
  const [domainName, setDomainName] = useState("");
  const [subDomainName, setSubDomainName] = useState("");
  const [tld, setTld] = useState("");
  const [orgPassword, setOrgPassword] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgError, setOrgError] = useState("");

  // Predefined TLD options
  const tldOptions = [
    ".com", ".org", ".net", ".edu", ".gov", 
    ".co", ".io", ".ai", ".tech", ".cloud"
  ];

  // Function to generate dummy email
  const generateDummyEmail = () => {
    const dummyEmails = [
      `admin@${domainName}${tld}`,
      `support@${domainName}${tld}`,
      `info@${domainName}${tld}`,
      `hello@${domainName}${tld}`,
      `contact@${domainName}${tld}`
    ];

    // If domain and TLD are set, return a random dummy email
    if (domainName && tld) {
      const randomEmail = dummyEmails[Math.floor(Math.random() * dummyEmails.length)];
      setOrgEmail(randomEmail);
    } else {
      setOrgError("Please enter domain name and select TLD first");
    }
  };

  const handleOrganizationRegistration = async () => {
    // Basic validation
    if (!domainName || !subDomainName || !tld || !orgPassword) {
      setOrgError("All primary fields are required!");
      return;
    }

    // Password strength check (basic example)
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
        // Store org registration token or navigate to next step
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
    <div>
      <h2>Organization Registration</h2>
      
      {orgError && <div style={{color: 'red'}}>{orgError}</div>}
      
      <div>
        <input
          type="text"
          placeholder="Domain Name (e.g., example)"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
          required
        />
        
        <input
          type="text"
          placeholder="Subdomain Name (e.g., app or admin)"
          value={subDomainName}
          onChange={(e) => setSubDomainName(e.target.value)}
          required
        />
        
        <select
          value={tld}
          onChange={(e) => setTld(e.target.value)}
          required
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
          required
        />
        
        <div>
          <input
            type="text"
            placeholder="Organization Email"
            value={orgEmail}
            onChange={(e) => setOrgEmail(e.target.value)}
          />
          <button onClick={generateDummyEmail}>
            Generate Dummy Email
          </button>
        </div>
        
        <button onClick={handleOrganizationRegistration}>
          Register Organization
        </button>
      </div>
    </div>
  );
}