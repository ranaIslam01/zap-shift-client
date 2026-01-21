import React, { useRef, useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import authImage from "../../assets/authImage.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate, Link, useLocation } from "react-router-dom";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { createUser, signUpGoogle } = useAuth();

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return Swal.fire(
          "Error",
          "Image size should be less than 5MB",
          "error",
        );
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
        navigate(from);
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

  const onSubmit = async (data) => {
    // আপনার স্ক্রিনশট থেকে পাওয়া তথ্য
    const cloud_name = "dgzuvimw0";
    const upload_preset = "zapshift_preset";

    try {
      const imageFile = fileInputRef.current?.files[0];
      if (!imageFile) {
        return Swal.fire("Error", "Please select a profile photo", "error");
      }

      // ১. Cloudinary-তে ছবি পাঠানো
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", upload_preset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const imgData = await res.json();

      if (!imgData.secure_url) {
        console.error("Cloudinary Response Error:", imgData);
        throw new Error(imgData.error?.message || "Image upload failed");
      }

      const photoURL = imgData.secure_url; // এটিই আপনার ছবির ফাইনাল লিংক

      // ২. Firebase দিয়ে ইউজার তৈরি করা
      const result = await createUser(data.email, data.password);
      console.log("Firebase User Created Successfully");

      // ৩. MongoDB-তে পাঠানোর জন্য অবজেক্ট তৈরি করা
      const newUser = {
        name: data.name,
        email: data.email,
        image: photoURL,
        role: "user",
      };

      // ৪. আপনার লোকাল সার্ভারে ডেটা পাঠানো (Port 3000)
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });


      const dbData = await response.json();

      if (dbData.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Account created and data saved to MongoDB.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from);
      }
    } catch (error) {
      console.error("Submission Error:", error);

      // Firebase-এ যদি অলরেডি ইউজার থাকে তার এরর হ্যান্ডলিং
      let errorMessage = error.message;
      if (errorMessage.includes("email-already-in-use")) {
        errorMessage = "This email is already in use. Please try another.";
      }

      Swal.fire({
        title: "Registration Failed",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
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

          {/* Profile Upload UI */}
          <div className="mb-6 sm:mb-8 flex flex-col items-start">
            {/* হিডেন ফাইল ইনপুট */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <div
              onClick={handleDivClick}
              className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-200 transition active:scale-95 overflow-visible"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <UserPlus className="text-gray-400 w-7 h-7" />
              )}

              {/* প্লাস আইকন ইন্ডিকেটর */}
              <div className="absolute -right-1 -bottom-1 bg-primary-green rounded-full p-1 border-2 border-white shadow-sm">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-2 font-medium">
              Upload Photo
            </span>
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
