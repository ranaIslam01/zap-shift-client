import React, { useState } from "react";
import authImage from "../../assets/authImage.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUpGoogle } = useAuth();
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const signUpWithGoogle = () => {
    signUpGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "Google Sign-In successful.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Could not sign in with Google.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log("Logged In User:", result.user);
        Swal.fire({
          title: "Success!",
          text: "Login successful. Welcome back!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        Swal.fire({
          title: "Error!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-10 md:py-12">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Login with ZapShift
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition text-sm sm:text-base"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition text-sm sm:text-base pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 sm:right-4 top-10 sm:top-11 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-green text-primary-black font-bold py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition text-base sm:text-lg mt-6 sm:mt-8"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6 sm:my-8">
            <div className="grow border-b border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="grow border-b border-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={signUpWithGoogle}
            className="w-full border-2 border-gray-300 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6 sm:mt-8 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary-green font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={authImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
