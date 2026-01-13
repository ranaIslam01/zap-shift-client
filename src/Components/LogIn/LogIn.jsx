import React, { useState } from 'react';
import authImage from '../../assets/authImage.png';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom'; // Link এবং useNavigate যোগ করা হয়েছে
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // আইকন ইমপোর্ট
import Swal from 'sweetalert2';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signUpGoogle} =useAuth();
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  // signIn Google 
    const signUpWithGoogle = () => {
    signUpGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "Google Sign-In successful.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Could not sign in with Google.",
          icon: "error",
          confirmButtonText: "Close"
        });
      });
  };

  // from user 
  const onSubmit = data => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log("Logged In User:", result.user);
        
        // Success Alert
        Swal.fire({
          title: "Success!",
          text: "Login successful. Welcome back!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });

        // হোম পেজে নেভিগেট করা
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        
        // Error Alert
        Swal.fire({
          title: "Error!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonText: "Close"
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-8">Login with ZapShift</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: "Email is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field with Show/Hide toggle */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register('password', {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                  placeholder="Password"
                />
                {/* Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="text-left">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forget Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#D4F07D] hover:bg-[#c2e065] text-gray-800 font-bold py-3 rounded-lg transition duration-300 shadow-sm"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have any account?{' '}
              <Link to="/register" className="text-[#A3D139] font-bold hover:underline">
                Register
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Google Login Button */}
          <button 
          onClick={signUpWithGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#F0F2F5] hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition duration-300"
          >
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
              className="w-5 h-5"
            />
            Login with google
          </button>
        </div>
      </div>

      {/* Right Side: Illustration */}
      <div className="hidden md:flex w-1/2 bg-[#F9FFF0] items-center justify-center p-12">
        <div className="relative w-full max-w-lg">
          <img 
            src={authImage}
            alt="Delivery Illustration" 
            className="w-full h-auto rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;