import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (e: any) => {
    e.preventDefault();
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">HealthMate</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-300">Sign in</h2>
          <p className="text-sm text-gray-400">
            Please login to continue to your account.
          </p>

          <input
            type="email"
            placeholder="harshal.xyz12@gmail.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />

          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-500" />
            <label className="ml-2 text-sm text-gray-300">
              Keep me logged in
            </label>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold" onClick={handleSignIn}>
            Sign in
          </button>
        </div>

        <div className="border-t border-gray-600 my-4"></div>

        <div className="space-y-3">
          <h2 className="text-center text-gray-300 font-medium">
            Single-Sign On
          </h2>

          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2" onClick={handleSignIn}>
            <span>Continue with Harshal123</span>
            <span>👤</span>
          </button>

          <button className="w-full bg-white hover:bg-gray-200 text-black py-2 rounded-lg flex items-center justify-center space-x-2" onClick={handleSignIn}>
            <span>Continue with Google</span>
            <span>🌐</span>
          </button>

          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg flex items-center justify-center space-x-2" onClick={handleSignIn}>
            <span>Continue with GitHub</span>
            <span>🐙</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;