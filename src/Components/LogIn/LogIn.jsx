import React from 'react';
import authImage from '../../assets/authImage.png'
import { useForm } from 'react-hook-form';

const Login = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* বাম পাশ: লগইন ফর্ম */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold text-main-black mb-2">Welcome Back</h1>
          <p className="text-primary-black  mb-8">Login with ZapShift</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...register('password',{
                  required: true, 
                  minLength: 6,
                })}
                
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition"
                placeholder="Password"
              />
              {
                errors.password?.type === 'required' && <p className='text-red-500'>
                  password is required
                </p>
              }
              {
                errors.password?.type === 'minLength' && <p className='text-red-500'>
                  password must be 6 characters or longer
                </p>
              }
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
              <a href="#" className="text-[#A3D139] font-bold hover:underline">
                Register
              </a>
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
          <button className="w-full flex items-center justify-center gap-2 bg-[#F0F2F5] hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition duration-300">
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
              className="w-5 h-5"
            />
            Login with google
          </button>
        </div>
      </div>

      {/* ডান পাশ: ইলাস্ট্রেশন এবং ব্যাকগ্রাউন্ড */}
      <div className="hidden md:flex w-1/2 bg-[#F9FFF0] items-center justify-center p-12">
        <div className="relative w-full max-w-lg">
          {/* আপনার আপলোড করা ছবি বা ইলাস্ট্রেশন এখানে ব্যবহার করুন */}
          <img 
            src={authImage}
            alt="Delivery Illustration" 
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;