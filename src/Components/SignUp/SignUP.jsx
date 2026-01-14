import React, { useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import authImage from "../../assets/authImage.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createUser, signUpGoogle } = useAuth();

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
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("Registered User:", user);

        Swal.fire({
          title: "Success!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error Code:", errorCode);

        Swal.fire({
          title: "Registration Failed",
          text: errorMessage,
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Side: Register Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-10 md:py-12">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-primary-black mb-2">
            Create an Account
          </h1>
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
            Register with ZapShift
          </p>

          {/* Profile Upload Icon */}
          <div className="mb-6 sm:mb-8 flex">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 transition">
              <UserPlus className="text-gray-400 w-6 sm:w-7 h-6 sm:h-7" />
              <div className="absolute ml-8 sm:ml-10 mt-6 sm:mt-8 bg-primary-green rounded-full p-1 border-2 border-white">
                <div className="w-1 h-1 bg-white"></div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-4"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition text-sm sm:text-base"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition text-sm sm:text-base"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition text-sm sm:text-base pr-10"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 sm:right-4 top-10 sm:top-11 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 mt-4 sm:mt-6">
              <input type="checkbox" className="rounded" />
              <label className="text-xs sm:text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-primary-green font-semibold">
                  Terms & Conditions
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-green text-primary-black font-bold py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition text-base sm:text-lg mt-6 sm:mt-8"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4 sm:my-6">
            <div className="grow border-b border-gray-300"></div>
            <span className="px-2 sm:px-3 text-gray-500 text-xs sm:text-sm">
              OR
            </span>
            <div className="grow border-b border-gray-300"></div>
          </div>

          {/* Google Sign Up */}
          <button
            onClick={signUpWithGoogle}
            className="w-full border-2 border-gray-300 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Sign Up with Google
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-4 sm:mt-6 text-xs sm:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary-green font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={authImage}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUP;
