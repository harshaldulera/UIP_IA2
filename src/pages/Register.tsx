import { useState } from "react";
import { FaEye, FaEyeSlash, FaCalendarAlt } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">HealthMate</h1>
        </div>

        {/* Sign Up Form */}
        <h2 className="text-2xl font-semibold text-white mb-2">Sign up</h2>
        <p className="text-sm text-gray-400 mb-6">
          Sign up to enjoy the feature of HealthMate
        </p>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Harshal Dulera"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>

          {/* Date of Birth Field */}
          <div className="relative">
            <label className="block text-sm text-gray-300">Date of Birth</label>
            <input
              type="text"
              placeholder="30 August 2003"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <FaCalendarAlt className="absolute right-4 top-10 text-gray-400" />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="harshal.xyz12@gmail.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-4 top-10 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Sign up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;