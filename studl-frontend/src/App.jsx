import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";  // Ensure this path is correct
import Registration from "./pages/registration";  // Ensure this path is correct
import RegisterAsOrganization from "./pages/RegisterAsOrganization";  // Ensure this path is correct

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/register-as-organization" element={<RegisterAsOrganization />} />
      </Routes>
    </div>
  );
}

export default App;
