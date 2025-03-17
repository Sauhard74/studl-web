import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-800 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full">
              <FaGraduationCap className="text-blue-600 text-4xl" />
            </div>
          </div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500">
              Sign in to continue
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full pl-10 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="text-right">
              <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
                Forgot Password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 px-4 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign In
            </button>
          </form>
          
          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          {/* Social login */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <FaGoogle className="text-gray-700" size={20} />
            </button>
            <button className="flex items-center justify-center p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <FaApple className="text-gray-700" size={20} />
            </button>
          </div>
          
          {/* Toggle login/signup */}
          <div className="text-center mt-8">
            <p className="text-gray-500">
              Don't have an account? 
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-blue-500 hover:text-blue-600 font-medium"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
