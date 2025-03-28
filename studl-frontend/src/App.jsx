import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";  
import Registration from "./pages/registration";  
import RegisterAsOrganization from "./pages/RegisterAsOrganization"; 


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
