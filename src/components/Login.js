import React from "react";
import Header from "./Header";

const Login = () => {
    const [isSignUp, setIsSignUp] = React.useState(false);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);

    }

  return (
    <div className="relative">
      {/* Header Background */}
      <Header />

      {/* Login Form Container */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
        <div className="bg-[#111] p-10 rounded-md w-full max-w-lg text-white shadow-lg opacity-90">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">{isSignUp ?"Sign In":"Sign Up"}</h1>
          <form className="space-y-6">
             {!isSignUp && (
                <input type="text"
                placeholder="Full Name"
                              className="w-full p-4 rounded-md bg-[#333] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                  />
            )}
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-4 rounded-md bg-[#333] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
            />
           
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-md bg-[#333] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
            />
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white p-4 rounded-md font-semibold"
            >
              Sign In
            </button>

            {/* Remember Me and Help Links */}
            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>

          {/* New to Netflix Section */}
          <div className="mt-6 text-sm text-gray-400">
            <span>New to Netflix? </span>
            <a href="#" className="text-white hover:underline" onClick={toggleSignUp}>
              Sign up now
            </a>
          </div>

          {/* reCAPTCHA Disclaimer */}
          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
