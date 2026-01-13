import React, { useState } from 'react';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import authImage from '../../assets/authImage.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {handleSubmit, register, formState: {errors}} = useForm();
  const {createUser,signUpGoogle} = useAuth()

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
 

const onSubmit = (data) => {
  console.log(data);

  createUser(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log("Registered User:", user);

      // Success Alert
      Swal.fire({
        title: "Success!",
        text: "Your account has been created successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay"
      });
      
      // Optionally: reset() the form here if you are using react-hook-form
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Code:", errorCode);

      // Error Alert
      Swal.fire({
        title: "Registration Failed",
        text: errorMessage, // Displays the Firebase error message in English
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again"
      });
    }); 
};

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* বাম পাশ: রেজিস্টার ফর্ম */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold text-main-black mb-2">Create an Account</h1>
          <p className="text-gray-600 mb-6">Register with ZapShift</p>

          {/* Profile Upload Icon Placeholder */}
          <div className="mb-6 flex">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 transition">
              <UserPlus className="text-gray-400 w-6 h-6" />
              <div className="absolute ml-8 mt-6 bg-lime-400 rounded-full p-1 border-2 border-white">
                <div className="w-1 h-1 bg-white"></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                {...register('text')}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                {...register('email', {required: true})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                placeholder="Email"
              />
              {
                errors.email?.type === 'required' && <p>
                  Email is required
                </p>
              }
            </div>

            {/* Password Field with View/Hide Option */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register('password', {
                    required: true, 
                    minLength: 6,
                  })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                  placeholder="Password"
                  
                  />
                  {
                    errors.password?.type === 'required' && <p className='text bg-red-500'>
                      Password is required
                    </p>
                  }
                  {
                    errors.password?.type === 'minLength' && <p className='text-red-500'>
                       password must be 6 characters or longer
                    </p>
                  }
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#D4F07D] hover:bg-[#c2e065] text-gray-800 font-bold py-3 rounded-lg transition duration-300 mt-2"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-left">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <a href="#" className="text-[#A3D139] font-bold hover:underline">
                Login
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Google Register Button */}
          <button onClick={signUpWithGoogle} className="w-full flex items-center justify-center gap-2 bg-[#F0F2F5] hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-lg transition duration-300">
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
              className="w-4 h-4"
            />
            Register with google
          </button>
        </div>
      </div>

      {/* ডান পাশ: ইলাস্ট্রেশন (আপনার ছবির মতো হালকা সবুজ ব্যাকগ্রাউন্ড) */}
      <div className="hidden md:flex w-1/2 bg-[#F9FFF0] items-center justify-center p-12">
        <div className="relative w-full max-w-lg">
          <img 
            src={authImage} 
            alt="Delivery Illustration" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUP;